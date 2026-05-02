import React from 'react';
import { ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueProp = () => {
  const props = [
    {
      icon: ShieldCheck,
      title: 'All-in-One Management',
      desc: 'Handle appointments, billing, marketing, and more from a single platform.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Zap,
      title: 'Boost Efficiency',
      desc: 'Automate daily tasks and focus on growing your salon with real-time insights.',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Heart,
      title: 'Client Experience',
      desc: 'Enhance satisfaction with online booking and automated WhatsApp loyalty.',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-black text-royal-purple uppercase tracking-[0.3em]">The ReSpark Edge</h2>
              <h3 className="text-4xl font-black text-charcoal leading-tight">
                Manage, Automate & <br />
                <span className="text-royal-purple italic">Grow Faster</span>
              </h3>
            </div>
            
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-xl">
              Your partner in growth, designed for modern salons who value time and customer experience.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {props.map((prop, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-4 p-4 bg-royal-purple/5 rounded-2xl border border-royal-purple/5 hover:border-royal-purple/20 transition-all group cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${prop.color}`}>
                    <prop.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-charcoal mb-1">{prop.title}</h4>
                    <p className="text-sm text-charcoal/60 leading-snug">{prop.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Animated Visual */}
          <div className="relative">
            {/* Main Image with floating animation */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Salon Management" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-purple/30 to-transparent"></div>
            </motion.div>
            
            {/* Floating Achievement Badge */}
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-royal-purple/10 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-charcoal leading-none">10k+</p>
                  <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-wider">Trusted Branches</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-royal-purple/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 right-10 w-40 h-40 bg-rose-gold/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
