import React from 'react';
import { FadeIn } from './animation/FadeIn';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3]">Mia Automation</span>?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Mia Automation automates content creation for your blogs using innovative artificial intelligence technology. 
            Founded by Daan van Oploo and Jules Gaveglio, passionate about automation and AI, Mia generates 
            high-quality, authentic, and SEO-optimized articles to boost your online visibility.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3] text-black font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Discover my SEO potential
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

export default AboutSection;