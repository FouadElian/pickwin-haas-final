
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Onboarding: React.FC = () => {
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
    <section className="text-center" ref={ref}>
      <h2 className={`text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-4 sm:mb-6 relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
        {t('onboarding.getStarted')}
        {/* Card suit accents - purple-pink glow */}
        <span className="absolute -left-10 top-0 text-4xl hidden lg:block" style={{ color: 'rgba(232, 121, 249, 0.6)', textShadow: '0 0 20px rgba(232, 121, 249, 0.8)' }}>♠</span>
        <span className="absolute -right-10 top-0 text-4xl hidden lg:block" style={{ color: 'rgba(217, 70, 239, 0.6)', textShadow: '0 0 20px rgba(217, 70, 239, 0.8)' }}>♠</span>
      </h2>
      
      <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {[
          { step: t('onboarding.step1'), title: t('onboarding.step1Title'), text: t('onboarding.step1Desc') },
          { step: t('onboarding.step2'), title: t('onboarding.step2Title'), text: t('onboarding.step2Desc') },
          { step: t('onboarding.step3'), title: t('onboarding.step3Title'), text: t('onboarding.step3Desc') },
        ].map((item, i) => (
          <div key={i} className="relative p-3 sm:p-4 group">
            {/* Wanted badge style border */}
            <div className="absolute inset-0 border border-white/5 rounded-lg transform rotate-[-1deg] group-hover:rotate-0 transition-transform"></div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-pickwin-green absolute top-0 left-1/2 -translate-x-1/2 group-hover:text-pickwin-green transition-colors relative">
              {item.step}
              <span className="absolute inset-0 blur-sm -z-10" style={{ color: 'rgba(232, 121, 249, 0.3)', textShadow: '0 0 10px rgba(232, 121, 249, 0.5)' }}>{item.step}</span>
              {/* Card suit accent - purple-pink glow */}
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-3xl hidden lg:block" style={{ color: 'rgba(232, 121, 249, 0.5)', textShadow: '0 0 15px rgba(232, 121, 249, 0.7)' }}>♠</span>
            </div>
            <div className="relative z-10 pt-6 sm:pt-8">
              <h3 className="text-lg sm:text-xl font-black italic mb-2">{item.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-pickwin-green text-black font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,230,118,0.2),0_0_20px_rgba(139,92,246,0.15)] w-full sm:w-auto relative overflow-hidden group inline-block text-center">
          <span className="relative z-10">{t('onboarding.joinButton')}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
        <p className="text-gray-400 text-xs mt-2 italic">refer code : M0st</p>
      </div>
    </section>
  );
};

export default Onboarding;
