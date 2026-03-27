import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import interacLogo from './img/interac-yellow-vector-logo-free-download-11574103307xabgqcjzgi.png';

const RewardsSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-black py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pickwin-green/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-pickwin-green/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pickwin-green/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Refined header */}
        <div className={`text-center mb-12 sm:mb-16 reveal-fade-up ${isVisible ? 'visible' : ''}`}>
          <p className="text-pickwin-green/90 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            {t('benefits.bestInIndustry')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t('benefits.rewards')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Cashback */}
          <div
            className={`group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.06] reveal-fade-up reveal-stagger-2 ${
              isVisible ? 'visible' : ''
            }`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pickwin-green/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-pickwin-green/80 text-[11px] font-medium uppercase tracking-widest mb-4">
                {t('benefits.weeklyReward')}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                {t('benefits.cashback')}
              </h3>
              <ul className="space-y-2.5">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-pickwin-green/20 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-pickwin-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-white/80 font-medium">{t(`benefits.cashbackBullet${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deposits */}
          <div
            className={`group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.06] reveal-fade-up reveal-stagger-3 ${
              isVisible ? 'visible' : ''
            }`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pickwin-green/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-pickwin-green/80 text-[11px] font-medium uppercase tracking-widest mb-4">
                {t('benefits.fastDeposits')}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.06]">
                  <img src={interacLogo} alt="Interac" className="h-6 object-contain opacity-90" />
                  <span className="text-white/80 text-xs font-medium">Interac</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.06]">
                  <span className="text-amber-400/90 text-lg">₿</span>
                  <span className="text-white/80 text-xs font-medium">Crypto</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-medium">
                {t('benefits.depositsDesc')}
              </p>
            </div>
          </div>

          {/* Withdrawals */}
          <div
            className={`group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.06] reveal-fade-up reveal-stagger-4 ${
              isVisible ? 'visible' : ''
            }`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pickwin-green/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-pickwin-green/80 text-[11px] font-medium uppercase tracking-widest mb-4">
                {t('benefits.noLimit')}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                {t('benefits.fastPayouts')}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-medium">
                {t('benefits.withdrawalsDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
