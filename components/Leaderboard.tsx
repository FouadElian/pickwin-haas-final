import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import podiumImg from './img/podium.png';

type Period = 'current' | 'previous';

interface Item {
  rank: number;
  name: string;
  total_wager: number;
}

interface Payload {
  currency: string;
  generated_at: string;
  items: Item[];
}

// Cashprize table (in USD). Top 1–3 fixed, then $50 for ranks 4–10.
const PRIZES: Record<number, number> = { 1: 300, 2: 150, 3: 100 };
// A player must wager at least this much (in the displayed currency) to be paid a prize.
const MIN_WAGER_FOR_PRIZE = 2000;
const prizeForRank = (rank: number): number =>
  PRIZES[rank] ?? (rank >= 4 && rank <= 10 ? 50 : 0);
// Actual prize a player receives: their rank's prize, but only if they cleared the minimum wager.
const prizeFor = (rank: number, wager: number): number =>
  wager >= MIN_WAGER_FOR_PRIZE ? prizeForRank(rank) : 0;

const currencySymbol = (c: string): string =>
  ({ USD: '$', EUR: '€', GBP: '£', CAD: '$' }[c] || '$');

const formatWager = (amount: number, currency: string): string =>
  `${currencySymbol(currency)}${Math.round(amount).toLocaleString('en-US')}`;

// Simple in-memory cache so toggling tabs doesn't refetch (server caches too).
const clientCache: Partial<Record<Period, Payload>> = {};

