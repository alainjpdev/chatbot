import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          {language === 'es' ? 'Impulsado por' : 'Empowered by'}{' '}
          <a
            href="https://escainet.com"
            className="underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Algorithmics AI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;