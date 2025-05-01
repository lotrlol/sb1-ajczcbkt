import React from 'react';
import { FadeIn } from './animation/FadeIn';
import { Linkedin, Github } from 'lucide-react';

const founders = [
  {
    id: 1,
    name: 'Daan van Oploo',
    role: 'Co-founder & CTO',
    bio: 'AI and automation expert',
    socialLinks: [
      { icon: Linkedin, url: '#' },
      { icon: Github, url: '#' },
    ]
  },
  {
    id: 2,
    name: 'Jules Gaveglio',
    role: 'Co-founder & CEO',
    bio: 'SEO and content strategy specialist',
    socialLinks: [
      { icon: Linkedin, url: '#' },
      { icon: Github, url: '#' },
    ]
  }
];

const FoundersSection = () => {
  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          The team behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7EDB] to-[#FF9EE3]">Mia Automation</span>
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Daan van Oploo and Jules Gaveglio, passionate about artificial intelligence and pioneers in 
          content automation, founded Mia to revolutionize the professional blogging and SEO sector.
        </p>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {founders.map((founder, index) => (
          <FadeIn key={founder.id} delay={0.2 * index}>
            <div className="bg-[#0C0C16]/70 backdrop-blur-sm border border-gray-800 p-6 rounded-xl text-center group hover:border-[#FF7EDB]/50 transition-all duration-300">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#FF7EDB]/20 to-[#FF9EE3]/20 flex items-center justify-center mb-4 overflow-hidden">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7EDB] to-[#FF9EE3]">
                  {founder.name.charAt(0)}{founder.name.split(' ')[1].charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
              <p className="text-[#FF7EDB] mb-2">{founder.role}</p>
              <p className="text-gray-400 mb-4">{founder.bio}</p>
              <div className="flex justify-center space-x-3">
                {founder.socialLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    className="w-8 h-8 rounded-full bg-[#121026] flex items-center justify-center hover:bg-[#FF7EDB]/20 transition-colors duration-300"
                  >
                    <link.icon className="w-4 h-4 text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default FoundersSection;