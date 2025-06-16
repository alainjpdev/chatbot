import React from 'react';
import { ShoppingCart, Calendar } from 'lucide-react';

const PackageCard = ({ pkg, index, onDemoClick, language }) => {
  const isSpanish = language === 'es';

  const label = pkg.label || `${pkg.hours} ${isSpanish ? 'horas' : 'hours'}`;
  const description = pkg.isDemo
    ? isSpanish
      ? 'Prueba una clase en vivo gratis'
      : 'Try a live session for free'
    : isSpanish
      ? 'Sesiones flexibles, válidas todo el verano'
      : 'Flexible sessions, valid all summer';

  const price = pkg.isDemo ? (isSpanish ? 'Gratis' : 'Free') : `$${pkg.price} MXN`;
  const actionLabel = pkg.isDemo
    ? isSpanish ? 'Reserva ahora' : 'Book now'
    : isSpanish ? 'Comprar ahora' : 'Buy now';

  const Icon = pkg.isDemo ? Calendar : ShoppingCart;

  const content = (
    <div className="relative border border-white/10 backdrop-blur-xl bg-slate-900/0 text-white p-8 rounded-[1.75rem] z-10">
      <h3 className="text-2xl font-semibold mb-2">{label}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold">
        <Icon className="w-5 h-5" />
        {actionLabel}
      </div>
    </div>
  );

  const cardClass =
    'group relative overflow-hidden p-[1px] rounded-[1.75rem] bg-gradient-to-br from-[#04071d] to-[#0c0e23] transition-transform hover:scale-[1.02] cursor-pointer';

  const glow = (
    <>
      <div className="absolute inset-0 rounded-[1.75rem]">
        <svg className="absolute h-full w-full" viewBox="0 0 100 100">
          <rect fill="none" width="100%" height="100%" rx="30%" ry="30%" />
        </svg>
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-ping-slow">
          <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]"></div>
        </div>
      </div>
    </>
  );

  return (
    <div
      className={cardClass}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
      }}
      onClick={() => pkg.isDemo && onDemoClick()}
    >
      {glow}
      {pkg.isDemo ? (
        content
      ) : (
        <a href={pkg.url} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )}
    </div>
  );
};

export default PackageCard;