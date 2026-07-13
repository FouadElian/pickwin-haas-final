// Vercel Serverless Function — Fungamess affiliate leaderboard proxy.
//
// Why this exists (do NOT fetch the affiliate API directly from the browser):
//   1. The `X-Affiliate-Secret` must never reach the client. It stays here, server-side.
//   2. Player usernames are anonymized here, so the full names never leave the server.
//   3. Upstream allows max 1 request / hour — we cache to respect that.
//
// The secret is read from the AFFILIATE_SECRET env var. Set it in the Vercel
// dashboard (Project → Settings → Environment Variables). The literal below is
// only a dev fallback — rotate it and move it to env for production.

const AFFILIATE_SECRET = process.env.AFFILIATE_SECRET || 'VoQqd1dNzvTrnmvaeNyq77JKl8ZW7XvF';
const UPSTREAM = 'https://platform-integration.pickwin.fun/external/activities/leaderboard';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour — upstream limit is 1 request/hour.

type Period = 'current' | 'previous';

interface Item {
  rank: number;
  name: string; // already anonymized
  total_wager: number;
}

interface Payload {
  currency: string;
  generated_at: string;
  items: Item[];
  stale?: boolean;
}

// Warm-instance cache. The Cache-Control header below is what really enforces
// the 1-req/hour limit across cold starts (Vercel's CDN serves the cached body).
const cache: Record<Period, { at: number; data: Payload } | undefined> = {
  current: undefined,
  previous: undefined,
};

/**
 * Anonymize a player name: first 4 characters + "***".
 * Auto-generated names (e.g. "player2435562") have no real nickname to protect —
 * show those in full so players without a chosen nickname stay recognizable.
 */
function maskName(raw: string): string {
  const name = (raw || '').trim();
  if (!name) return '****';
  if (name.toLowerCase().startsWith('player')) return name;
  return name.slice(0, 4) + '***';
}

/** UTC date range covering the whole current or previous calendar month. */
function monthRange(period: Period): { date_from: string; date_to: string } {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = now.getUTCMonth();
  const start = period === 'current' ? new Date(Date.UTC(y, m, 1)) : new Date(Date.UTC(y, m - 1, 1));
  // Day 0 of the next month == last day of the target month.
  const end = period === 'current' ? new Date(Date.UTC(y, m + 1, 0)) : new Date(Date.UTC(y, m, 0));
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { date_from: fmt(start), date_to: fmt(end) };
}

async function fetchLeaderboard(period: Period): Promise<Payload> {
  const cached = cache[period];
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.data;

  const { date_from, date_to } = monthRange(period);
  // Ask the API to aggregate/convert all wagers into CAD.
  const url = `${UPSTREAM}?date_from=${date_from}&date_to=${date_to}&currency=CAD`;

  const upstream = await fetch(url, {
    headers: {
      'X-Affiliate-Secret': AFFILIATE_SECRET,
      Accept: 'application/json',
    },
  });

  if (!upstream.ok) {
    // Serve stale data if we have any, otherwise surface the failure.
    if (cached) return { ...cached.data, stale: true };
    throw new Error(`upstream ${upstream.status}`);
  }

  const json = await upstream.json();
  // The API returns an array of affiliate blocks; the leaderboard is the first one.
  const root: any = (Array.isArray(json) ? json[0] : json) || {};
  const rawItems: any[] = Array.isArray(root.items) ? root.items : [];

  const items: Item[] = rawItems
    .map((it, i) => ({
      rank: Number(it.rank) || i + 1, // API sends rank as a string ("1")
      name: maskName(it.nickname || it.player_id || ''),
      total_wager: Number(it.total_wager) || 0,
    }))
    .sort((a, b) => a.rank - b.rank);

  const data: Payload = {
    currency: root.currency || 'USD',
    generated_at: root.generated_at || new Date().toISOString(),
    items,
  };

  cache[period] = { at: Date.now(), data };
  return data;
}

export default async function handler(req: any, res: any) {
  const q = (req.query?.period ?? 'current') as string;
  const period: Period = q === 'previous' ? 'previous' : 'current';

  try {
    const data = await fetchLeaderboard(period);
    // CDN caches for 1h; serves stale for a day while revalidating in the background.
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(data);
  } catch (err) {
    res.status(502).json({
      error: 'leaderboard_unavailable',
      message: 'The leaderboard is temporarily unavailable.',
    });
  }
}
