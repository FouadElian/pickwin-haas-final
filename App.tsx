import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { usePath } from './navigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import SocialProof from './components/SocialProof';
import WhyPickWin from './components/WhyPickWin';
import RewardsSection from './components/RewardsSection';
import FinalCTA from './components/FinalCTA';
import WagerRacePromo from './components/WagerRacePromo';
import WagerRacePage from './components/WagerRacePage';

const MainPage: React.FC = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2">
        <WagerRacePromo />
      </div>
      <StatsBar />
      <SocialProof />
      <WhyPickWin />
      <RewardsSection />
      <FinalCTA />
    </main>
  </>
);

const Routes: React.FC = () => {
  const path = usePath();
  return path === '/wager-race' ? <WagerRacePage /> : <MainPage />;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
        <Routes />
      </div>
    </LanguageProvider>
  );
};

export default App;
