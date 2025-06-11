import React from 'react';
import { ShoppingCart, Calendar } from 'lucide-react';

const PackageCard = ({ pkg, index, onDemoClick }) => {
  const CardContent = (
    <div className="relative border border-white/10 backdrop-blur-xl bg-slate-900/0 text-white p-8 rounded-[1.75rem] z-10">
      <h3 className="text-2xl font-semibold mb-2">
        {pkg.label || `${pkg.hours} hours`}
      </h3>
      <p className="text-gray-400 mb-4">
        {pkg.isDemo ? 'Try a live session for free' : 'Flexible sessions, valid all summer'}
      </p>
      <p className="text-3xl font-bold mb-4">
        {pkg.isDemo ? 'Free' : `$${pkg.price} MXN`}
      </p>
      <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold">
        {pkg.isDemo ? <Calendar className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
        {pkg.isDemo ? 'Book now' : 'Buy now'}
      </div>
    </div>
  );

  return (
    <div
      key={index}
      onClick={() => pkg.isDemo && onDemoClick()}
      className="group relative overflow-hidden p-[1px] rounded-[1.75rem] bg-gradient-to-br from-[#04071d] to-[#0c0e23] transition-transform hover:scale-[1.02] cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
      }}
    >
      <div className="absolute inset-0 rounded-[1.75rem]">
        <svg className="absolute h-full w-full" viewBox="0 0 100 100">
          <rect fill="none" width="100%" height="100%" rx="30%" ry="30%"></rect>
        </svg>
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-ping-slow">
          <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]"></div>
        </div>
      </div>

      {pkg.isDemo ? CardContent : (
        <a href={pkg.url} target="_blank" rel="noopener noreferrer">
          {CardContent}
        </a>
      )}
    </div>
  );
};

export default PackageCard;