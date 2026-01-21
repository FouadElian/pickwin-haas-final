
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import interacLogo from './img/interac-yellow-vector-logo-free-download-11574103307xabgqcjzgi.png';

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <section className="bg-pickwin-green rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 text-black relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(19,212,130,0.5)]" ref={ref}>
      {/* Purple-pink glow overlay - matching logo */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, rgba(232, 121, 249, 0.15), transparent 50%), radial-gradient(ellipse at bottom right, rgba(217, 70, 239, 0.15), transparent 50%)' }}></div>
      
      <div className="relative z-10">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tighter mb-4 sm:mb-6 leading-tight uppercase relative text-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {t('benefits.rewards')}
          <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-3xl hidden lg:block" style={{ color: 'rgba(232, 121, 249, 0.6)', textShadow: '0 0 15px rgba(232, 121, 249, 0.8)' }}>♠</span>
          <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-3xl hidden lg:block" style={{ color: 'rgba(217, 70, 239, 0.6)', textShadow: '0 0 15px rgba(217, 70, 239, 0.8)' }}>♠</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {/* Cashback Card */}
          <div className="bg-black text-white p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-2 right-2 w-6 h-6 opacity-10 pointer-events-none bandana-pattern border border-white/10"></div>
            <p className="text-pickwin-green font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1.5 italic relative z-10">{t('benefits.weeklyReward')}</p>
            <h3 className="text-2xl sm:text-3xl font-black mb-1.5 italic tracking-tight uppercase relative z-10">
              {t('benefits.cashback')}
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-xl hidden sm:inline-block" style={{ color: 'rgba(232, 121, 249, 0.6)', textShadow: '0 0 10px rgba(232, 121, 249, 0.8)' }}>♠</span>
            </h3>
            <p className="text-gray-400 text-xs font-medium relative z-10">{t('benefits.cashbackDesc')}</p>
          </div>

          {/* Deposit Card */}
          <div className="bg-black text-white p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-2 right-2 w-6 h-6 opacity-10 pointer-events-none bandana-pattern border border-white/10"></div>
            <p className="text-pickwin-green font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1.5 italic relative z-10">{t('benefits.fastDeposits')}</p>
            <div className="flex items-center gap-2 mb-2 relative z-10">
              <img src={interacLogo} alt="Interac" className="h-8 object-contain" />
              <span className="text-2xl text-pickwin-gold">₿</span>
            </div>
            <p className="text-gray-400 text-xs font-medium relative z-10">{t('benefits.depositsDesc')}</p>
          </div>

          {/* Withdrawal Card */}
          <div className="bg-black text-white p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-2 right-2 w-6 h-6 opacity-10 pointer-events-none bandana-pattern border border-white/10"></div>
            <p className="text-pickwin-green font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1.5 italic relative z-10">{t('benefits.noLimit')}</p>
            <h3 className="text-2xl sm:text-3xl font-black mb-1.5 italic tracking-tight uppercase relative z-10">
              {t('benefits.fastPayouts')}
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-blue-400/40 text-xl hidden sm:inline-block">♠</span>
            </h3>
            <p className="text-gray-400 text-xs font-medium relative z-10">{t('benefits.withdrawalsDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
