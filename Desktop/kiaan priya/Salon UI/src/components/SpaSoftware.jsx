import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Sparkles } from 'lucide-react';

const SpaSoftware = () => {
  return (
    <section className="py-12 bg-white overflow-hidden border-y border-royal-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-royal-purple-light/20 to-white rounded-[2.5rem] p-8 lg:p-12 border border-royal-purple/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-royal-purple/10 text-royal-purple rounded-full font-bold text-[10px] tracking-widest uppercase">
                <Sparkles className="w-3 h-3" /> Made for Wellness
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-charcoal leading-tight tracking-tight">
                All-in-One <span className="text-royal-purple text-transparent bg-clip-text bg-gradient-to-r from-royal-purple to-purple-500">Spa Management</span>
              </h2>

              <p className="text-charcoal/70 leading-relaxed font-medium text-sm lg:text-base">
                ReSpark is a complete software designed to simplify how spas operate and grow. 
                Manage appointments, therapist schedules, billing, and memberships from one easy-to-use platform.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pb-2">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-royal-purple/5">
                  <p className="text-2xl font-black text-royal-purple">30%</p>
                  <p className="text-[10px] text-charcoal/50 font-bold uppercase tracking-wider">More Bookings</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-royal-purple/5">
                  <p className="text-2xl font-black text-royal-purple">10h+</p>
                  <p className="text-[10px] text-charcoal/50 font-bold uppercase tracking-wider">Saved Weekly</p>
                </div>
              </div>

              <button onClick={() => document.getElementById('demo').scrollIntoView({behavior: 'smooth'})} className="flex items-center gap-2 text-royal-purple font-bold text-sm uppercase tracking-widest group">
                Discover Spa Features
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Visuals */}
            <div className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[250px] lg:min-h-[400px]">
              {/* Main Image */}
              <div className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-4/5 h-[250px] lg:h-[350px] z-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" 
                  alt="Spa Therapy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-royal-purple/20 mix-blend-overlay"></div>
              </div>

              {/* Schedule Card Overlay */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 left-0 lg:top-20 lg:bottom-auto lg:-left-6 bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-2xl shadow-2xl border border-royal-purple/10 z-10 w-[200px] lg:w-[240px]"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="font-black text-charcoal text-[12px] lg:text-sm">Today's Schedule</h4>
                    <p className="text-[9px] text-charcoal/40 font-bold uppercase">13 April</p>
                  </div>
                  <div className="w-8 h-8 bg-royal-purple/10 rounded-full flex items-center justify-center text-royal-purple">
                    <Calendar className="w-3 h-3 lg:w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2 lg:space-y-3">
                  <div className="p-2 lg:p-3 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                    <p className="text-[8px] font-black text-purple-600 uppercase tracking-widest">09:00 AM</p>
                    <p className="font-bold text-charcoal text-[10px] lg:text-xs">Body Treatment</p>
                  </div>
                  <div className="p-2 lg:p-3 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest">11:30 AM</p>
                    <p className="font-bold text-charcoal text-[10px] lg:text-xs">Rejuvenation Facial</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaSoftware;
