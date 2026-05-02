import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, CheckCircle, Smartphone, Zap, Shield, Layout, Users, Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
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

const POSBillingPage = () => {
  const whyFeatures = [
    { title: "Trusted by Thousands", desc: "Used by leading salons, spas and wellness businesses globally.", icon: Users },
    { title: "Seamless EDC Payment", desc: "Direct integration with payment terminals for error-free billing.", icon: Shield },
    { title: "Mobile App + Multi-Device", desc: "Access your dashboard from mobile, tablet, or desktop anywhere.", icon: Smartphone },
    { title: "Quick Invoicing", desc: "One-tap invoicing via WhatsApp, SMS, or email for clients.", icon: Zap },
    { title: "Fast, Secure & Accurate", desc: "Engineered for high performance and total data security.", icon: CheckCircle }
  ];

  const industryTypes = [
    { title: "Hair Salon", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600" },
    { title: "Beauty Salon", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600" },
    { title: "Spa & Wellness", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600" },
    { title: "Tattoo Parlour", img: "https://images.unsplash.com/photo-1590212151175-e58edd96185b?auto=format&fit=crop&q=80&w=600" },
    { title: "Pet Grooming", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600" },
    { title: "Nails Studio", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600" }
  ];

  const checkoutTools = [
    "Membership Discounts", "Gift Vouchers", "Loyalty Points", "Referral Tracking",
    "Discount Codes", "Advance/Balance Handling", "Role-based User Access", "Auto Backups & Cloud Sync", "Low Training Curve"
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden flex items-center min-h-[85vh]">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1600" 
            alt="Salon Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-rose-gold/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <h1 className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]">
              Salon <span className="text-rose-gold">POS and <br /> Billing</span> Software
            </h1>
            <h2 className="text-2xl font-bold text-charcoal/80">Designed for Salons, Spas & Beauty Clinics</h2>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              ReSpark’s salon POS software is more than a billing tool. it’s a complete business management platform for salons, spas and beauty clinics. Whether you’re a single-location nail studio or a chain of beauty salons across cities, ReSpark Salon POS system adapts to your workflow. From appointments and invoicing to loyalty management and performance analytics, everything is integrated into one intuitive dashboard.
            </p>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-colors shadow-lg shadow-rose-gold/20">
              Get Started
            </button>
            </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/40 to-rose-gold/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1000" alt="Attractive Salon Environment" className="w-full aspect-[4/3] rounded-[2.5rem] shadow-2xl relative z-10 object-cover border-[8px] border-white transition-transform duration-500 group-hover:scale-[1.03]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Fast & Secure Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Fast, Secure & Flexible Billing for <br />
              <span className="text-rose-gold">Salons, Spas & Nail Studios</span>
          </motion.h2>
            <p className="text-lg text-charcoal/60 leading-relaxed font-medium">
              ReSpark’s all-in-one salon POS software helps salons, spas and beauty clinics manage bookings, billing and payments efficiently and accurately.
            </p>
            <button className="px-8 py-3 border-2 border-rose-gold text-rose-gold rounded-full font-bold hover:bg-rose-gold hover:text-white transition-all">
              Contact Now
            </button>
          </div>
          <div className="flex-1 relative">
            <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800" alt="Payment" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 3. Why ReSpark Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-charcoal mb-16">Why ReSpark is the Ultimate <span className="text-rose-gold">Salon POS Software</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {whyFeatures.map((f, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-rose-gold mx-auto border border-gray-100">
                  <f.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-charcoal text-sm leading-tight">{f.title}</h4>
                <p className="text-xs text-charcoal/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Custom POS Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-charcoal mb-16">Custom <span className="text-rose-gold">POS System</span> for Every Type of business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryTypes.map((item, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden h-64 shadow-xl">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-left">
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Powerful Tools Section */}
      <section className="py-12 bg-rose-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&q=80&w=800" alt="Checkout" className="rounded-[3rem] shadow-2xl" />
          </div>
          <div className="flex-1 space-y-8 text-left">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Powerful Tools to Grow Your <br />
              <span className="text-rose-gold">Salon Business</span>
          </motion.h2>
            <h4 className="text-xl font-bold text-charcoal">Simplified Checkout Experience</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checkoutTools.map((tool, i) => (
                <div key={i} className="flex items-center gap-3 text-charcoal/70 font-medium">
                  <CheckCircle className="w-5 h-5 text-rose-gold shrink-0" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Discover Features Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-left">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">Discover More <span className="text-rose-gold">ReSpark Features</span>
          </motion.h2>
            <ul className="space-y-6 text-charcoal/70 font-medium">
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                <span><strong className="text-charcoal">Online Booking System</strong> – Let clients book appointments 24/7 from your website or app.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                <span><strong className="text-charcoal">Staff Performance Management</strong> – Monitor targets, incentives, and schedules with ease.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                <span><strong className="text-charcoal">Inventory Control</strong> – Never run out of bestsellers again with smart stock alerts.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                <span><strong className="text-charcoal">Loyalty & Memberships</strong> – Boost repeat visits with automated rewards.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                <span><strong className="text-charcoal">Marketing Tools</strong> – Run SMS, email, and WhatsApp campaigns directly from your dashboard.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Management" className="rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 7. Powering Best Section */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-black text-charcoal">Powering the Best in <span className="text-rose-gold">Beauty & Wellness</span></h2>
          <p className="text-charcoal/50 font-medium max-w-2xl mx-auto leading-relaxed">
            Here's a glimpse of our growing community. From leading salon chains and independent spas to high-performing nail studios and pet spas, these brands use ReSpark to thrive.
          </p>
          <div className="mt-12 relative overflow-hidden py-4">
            {/* Infinite Scroll Container */}
            <motion.div 
              className="flex items-center gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[
                { name: "7th Avenue", src: "https://respark.in/wp-content/uploads/2025/05/7_Avenue_1-3_230802_121527_page-0001_1-removebg-preview-1.png" },
                { name: "Australian Beauty Lab", src: "https://respark.in/wp-content/uploads/2025/05/123-1-2.png" },
                { name: "Glaze", src: "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png" },
                { name: "VCUT", src: "https://respark.in/wp-content/uploads/2025/05/v_cut.png" },
                { name: "Zira", src: "https://respark.in/wp-content/uploads/2025/05/zira.png" },
                { name: "Sana Chouhan", src: "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png" },
                { name: "Habit", src: "https://respark.in/wp-content/uploads/2025/05/habit.png" },
                { name: "La Sheen", src: "https://respark.in/wp-content/uploads/2025/05/La-Sheen.png" },
                { name: "Radish", src: "https://respark.in/wp-content/uploads/2025/05/Radish.png" },
                { name: "Oasis", src: "https://respark.in/wp-content/uploads/2025/05/oasis.png" },
                { name: "Alaina", src: "https://respark.in/wp-content/uploads/2025/05/Alaina.png" },
                { name: "Amira", src: "https://respark.in/wp-content/uploads/2025/05/Amira.png" },
                { name: "Beauty Lovers", src: "https://respark.in/wp-content/uploads/2025/05/Beauty-lovers-logo.png" },
                { name: "Dr. Priya", src: "https://respark.in/wp-content/uploads/2025/05/DrPriya.png" },
                // Duplicate for seamless loop
                { name: "7th Avenue", src: "https://respark.in/wp-content/uploads/2025/05/7_Avenue_1-3_230802_121527_page-0001_1-removebg-preview-1.png" },
                { name: "Australian Beauty Lab", src: "https://respark.in/wp-content/uploads/2025/05/123-1-2.png" },
                { name: "Glaze", src: "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png" },
                { name: "VCUT", src: "https://respark.in/wp-content/uploads/2025/05/v_cut.png" },
                { name: "Zira", src: "https://respark.in/wp-content/uploads/2025/05/zira.png" },
                { name: "Sana Chouhan", src: "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png" },
                { name: "Habit", src: "https://respark.in/wp-content/uploads/2025/05/habit.png" },
                { name: "La Sheen", src: "https://respark.in/wp-content/uploads/2025/05/La-Sheen.png" },
                { name: "Radish", src: "https://respark.in/wp-content/uploads/2025/05/Radish.png" },
                { name: "Oasis", src: "https://respark.in/wp-content/uploads/2025/05/oasis.png" },
                { name: "Alaina", src: "https://respark.in/wp-content/uploads/2025/05/Alaina.png" },
                { name: "Amira", src: "https://respark.in/wp-content/uploads/2025/05/Amira.png" },
                { name: "Beauty Lovers", src: "https://respark.in/wp-content/uploads/2025/05/Beauty-lovers-logo.png" },
                { name: "Dr. Priya", src: "https://respark.in/wp-content/uploads/2025/05/DrPriya.png" },
              ].map((brand, i) => (
                <div key={i} className="flex-shrink-0">
                  <img 
                    src={brand.src} 
                    alt={brand.name} 
                    className="h-12 lg:h-16 w-auto object-contain" 
                  />
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-12">
          <div className="flex-1 space-y-12">
            <div className="text-left">
              <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">Frequently Asked Questions</h2>
              <h3 className="text-4xl font-black text-charcoal">Salon POS Software FAQ's</h3>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="What is salon POS software, and how is it better than regular billing tools?" 
                answer="Salon POS software is a comprehensive management system that goes beyond simple billing. It integrates appointment scheduling, inventory tracking, staff management, and CRM, allowing you to run your entire business from one place instead of just recording sales." 
              />
              <FAQItem 
                question="Is ReSpark the best POS system for nail salons?" 
                answer="Yes! ReSpark is highly customized for nail salons, offering specific features like chair management, technician split commissions, and easy tracking of nail art add-ons during checkout." 
              />
              <FAQItem 
                question="Can I use it as a POS system for beauty salons or spas?" 
                answer="Absolutely. ReSpark is designed to adapt to various workflows, whether it's the fast-paced nature of a beauty salon or the detailed service durations of a luxury spa." 
              />
              <FAQItem 
                question="Does it support spa memberships and packages?" 
                answer="Yes, it has a robust module for creating and managing tiered memberships, prepaid packages, and session-based services with automated balance tracking." 
              />
              <FAQItem 
                question="What about multi-location salons?" 
                answer="ReSpark is built for scale. You can manage multiple branches from a single admin dashboard, with centralized inventory, shared customer profiles, and location-wise performance analytics." 
              />
              <FAQItem 
                question="Can I invoice clients via WhatsApp?" 
                answer="Yes, ReSpark features direct WhatsApp integration, allowing you to send professional digital invoices and appointment confirmations directly to your clients' phones." 
              />
            </div>
          </div>
          <div className="flex-1 sticky top-32">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" alt="Modern Salon Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Bottom CTA Section (Exact Image Match) */}
      <section className="py-12 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]">
          {/* Background Image with Heavy Overlay */}
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600" 
            alt="Salon Mirror Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Salons and Spas Globally Worldwide Trust ReSpark POS
              </h2>
              <p className="text-lg text-white/90 font-medium">
                Simplify billing. Speed up checkouts. Delight your clients.
              </p>
            </div>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-bold text-lg hover:bg-rose-gold/90 transition-all shadow-xl whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default POSBillingPage;












