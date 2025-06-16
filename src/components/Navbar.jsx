import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full py-4 px-6 z-50 bg-black bg-opacity-80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          Algorithmics AI
        </Link>

        {/* Desktop Menu + Language Buttons to the right */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <a href="#packages" className="text-white">
            {language === 'es' ? 'Suscripciones' : 'Subscriptions'}
          </a>
          <Link to="/calendar" className="text-white">
            {language === 'es' ? 'Calendario' : 'Calendar'}
          </Link>
          <button
            onClick={() => handleLanguageChange('es')}
            className={`text-2xl transition-opacity ${language === 'es' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}
          >
            🇲🇽
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`text-2xl transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}
          >
            🇺🇸
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 flex flex-col items-start space-y-2 px-6">
          <a href="#packages" className="text-white">
            {language === 'es' ? 'Suscripciones' : 'Subscriptions'}
          </a>
          <Link to="/calendar" className="text-white">
            {language === 'es' ? 'Calendario' : 'Calendar'}
          </Link>
          <div className="flex space-x-4 pt-2">
            <button
              onClick={() => handleLanguageChange('es')}
              className={`text-2xl ${language === 'es' ? 'opacity-100' : 'opacity-50'}`}
            >
              🇲🇽
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`text-2xl ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
            >
              🇺🇸
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;