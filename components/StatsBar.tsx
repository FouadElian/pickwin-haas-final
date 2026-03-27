
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import pokerChipsImage from './img/poker chips .png';
import rouletteImage from './img/Roulette-wheel.svg.png';

const StatsBar: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('stats.withdrawals'), value: t('stats.noLimit') },
    { label: t('stats.cashback'), value: t('stats.upTo22') },
    { label: t('stats.casinoGames'), value: t('stats.8000Games') },
    { label: t('stats.providers'), value: t('stats.50plus') },
    { label: t('stats.rtp'), value: t('stats.highest') },
    { label: t('stats.support'), value: t('stats.24_7') },
  ];
  return (
    <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-y border-pickwin-green/10 py-10 overflow-hidden shadow-inner relative">
      {/* Green glow background */}
      <div className="absolute inset-0 pointer-events-none bg-pickwin-green/3"></div>
      <div className="flex whitespace-nowrap animate-marquee relative z-10">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-8">
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-pickwin-green font-black text-xl sm:text-2xl md:text-3xl italic relative">
                  {stat.value}
                </span>
                  <span className="text-white/80 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">{stat.label}</span>
              </div>
                {idx < stats.length - 1 && (
                  <img
                    src={idx % 2 === 0 ? pokerChipsImage : rouletteImage}
                    alt={idx % 2 === 0 ? 'Poker chips' : 'Roulette wheel'}
                    className={`${idx % 2 === 0 ? 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' : 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'} object-contain flex-shrink-0`}
                    style={{ filter: 'drop-shadow(0 0 15px rgba(19,212,130,0.8))' }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default StatsBar;
