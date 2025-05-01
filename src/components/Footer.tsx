import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <img 
              src="https://iili.io/3Wmgl1V.png" 
              alt="Mia Logo" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-4 max-w-md">
            Mia Automation automates content creation for your blogs using innovative artificial intelligence technology.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#E53CC1] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E53CC1] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E53CC1] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E53CC1] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Article Generation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Performance Analysis</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Strategy</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:info@mia-automation.com" className="hover:text-white transition-colors">
                info@mia-automation.com
              </a>
            </li>
            <li className="flex items-center text-gray-400">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+31624799031" className="hover:text-white transition-colors">
                +31 6 24799031
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-500 text-sm">
            <p>© 2025 Mia Automation. All rights reserved.</p>
            <p>Part of Meritxell Media</p>
          </div>
          <div className="text-gray-500 text-sm md:text-right">
            <p>KvK: 80564186</p>
            <p>VAT: NL003457110B94</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-4 text-sm">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Legal Notice</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;