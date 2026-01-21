
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
    <section className="relative" ref={ref}>
      {/* Subtle cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 relative z-10">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 text-center relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <span className="text-white block sm:inline">MESSAGE FROM</span>{' '}
          <span className="text-pickwin-green block sm:inline relative">
            M0ST WANT9D
            <span className="absolute inset-0 blur-sm -z-10" style={{ color: 'rgba(232, 121, 249, 0.4)', textShadow: '0 0 10px rgba(232, 121, 249, 0.6)' }}>M0ST WANT9D</span>
            {/* Card suit accents - purple-pink glow */}
            <span className="absolute -right-8 top-0 text-3xl hidden lg:inline" style={{ color: 'rgba(232, 121, 249, 0.6)', textShadow: '0 0 15px rgba(232, 121, 249, 0.8)' }}>♠</span>
            <span className="absolute -left-8 top-0 text-3xl hidden lg:inline" style={{ color: 'rgba(217, 70, 239, 0.6)', textShadow: '0 0 15px rgba(217, 70, 239, 0.8)' }}>♠</span>
          </span>
          {/* Silver medallion accent - more visible */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-3.5 h-3.5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full border-2 border-white/50 shadow-lg hidden lg:block"></div>
        </h2>
        
        <div className={`space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed relative ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: isVisible ? '0.3s' : '0s' }}>
          {/* Bandana pattern overlay - more visible */}
          <div className="absolute top-4 right-4 w-10 h-10 opacity-10 pointer-events-none bandana-pattern border border-white/20 hidden lg:block"></div>
          <div className="absolute bottom-4 left-4 w-10 h-10 opacity-10 pointer-events-none bandana-pattern border border-white/20 hidden lg:block"></div>
          <p className="relative z-10">
            I am always looking for platforms that give serious bettors a <span className="text-white font-black">real advantage.</span> Platforms where winning is respected and where you can play with confidence, knowing your success will not be questioned.
          </p>
          <p className="relative z-10">
            <span className="text-white font-black">That is why I chose PickWin.</span> It offers an experience that most sportsbooks simply do not. PickWin was <span className="text-white font-black">built to handle winners,</span> volume, and consistent performance without restrictions.
          </p>
          <p className="relative z-10">
            It is a platform <span className="text-white font-black">designed for players who know what they are doing</span> and expect to be paid without delays or excuses.
          </p>
          <p className="relative z-10">
            Continue below to learn more and make sure you register today so you can access a sportsbook <span className="text-white font-black">built for winners.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessageFromInfluencer;
