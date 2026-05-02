import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Image as ImageIcon, Users, Target, CheckCircle, Plus, Minus, Smartphone, Megaphone, CalendarCheck } from 'lucide-react';
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

const SalonWhatsAppIntegration = () => {
  const whyFeatures = [
    {
      title: "Smart WhatsApp Automation for Salons",
      desc: "Send automated messages for appointment confirmations, cancellations and rescheduling. Notify clients about loyalty points updates, package expiries or wallet balances. Celebrate special occasions with automated birthday and anniversary greetings.",
      icon: MessageCircle,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Bulk WhatsApp Marketing Made Easy",
      desc: "Launch bulk campaigns to specific segments using filters like service history, visit frequency, or location. Share seasonal promotions, limited-time offers, or package launches instantly. Track delivery, open rates, and engagement per campaign.",
      icon: Send,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Create and Share Rich Media",
      desc: "Send beautifully designed banners, service menus, videos, or spa guides via WhatsApp. Promote trending looks, treatment combos, or referral deals using rich visuals. A powerful upgrade over generic SMS marketing.",
      icon: ImageIcon,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Two-Way Client Interaction via WhatsApp Business",
      desc: "Enable clients to confirm, cancel, or reschedule directly via WhatsApp. Share payment links, invoices, or booking details in real time. Integrates with CRM and POS for a seamless workflow.",
      icon: Users,
      color: "text-pink-600",
      bg: "bg-pink-50"
    },
    {
      title: "CRM-Synced Campaign Targeting",
      desc: "Use CRM filters like birthdays, last visit date, or loyalty tier to personalize outreach. Automate reminders or reactivation campaigns for dormant clients. Perfect for personalized spa WhatsApp marketing and client engagement.",
      icon: Target,
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-rose-gold/5 via-white to-white relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 space-y-8 z-10">
            <h1 className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]">
              Salon <span className="text-rose-gold">WhatsApp Integration</span> & <br />
              Marketing Suite
            </h1>
            <p className="text-xl text-charcoal/80 font-bold">Automate, personalize and scale client communication with salon WhatsApp marketing built for salons, spas and wellness brands.</p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              With over 2 billion active users, WhatsApp has become the most direct way to reach your clients. ReSpark's salon WhatsApp integration helps you streamline appointment reminders, run spa WhatsApp marketing campaigns, and share offers that drive bookings. Whether you're confirming a hair appointment or launching a festive spa package, ReSpark helps you manage it all from one place.
            </p>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
              Get Started
            </button>
            </motion.div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000" 
                alt="WhatsApp Marketing Preview" 
                className="w-full aspect-[4/3] object-cover drop-shadow-2xl rounded-[2.5rem] border-[8px] border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trusted Brands Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-black text-charcoal">Trusted By <span className="text-rose-gold">3000+</span> Salons, Spas & Clinics</h2>
          <p className="text-charcoal/60 font-medium max-w-3xl mx-auto leading-relaxed">
            From boutique salons and spas to high-traffic wellness chains, ReSpark's WhatsApp Business for spas and salons powers client conversations that convert.
          </p>
          <div className="mt-12 relative overflow-hidden py-4">
            <motion.div 
              className="flex items-center gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[
                "https://respark.in/wp-content/uploads/2025/05/7_Avenue_1-3_230802_121527_page-0001_1-removebg-preview-1.png",
                "https://respark.in/wp-content/uploads/2025/05/123-1-2.png",
                "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png",
                "https://respark.in/wp-content/uploads/2025/05/v_cut.png",
                "https://respark.in/wp-content/uploads/2025/05/zira.png",
                "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png",
                "https://respark.in/wp-content/uploads/2025/05/habit.png",
                "https://respark.in/wp-content/uploads/2025/05/Amira.png",
                "https://respark.in/wp-content/uploads/2025/05/Beauty-lovers-logo.png",
                "https://respark.in/wp-content/uploads/2025/05/DrPriya.png",
                // duplicate
                "https://respark.in/wp-content/uploads/2025/05/7_Avenue_1-3_230802_121527_page-0001_1-removebg-preview-1.png",
                "https://respark.in/wp-content/uploads/2025/05/123-1-2.png",
                "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png",
                "https://respark.in/wp-content/uploads/2025/05/v_cut.png",
                "https://respark.in/wp-content/uploads/2025/05/zira.png",
                "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png",
                "https://respark.in/wp-content/uploads/2025/05/habit.png",
                "https://respark.in/wp-content/uploads/2025/05/Amira.png",
                "https://respark.in/wp-content/uploads/2025/05/Beauty-lovers-logo.png",
                "https://respark.in/wp-content/uploads/2025/05/DrPriya.png",
              ].map((src, i) => (
                <div key={i} className="flex-shrink-0">
                  <img src={src} alt="Brand Logo" className="h-16 w-auto object-contain transition-all duration-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Section (Combined Grid) */}
      <section className="py-12 bg-rose-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl lg:text-4xl font-black text-charcoal mb-20 leading-tight">
            Why Choose ReSpark's Salon <br /> <span className="text-rose-gold">WhatsApp Marketing</span>?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {whyFeatures.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 text-left space-y-4 flex flex-col"
              >
                <div className={`w-12 h-12 ${f.bg} ${f.color} rounded-xl flex items-center justify-center`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-charcoal leading-tight text-sm uppercase tracking-wide">{f.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-medium flex-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature Details Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800" alt="WhatsApp Chat" className="w-full aspect-[4/3] object-cover rounded-[3rem] shadow-2xl" />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-black text-charcoal leading-tight">
              Why Choose ReSpark for <span className="text-rose-gold">Salon WhatsApp Marketing</span>
            </h2>
            <p className="text-lg text-charcoal font-bold">
              ReSpark is more than just a bulk messaging tool. It's a full service salon WhatsApp marketing features built for salons, spas, and wellness centers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              {[
                "All campaigns sync with your CRM, billing, appointments, and loyalty data",
                "Automate client journeys with intelligent triggers",
                "Eliminate manual reminders with salon WhatsApp integration",
                "Improve ROI with targeted spa WhatsApp campaigns that convert",
                "Ideal for WhatsApp Business for salons, spas, wellness centers and dermatology clinics"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-gold shrink-0 mt-0.5" />
                  <span className="text-charcoal/70 font-medium text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-charcoal/60 font-medium italic pt-4">
              Whether you want to build a salon WhatsApp group for exclusive offers or broadcast personalized deals to your top clients, ReSpark gives you the tools to do it all.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Banner Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]">
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1600" 
            alt="Reach Clients" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight">
                Reach Clients Where They Already Are
              </h2>
              <p className="text-base text-white/80 font-medium leading-relaxed">
                Automate engagement. Increase bookings. Grow your brand. Ready to transform your client communication?
              </p>
            </div>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap">
              Book A Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-12">
          <div className="flex-1 space-y-12">
            <div className="text-left">
              <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">Frequently Asked Questions</h2>
              <h3 className="text-4xl font-black text-charcoal leading-tight">FAQs About WhatsApp Integration For Salons & Spas</h3>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="What is ReSpark salon WhatsApp integration?" 
                answer="ReSpark's salon WhatsApp integration connects your salon management software directly with WhatsApp. It allows you to automate appointment reminders, send digital receipts, request feedback, and run targeted marketing campaigns directly to your clients' phones." 
              />
              <FAQItem 
                question="Can I run salon WhatsApp marketing campaigns?" 
                answer="Yes! You can use our built-in campaign creator to send bulk promotional messages, seasonal offers, and personalized discounts to specific client segments based on their service history." 
              />
              <FAQItem 
                question="Is it suitable for spa WhatsApp marketing?" 
                answer="Absolutely. Spa WhatsApp marketing campaigns can include appointment reminders, therapy guides, package deals, and even health tips. With ReSpark, your messages are timely, relevant, and visual." 
              />
              <FAQItem 
                question="Can I create a salon WhatsApp group for VIP clients?" 
                answer="Yes. You can create a salon WhatsApp group for exclusive promotions, early access to deals, or loyalty perks. ReSpark makes it easy to manage your group and content flow." 
              />
              <FAQItem 
                question="How is ReSpark different from generic WhatsApp marketing software?" 
                answer="ReSpark is tailored for the beauty and wellness industry. It’s not just about sending messages—it’s marketing automation software for salons and spas with full CRM integration and campaign analytics." 
              />
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full">
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" alt="Mobile Marketing" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[180px] flex items-center bg-rose-gold/5 border border-rose-gold/10">
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-black text-charcoal mb-4 leading-tight">
                Simplify and Scale Your <br /> Salon Client Messaging
              </h2>
              <p className="text-base text-charcoal/70 font-medium">
                Automate, personalize and scale client communication with salon WhatsApp Integration
              </p>
            </div>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
              Book Your Free Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonWhatsAppIntegration;













