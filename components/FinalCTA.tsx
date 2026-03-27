
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-pickwin-surface to-pickwin-bg border-t border-white/10 p-10 sm:p-16 md:p-24 text-center">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pickwin-green/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-pickwin-green/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-[0.9] uppercase relative reveal-fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="text-white block mb-2">{t('finalCta.title1')}</span>
          <span className="text-pickwin-green relative inline-block" style={{ textShadow: '0 0 20px rgba(19,212,130,0.6)' }}>
            {t('finalCta.title2')}
          </span>
        </h2>

        <p className={`text-lg sm:text-xl text-white mb-10 font-bold italic reveal-fade-up reveal-stagger-1 ${isVisible ? 'visible' : ''}`}>
          {t('finalCta.subtitle')}
        </p>

        <div className={`flex flex-col items-center reveal-fade-up reveal-stagger-2 ${isVisible ? 'visible' : ''}`}>
          <a
            href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pickwin-green text-black font-black px-10 sm:px-16 py-5 sm:py-6 rounded-2xl text-xl sm:text-2xl hover:bg-white transition-all shadow-[0_20px_50px_-15px_rgba(19,212,130,0.5),0_0_30px_rgba(19,212,130,0.2)] animate-float italic relative overflow-hidden group inline-block"
          >
            <span className="relative z-10">{t('finalCta.button')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pickwin-green/0 via-white/15 to-pickwin-green/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <p className="mt-3 text-[15px] font-medium text-white">{t('finalCta.referCode')}</p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
