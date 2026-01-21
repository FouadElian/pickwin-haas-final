
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import pickwinLogo from './img/pickwin-logo.png';
import m0stWant9dLogo from './img/logo_mostwanted.png';

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
    <section className="relative pt-2 sm:pt-4 pb-8 sm:pb-10 overflow-hidden min-h-[75vh] flex flex-col bg-pickwin-bg" ref={ref}>
      {/* Dark Background with Purple-Pink Glows - Matching Logo */}
      <div className="absolute inset-0 pointer-events-none bg-black">
        {/* Purple-pink glows like the logo */}
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232, 121, 249, 0.2), transparent 70%)' }}></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(217, 70, 239, 0.2), transparent 70%)' }}></div>
      </div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Logo at the top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-4 pb-4 relative z-20">
        <div className="flex justify-center sm:justify-start">
          <img src={pickwinLogo} alt="PickWin" className="h-32 sm:h-40 md:h-48 lg:h-56 drop-shadow-lg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Mobile: Centered Vertical Layout */}
          <div className="text-center lg:text-left w-full lg:w-auto order-1 lg:order-1">
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 sm:mb-4 uppercase leading-tight sm:leading-none ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              {/* "Most Wanted" Badge Style */}
              <div className="relative inline-flex items-center gap-2 mb-2">
                <div className="relative inline-block">
                  <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-black/40 border-2 border-purple-400/30 rounded-lg rotate-[-2deg] shadow-lg"></div>
                  <div className="relative text-white italic" style={{ textShadow: '0 0 10px rgba(232, 121, 249, 0.8), 0 0 20px rgba(217, 70, 239, 0.6), 0 0 30px rgba(232, 121, 249, 0.4)' }}>
                    M<span style={{ fontVariantNumeric: 'tabular-nums', display: 'inline-block', verticalAlign: 'baseline' }}>0</span>STWANT9D
                    <span className="absolute inset-0 text-purple-400/60 blur-sm -z-10" style={{ textShadow: '0 0 15px rgba(232, 121, 249, 0.9)' }}>M<span style={{ fontVariantNumeric: 'tabular-nums', display: 'inline-block', verticalAlign: 'baseline' }}>0</span>STWANT9D</span>
                  </div>
                </div>
                <span className="text-white/60 lowercase relative">x</span>
              </div>
              <div className="text-pickwin-green relative inline-block" style={{ textShadow: '0 0 10px rgba(19, 212, 130, 0.5)' }}>
                PICKWIN
                <span className="absolute inset-0 text-pickwin-green/30 blur-sm -z-10" style={{ textShadow: '0 0 15px rgba(19, 212, 130, 0.4)' }}>PICKWIN</span>
              </div>
            </h1>
            
            <div className={`text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal space-y-1.5 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
              <p>
                {t('hero.joinNow')} <span className="text-white font-bold italic">{t('hero.vip')}</span>
              </p>
              <p className="text-white/60 italic">{t('hero.or')}</p>
              <p>
                {t('hero.instant')} <span className="text-white font-bold italic">{t('hero.10x')}</span> {t('hero.withSecurity')}
              </p>
            </div>

            <div className={`space-y-4 flex flex-col items-center lg:items-start ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.4s' : '0s' }}>
              <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-pickwin-green text-black font-black px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-lg sm:text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_10px_30px_rgba(19,212,130,0.3),0_0_20px_rgba(139,92,246,0.2)] uppercase italic w-full sm:w-auto relative overflow-hidden group inline-block text-center">
                <span className="relative z-10">{t('hero.joinButton')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>

          {/* Image - Shows on all screen sizes */}
          <div className="relative order-2 lg:order-2">
            {/* Ace of Spades Card - More prominent with purple-pink glow like logo */}
            <div className="absolute -top-6 -right-6 w-20 h-28 bg-white/95 backdrop-blur-sm border-2 rounded-lg rotate-12 shadow-2xl hidden lg:block pointer-events-none z-20 group/card" style={{ borderColor: 'rgba(232, 121, 249, 0.6)', boxShadow: '0 0 20px rgba(232, 121, 249, 0.4), 0 0 40px rgba(217, 70, 239, 0.2)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-lg"></div>
              <div className="relative p-2 h-full flex flex-col justify-between">
                <div className="text-black text-lg font-black leading-none">A</div>
                <div className="text-center flex-1 flex items-center justify-center">
                  <span className="text-black text-4xl">♠</span>
                </div>
                <div className="text-black text-lg font-black leading-none rotate-180">A</div>
              </div>
              {/* Purple-pink glow - matching logo */}
              <div className="absolute inset-0 rounded-lg blur-md -z-10" style={{ background: 'radial-gradient(circle, rgba(232, 121, 249, 0.3), transparent 70%)' }}></div>
            </div>
            
            {/* Bandana pattern overlay - subtle hashtag/cross pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 hidden lg:block">
              <div className="absolute top-4 left-4 w-8 h-8 border border-white/20" style={{ 
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
                                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
              }}></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border border-white/20" style={{ 
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
                                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
              }}></div>
            </div>
            
            <img 
              src={m0stWant9dLogo} 
              alt="M0stWant9d" 
              className={`w-full h-auto object-cover relative z-10 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}
              style={{ animationDelay: isVisible ? '0.3s' : '0s' }}
            />
            {/* Purple-pink glow around image - matching logo */}
            <div className="absolute inset-0 rounded-lg blur-xl -z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(232, 121, 249, 0.15), transparent 70%)' }}></div>
            
            {/* Western-style border accent */}
            <div className="absolute -inset-2 border border-white/5 rounded-lg hidden lg:block pointer-events-none z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
