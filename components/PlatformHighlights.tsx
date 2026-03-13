import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PlatformHighlights: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    { title: 'Retraits', value: 'Sans Limite' },
    { title: 'Cashback', value: 'Jusqu\'à 22%' },
    { title: 'Jeux Casino', value: '8,000+' },
    { title: 'Cotes', value: 'Meilleur Marché' },
    { title: 'RTP', value: 'Le Plus Élevé' },
    { title: 'Support', value: '24/7 en Direct' },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group text-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-pickwin-green/20 transition-transform duration-300 hover:-translate-y-1 hover:border-pickwin-green/40 hover:shadow-[0_12px_30px_-18px_rgba(19,212,130,0.6)] animate-slide-in-left"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="text-pickwin-green font-black text-2xl sm:text-3xl mb-2">{item.value}</div>
              <div className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wide">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;
