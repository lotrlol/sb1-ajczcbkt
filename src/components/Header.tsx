import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FadeIn } from './animation/FadeIn';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="pt-6 pb-16 md:pt-12 md:pb-24">
      <nav className="flex justify-between items-center mb-16">
        <div className="flex items-center">
          <img 
            src="https://iili.io/3Wmgl1V.png" 
            alt="Mia Logo" 
            className="h-12 w-auto"
          />
        </div>
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <button 
            onClick={scrollToContact}
            className="px-4 py-2 text-sm font-medium rounded-full border border-[#E53CC1] text-white hover:bg-[#E53CC1]/10 transition-all"
          >
            {t.nav.contact}
          </button>
        </div>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.hero.title.split('SEO').map((part, i) => 
                i === 0 ? part : <><span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3]">SEO</span>{part}</>
              )}
            </h1>
            <p className="text-xl text-gray-300">
              {t.hero.subtitle}
            </p>
            <button 
              onClick={scrollToContact}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3] text-black font-semibold rounded-full flex items-center transform transition-transform hover:scale-105 hover:shadow-glow"
            >
              Analyze my site for free
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E53CC1]/20 to-[#FF9EE3]/20 rounded-2xl blur-3xl opacity-30"></div>
            <div className="relative bg-[#0C0C16] border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
              <img 
                src="https://iili.io/3WmYlLl.png" 
                alt="Mia Mascot" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </header>
  );
};

export default Header;