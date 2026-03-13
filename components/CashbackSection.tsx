
import React, { useEffect, useRef, useState } from 'react';

const CashbackSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <section className="bg-pickwin-green rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-5 sm:p-6 md:p-8 text-black relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(19,212,130,0.5)]" ref={ref}>
      {/* Cosmic glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pickwin-green/10 via-transparent to-pickwin-green/10 pointer-events-none"></div>
      {/* Decorative text */}
      <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none select-none hidden md:block">
        <span className="text-[200px] font-black italic leading-none tracking-tighter uppercase">FREE CASH</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center relative z-10">
        <div className={`${isVisible ? 'md:opacity-100 animate-slide-in' : 'md:opacity-100 opacity-0'}`}>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter mb-2 leading-tight sm:leading-none uppercase relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            WE PAY YOU <br /> TO PLAY.
            {/* Silver medallion accent - more visible */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-3.5 h-3.5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full border-2 border-black/30 shadow-lg hidden lg:block"></div>
          </h2>
          <p className="text-black/70 text-sm sm:text-base font-bold max-w-md">
            The most aggressive reward system in the industry. We give back to our players every single week, automatically.
          </p>
        </div>

        <div className="grid gap-2.5 sm:gap-3">
          <div className="bg-pickwin-bg text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl transform hover:-translate-y-2 transition-transform relative overflow-hidden group">
            {/* Bandana pattern overlay - more visible */}
            <div className="absolute top-2 right-2 w-8 h-8 opacity-10 pointer-events-none bandana-pattern border border-white/10"></div>
            <p className="text-pickwin-green font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 italic relative z-10">Daily Reward</p>
            <h3 className="text-3xl sm:text-4xl font-black mb-2 italic tracking-tight uppercase relative z-10">
              22% Cashback
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-medium relative z-10">Every day, we calculate your net losses and credit your account with cold hard cash. No hoops, no strings.</p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:-translate-y-2 transition-transform relative overflow-hidden group">
            {/* Bandana pattern overlay - more visible */}
            <div className="absolute top-2 right-2 w-8 h-8 opacity-10 pointer-events-none bandana-pattern border border-black/10"></div>
            <p className="text-black font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 italic relative z-10">Monday Reload</p>
            <h3 className="text-3xl sm:text-4xl font-black mb-2 italic tracking-tight uppercase relative z-10">
              10% Bonus
            </h3>
            <p className="text-black/60 text-xs sm:text-sm font-medium relative z-10">Kick off your week with a 10% cash bonus added to your balance automatically every Monday morning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashbackSection;
