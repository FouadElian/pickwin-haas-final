import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import pickwinLogo from './img/pickwin-logo.png';
import samuelHaasImage from './img/samuel-haas.png';

const ChallengeHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={samuelHaasImage} 
          alt="Samuel Haas" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo - Smaller, top center */}
        <div className="mb-8">
          <img src={pickwinLogo} alt="PickWin" className="h-20 sm:h-24 mx-auto" />
        </div>

        {/* Day Counter - Prominent */}
        <div className="mb-6">
          <div className="inline-block bg-pickwin-green text-black font-black px-6 py-3 rounded-full text-2xl sm:text-3xl md:text-4xl mb-4">
            JOUR 170
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3">
            SURVIVRE EN PARIANT
          </h1>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-pickwin-green mb-4">
            SAMUEL HAAS
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 font-light">
            Mon défi quotidien
          </p>
        </div>

        {/* Challenge Description */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4">
            {t('hero.challengeTitle')}
          </p>
          <p className="text-base sm:text-lg text-white/70">
            {t('hero.challengeDesc')}
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-pickwin-green text-black font-black px-12 py-5 rounded-full text-xl sm:text-2xl hover:bg-white transition-all shadow-2xl uppercase tracking-wide"
          >
            {t('hero.joinButton')}
          </a>
          <p className="text-white/60 text-sm">Code de référence : Haas</p>
        </div>
      </div>
    </section>
  );
};

export default ChallengeHero;
