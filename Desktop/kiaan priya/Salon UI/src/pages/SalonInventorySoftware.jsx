import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, BarChart3, RefreshCw, AlertTriangle, Zap, CheckCircle, Plus, Minus, Scan, ShoppingBag, Layers, MapPin, Shield } from 'lucide-react';
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

const SalonInventorySoftware = () => {
  const whyFeatures = [
    {
      title: "Advanced Reporting & Analytics",
      desc: "Generate reports on retail sales, purchase orders, and consumable usage. See real-time stock stages across all locations. Link consumables with P&L to track operational cost and profitability.",
      icon: BarChart3,
      color: "text-rose-gold",
      bg: "bg-rose-gold/5"
    },
    {
      title: "Inventory Transfers Made Easy",
      desc: "Move stock between branches or from the warehouse to the salon with approval workflows. Track in-transit products in real time. Prevent overstocking or stock-outs across locations.",
      icon: RefreshCw,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Stock Reconciliation and Audit Trail",
      desc: "Perform periodic stock takes and analyze inventory variance. Reconcile stock automatically with system records. Maintain detailed audit logs of all inventory changes.",
      icon: Package,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Access Control and User Permissions",
      desc: "Configure user roles for managing inventory, orders, and discounts. Apply approval limits for purchases and stock transfers. Maintain accountability with traceable action logs.",
      icon: Shield,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Seamless Integration Across Systems",
      desc: "Integrated with POS, CRM, appointments, and ecommerce modules. Accessible on desktops, tablets, and smartphones. Scalable salon inventory software for single and multi-branch businesses.",
      icon: Zap,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  const detailTools = [
    {
      title: "Real-Time Retail Inventory Tracking",
      desc: "Manage purchases, sales, and stock levels across online and in-salon counters. Receive automated reorder alerts and live inventory status updates. Track stock in multiple locations using one salon inventory management system.",
      icon: ShoppingBag,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Accurate Consumable Inventory Control",
      desc: "Monitor how much product is used per service to reduce wastage. Ensure high-value consumables are properly accounted for and linked to your profit/loss reports. Enable multi-device, on-floor consumable tracking for staff accountability.",
      icon: Layers,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Barcode-Enabled Inventory Management",
      desc: "Use barcode scanners for receiving, dispatching, and adjusting stock. Get low-stock and expiry alerts to avoid shortages or spoilage. Perfect for spa business inventory management software needs.",
      icon: Scan,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Efficient Purchase Order Management",
      desc: "Let staff generate POs and route them through a secure, multi-level approval process. Send approved POs to vendors and update inventory once items are received. Save time with automatic inventory updates post-delivery.",
      icon: BarChart3,
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-rose-gold/5 via-white to-white relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 space-y-8 z-10">
            <h1 className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]">
              Salon & Spa <span className="text-rose-gold">Inventory <br /> Management</span> Software
            </h1>
            <p className="text-xl text-charcoal/80 font-bold">Streamlined stock control, consumable tracking and multi-location oversight.</p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              ReSpark’s cloud-based salon inventory management software helps you control stock across locations, devices and teams all from a single dashboard. Whether you’re tracking fast-moving retail items or managing backbar consumables, ReSpark ensures everything is accounted for.
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
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000" 
                alt="Inventory Dashboard" 
                className="w-full aspect-[4/3] drop-shadow-2xl rounded-[2.5rem] object-cover border-[8px] border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Smart Inventory Control Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
             <img 
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800" 
                alt="Smart Inventory Interface" 
                className="w-full aspect-[4/3] object-cover rounded-[2.5rem] border-[8px] border-white drop-shadow-2xl" 
             />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-black text-charcoal leading-tight">
              Smart <span className="text-rose-gold">Inventory Control</span> for Modern Salons & Spas
            </h2>
            <p className="text-lg text-charcoal/60 leading-relaxed font-medium">
              The platform is designed to support multi-location businesses, making it ideal for salon chains, beauty clinics, luxury spas, and even pet grooming salons. Since it works across desktops, tablets and smartphones, salon teams can manage stock from the front desk, the treatment floor, or even while restocking shelves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-rose-gold/5 p-6 rounded-2xl border border-purple-100">
                  <div className="text-3xl font-black text-rose-gold mb-2">40%+</div>
                  <div className="text-sm font-bold text-charcoal/70 uppercase">Reduction in Waste</div>
               </div>
               <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <div className="text-3xl font-black text-emerald-600 mb-2">100%</div>
                  <div className="text-sm font-bold text-charcoal/70 uppercase">Stock Accuracy</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Section (Combined Grid) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl lg:text-4xl font-black text-charcoal mb-20 leading-tight">
            Why Choose ReSpark's <span className="text-rose-gold">Inventory <br /> Management</span> Software?
          </motion.h2>
          
          {/* Top Row: 5 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {whyFeatures.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 text-left space-y-4"
              >
                <div className={`w-12 h-12 ${f.bg} ${f.color} rounded-xl flex items-center justify-center`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-charcoal leading-tight text-sm uppercase tracking-wide">{f.title}</h3>
                <p className="text-charcoal/60 text-xs leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailTools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 text-left space-y-4"
              >
                <div className={`w-12 h-12 ${tool.bg} ${tool.color} rounded-xl flex items-center justify-center`}>
                   <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-charcoal leading-tight text-sm uppercase tracking-wide">{tool.title}</h3>
                <p className="text-charcoal/60 text-xs leading-relaxed font-medium">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Brands Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-black text-charcoal">Brands That Trust ReSpark <span className="text-rose-gold">Salon Inventory</span> Software</h2>
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

      {/* 6. Why Prefer Detail Section */}
      <section className="py-12 bg-rose-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Why Salon Prefer ReSpark for <br />
              <span className="text-rose-gold">Inventory Management</span>
          </motion.h2>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 text-rose-gold">
                     <Layers className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-charcoal mb-1">Seamless Integration</h4>
                     <p className="text-sm text-charcoal/60 font-medium">Auto-update stock as you bill services or sell retail products through POS.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 text-rose-gold">
                     <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-charcoal mb-1">Centralized System</h4>
                     <p className="text-sm text-charcoal/60 font-medium">Manage multi-location stock, transfers, and audits from one dashboard.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0 text-rose-gold">
                     <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-charcoal mb-1">Unified Platform</h4>
                     <p className="text-sm text-charcoal/60 font-medium">Tie every product usage to its impact on P&L and service costs automatically.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="flex-1">
             <img src="https://respark.in/wp-content/uploads/2024/02/inventory-dashboard-mockup.png" alt="Inventory Dashboard" className="rounded-3xl shadow-2xl" 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'} />
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-12">
          <div className="flex-1 space-y-12">
            <div className="text-left">
              <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">Frequently Asked Questions</h2>
              <h3 className="text-4xl font-black text-charcoal">FAQs About Salon Inventory Management</h3>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="What is salon inventory management software?" 
                answer="It's a system designed to track professional-use products (backbar) and retail items, manage stock levels, and automate reordering to ensure you never run out of essentials." 
              />
              <FAQItem 
                question="Is ReSpark suitable for both hair and nail salons?" 
                answer="Yes! ReSpark is highly customizable and works perfectly for hair salons, nail studios, spas, and even pet grooming centers." 
              />
              <FAQItem 
                question="Can I manage stock across multiple locations?" 
                answer="Absolutely. Our multi-location feature allows you to see real-time stock levels for all branches and transfer inventory between them seamlessly." 
              />
              <FAQItem 
                question="Does this software support barcode scanning?" 
                answer="Yes, ReSpark supports standard barcode scanners to speed up both checkout processes and stock reconciliation audits." 
              />
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full">
              <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800" alt="Inventory Management" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[3.5rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]">
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1600" 
            alt="Inventory Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Upgrade Your Salon Inventory?
              </h2>
              <p className="text-xl text-white/80 font-medium">
                Take control of your stock, reduce waste, and improve your profitability with ReSpark.
              </p>
            </div>
            <button className="px-12 py-5 bg-rose-gold text-white rounded-full font-black text-xl hover:bg-purple-800 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonInventorySoftware;













