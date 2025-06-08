import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 pt-32 pb-16 bg-black">
      <div className="mb-12 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white">Summer camp </span>
          <span className="text-gradient">with Algorithmics AI</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white opacity-90 mb-8">
          <strong>Algorithmics AI</strong> is a modern AI school that empowers kids, teens and adults to learn artificial intelligence, automation, and creative coding/no-code through hands-on projects. From building web apps with prompts to programming robots, students explore real-world technology in a fun, futuristic environment — no prior experience required.
        </p>
        {/* Optional CTA Button
        <a 
          href="#packages" 
          className="btn-primary inline-block text-white px-8 py-3 rounded-full font-medium text-lg bg-gradient-to-r from-purple-500 to-cyan-500 shadow hover:scale-105 transition-transform duration-300"
        >
          Try Algorithmics AI
        </a>*/}
      </div>

      <div className="w-full max-w-6xl aspect-video px-2 sm:px-0">
  <video
    className="w-full h-full rounded-xl shadow-lg object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/algorithmics-promo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
    </section>
  );
};

export default HeroSection;