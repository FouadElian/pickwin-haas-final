
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      {/* Language toggle */}
      <nav className="fixed top-0 right-0 z-50 p-4 sm:p-6">
        <button
          onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white font-bold text-sm hover:bg-black/70 hover:border-white/40 transition-all uppercase"
        >
          {language === 'en' ? 'FR' : 'EN'}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
