
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8 opacity-20 grayscale">
             <span className="font-black text-2xl italic">18+</span>
             <span className="font-black text-sm tracking-widest uppercase">Gamble Responsibly</span>
             <span className="font-black text-sm tracking-widest uppercase">BeGambleAware.org</span>
          </div>
          <p className="text-[10px] text-gray-600 font-black tracking-[0.2em] uppercase max-w-2xl mx-auto leading-loose">
            Disclaimer: Gambling involves significant risk. Never bet more than you can afford to lose. PickWin is not responsible for any losses incurred. Check your local regulations before participating.
            &copy; {new Date().getFullYear()} PickWin Global. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
