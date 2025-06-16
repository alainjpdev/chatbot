import React, { useState } from 'react';
import { packages } from '../data/packages';
import PackageCard from './PackageCard';
import DemoSchedulerModal from './DemoSchedulerModal';
import { useLanguage } from '../contexts/LanguageContext';

const UseCasesSection = () => {
  const { language } = useLanguage(); // 👈 Se obtiene desde el contexto
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="packages" className="bg-black py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          <span className="text-gradient">
            {language === 'es' ? 'Elige tu paquete' : 'Choose your package'}
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <PackageCard
              key={i}
              pkg={pkg}
              index={i}
              language={language} // aún se pasa a PackageCard si este lo requiere
              onDemoClick={() => setShowModal(true)}
            />
          ))}
        </div>
      </div>

      {showModal && <DemoSchedulerModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default UseCasesSection;