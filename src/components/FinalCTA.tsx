import React from 'react';
import { FadeIn } from './animation/FadeIn';
import ContactForm from './ContactForm';

const FinalCTA = () => {
  return (
    <section id="contact-form" className="py-16 md:py-24">
      <FadeIn>
        <div className="relative overflow-hidden bg-gradient-to-r from-[#0C0C16] to-[#121026] rounded-3xl p-8 md:p-12 border border-gray-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-[#E53CC1]/20 to-[#FF9EE3]/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Discover your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3]">growth potential</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Get a free analysis of your current traffic and a personalized estimate of the number of articles needed to reach your goals.
            </p>
            
            <div className="bg-[#0A0821]/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default FinalCTA;