import React from 'react';
import { Quote } from 'lucide-react';
import { FadeIn } from './animation/FadeIn';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Marceau',
    position: 'Marketing Director, TechVision',
    content: 'Since using Mia Automation, our organic traffic has increased by 75% in just 3 months. The quality of the articles is simply remarkable.',
  },
  {
    id: 2,
    name: 'John Smith',
    position: 'Founder, Innovative Startup',
    content: 'I didn\'t think AI could generate such relevant and engaging content. Mia Automation exceeded all my expectations and our SEO has improved considerably.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7EDB] to-[#FF9EE3]">clients</span> say
        </h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.id} delay={0.2 * index}>
            <div className="bg-[#0C0C16]/70 backdrop-blur-sm border border-gray-800 p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-2 -top-2 w-20 h-20 bg-gradient-to-r from-[#FF7EDB]/5 to-[#FF9EE3]/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Quote className="w-10 h-10 text-[#FF7EDB]/30 mb-4" />
              <p className="text-gray-300 italic mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF7EDB] to-[#FF9EE3] flex items-center justify-center text-black font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;