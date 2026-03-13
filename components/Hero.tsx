
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import pickwinLogo from './img/pickwin-logo.png';
import samuelHaasImage from './img/samuel-haas.jpg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
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
    <section className="relative pt-2 sm:pt-4 pb-8 sm:pb-10 overflow-hidden min-h-[75vh] flex flex-col bg-gradient-to-b from-gray-950 to-black" ref={ref}>
      {/* Dark Background with Green Glows */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        {/* Green glows - more subtle */}
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-pickwin-green/8 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-pickwin-green/8 rounded-full blur-[120px] pointer-events-none"></div>
        {/* Additional subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      
      {/* Subtle texture overlay - different pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.03) 49%, rgba(255,255,255,0.03) 51%, transparent 52%)', backgroundSize: '60px 60px' }}></div>

      {/* Logo at the top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-4 pb-6 relative z-20">
        <div className="flex justify-center sm:justify-start">
          <img src={pickwinLogo} alt="PickWin" className="h-32 sm:h-40 md:h-48 lg:h-56 drop-shadow-lg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Mobile: Centered Vertical Layout */}
          <div className="text-center lg:text-left w-full lg:w-auto order-1 lg:order-1">
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 sm:mb-4 uppercase leading-tight sm:leading-none ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.1s' : '0s' }}>
              <div className="block">
                <span 
                  className="text-white relative inline-block"
                  style={{
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)'
                  }}
                >
                  SAMUEL HAAS
                </span>
                <span className="text-white/30 lowercase relative ml-2">×</span>
              </div>
              <div className="block">
                <span 
                  className="text-pickwin-green relative inline-block"
                  style={{
                    textShadow: '0 0 20px rgba(19, 212, 130, 0.8), 0 0 40px rgba(19, 212, 130, 0.6), 0 0 60px rgba(19, 212, 130, 0.4)'
                  }}
                >
                PICKWIN
                </span>
              </div>
            </h1>
            
            <div className={`text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal space-y-1.5 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
              <p>
                {t('hero.joinNow')} <span className="text-white font-bold italic">{t('hero.vip')}</span>
              </p>
              <p className="text-white/60 italic">{t('hero.or')}</p>
              <p>
                {t('hero.instant')} <span className="text-white font-bold italic">{t('hero.10x')}</span> {t('hero.withSecurity')}
              </p>
            </div>

            <div className={`space-y-4 flex flex-col items-center lg:items-start ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
              <div className="flex flex-col items-center lg:items-start">
                <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-pickwin-green text-black font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_10px_30px_rgba(19,212,130,0.3),0_0_20px_rgba(139,92,246,0.2)] uppercase italic sm:w-auto relative overflow-hidden group inline-block text-center">
                  <span className="relative z-10">{t('hero.joinButton')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pickwin-green/0 via-pickwin-green/10 to-pickwin-green/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <p className="text-white text-sm mt-2 italic font-bold">{t('hero.referCode')}</p>
              </div>
            </div>
          </div>

          {/* Image - Shows on all screen sizes */}
          <div className="relative order-2 lg:order-2">
            <img 
              src={samuelHaasImage} 
              alt="Samuel Haas" 
              className={`w-full h-auto object-cover relative z-10 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? '0.3s' : '0s' }}
            />
            {/* Green glow around image */}
            <div className="absolute inset-0 rounded-lg blur-xl -z-0 pointer-events-none bg-pickwin-green/5"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
