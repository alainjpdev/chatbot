import React, { useState } from 'react';
import { useLanguage } from './contexts/LanguageContext';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VeoSpeaksSection from './components/VeoSpeaksSection';
import PackagesSection from './components/UseCasesSection';
import Footer from './components/Footer';
import ChatBotButton from './components/ChatBotButton';
import VapiModal from './components/VapiModal';
import Testimonials from './components/Testimonials';

export default function App() {
  const { language } = useLanguage();
  const [showVapi, setShowVapi] = useState(false);

  return (
    <>
      <Navbar />
      <HeroSection language={language} />
      <VeoSpeaksSection language={language} />
      <PackagesSection language={language} />
      <Testimonials language={language} />
      <ChatBotButton language={language} />
      {showVapi && <VapiModal language={language} onClose={() => setShowVapi(false)} />}
      <button
        onClick={() => setShowVapi(true)}
        className="fixed bottom-6 right-24 z-50 w-16 h-16 rounded-full bg-purple-700 shadow-xl flex items-center justify-center hover:scale-110 transition-transform border border-gray-800 text-white text-2xl"
        aria-label="Open Vapi Assistant"
      >
        🗣️
      </button>

      <Footer language={language} />
    </>
  );
}