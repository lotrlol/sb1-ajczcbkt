import React from 'react';
import { Search, FileText, BarChart, ArrowRight } from 'lucide-react';
import { FadeIn } from './animation/FadeIn';

const processSteps = [
  {
    id: 1,
    title: 'Needs Analysis',
    description: 'We precisely identify your SEO needs and relevant themes.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Automated Content Creation',
    description: 'Our AI generates personalized, unique, and quality articles.',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Publication and Results',
    description: 'You receive articles ready to be published on your blog and observe rapid SEO improvement.',
    icon: BarChart,
  }
];

const ProcessSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3]">works</span>?
        </h2>
      </FadeIn>
      
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-0.5 bg-gradient-to-b from-[#E53CC1]/70 via-[#FF9EE3]/50 to-transparent -translate-x-1/2 z-0"></div>
        
        <div className="space-y-16 md:space-y-24 relative z-10">
          {processSteps.map((step, index) => (
            <FadeIn key={step.id} delay={0.3 * index}>
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3] flex items-center justify-center shadow-glow">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-semibold mb-3">
                    <span className="mr-2 text-[#E53CC1]">{step.id}.</span> {step.title}
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.6}>
        <div className="text-center mt-16">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3] text-black font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Start now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

export default ProcessSection;