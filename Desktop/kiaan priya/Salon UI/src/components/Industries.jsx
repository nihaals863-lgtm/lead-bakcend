import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  { 
    name: 'Unisex Salons', 
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=500',
    tag: 'Salons'
  },
  { 
    name: 'Beauty Clinics', 
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500',
    tag: 'Clinics'
  },
  { 
    name: 'Spas & Wellness', 
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=500',
    tag: 'Wellness'
  },
  { 
    name: 'Nail Studios', 
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=500',
    tag: 'Studio'
  },
  { 
    name: 'Skin Clinics', 
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=500',
    tag: 'Medical'
  },
  { 
    name: 'Pet Grooming', 
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=500',
    tag: 'Pet Care'
  },
];

const Industries = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-sm font-black text-royal-purple uppercase tracking-[0.4em]">Industry Solutions</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-charcoal">
            Tailored for Every <span className="text-royal-purple">Beauty Business</span>
          </h3>
          <div className="w-24 h-1.5 bg-royal-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative h-[180px] rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-charcoal/5"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${ind.image})` }}
              ></div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 bg-royal-purple/10 mix-blend-overlay"></div>
              
              {/* Content moved to TOP */}
              <div className="absolute inset-0 flex flex-col justify-start p-5 space-y-2">
                <div>
                  <span className="inline-flex px-2 py-0.5 bg-white/10 backdrop-blur-md rounded-lg text-[8px] font-black text-white uppercase tracking-widest border border-white/10">
                    {ind.tag}
                  </span>
                </div>
                <h4 className="text-base font-black text-white leading-tight group-hover:text-royal-purple-light transition-colors">
                  {ind.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

