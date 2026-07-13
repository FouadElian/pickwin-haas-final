import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { navigate } from '../navigation';

const WagerRacePromo: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden rounded-3xl border border-pickwin-green/30 bg-gradient-to-br from-pickwin-green/15 via-black to-black px-6 py-8 sm:py-10 text-center shadow-xl">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(19,212,130,0.2), transparent 65%)' }}
      />
      <div className="relative max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-pickwin-green mb-3">
          🏆 {t('race.promoTag')}
        </span>
        <h2 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tighter leading-[1.05]">
          {t('race.promoTitle')}
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 sm:mt-4 font-medium">
          {t('race.promoDesc')}
        </p>
        <button
          onClick={() => navigate('/wager-race')}
          className="group mt-6 inline-flex items-center gap-2 bg-pickwin-green text-black font-black uppercase text-sm sm:text-base px-7 sm:px-9 py-3 sm:py-3.5 rounded-full glow-green hover:scale-[1.03] transition-transform"
        >
          {t('race.cta')} <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </div>
    </section>
  );
};

export default WagerRacePromo;
