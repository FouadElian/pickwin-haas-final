
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import pokerChipsImage from './img/poker chips .png';
import rouletteImage from './img/Roulette-wheel.svg.png';

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
    <section className="text-center bg-black py-12 sm:py-16 relative" ref={ref}>
      <h2 className={`text-2xl sm:text-3xl font-black tracking-tighter uppercase mb-8 sm:mb-12 text-white relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
        {t('onboarding.getStartedTitle')}
      </h2>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 relative z-10">
        {[
            { step: '01', title: t('onboarding.step1Title'), text: t('onboarding.step1Desc'), icon: pokerChipsImage, iconAlt: 'Poker chips', iconPos: 'left' },
            { step: '02', title: t('onboarding.step2Title'), text: t('onboarding.step2Desc'), icon: rouletteImage, iconAlt: 'Roulette wheel', iconPos: 'left' },
            { step: '03', title: t('onboarding.step3Title'), text: t('onboarding.step3Desc'), icon: pokerChipsImage, iconAlt: 'Poker chips', iconPos: 'right' },
        ].map((item, i) => (
            <div key={i} className={`bg-black p-6 sm:p-8 rounded-2xl relative group transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)] ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${i * 0.2}s` : '0s' }}>
              {/* Icon positioned next to the card */}
              <img 
                src={item.icon} 
                alt={item.iconAlt} 
                className={`absolute top-1/2 -translate-y-1/2 ${item.iconPos === 'left' ? '-left-3 sm:-left-4 md:-left-5' : '-right-3 sm:-right-4 md:-right-5'} ${item.icon === rouletteImage ? 'w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11' : 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'} object-contain z-20`}
                style={{ filter: 'drop-shadow(0 0 20px rgba(19,212,130,0.9))' }}
              />
              <div className="text-5xl sm:text-6xl md:text-7xl font-black text-pickwin-green mb-4" style={{ textShadow: '0 0 25px rgba(19,212,130,0.9)' }}>
              {item.step}
            </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-black mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">{item.text}</p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-pickwin-green text-black font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,230,118,0.2),0_0_20px_rgba(139,92,246,0.15)] w-full sm:w-auto relative overflow-hidden group inline-block text-center">
          <span className="relative z-10">{t('onboarding.joinButton')}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pickwin-green/0 via-pickwin-green/10 to-pickwin-green/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
        <p className="text-white text-sm mt-2 italic font-bold">{t('onboarding.referCode')}</p>
      </div>
    </section>
  );
};

export default Onboarding;
