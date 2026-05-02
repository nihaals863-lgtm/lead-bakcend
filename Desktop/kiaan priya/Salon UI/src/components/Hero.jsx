import React from 'react';
import { Sparkles, Star, CheckCircle2, ShoppingCart, Calendar, Users, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/salon_hero_bg.png';

const FeatureBadge = ({ icon: Icon, text, delay, position }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute ${position} z-30 hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-royal-purple/10`}
  >
    <div className="w-8 h-8 bg-royal-purple/10 rounded-xl flex items-center justify-center text-royal-purple">
      <Icon className="w-4 h-4" />
    </div>
    <span className="text-xs font-bold tracking-wide text-charcoal">{text}</span>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="min-h-[75vh] pt-24 pb-12 overflow-hidden relative flex items-center">
      {/* Background Image with Premium Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Salon Background"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Multi-layered overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
        <div className="absolute inset-0 bg-royal-purple/5"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left space-y-6 lg:max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-royal-purple/10 text-royal-purple rounded-full font-bold text-[10px] tracking-widest uppercase border border-royal-purple/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Trusted by 10,000+ Salons
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-charcoal leading-[1.1] tracking-tight">
              Software for Managing <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-royal-purple via-purple-600 to-rose-gold">
                Salons, Spas & Beauty Clinics
              </span>
            </h1>

            <p className="text-lg text-charcoal/70 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              ReSpark is a globally trusted Salon & Spa management software with wide range of user friendly features, designed to streamline salon & Spas day to day operations, improve efficiency & enhance customer retention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
                className="group px-7 py-3.5 bg-royal-purple text-white rounded-xl font-bold text-base hover:bg-royal-purple-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-royal-purple/20 flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link 
                to="/login" 
                className="px-7 py-3.5 border-2 border-royal-purple/20 text-royal-purple rounded-xl font-bold text-base hover:bg-royal-purple/5 transition-all transform hover:-translate-y-1 text-center"
              >
                Login
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-500 gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                  </div>
                  <p className="text-[10px] font-bold text-charcoal tracking-wide">4.9/5 RATING</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-[500px]"
          >
            {/* Main Visual Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(88,28,135,0.25)] border-[10px] border-white aspect-[4/5] bg-charcoal">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Salon Service"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-purple/30 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Interactive Feature Badges */}
            <FeatureBadge icon={ShoppingCart} text="Smart POS" delay={0.5} position="-top-4 -left-6" />
            <FeatureBadge icon={Calendar} text="Auto-Booking" delay={0.7} position="top-16 -right-8" />
            <FeatureBadge icon={Users} text="CRM Loyalty" delay={0.9} position="bottom-24 -left-10" />
            <FeatureBadge icon={MessageSquare} text="WhatsApp" delay={1.1} position="-bottom-4 -right-2" />

            {/* Float Card - Shifted down and right as requested */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 -right-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-royal-purple/10 z-20 hidden md:block"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center font-black text-base">
                    +62%
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-charcoal/40 uppercase tracking-widest">Efficiency</p>
                    <p className="font-bold text-charcoal text-sm">Growth</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "62%" }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-full bg-royal-purple"
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-royal-purple/5 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

