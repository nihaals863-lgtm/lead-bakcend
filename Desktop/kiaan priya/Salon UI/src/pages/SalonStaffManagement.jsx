import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, Fingerprint, Award, BarChart3, CheckCircle, Plus, Minus, UserCheck, ShieldCheck, Clock, Split } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="text-lg font-bold text-charcoal">{question}</span>
        {isOpen ? <Minus className="text-rose-gold" /> : <Plus className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-charcoal/60 leading-relaxed font-medium">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SalonStaffManagement = () => {
  const staffFeatures = [
    {
      title: "Automated Scheduling",
      desc: "Intuitive dashboard for managing shifts, reducing manual errors, and ensuring your salon is always optimally staffed.",
      icon: Calendar,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Smart Incentive Management",
      desc: "Highly customizable incentive structures based on seniority, service types, or specific revenue targets.",
      icon: Award,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Biometric Attendance Tracking",
      desc: "Supports biometric integration for 100% accurate attendance tracking, eliminating manual logs and disputes.",
      icon: Fingerprint,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Performance & Growth Analytics",
      desc: "Monitor staff performance and productivity metrics live with detailed daily summaries and growth reports.",
      icon: BarChart3,
      color: "text-rose-600",
      bg: "bg-rose-50"
    }
  ];

  const benefits = [
    "Schedule shifts, track biometric attendance, and set goals effortlessly.",
    "Each staff member gets a dedicated calendar for their bookings.",
    "Automated incentive calculation reduces manual HR workload.",
    "Incentive splitting for collaborative services involving multiple stylists.",
    "Identify top performers and areas needing staff training with real-time data."
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-rose-gold/5 via-white to-white relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]">
              Salon <span className="text-rose-gold">Staff & Employee</span> <br />
              Management
            </h1>
            <p className="text-xl text-charcoal/80 font-bold">Empower your team and automate operations with smart scheduling and incentive tracking.</p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              Take complete control of your salon's most valuable asset—your team. ReSpark’s salon employee management software streamlines scheduling, attendance, and performance tracking. From biometric integration to complex incentive calculations, we automate everything so you can focus on growth.
            </p>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
              Get Started
            </button>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="Staff Management Dashboard" 
                className="w-full aspect-[4/3] drop-shadow-2xl rounded-[2.5rem] object-cover border-[8px] border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Key Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl lg:text-4xl font-black text-charcoal mb-16">
            Master Your Operations with <br /> <span className="text-rose-gold">Powerful Staff Tools</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffFeatures.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 text-left space-y-6"
              >
                <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-charcoal leading-tight">{feature.title}</h3>
                <p className="text-charcoal/60 font-medium text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Management Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-12">
             <div className="space-y-4">
               <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
                 Smart <span className="text-rose-gold">Incentive Management</span>
          </motion.h2>
               <p className="text-lg text-charcoal/70 font-medium">
                 ReSpark simplifies how you reward your stylists and staff. Our system handles complex rules so you don't have to.
               </p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Custom Rules", icon: ShieldCheck, desc: "Set incentives based on seniority, service types, or retail sales." },
                  { title: "Incentive Splitting", icon: Split, desc: "Easily share incentives between team members for shared services." },
                  { title: "Real-time Reports", icon: BarChart3, desc: "Generate instant daily summaries of earned incentives." },
                  { title: "Target Tracking", icon: UserCheck, desc: "Set and monitor performance targets for each employee." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-gold rounded-xl flex items-center justify-center text-white">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-charcoal">{item.title}</h4>
                    </div>
                    <p className="text-sm text-charcoal/60 font-medium">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Incentive Management" className="rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 4. Why Choose Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 relative">
             <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" alt="Why Choose Staff Management" className="w-full aspect-[4/3] object-cover rounded-[3rem] shadow-2xl" />
             <div className="absolute -bottom-6 -left-6 bg-rose-gold p-6 rounded-3xl shadow-xl text-white">
                <div className="text-3xl font-black">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest">Accuracy</div>
             </div>
          </div>
          <div className="flex-1 space-y-8">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Why Choose ReSpark for <br /> <span className="text-rose-gold">Employee Management?</span>
          </motion.h2>
            <div className="space-y-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-rose-gold shrink-0 mt-1" />
                  <span className="text-charcoal/70 font-medium text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-12">
          <div className="flex-1 space-y-12">
            <div className="text-left">
              <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">Frequently Asked Questions</h2>
              <h3 className="text-4xl font-black text-charcoal leading-tight">FAQs About ReSpark's Staff Management</h3>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="How easy is it to manage staff scheduling?" 
                answer="Very easy! Our intuitive dashboard allows you to drag and drop shifts, manage time-off requests, and see your entire team's schedule at a glance, reducing manual errors." 
              />
              <FAQItem 
                question="Can I set different incentive rules for each employee?" 
                answer="Yes, ReSpark offers highly flexible incentive management. You can set rules based on seniority, specific service types, retail sales, or even individual performance targets." 
              />
              <FAQItem 
                question="Does the software support biometric attendance?" 
                answer="Yes, we support integration with biometric devices for 100% accurate attendance tracking, ensuring complete reliability of attendance and punctuality data." 
              />
              <FAQItem 
                question="Can multiple staff members share incentives for one service?" 
                answer="Absolutely. Our incentive splitting feature allows you to divide rewards between multiple team members for collaborative services easily." 
              />
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Staff Management FAQ" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA (Compact Boxed Layout) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-rose-gold to-[#4B2C82] rounded-[3rem] p-10 lg:p-14 text-center shadow-2xl relative overflow-hidden">
           <div className="relative z-10 space-y-8">
             <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
               Ready to Streamline Your Team's Performance?
             </h2>
             <p className="text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
               Take the headache out of scheduling and incentives. Automate your staff management and watch your salon's productivity soar.
             </p>
             <div className="pt-2">
               <button className="px-10 py-4 bg-white text-rose-gold rounded-full font-black text-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95">
                 Book A Free Demo
               </button>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonStaffManagement;













