import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AiActivitiesSection from './AiActivitiesSection'; // 👈 asegúrate de importar esto

const VeoSpeaksSection = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
          <span className="text-gradient">
            {language === 'es' ? '¿Qué vamos a aprender?' : 'What are we going to learn?'}
          </span>{' '}
          <span className="text-white">
            {language === 'es' ? 'con Algorithmics AI' : 'with Algorithmics AI'}
          </span>
        </h2>

        <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-700 max-w-2xl mx-auto animate-fade-in">
          
          <AiActivitiesSection language={language} /> {/* 👈 Animaciones incluidas */}

          <div className="border-t border-white/10 pt-4 space-y-2 text-white text-base leading-relaxed">
            <p>
              💡 {language === 'es'
                ? 'Compra paquetes de horas y úsalas como quieras.'
                : 'Buy hour packages and use them as you like.'}
            </p>
            <p>
              📍 Puerto Aventuras Plaza Condominio Gourmet, Calle Punta Celis Manzana 24 Lote 1, Plano 1, 77733 Puerto Aventuras, Q.R.
            </p>
            <p>
              📱 WhatsApp:{' '}
              <a
                href="https://wa.me/529841328770"
                className="underline text-cyan-400 hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                +52 984 132 8770
              </a>
            </p>
            <p className="text-pink-400 font-semibold animate-pulse">
              🎉 {language === 'es'
                ? '¡Cupos limitados, no te lo pierdas!'
                : 'Limited spots available – don’t miss it!'}
            </p>
          </div>
        </div>

        <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl animate-fade-in">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/summer-camp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VeoSpeaksSection;