import React, { useState } from 'react';

const VeoSpeaksSection = () => {
  const [lang, setLang] = useState('en');

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
          <span className="text-gradient">What are we going to learn?</span>{' '}
          <span className="text-white">with Algorithmics AI</span>
        </h2>

        {/* Switch language button */}
        <button
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          className="mb-6 px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-cyan-500 shadow hover:scale-105 transition-transform duration-300"
        >
          {lang === 'en' ? 'Ver en Español 🇲🇽' : 'View in English 🇺🇸'}
        </button>

        {/* Info block */}
        <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white rounded-2xl shadow-xl p-8 space-y-4 border border-gray-700 max-w-2xl mx-auto animate-fade-in">

          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
            {lang === 'en' ? '🇺🇸 Summer Camp Info' : '🇲🇽 Campamento de Verano'}
          </h3>

          {lang === 'en' ? (
            <>
              <p>🎓 This summer, your kids can learn AI, build apps, and create chatbots!</p>
              <p>🚀 Enroll them in our <span className="text-purple-400 font-semibold">Artificial Intelligence Summer Camp</span>.</p>
              <p>🕘 <strong>Open schedule:</strong> 10 AM to 6 PM – come anytime!</p>
              <p>💡 <strong>Flexible hours:</strong> purchase hour packages and use them whenever you want.</p>
              <p>📍 Puerto Aventuras Plaza Condominio Gourmet, Calle Punta Celis Manzana 24 Lote 1, Plano 1, 77733 Puerto Aventuras, Q.R.</p>
              <p>📱 WhatsApp: <a href="https://wa.me/529841328770" className="underline text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">+52 984 132 8770</a></p>
              <p className="text-pink-400 font-semibold animate-pulse">
                🎉 Limited spots available – don’t miss it!
              </p>
            </>
          ) : (
            <>
              <p>🎓 ¡Este verano tus hijos pueden aprender IA, construir apps y crear chatbots!</p>
              <p>🚀 Inscríbelos en nuestro <span className="text-purple-400 font-semibold">Campamento de Verano de Inteligencia Artificial</span>.</p>
              <p>🕘 <strong>Horario libre:</strong> de 10 AM a 6 PM – ¡ven cuando quieras!</p>
              <p>💡 Compra paquetes de horas y úsalas como quieras.</p>
              <p>📍 Puerto Aventuras Plaza Condominio Gourmet, Calle Punta Celis Manzana 24 Lote 1, Plano 1, 77733 Puerto Aventuras, Q.R.</p>
              <p>📱 WhatsApp: <a href="https://wa.me/529841328770" className="underline text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">+52 984 132 8770</a></p>
              <p className="text-pink-400 font-semibold animate-pulse">
                🎉 ¡Cupos limitados, no te lo pierdas!
              </p>
            </>
          )}
        </div>

        {/* Video */}
        <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl animate-fade-in">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
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