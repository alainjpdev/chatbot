import React from 'react';

const packages = [
  { hours: 4, price: 2000 },
  { hours: 8, price: 3890 },
  { hours: 12, price: 5200 },
  { hours: 16, price: 7000 },
  { hours: 20, price: 8800 },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          <span className="text-gradient">Choose your package</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={pkg.hours}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-2xl p-8 shadow-xl animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {pkg.hours} hours
              </h3>
              <p className="text-gray-400 mb-4">Flexible sessions, valid all summer</p>
              <p className="text-3xl font-bold text-white">${pkg.price} MXN</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;