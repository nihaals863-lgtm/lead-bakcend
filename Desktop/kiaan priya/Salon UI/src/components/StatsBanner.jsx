import React from 'react';
import { motion } from 'framer-motion';
import { Users, Store, Star, Globe2 } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Salon Owners', color: 'text-royal-purple' },
  { icon: Store, value: '25,000+', label: 'Branches Managed', color: 'text-purple-500' },
  { icon: Star, value: '4.8 / 5', label: 'Google Rating', color: 'text-yellow-500' },
  { icon: Globe2, value: '15+', label: 'Cities Across India', color: 'text-royal-purple' },
];

const StatsBanner = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-royal-purple to-purple-800 text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4 py-2"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl lg:text-4xl font-black tracking-tight">{stat.value}</p>
              <p className="text-white/60 text-sm font-semibold mt-1 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
