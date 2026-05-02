import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Layout, CreditCard, Filter, CheckCircle, Plus, Minus, Globe, Sparkles, Package, Zap } from 'lucide-react';
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

const SalonEcommerceSoftware = () => {
  const keyFeatures = [
    {
      title: "Manage Your Own Digital Store Seamlessly",
      desc: "Customize your storefront with themes, product categories and brand pages. Highlight new launches, trending collections and seasonal offers. Create standalone landing pages that guide clients directly to purchase.",
      icon: Layout,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Built-in E-Commerce Portal with Integrated Payment Gateway",
      desc: "Accept secure online payments through multiple channels. Support for cash on delivery (COD) and “pay over the counter” with e-billing. Instant invoice generation and seamless transaction reporting.",
      icon: CreditCard,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Filter Products by Price & Trends",
      desc: "Allow clients to sort products based on price ranges, popularity or latest arrivals. Showcase best-selling beauty essentials and trending salon products. Make it easy for clients to find exactly what they need.",
      icon: Filter,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Versatile Payment Options: Online, COD, Over-the-Counter",
      desc: "Offer multiple checkout methods for client convenience. Full e-billing workflows integrated with your salon POS. Secure reconciliation of sales across online and in-store channels.",
      icon: ShoppingCart,
      color: "text-rose-600",
      bg: "bg-rose-50"
    }
  ];

  const whyChoosePoints = [
    "Expand your revenue 24/7 by selling beauty products online.",
    "Launch a professional salon online store without needing separate platforms.",
    "Offer exclusive deals, memberships and discounts to build client loyalty.",
    "Track stock levels in real-time, reducing wastage and managing salon inventory better.",
    "Sell hair products online directly linked to your service menus or promotional campaigns."
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-rose-gold/5 via-white to-white relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]">
              Salon & Spa <span className="text-rose-gold">E-Commerce</span> <br />
              Software
            </h1>
            <p className="text-xl text-charcoal/80 font-bold">The all-in-one salon & spa e-commerce software to sell beauty and hair products online seamlessly</p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              Expand your business beyond the chair. ReSpark’s salon e-commerce software transforms your salon or spa into a 24/7 online store. Whether you want to sell beauty products online, promote exclusive spa essentials, or offer professional haircare kits, our platform makes it effortless. Designed for salons, spas, and wellness brands, ReSpark’s e-commerce software integrates with your POS and CRM, allowing you to manage sales, payments, and inventory from one dashboard.
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
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=1000" 
                alt="E-Commerce Dashboard" 
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
            Key Features of ReSpark Salon <br /> <span className="text-rose-gold">E-Commerce Software?</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, i) => (
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

      {/* 3. Trusted Brands Section */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-black text-charcoal">Trusted by <span className="text-rose-gold">Salons, Spas & Wellness Brands</span></h2>
          <p className="text-charcoal/60 font-medium max-w-3xl mx-auto leading-relaxed">
            Leading beauty and wellness brands trust ReSpark to power their salon e-commerce growth. From boutique hair salons and nail studios to luxury spas and wellness centres, ReSpark’s salon e-commerce system empowers businesses to sell more, connect better, and scale faster.
          </p>
          <div className="mt-12 relative overflow-hidden py-4">
            <motion.div 
              className="flex items-center gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[
                "https://respark.in/wp-content/uploads/2025/05/Alaina.png",
                "https://respark.in/wp-content/uploads/2025/05/Amira.png",
                "https://respark.in/wp-content/uploads/2025/05/Beauty-lovers-logo.png",
                "https://respark.in/wp-content/uploads/2025/05/DrPriya.png",
                "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png",
                "https://respark.in/wp-content/uploads/2025/05/v_cut.png",
                "https://respark.in/wp-content/uploads/2025/05/zira.png",
                "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png",
                // duplicate
                "https://respark.in/wp-content/uploads/2025/05/Alaina.png",
                "https://respark.in/wp-content/uploads/2025/05/Amira.png",
                "https://respark.in/wp-content/uploads/2025/05/Beauty-lovers-logo.png",
                "https://respark.in/wp-content/uploads/2025/05/DrPriya.png",
                "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png",
                "https://respark.in/wp-content/uploads/2025/05/v_cut.png",
                "https://respark.in/wp-content/uploads/2025/05/zira.png",
                "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png",
              ].map((src, i) => (
                <div key={i} className="flex-shrink-0">
                  <img src={src} alt="Brand Logo" className="h-16 w-auto object-contain transition-all duration-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Detail Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 relative">
             <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Why Choose ReSpark" className="rounded-[3rem] shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 bg-rose-gold p-6 rounded-3xl shadow-xl text-white">
                <div className="text-3xl font-black">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest">Online Revenue</div>
             </div>
          </div>
          <div className="flex-1 space-y-8">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Why Salons & Spas Choose ReSpark for <span className="text-rose-gold">E-Commerce</span>
          </motion.h2>
            <p className="text-lg text-charcoal/80 font-bold leading-relaxed">
              ReSpark isn’t just another salon e-commerce platform it’s a complete solution for beauty and wellness businesses looking to scale. With ReSpark, You Can:
            </p>
            <div className="space-y-4">
              {whyChoosePoints.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-rose-gold shrink-0 mt-1" />
                  <span className="text-charcoal/70 font-medium text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Banner Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[3.5rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600" 
            alt="Grow Sales" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                Ready to Grow Your Salon's Online Sales?
              </h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                Take your business to the next level with ReSpark’s salon e-commerce software. Set up your salon online store, start selling professional hair products online and reach clients anytime, anywhere.
              </p>
            </div>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-2xl whitespace-nowrap">
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
              <h3 className="text-4xl font-black text-charcoal leading-tight">FAQs About ReSpark's E-Commerce Module</h3>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="Can I filter products by trend?" 
                answer="Yes, ReSpark allows you to tag and filter products by trends, best-sellers, or latest arrivals, making it easier for clients to find trending beauty products." 
              />
              <FAQItem 
                question="Do you support COD and over the counter payments?" 
                answer="Absolutely. We support multiple payment methods including online gateways, Cash on Delivery (COD), and even pay-at-salon options integrated with your billing system." 
              />
              <FAQItem 
                question="How does ReSpark help me sell beauty products online?" 
                answer="We provide a ready-to-use storefront that integrates directly with your existing inventory and POS, allowing you to launch an online shop without any technical complexity." 
              />
              <FAQItem 
                question="Can I sell hair products online and link them to my services?" 
                answer="Yes, you can link retail products to specific services, suggesting after-care kits to clients when they book or checkout from their appointments." 
              />
              <FAQItem 
                question="Is ReSpark suitable for spa ecommerce businesses too?" 
                answer="Yes, it's perfect for spas wanting to sell essential oils, skincare kits, and wellness products online, providing a seamless shopping experience for their guests." 
              />
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800" alt="E-Commerce FAQ" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl lg:text-4xl font-black text-charcoal leading-tight">
            Ready to Grow Your Salon's Online Sales?
          </h2>
          <p className="text-xl text-charcoal/60 font-medium">
            Take your business to the next level with ReSpark’s salon e-commerce software. Set up your salon online store, start selling professional hair products online and reach clients anytime, anywhere.
          </p>
          <div className="pt-4">
             <button className="px-12 py-5 bg-rose-gold text-white rounded-full font-black text-xl hover:bg-purple-800 transition-all shadow-2xl hover:scale-105 active:scale-95">
               Book Your Free Demo
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonEcommerceSoftware;













