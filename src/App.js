import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VeoSpeaksSection from './components/VeoSpeaksSection';
import SceneSection from './components/SceneSection';
import PackagesSection from './components/UseCasesSection';
import VeoModelsSection from './components/VeoModelsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ChatBotButton from './components/ChatBotButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <VeoSpeaksSection />
      {/*<SceneSection />*/}
      <PackagesSection />
      {/*<VeoModelsSection />*/}
      {/*<FAQSection />*/}
      <ChatBotButton />
      <Footer />
    </div>
  );
}

export default App;
