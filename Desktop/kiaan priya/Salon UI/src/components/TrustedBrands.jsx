import React from 'react';
import { TRUSTED_BRANDS } from '../data/dummyData';

const TrustedBrands = () => {
  // Duplicate brands for seamless scrolling
  const brands = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section className="py-12 bg-white border-y border-charcoal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-4xl font-black text-charcoal tracking-tight">Trusted By <span className="text-royal-purple">Top Brands</span></h2>
      </div>
      
      <div className="flex overflow-hidden relative">
        <div className="flex animate-scroll whitespace-nowrap gap-8 py-4 items-center">
          {brands.map((brand, i) => (
            <div key={i} className="flex flex-col items-center cursor-pointer transition-all duration-700">
              <div className="h-20 w-32 flex items-center justify-center p-0">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain opacity-100 transform scale-110 hover:scale-125 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-xs font-black text-charcoal/30 uppercase tracking-widest">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default TrustedBrands;
