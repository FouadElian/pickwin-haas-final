
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import BenefitsSection from './components/BenefitsSection';
import SocialProof from './components/SocialProof';
import Onboarding from './components/Onboarding';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        
        <main>
          <Hero />
          <StatsBar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6 md:space-y-8 py-5 sm:py-6 md:py-8">
            <Features />
            <BenefitsSection />
            <Onboarding />
            <SocialProof />
          </div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
