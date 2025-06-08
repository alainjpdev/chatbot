import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          Empowered by{' '}
          <a
            href="https://escainet.com"
            className="underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            escainet.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;