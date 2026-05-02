import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Layout, Sparkles, Zap, Smartphone, CheckCircle, Plus, Minus, Globe, MousePointer2, Camera, Palette } from 'lucide-react';
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

const SalonDigitalCatalog = () => {
  const catalogFeatures = [
    {
      title: "Designer QR Code Access",
      desc: "Clients scan a customized QR code to view your menu instantly. No app downloads or sign-ins required, ensuring hassle-free access.",
      icon: QrCode,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Interactive 4-in-1 System",
      desc: "Combines service showcasing, interactive booking, product portfolios, and exclusive promotions into one seamless digital experience.",
      icon: Layout,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Real-Time Pricing Updates",
      desc: "Update prices, add new services, or launch seasonal offers instantly through the dashboard. Changes reflect in real-time.",
      icon: Zap,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Stylist Portfolio Visibility",
      desc: "Allow your stylists to showcase their best work directly in the catalog, helping clients choose the right professional for their needs.",
      icon: Camera,
      color: "text-pink-600",
      bg: "bg-pink-50"
    }
  ];

  const benefits = [
    "Replace static printed menus with a dynamic digital store.",
    "Showcase services, products, and special promotions in one place.",
    "Integrated with your POS for seamless checkouts and tracking.",
    "Fully customizable templates to match your salon's branding.",
    "Build client trust through transparent service details and portfolios."
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-rose-gold/5 via-white to-white relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]"
            >
              Salon <span className="text-rose-gold">Digital Catalog</span> <br />
              Software
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-charcoal/80 font-bold"
            >
              The smart, interactive way to showcase your salon's services and products 24/7.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium"
            >
              Say goodbye to boring printed menus. ReSpark’s salon digital catalog software allows you to create a beautiful, customized digital store for your salon or spa. List all your services, products, and special promotions in one interactive catalog that clients can access anywhere, anytime via a simple QR code scan or link.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20 hover:-translate-y-1">
                Get Started
              </button>
            </motion.div>
          </div>
          <div className="flex-1 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/30 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000" 
                  alt="Digital Catalog Showcase" 
                  className="w-full aspect-[4/3] drop-shadow-2xl rounded-[2.5rem] object-cover border-[8px] border-white relative z-10"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Key Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl lg:text-4xl font-black text-charcoal mb-16">
            Everything You Need to <br /> <span className="text-rose-gold">Sell Smarter Online</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {catalogFeatures.map((feature, i) => (
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

      {/* 3. Workflow Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
           <h2 className="text-4xl font-black text-charcoal">The Seamless <span className="text-rose-gold">Client Journey</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Scan QR", desc: "Client scans the designer QR code at your salon or through a link." },
                { title: "Explore Menu", desc: "They browse through services, stylist portfolios, and product kits." },
                { title: "Book/Buy", desc: "They can book an appointment or buy retail products directly from the catalog." },
                { title: "Checkout", desc: "Integrated with POS for instant billing and effortless experience." }
              ].map((step, i) => (
                <div key={i} className="relative space-y-4">
                  <div className="w-16 h-16 bg-rose-gold text-white rounded-full mx-auto flex items-center justify-center text-2xl font-black shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="text-xl font-bold text-charcoal">{step.title}</h4>
                  <p className="text-charcoal/60 font-medium text-sm">{step.desc}</p>
                  {i < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-rose-gold/20" />}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Why Choose Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 relative group">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.4 }}
             >
               <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" alt="Digital Catalog Advantages" className="rounded-[3rem] shadow-2xl object-cover" />
               <div className="absolute -bottom-6 -right-6 bg-rose-gold p-6 rounded-3xl shadow-xl text-white transform transition-transform group-hover:scale-110 group-hover:-rotate-3">
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-xs font-bold uppercase tracking-widest">Customizable</div>
               </div>
             </motion.div>
          </div>
          <div className="flex-1 space-y-8">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Why Choose ReSpark's <br /> <span className="text-rose-gold">Digital Catalog Software?</span>
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
              <h3 className="text-4xl font-black text-charcoal leading-tight">FAQs About ReSpark's Digital Catalog</h3>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="Can I update prices and services instantly?" 
                answer="Yes, the dashboard allows you to make changes in real-time. Any update you make to services or prices will reflect instantly on the digital catalog scanned by your clients." 
              />
              <FAQItem 
                question="Does it integrate with my salon POS?" 
                answer="Absolutely. ReSpark’s digital catalog is fully integrated with our POS system, allowing for seamless checkouts, inventory tracking, and sales reporting." 
              />
              <FAQItem 
                question="Is it accessible outside the salon?" 
                answer="Yes, you can share your digital catalog link on social media, WhatsApp, or your website, allowing clients to browse and book from anywhere." 
              />
              <FAQItem 
                question="Can I use it for multiple salon branches?" 
                answer="Yes, ReSpark supports multi-location management, so you can have a unified catalog or branch-specific menus easily." 
              />
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl"
            >
               <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="FAQ Preview" className="w-full h-auto object-cover" />
               <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-black text-charcoal leading-tight">
            Ready to Build Your Digital Catalog?
          </h2>
          <p className="text-xl text-charcoal/60 font-medium">
            Take your salon's presentation to the next level. Create a beautiful, interactive digital menu that helps you sell more services and products effortlessly.
          </p>
          <div className="pt-4">
             <button className="px-12 py-5 bg-rose-gold text-white rounded-full font-black text-xl hover:bg-purple-800 transition-all shadow-2xl hover:scale-105 active:scale-95">
               Request A Demo
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonDigitalCatalog;













