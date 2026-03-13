
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WhyPickWin from './components/WhyPickWin';
import RewardsSection from './components/RewardsSection';
import Onboarding from './components/Onboarding';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        
        <main>
          <Hero />
          <StatsBar />
          <WhyPickWin />
          <RewardsSection />
            <Onboarding />
            <SocialProof />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
