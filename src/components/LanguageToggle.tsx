import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-[#0C0C16] rounded-full p-0.5 sm:p-1 border border-gray-800">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-300 ${
          language === 'en' 
            ? 'bg-[#E53CC1]/20 text-white' 
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <img
          src="https://flagcdn.com/w40/us.png"
          alt="English"
          className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm object-cover"
        />
        <span className="text-xs sm:text-sm font-medium">EN</span>
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-300 ${
          language === 'fr' 
            ? 'bg-[#E53CC1]/20 text-white' 
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <img
          src="https://flagcdn.com/w40/fr.png"
          alt="French"
          className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm object-cover"
        />
        <span className="text-xs sm:text-sm font-medium">FR</span>
      </button>
    </div>
  );
};