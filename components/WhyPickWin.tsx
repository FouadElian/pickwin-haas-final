import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyPickWin: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-black py-12 sm:py-16" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Casino Image */}
          <div className="group relative overflow-hidden rounded-2xl border border-pickwin-green/30 order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1518895312237-a9e23508077d?q=80&w=1600&auto=format&fit=crop"
              alt="Casino games"
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] reveal-fade-up ${isVisible ? 'visible' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Casino Content */}
          <div className={`bg-gradient-to-r from-gray-900 to-gray-950 p-6 sm:p-8 rounded-2xl border-l-4 border-pickwin-green transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(19,212,130,0.6)] order-1 lg:order-2 reveal-fade-up ${isVisible ? 'visible' : ''}`}>
            <h3 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight reveal-fade-up reveal-stagger-1 ${isVisible ? 'visible' : ''}`}>
              <span className="text-white block sm:inline" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
                {t('features.over8000')}
              </span>
              {' '}
              <span className="text-pickwin-green block sm:inline" style={{ textShadow: '0 0 20px rgba(19,212,130,0.8), 0 0 30px rgba(168,85,247,0.6)' }}>
                {t('features.casinoGames')}
              </span>
            </h3>
            <p className={`text-white/80 text-base sm:text-lg mb-6 leading-relaxed reveal-fade-up reveal-stagger-2 ${isVisible ? 'visible' : ''}`}>
              {t('features.casinoDesc')}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              {[
                { text: t('features.jackpotSlots'), delay: 'reveal-stagger-2' },
                { text: t('features.liveCasino'), delay: 'reveal-stagger-3' },
                { text: t('features.tableGames'), delay: 'reveal-stagger-3' },
                { text: t('features.topProviders'), delay: 'reveal-stagger-4' },
                { text: t('features.highestRTP'), delay: 'reveal-stagger-4' },
                { text: t('features.instantWins'), delay: 'reveal-stagger-5' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-2 text-white/90 text-sm font-medium italic uppercase reveal-fade-up ${item.delay} ${isVisible ? 'visible' : ''}`}>
                  <span className="text-pickwin-green text-lg">✦</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <a
                href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-gradient-to-b from-pickwin-green to-pickwin-green/90 text-black font-black px-8 py-4 rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(19,212,130,0.5)] uppercase reveal-fade-up reveal-stagger-4 ${isVisible ? 'visible' : ''}`}
              >
                {t('features.exploreCasino')}
              </a>
              <p className="mt-3 text-[15px] font-medium text-white">{t('features.referCode')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPickWin;
