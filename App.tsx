
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import SocialProof from './components/SocialProof';
import WhyPickWin from './components/WhyPickWin';
import RewardsSection from './components/RewardsSection';
import FinalCTA from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
        <Navbar />

        <main>
          <Hero />
          <StatsBar />
          <SocialProof />
          <WhyPickWin />
          <RewardsSection />
          <FinalCTA />
        </main>

      </div>
    </LanguageProvider>
  );
};

export default App;
