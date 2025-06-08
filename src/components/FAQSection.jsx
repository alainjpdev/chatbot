import React from 'react';

const FAQSection = () => {
  return (
    <section className="section bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center animate-fade-in">
          <span className="text-white">Frequently asked questions</span>
        </h2>
        
        <div className="card p-8 mb-4 animate-fade-in">
          <h3 className="text-xl font-bold mb-2">What is Veo?</h3>
          <p className="text-gray-300">Veo is Gemini's state-of-the-art AI video generator that creates high-quality, 8-second videos from text descriptions.</p>
        </div>
        
        <div className="card p-8 mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <h3 className="text-xl font-bold mb-2">How do I access Veo?</h3>
          <p className="text-gray-300">You can access Veo with a Google AI Pro plan or get the highest access with the Ultra plan.</p>
        </div>
        
        <div className="card p-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h3 className="text-xl font-bold mb-2">What's the difference between Veo 2 and Veo 3?</h3>
          <p className="text-gray-300">Veo 3 includes native audio generation and state-of-the-art video quality improvements over Veo 2.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
