import React from 'react';

const SceneSection = () => {
  return (
    <section className="section bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
          <span className="text-white">Write the </span>
          <span className="text-gradient">scene</span>
          <span className="text-white"> you want to watch</span>
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <span className="text-white">with Veo 2</span>
        </h3>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="text-white">Dream it. Describe it. </span>
          <span className="text-gradient">Done.</span>
        </h2>
      </div>
    </section>
  );
};

export default SceneSection;
