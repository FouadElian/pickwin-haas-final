
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
    <section className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-pickwin-green/40 rounded-2xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden shadow-2xl" ref={ref}>
      <div className="relative z-10">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-6 sm:mb-8 leading-tight uppercase relative text-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <span className="text-pickwin-green">{t('benefits.rewards')}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {/* Cashback Card */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pickwin-green/50 text-white p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:bg-pickwin-green/10 hover:border-pickwin-green transition-all">
            <p className="text-pickwin-green font-black text-xs uppercase tracking-wider mb-2 relative z-10">{t('benefits.weeklyReward')}</p>
            <h3 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight uppercase relative z-10">
              {t('benefits.cashback')}
            </h3>
            <p className="text-white/90 text-sm font-medium relative z-10 leading-relaxed">{t('benefits.cashbackDesc')}</p>
          </div>

          {/* Deposit Card */}
          <div className="bg-pickwin-green/10 border border-pickwin-green/50 text-white p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:bg-pickwin-green/20 transition-all">
            <p className="text-pickwin-green font-black text-xs uppercase tracking-wider mb-2 relative z-10">{t('benefits.fastDeposits')}</p>
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <img src={interacLogo} alt="Interac" className="h-10 object-contain" />
              <span className="text-3xl">₿</span>
            </div>
            <p className="text-white/90 text-sm font-medium relative z-10 leading-relaxed">{t('benefits.depositsDesc')}</p>
          </div>

          {/* Withdrawal Card */}
          <div className="bg-pickwin-green/10 border border-pickwin-green/50 text-white p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:bg-pickwin-green/20 transition-all">
            <p className="text-pickwin-green font-black text-xs uppercase tracking-wider mb-2 relative z-10">{t('benefits.noLimit')}</p>
            <h3 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight uppercase relative z-10">
              {t('benefits.fastPayouts')}
            </h3>
            <p className="text-white/90 text-sm font-medium relative z-10 leading-relaxed">{t('benefits.withdrawalsDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
