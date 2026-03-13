
import React, { useEffect, useRef, useState } from 'react';

const MessageFromInfluencer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Disconnect after first trigger to prevent re-triggering
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
    <section className="relative bg-gradient-to-b from-gray-950 to-gray-900" ref={ref}>
      {/* Subtle green background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pickwin-green/3 via-transparent to-pickwin-green/3 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative z-10">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 text-center relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <span className="text-white block sm:inline">MESSAGE FROM</span>{' '}
          <span className="text-pickwin-green block sm:inline relative">
            SAMUEL HAAS
          </span>
          {/* Silver medallion accent - more visible */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-3.5 h-3.5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full border-2 border-white/50 shadow-lg hidden lg:block"></div>
        </h2>
        
        <div className={`space-y-4 sm:space-y-6 text-white text-base sm:text-lg leading-relaxed relative ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.3s' : '0s' }}>
          {/* Bandana pattern overlay - more visible */}
          <div className="absolute top-4 right-4 w-10 h-10 opacity-10 pointer-events-none bandana-pattern border border-white/20 hidden lg:block"></div>
          <div className="absolute bottom-4 left-4 w-10 h-10 opacity-10 pointer-events-none bandana-pattern border border-white/20 hidden lg:block"></div>
          <p className="relative z-10">
            Je parie chaque jour le montant exact que j'ai dépensé dans la vraie vie. Je mise sur le rouge, transformant mes dépenses quotidiennes en opportunités de paris pour voir si je peux survivre et prospérer.
          </p>
          <p className="relative z-10">
            <span className="text-white font-black">C'est pourquoi j'ai choisi PickWin.</span> Pour un défi comme celui-ci, j'ai besoin d'une plateforme qui peut gérer les paris quotidiens, sans limites, et avec des paiements rapides. PickWin a été <span className="text-white font-black">conçu pour ce type de paris sérieux</span> où chaque jour compte et chaque retrait est important.
          </p>
          <p className="relative z-10">
            Que je parie ce que j'ai dépensé en café, en courses ou autre chose, PickWin traite tout <span className="text-white font-black">sans délais ni restrictions.</span> C'est la seule plateforme à laquelle je fais confiance pour ce défi.
          </p>
          <p className="relative z-10">
            Rejoignez-moi dans cette aventure et inscrivez-vous aujourd'hui pour accéder à un bookmaker <span className="text-white font-black">qui respecte votre stratégie de paris</span> et vous paie quand vous gagnez.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessageFromInfluencer;