const Leaderboard: React.FC = () => {
  const { t } = useLanguage();
  const [period, setPeriod] = useState<Period>('current');
  const [data, setData] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (clientCache[period]) {
      setData(clientCache[period]!);
      setLoading(false);
      setError(false);
      return;
    }

    setLoading(true);
    setError(false);
    fetch(`/api/leaderboard?period=${period}`)
      .then((r) => {
        if (!r.ok) throw new Error('bad response');
        return r.json();
      })
      .then((payload: Payload) => {
        if (cancelled) return;
        clientCache[period] = payload;
        setData(payload);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [period]);

  // Pour l'instant on n'affiche que le top 10 joueurs. On augmentera la limite plus tard.
  const items = (data?.items ?? []).slice(0, 10);
  const currency = data?.currency ?? 'CAD';
  const podium = items.slice(0, 3);
  const rest = items.slice(3);

  const tabClass = (active: boolean) =>
    `px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-sm font-black uppercase tracking-wide whitespace-nowrap transition-all ${
      active
        ? 'bg-pickwin-green text-black shadow-[0_0_20px_rgba(19,212,130,0.4)]'
        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
    }`;

  return (
    <section ref={ref} id="wager-race" className="scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-10 relative">
        <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-pickwin-green mb-2">
          {t('race.badge')}
        </span>
        <h2
          className={`text-2xl sm:text-4xl font-black italic tracking-tighter uppercase ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          {t('race.title')}
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm font-medium mt-2 max-w-xl mx-auto">
          {t('race.subtitle')}
        </p>
      </div>

      {/* Prize pool banner */}
      <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
        🏆 {t('race.prizePoolLabel')}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
        <PrizeChip label={`${t('race.top')} 1`} value="$300" tone="gold" />
        <PrizeChip label={`${t('race.top')} 2`} value="$150" tone="silver" />
        <PrizeChip label={`${t('race.top')} 3`} value="$100" tone="bronze" />
        <PrizeChip label={`${t('race.top')} 4–10`} value={`$50 ${t('race.each')}`} tone="green" />
      </div>
      <p className="text-center text-[10px] sm:text-xs text-gray-500 mb-6 sm:mb-8">
        {t('race.minWager')} <span className="text-gray-300 font-bold">{formatWager(MIN_WAGER_FOR_PRIZE, 'CAD')}</span>
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-8">
        <button className={tabClass(period === 'current')} onClick={() => setPeriod('current')}>
          {t('race.currentMonth')}
        </button>
        <button className={tabClass(period === 'previous')} onClick={() => setPeriod('previous')}>
          {t('race.previousMonth')}
        </button>
      </div>

      {loading && <SkeletonState />}

      {!loading && error && (
        <div className="text-center py-12 border border-white/10 rounded-3xl bg-white/[0.02]">
          <p className="text-gray-400 font-medium">{t('race.error')}</p>
        </div>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="text-center py-12 border border-white/10 rounded-3xl bg-white/[0.02]">
          <p className="text-gray-400 font-medium">{t('race.empty')}</p>
        </div>
      )}

      {!loading && !error && items.length > 0 && (
        <>
          {/* Podium — illustration, with each player's info in a row under their block */}
          <div className="relative w-full max-w-3xl mx-auto mb-6 sm:mb-8">
            <img src={podiumImg} alt="Podium" className="w-full select-none pointer-events-none" draggable={false} />
            <div className="relative mt-1 sm:mt-2 h-[64px] sm:h-[82px]">
              {[
                { p: podium[1], left: '24.6%', tone: 'text-gray-300' }, // 2nd — silver
                { p: podium[0], left: '48.3%', tone: 'text-yellow-400' }, // 1st — gold
                { p: podium[2], left: '72.2%', tone: 'text-orange-600' }, // 3rd — bronze
              ].map((f, i) => {
                if (!f.p) return null;
                const prize = prizeFor(f.p.rank, f.p.total_wager);
                return (
                  <div
                    key={i}
                    className="absolute top-0 -translate-x-1/2 w-[30%] text-center"
                    style={{ left: f.left }}
                  >
                    <p className={`font-black italic text-[11px] leading-tight sm:text-base truncate ${f.tone}`}>
                      {f.p.name}
                    </p>
                    <p className="text-white font-bold text-[11px] sm:text-sm leading-tight tabular-nums">
                      {formatWager(f.p.total_wager, currency)}
                    </p>
                    {prize > 0 ? (
                      <span className="inline-block mt-1 text-[9px] sm:text-xs font-black bg-pickwin-green text-black px-2 py-0.5 rounded-full shadow-lg">
                        🏆 {formatWager(prizeForRank(f.p.rank), currency)}
                      </span>
                    ) : (
                      <span className="inline-block mt-1 text-[8px] sm:text-[10px] text-white/60 font-bold uppercase">
                        Min. {formatWager(MIN_WAGER_FOR_PRIZE, currency)}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ranks 4+ */}
          {rest.length > 0 && (
            <div>
              {/* Column headers */}
              <div className="flex items-center gap-3 sm:gap-4 px-4 pb-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <span className="w-6 text-center">#</span>
                <span className="flex-1">{t('race.player')}</span>
                <span className="w-20 sm:w-24 text-right">{t('race.wins')}</span>
                <span className="w-24 sm:w-32 text-right">{t('race.wageredShort')}</span>
              </div>
              <div className="space-y-2">
                {rest.map((p) => {
                  const prize = prizeFor(p.rank, p.total_wager);
                  return (
                    <div
                      key={p.rank}
                      className="flex items-center gap-3 sm:gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-2xl px-4 py-3 transition-colors"
                    >
                      <span className="w-6 text-center font-black italic text-gray-400 text-sm sm:text-base">
                        {p.rank}
                      </span>
                      <span className="flex-1 font-bold italic text-white text-sm sm:text-base truncate">
                        {p.name}
                      </span>
                      <span className="w-20 sm:w-24 text-right">
                        {prize > 0 ? (
                          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full bg-pickwin-green/15 text-pickwin-green">
                            🏆 {formatWager(prize, currency)}
                          </span>
                        ) : (
                          <span className="text-gray-600 text-xs">—</span>
                        )}
                      </span>
                      <span className="w-24 sm:w-32 text-right text-white font-bold text-sm sm:text-base tabular-nums">
                        {formatWager(p.total_wager, currency)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <p className="text-center text-gray-600 text-[10px] sm:text-xs mt-6">{t('race.disclaimer')}</p>
        </>
      )}
    </section>
  );
};

const PrizeChip: React.FC<{ label: string; value: string; tone: 'gold' | 'silver' | 'bronze' | 'green' }> = ({
  label,
  value,
  tone,
}) => {
  const tones = {
    gold: 'border-yellow-400/40 text-yellow-400',
    silver: 'border-gray-300/40 text-gray-200',
    bronze: 'border-amber-600/40 text-amber-500',
    green: 'border-pickwin-green/40 text-pickwin-green',
  };
  return (
    <div className={`flex items-center gap-2 border ${tones[tone]} rounded-full px-3 py-1.5 bg-black/40`}>
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-gray-400">{label}</span>
      <span className="text-xs sm:text-sm font-black italic">{value}</span>
    </div>
  );
};

const SkeletonState: React.FC = () => (
  <div className="animate-pulse">
    <div className="grid grid-cols-3 gap-4 items-end mb-8">
      {[24, 40, 20].map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10" />
          <div className="w-16 h-3 bg-white/10 rounded" />
          <div className={`w-full rounded-t-2xl bg-white/5`} style={{ height: `${h * 4}px` }} />
        </div>
      ))}
    </div>
    <div className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-12 bg-white/[0.04] rounded-2xl" />
      ))}
    </div>
  </div>
);

export default Leaderboard;
