import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import AdvantagesSection from './components/AdvantagesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FoundersSection from './components/FoundersSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { AnimatePresence } from './components/animation/AnimatePresence';
import TrafficChart from './components/TrafficChart';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050414] to-[#0A0821] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <AnimatePresence>
          <AboutSection />
          <TrafficChart />
          <AdvantagesSection />
          <ProcessSection />
          <TestimonialsSection />
          <FoundersSection />
          <FinalCTA />
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;