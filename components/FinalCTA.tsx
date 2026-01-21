
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-pickwin-surface to-pickwin-bg border border-white/10 p-12 md:p-24 text-center shadow-2xl">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pickwin-green/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-[0.9] uppercase relative">
          JOIN PICKWIN WITH <br />
          <span className="text-pickwin-green relative inline-block">
            M0STWANT9D
            <span className="absolute inset-0 blur-sm -z-10" style={{ color: 'rgba(232, 121, 249, 0.5)', textShadow: '0 0 15px rgba(232, 121, 249, 0.8)' }}>M0STWANT9D</span>
            {/* Ace of Spades accent - purple-pink glow */}
            <span className="absolute -right-10 top-1/2 -translate-y-1/2 text-5xl hidden lg:inline-block" style={{ color: 'rgba(232, 121, 249, 0.7)', textShadow: '0 0 20px rgba(232, 121, 249, 0.9), 0 0 40px rgba(217, 70, 239, 0.6)' }}>♠</span>
          </span>
          {/* Silver medallion accent - more visible */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full border-2 border-white/60 shadow-lg hidden lg:block"></div>
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 font-bold italic">
          "No limits. No delays. No nonsense."
        </p>

        <div className="flex flex-col items-center">
          <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-pickwin-green text-black font-black px-16 py-6 rounded-2xl text-2xl hover:bg-white transition-all shadow-[0_20px_50px_-15px_rgba(19,212,130,0.5),0_0_30px_rgba(139,92,246,0.2)] animate-float italic relative overflow-hidden group inline-block">
            <span className="relative z-10">CLAIM YOUR ACCESS NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/15 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <p className="text-white text-sm mt-3 italic font-bold">refer code : M0st</p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
           <span className="font-black text-xs tracking-widest uppercase italic">Unlimited Payouts</span>
           <span className="font-black text-xs tracking-widest uppercase italic">8,000+ Games</span>
           <span className="font-black text-xs tracking-widest uppercase italic">22% Cashback</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
