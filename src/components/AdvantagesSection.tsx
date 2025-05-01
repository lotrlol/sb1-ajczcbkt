import React from 'react';
import { FileCheck, Search, Clock, ArrowUpRight, ArrowRight } from 'lucide-react';
import { FadeIn } from './animation/FadeIn';

const advantages = [
  {
    id: 1,
    title: '100% Authentic Content',
    description: 'Unique articles, as if written by a human expert, with no risk of plagiarism.',
    icon: FileCheck,
  },
  {
    id: 2,
    title: 'SEO Optimized Articles',
    description: 'Each piece of content is structured to maximize your search engine visibility.',
    icon: Search,
  },
  {
    id: 3,
    title: 'Significant Time Savings',
    description: 'Focus on your core business while we generate your content.',
    icon: Clock,
  },
  {
    id: 4,
    title: 'Rapid Visibility Increase',
    description: 'Observe tangible results in your SEO metrics within weeks.',
    icon: ArrowUpRight,
  }
];

const AdvantagesSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3]">Key Advantages</span>
        </h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {advantages.map((advantage, index) => (
          <FadeIn key={advantage.id} delay={0.2 * index}>
            <div className="bg-[#0C0C16]/70 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-[#E53CC1]/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E53CC1]/20 to-[#FF9EE3]/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#E53CC1]/30 group-hover:to-[#FF9EE3]/30 transition-all duration-300">
                <advantage.icon className="w-6 h-6 text-[#E53CC1]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-gray-400">{advantage.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3] text-black font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Discover my advantages
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

export default AdvantagesSection;