import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = {
  es: [
    {
      name: 'Daiana Barrios',
      text: '¡Excelente todo! La atención, el profesor y los métodos de enseñanza. A mi hijo le encantó y pienso anotarlo el año próximo en otro curso.',
    },
    {
      name: 'Anto Gomez',
      text: 'Gran variedad de cursos de programación. Los niños trabajan en proyectos prácticos desde el primer día. Muy profesionales y amables.',
    },
    {
      name: 'Carolina Duarte',
      text: 'Completísimos cursos y el profesor muy profesional. Sin dudas, lo recomiendo.',
    },
    {
      name: 'Raquel Becares',
      text: '¡Muy buena atención! El profesor Bernardo es excelente. Lo recomiendo sin dudas.',
    },
    {
      name: 'Ana Mirante',
      text: '¡Buenísimo para los chicos! 👋👋',
    },
  ],
  en: [
    {
      name: 'Daiana Barrios',
      text: 'Everything was excellent! The attention, the teacher, and the teaching methods. My son loved it and I plan to enroll him again next year.',
    },
    {
      name: 'Anto Gomez',
      text: 'Great variety of programming courses. Kids work on hands-on projects from day one. Very professional and friendly staff.',
    },
    {
      name: 'Carolina Duarte',
      text: 'Very complete courses and a highly professional teacher. I definitely recommend it.',
    },
    {
      name: 'Raquel Becares',
      text: 'Really great service! Professor Bernardo is excellent. I absolutely recommend it.',
    },
    {
      name: 'Ana Mirante',
      text: 'Amazing for the kids! 👋👋',
    },
  ],
};

const Testimonials = () => {
  const { language } = useLanguage();
  const list = testimonials[language];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {language === 'es' ? 'Opiniones de padres' : 'What parents are saying'}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          {list.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-6 border border-white/10 shadow-xl hover:scale-[1.02] transition"
            >
              <p className="text-white text-base italic mb-4">“{item.text}”</p>
              <p className="text-sm font-semibold text-purple-400">— {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;