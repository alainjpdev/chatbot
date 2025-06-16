import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom'; // ✅ Usa Link para navegación interna

const HeroSection = () => {
  const { language } = useLanguage(); // ✅ Accede al idioma global

  return (
    <section className="flex flex-col items-center text-center px-4 pt-32 pb-16 bg-black">
      <div className="mb-12 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-white">
            {language === 'es' ? 'Campamento de verano ' : 'Summer camp '}
          </span>
          <span className="text-gradient">
            {language === 'es' ? 'con Algorithmics AI' : 'with Algorithmics AI'}
          </span>
        </h1>

        <br />

        <p className="text-base sm:text-lg md:text-xl text-white opacity-90 mb-8">
          <strong>
            {language === 'es'
              ? '¡Este verano, tus hijos pueden convertirse en creadores de tecnología con nuestro campamento de Inteligencia Artificial!'
              : 'This summer, your children can become technology creators with our AI Summer Camp!'}
          </strong>{' '}
        </p>

        <br />

        <Link
          to="/calendar"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          {language === 'es'
            ? 'Reserva tu clase muestra gratuita'
            : 'Book a Free Trial Class'}
        </Link>
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