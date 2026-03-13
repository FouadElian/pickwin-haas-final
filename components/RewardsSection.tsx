import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import interacLogo from './img/interac-yellow-vector-logo-free-download-11574103307xabgqcjzgi.png';
import pokerChipsImage from './img/poker chips .png';
import rouletteImage from './img/Roulette-wheel.svg.png';

const RewardsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-black py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Green banner with rounded corners and glow - shorter and wider on desktop */}
        <div className="bg-pickwin-green rounded-3xl p-6 sm:p-8 lg:p-6 lg:px-12 relative" style={{ boxShadow: '0 0 40px rgba(19,212,130,0.4)' }}>
          {/* Poker chip and roulette icons in corners - alternating */}
          {[
            { pos: ['top-4', 'left-4'], image: pokerChipsImage, alt: 'Poker chips', isRoulette: false },
            { pos: ['top-4', 'right-4'], image: rouletteImage, alt: 'Roulette wheel', isRoulette: true },
            { pos: ['bottom-4', 'left-4'], image: rouletteImage, alt: 'Roulette wheel', isRoulette: true },
            { pos: ['bottom-4', 'right-4'], image: pokerChipsImage, alt: 'Poker chips', isRoulette: false },
          ].map((item, i) => (
            <img 
              key={i}
              src={item.image} 
              alt={item.alt} 
              className={`absolute ${item.pos[0]} ${item.pos[1]} ${item.isRoulette ? 'w-9 h-9 sm:w-11 sm:h-11' : 'w-8 h-8 sm:w-10 sm:h-10'} object-contain`}
              style={{ filter: 'drop-shadow(0 0 15px rgba(19,212,130,0.8))' }}
            />
          ))}
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-black mb-6 sm:mb-8 lg:mb-6 relative z-10 flex items-center justify-center gap-2 sm:gap-3 animate-slide-up" style={{ opacity: 0 }}>
            {/* Poker chip icon on the left */}
            <img 
              src={pokerChipsImage} 
              alt="Poker chips" 
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0"
              style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}
            />
            <span className="relative">{t('benefits.rewards')}</span>
            {/* Roulette wheel icon on the right */}
            <img 
              src={rouletteImage} 
              alt="Roulette wheel" 
              className="w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 object-contain flex-shrink-0"
              style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}
            />
          </h2>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Cashback */}
            <div className="bg-black p-4 sm:p-5 lg:p-4 rounded-2xl relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)] animate-slide-in-left" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <div className="text-pickwin-green text-[10px] sm:text-xs font-bold uppercase mb-1.5 tracking-wider">{t('benefits.weeklyReward')}</div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-black text-white mb-2">
                {t('benefits.cashback')}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{t('benefits.cashbackDesc')}</p>
            </div>

            {/* Deposits */}
            <div className="bg-black p-4 sm:p-5 lg:p-4 rounded-2xl relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)] animate-slide-in-left" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="text-pickwin-green text-[10px] sm:text-xs font-bold uppercase mb-1.5 tracking-wider">{t('benefits.fastDeposits')}</div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                <img src={interacLogo} alt="Interac" className="h-8 sm:h-10" />
                <span className="text-2xl sm:text-3xl text-yellow-400">₿</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{t('benefits.depositsDesc')}</p>
            </div>

            {/* Withdrawals */}
            <div className="bg-black p-4 sm:p-5 lg:p-4 rounded-2xl relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)] animate-slide-in-left" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <div className="text-pickwin-green text-[10px] sm:text-xs font-bold uppercase mb-1.5 tracking-wider">{t('benefits.noLimit')}</div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-black text-white mb-2">{t('benefits.fastPayouts')}</h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{t('benefits.withdrawalsDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
