import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Users, Zap, Shield, Smartphone, Star, Plus, Minus, ChevronRight } from 'lucide-react';
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

const AppointmentBookingPage = () => {
  const features = [
    { title: "Integrated Appointment Dashboard", desc: "Manage health, beauty, and wellness scheduling with real-time updates on appointments and staff availability.", icon: Calendar },
    { title: "Online Booking via Digital Catalog", desc: "Let clients select services, staff, and book 24/7 through your own branded booking portal.", icon: Smartphone },
    { title: "One-Click Billing & Staff Incentives", desc: "Link appointments directly to billing. Calculate commissions and incentives automatically.", icon: Zap },
    { title: "Real-Time Appointment Analytics", desc: "Track booking patterns, popular services, and staff performance with real-time data insights.", icon: Shield },
    { title: "Easy Scheduling & Rescheduling", desc: "Give clients the freedom to book, move, or cancel appointments with a user-friendly interface.", icon: Clock },
    { title: "Automated Event Communication", desc: "Reduce no-shows with automated SMS and WhatsApp reminders for every booking.", icon: Zap },
    { title: "Advanced Staff Management", desc: "Assign staff to specific services and manage their schedules and performance with ease.", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#f8f5ff] to-white relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-left">
            <h1 className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]">
              Salon <span className="text-rose-gold">Appointment</span> <br />
              & <span className="text-rose-gold">Booking</span> Software
            </h1>
            <h2 className="text-2xl font-bold text-charcoal/80">Optimize Scheduling, Enhance Efficiency</h2>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              ReSpark's salon appointment booking software is a powerful and intuitive tool designed for salons and spas to manage their appointment bookings efficiently. Our software combines everything you need in one platform to help you simplify operations, reduce no-shows, and improve client satisfaction.
            </p>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-rose-gold/90 transition-colors shadow-lg shadow-rose-gold/20">
              Request Demo
            </button>
          </div>
          <div className="flex-1 relative">
            <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000" alt="Appointment Preview" className="w-full aspect-[4/3] drop-shadow-2xl rounded-[2.5rem] object-cover border-[8px] border-white" />
          </div>
        </div>
      </section>

      {/* 2. Logo Marquee */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
           <h3 className="text-2xl font-bold text-charcoal">Brands That Trust ReSpark <span className="text-rose-gold">Salon Appointment Software</span></h3>
           <div className="relative overflow-hidden py-4">
            <motion.div 
              className="flex items-center gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[
                "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png",
                "https://respark.in/wp-content/uploads/2025/05/v_cut.png",
                "https://respark.in/wp-content/uploads/2025/05/zira.png",
                "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png",
                "https://respark.in/wp-content/uploads/2025/05/habit.png",
                "https://respark.in/wp-content/uploads/2025/05/La-Sheen.png",
                "https://respark.in/wp-content/uploads/2025/05/7_Avenue_1-3_230802_121527_page-0001_1-removebg-preview-1.png",
                "https://respark.in/wp-content/uploads/2025/05/123-1-2.png",
                // Duplicate exact array to create seamless loop
                "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png",
                "https://respark.in/wp-content/uploads/2025/05/v_cut.png",
                "https://respark.in/wp-content/uploads/2025/05/zira.png",
                "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png",
                "https://respark.in/wp-content/uploads/2025/05/habit.png",
                "https://respark.in/wp-content/uploads/2025/05/La-Sheen.png",
                "https://respark.in/wp-content/uploads/2025/05/7_Avenue_1-3_230802_121527_page-0001_1-removebg-preview-1.png",
                "https://respark.in/wp-content/uploads/2025/05/123-1-2.png"
              ].map((src, i) => (
                <img key={i} src={src} alt="Brand" className="h-12 w-auto object-contain flex-shrink-0 px-6" />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-charcoal mb-4">Why Choose ReSpark's <span className="text-rose-gold">Salon booking Software</span>?</h2>
            <p className="text-charcoal/60 font-medium">ReSpark is a leading software built to support every type of salon business. Our online booking system integrates real-time scheduling and staff management, so you have everything you need in one platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-left hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-rose-gold/10 rounded-2xl flex items-center justify-center text-rose-gold mb-6 group-hover:bg-rose-gold group-hover:text-white transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-3">{f.title}</h4>
                <p className="text-charcoal/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-left">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Benefits of <span className="text-rose-gold">ReSpark's <br /> Salon Booking</span> System
          </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Better Appointment Accuracy & Efficiency",
                "Enhanced Customer Experience",
                "Reduce No-Shows with Reminders",
                "Boost Revenue with Up-selling",
                "Flexible and Remote Booking",
                "Multi-Branch & Multi-User Access",
                "Focus on Sales and Performance"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-charcoal/70 font-bold">
                  <CheckCircle className="w-5 h-5 text-rose-gold shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" alt="Benefits" className="rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 5. Discover More Features */}
      <section className="py-12 bg-[#f8f5ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" alt="Massage" className="rounded-[3rem] shadow-2xl" />
          </div>
          <div className="flex-1 space-y-8 text-left">
            <h2 className="text-4xl font-black text-charcoal">Discover More <span className="text-rose-gold">ReSpark</span> Features</h2>
            <ul className="space-y-4">
              {["POS & Billing", "Loyalty & Membership management", "Online store integration", "Marketing Campaigns", "Inventory Management"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-rose-gold font-black">
                  <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-charcoal/60 font-medium">Each tool works seamlessly with our salon booking system to help your business thrive.</p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">Frequently Asked Questions</h2>
            <h3 className="text-4xl font-black text-charcoal">FAQs About ReSpark's Salon Appointment Software</h3>
          </div>
          <div className="space-y-2">
            <FAQItem question="What is salon appointment booking software?" answer="It's a digital tool that allows salons and spas to manage their schedule, staff, and client bookings from a single dashboard." />
            <FAQItem question="How does salon appointment booking work?" answer="Clients can book through your website or app, and the appointment is instantly synced to your calendar, notifying the assigned staff." />
            <FAQItem question="Can this software handle bookings for spa centers?" answer="Yes, it's designed for all types of beauty and wellness businesses, including luxury spas and specialized clinics." />
            <FAQItem question="Does it support multiple branches?" answer="Absolutely. You can manage and monitor bookings across all your locations from a centralized admin panel." />
            <FAQItem question="How does staff assignment work?" answer="You can assign specific artists or therapists to services, and the system will automatically check their availability before confirming." />
            <FAQItem question="Can staff manage their appointments?" answer="Yes, staff members can have their own login to view their schedules and update service statuses." />
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]">
          <img src="https://images.unsplash.com/photo-1522337466453-9590990aa412?auto=format&fit=crop&q=80&w=1600" alt="Booking Background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-left">
              <h2 className="text-2xl lg:text-3xl font-bold">Ready to Transform Your Salon's Booking Process?</h2>
              <p className="text-lg text-white/90">Join our free demo today and see how easy salon appointment scheduling can really be.</p>
            </div>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-bold text-lg hover:bg-rose-gold/90 transition-all shadow-xl whitespace-nowrap">
              Schedule Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppointmentBookingPage;













