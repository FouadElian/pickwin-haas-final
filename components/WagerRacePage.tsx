import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { navigate } from '../navigation';
import Navbar from './Navbar';
import Leaderboard from './Leaderboard';
import Footer from './Footer';
import pickwinLogo from './img/pickwin-logo.png';

const WagerRacePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-bold mb-2 transition-colors"
        >
          <span className="text-lg leading-none">←</span> {t('race.back')}
        </a>
        <div className="flex justify-center -mt-2 mb-3 sm:mb-4">
          <img src={pickwinLogo} alt="PickWin" className="h-44 sm:h-52 md:h-64 w-auto" />
        </div>
        <Leaderboard />
      </main>
      <Footer />
    </>
  );
};

export default WagerRacePage;
