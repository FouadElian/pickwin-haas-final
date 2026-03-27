
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import pickwinLogo from './img/pickwin-logo.png';
import samuelHaasImage from './img/samuel-haas.jpg';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="relative pt-2 sm:pt-4 pb-8 sm:pb-10 overflow-hidden min-h-[75vh] flex flex-col bg-gradient-to-b from-gray-950 to-black" ref={ref}>
      {/* Dark Background with Green Glows */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-pickwin-green/8 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-pickwin-green/8 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.03) 49%, rgba(255,255,255,0.03) 51%, transparent 52%)', backgroundSize: '60px 60px' }}></div>

      {/* Logo at the top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-4 pb-6 relative z-20">
        <div className="flex justify-center sm:justify-start">
          <img src={pickwinLogo} alt="PickWin" className="h-32 sm:h-40 md:h-48 lg:h-56 drop-shadow-lg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full lg:items-center">

          {/* Content */}
          <div className="text-center lg:text-left w-full lg:w-auto order-1">

            {/* Image - centered, bigger (mobile) */}
            <div className={`reveal-fade-up ${isVisible ? 'visible' : ''} mb-6 flex justify-center lg:hidden`}>
              <img
                src={samuelHaasImage}
                alt="Samuel Haas"
                className="w-44 sm:w-52 h-44 sm:h-52 object-cover rounded-xl border border-pickwin-green/30"
              />
            </div>

            {/* Main Headline */}
            <h1 className={`reveal-fade-up reveal-stagger-1 ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 sm:mb-4 uppercase leading-tight sm:leading-none`}>
              <span
                className="text-white/90 block"
                style={{ textShadow: '0 0 25px rgba(255,255,255,0.3), 0 0 50px rgba(255,255,255,0.15)' }}
              >
                {t('hero.exclusiveCasino')}
              </span>
              <span
                className="text-pickwin-green/90 block"
                style={{ textShadow: '0 0 25px rgba(19,212,130,0.4), 0 0 50px rgba(19,212,130,0.2)' }}
              >
                {t('hero.awaits')}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className={`reveal-fade-up reveal-stagger-2 ${isVisible ? 'visible' : ''} text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium`}>
              {t('hero.subHeadline')}
            </p>

            {/* CTA */}
            <div className={`reveal-fade-up reveal-stagger-3 ${isVisible ? 'visible' : ''} flex flex-col items-center lg:items-start`}>
              <a
                href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta"
                className="bg-pickwin-green text-black font-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_10px_30px_rgba(19,212,130,0.3),0_0_20px_rgba(19,212,130,0.2)] uppercase italic sm:w-auto relative overflow-hidden group inline-block text-center"
              >
                <span className="relative z-10">{t('hero.claimAccess')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pickwin-green/0 via-white/10 to-pickwin-green/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <p className="mt-3 text-[15px] font-medium text-white">{t('hero.referCode')}</p>
            </div>
          </div>

          {/* Image - Centered and bigger on desktop */}
          <div className="relative order-2 hidden lg:flex lg:justify-center lg:items-center">
            <img
              src={samuelHaasImage}
              alt="Samuel Haas"
              className={`reveal-fade-up reveal-stagger-2 ${isVisible ? 'visible' : ''} w-full max-w-md xl:max-w-lg h-auto object-cover rounded-xl relative z-10`}
            />
            <div className="absolute inset-0 rounded-xl blur-xl -z-0 pointer-events-none bg-pickwin-green/5" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
