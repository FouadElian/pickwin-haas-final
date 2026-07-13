import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Dev-only: `vite dev` doesn't run the Vercel serverless function under /api,
// so this middleware serves /api/leaderboard locally. It tries the real API
// with your secret and falls back to demo data so you can preview the design.
// In production on Vercel, api/leaderboard.ts handles this instead.
function devLeaderboardApi(secret: string): Plugin {
  const UPSTREAM = 'https://platform-integration.pickwin.fun/external/activities/leaderboard';
  const mask = (n: string) => {
    const name = (n || '').trim();
    if (!name) return '****';
    if (name.toLowerCase().startsWith('player')) return name; // show auto-generated names in full
    return name.slice(0, 4) + '***';
  };
  const range = (period: string) => {
    const now = new Date();
    const y = now.getUTCFullYear();
    const m = now.getUTCMonth();
    const s = period === 'previous' ? new Date(Date.UTC(y, m - 1, 1)) : new Date(Date.UTC(y, m, 1));
    const e = period === 'previous' ? new Date(Date.UTC(y, m, 0)) : new Date(Date.UTC(y, m + 1, 0));
    const f = (d: Date) => d.toISOString().slice(0, 10);
    return { date_from: f(s), date_to: f(e) };
  };
  const demo = (period: string) => {
    const base = ['Alfonso345', 'MikeTheGreat', 'LuckySeven', 'BetKingCA', 'RollerHigh', 'ZoeWins', 'NightHawk', 'AceMaverick', 'DiamondDeg', 'CryptoCarl', 'SlotQueen', 'FastEddie'];
    const mult = period === 'previous' ? 0.82 : 1;
    return {
      currency: 'CAD',
      generated_at: new Date().toISOString(),
      items: base.map((n, i) => ({
        rank: i + 1,
        name: mask(n),
        total_wager: Math.round((185000 - i * 14200) * mult),
      })),
    };
  };
  return {
    name: 'dev-leaderboard-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/leaderboard', async (req, res) => {
        const url = new URL(req.url || '', 'http://localhost');
        const period = url.searchParams.get('period') === 'previous' ? 'previous' : 'current';
        res.setHeader('Content-Type', 'application/json');
        try {
          const { date_from, date_to } = range(period);
          const r = await fetch(`${UPSTREAM}?date_from=${date_from}&date_to=${date_to}&currency=CAD`, {
            headers: { 'X-Affiliate-Secret': secret, Accept: 'application/json' },
          });
          if (!r.ok) throw new Error(String(r.status));
          const json: any = await r.json();
          const root: any = (Array.isArray(json) ? json[0] : json) || {};
          const items = (root.items || []).map((it: any, i: number) => ({
            rank: Number(it.rank) || i + 1,
            name: mask(it.nickname || it.player_id || ''),
            total_wager: Number(it.total_wager) || 0,
          }));
          res.end(JSON.stringify({ currency: root.currency || 'USD', generated_at: root.generated_at, items }));
        } catch {
          // Real API unavailable — serve demo data so the UI is previewable.
          res.end(JSON.stringify(demo(period)));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 5174,
        host: '0.0.0.0',
        allowedHosts: [
          'stanford-subglottal-ruthanne.ngrok-free.dev'
        ],
      },
      plugins: [react(), devLeaderboardApi(env.AFFILIATE_SECRET || 'VoQqd1dNzvTrnmvaeNyq77JKl8ZW7XvF')],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
