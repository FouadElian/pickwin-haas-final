
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const StatsBar: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    { label: t('stats.withdrawals'), value: t('stats.noLimit') },
    { label: t('stats.cashback'), value: t('stats.upTo22') },
    { label: t('stats.casinoGames'), value: t('stats.8000Games') },
    { label: t('stats.odds'), value: t('stats.bestMarket') },
    { label: t('stats.rtp'), value: t('stats.highest') },
    { label: t('stats.support'), value: t('stats.24_7') },
  ];
  return (
    <div className="bg-black border-y border-white/5 py-10 overflow-hidden shadow-inner relative">
      {/* Purple-pink glow background - matching logo */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(232, 121, 249, 0.08) 0%, transparent 50%, rgba(217, 70, 239, 0.08) 100%)' }}></div>
      <div className="flex whitespace-nowrap animate-marquee relative z-10">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-32 px-4 sm:px-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* Card suit divider - purple-pink glow */}
                <span className="text-xl sm:text-2xl hidden md:block" style={{ color: 'rgba(232, 121, 249, 0.5)', textShadow: '0 0 10px rgba(232, 121, 249, 0.7)' }}>♠</span>
                <span className="text-pickwin-green font-black text-xl sm:text-2xl md:text-3xl italic relative">
                  {stat.value}
                  <span className="absolute inset-0 blur-sm -z-10" style={{ color: 'rgba(232, 121, 249, 0.3)', textShadow: '0 0 8px rgba(232, 121, 249, 0.5)' }}>{stat.value}</span>
                </span>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">{stat.label}</span>
                <span className="text-xl sm:text-2xl hidden md:block" style={{ color: 'rgba(217, 70, 239, 0.5)', textShadow: '0 0 10px rgba(217, 70, 239, 0.7)' }}>♠</span>
              </div>
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
          animation: marquee 6s linear infinite;
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
