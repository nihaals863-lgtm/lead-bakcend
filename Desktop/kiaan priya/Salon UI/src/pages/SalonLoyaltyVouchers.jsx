import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Star, Users, Zap, CheckCircle, Plus, Minus, CreditCard, Sparkles, Heart, Ticket, Share2 } from 'lucide-react';
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

const SalonLoyaltyVouchers = () => {
  const loyaltyFeatures = [
    {
      title: "Points & Cashback System",
      desc: "Automatically award points for every service or product purchase. Clients can redeem points for future visits, driving recurring revenue.",
      icon: Star,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Designer E-Vouchers",
      desc: "Create and sell beautiful digital vouchers for birthdays, anniversaries, or special events. Perfect for gifting and acquiring new clients.",
      icon: Ticket,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Referral Rewards",
      desc: "Turn your clients into brand ambassadors. Reward both the referrer and the new client with automated discounts and points.",
      icon: Share2,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Smart Gift Cards",
      desc: "Sell physical or digital gift cards that integrate directly with your POS for seamless tracking and redemption.",
      icon: CreditCard,
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  const benefits = [
    "Increase client retention by rewarding repeat visits.",
    "Generate instant cash flow by selling e-vouchers and gift cards.",
    "Automated points tracking linked directly to customer profiles.",
    "Customizable reward tiers based on client spending or visit frequency.",
    "Seamless redemption at checkout without any manual paperwork."
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
              Salon <span className="text-rose-gold">Loyalty &</span> <br />
              E-Voucher Software
            </h1>
            <p className="text-xl text-charcoal/80 font-bold">Build lasting relationships and reward your most valued clients automatically.</p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              Transform your salon from a one-time visit into a recurring destination. ReSpark’s loyalty and voucher management system automates the way you reward loyalty. From tiered point systems to designer e-vouchers and referral programs, we provide the tools to keep your chairs full and your clients happy.
            </p>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
              Explore Loyalty Tools
            </button>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1512418490979-9ce792d5e1d9?auto=format&fit=crop&q=80&w=1000" 
                alt="Loyalty Program Interface" 
                className="w-full aspect-[4/3] drop-shadow-2xl rounded-[2.5rem] object-cover border-[8px] border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
                 <div className="w-12 h-12 bg-rose-gold/10 rounded-full flex items-center justify-center text-rose-gold">
                    <Heart className="w-6 h-6 fill-current" />
                 </div>
                 <div>
                    <div className="text-sm font-black text-charcoal">+45% Retention</div>
                    <div className="text-[10px] text-charcoal/40 font-bold uppercase tracking-widest text-left">Customer Loyalty</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl lg:text-4xl font-black text-charcoal mb-16">
            Powerful Tools to <br /> <span className="text-rose-gold">Reward & Retain</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loyaltyFeatures.map((feature, i) => (
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

      {/* 3. Gift Card Promo */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 relative order-2 lg:order-1">
             <img src="https://images.unsplash.com/photo-1549463591-24c1882bd396?auto=format&fit=crop&q=80&w=800" alt="E-Vouchers" className="rounded-[3rem] shadow-2xl" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40">
                   <Ticket className="w-10 h-10 text-white" />
                </div>
             </div>
          </div>
          <div className="flex-1 space-y-8 order-1 lg:order-2 text-left">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Designer <span className="text-rose-gold">E-Vouchers & Gift Cards</span>
          </motion.h2>
            <p className="text-lg text-charcoal/70 font-medium">
              Create a new revenue stream with customizable digital vouchers. Sell them on your website, social media, or directly in-salon.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { title: "Custom Themes", desc: "Birthday, Anniversary, Festive." },
                 { title: "Instant Delivery", desc: "Via WhatsApp or Email." },
                 { title: "Expiry Control", desc: "Automated validity tracking." },
                 { title: "Fraud-Proof", desc: "Secure unique ID for every voucher." }
               ].map((item, i) => (
                 <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-rose-gold/10">
                    <h4 className="font-bold text-charcoal text-sm">{item.title}</h4>
                    <p className="text-[10px] text-charcoal/40 font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-left">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Why Choose ReSpark for <br /> <span className="text-rose-gold">Client Retention?</span>
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
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800" alt="Retention Stats" className="rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-12 bg-rose-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">FAQs</h2>
            <h3 className="text-4xl font-black text-charcoal leading-tight">About Loyalty & E-Vouchers</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-2 bg-white p-8 rounded-[2rem] shadow-xl border border-rose-gold/5">
            <FAQItem 
              question="Can I customize how many points clients earn?" 
              answer="Absolutely. You can set up custom rules—for example, 1 point for every $1 spent, or higher points for specific premium services or retail products." 
            />
            <FAQItem 
              question="Do e-vouchers expire automatically?" 
              answer="Yes, you can set a validity period for every voucher. The system automatically tracks expiry and ensures expired vouchers cannot be redeemed." 
            />
            <FAQItem 
              question="Is the loyalty system integrated with my POS?" 
              answer="Yes, it's fully integrated. When a client bills for a service, their points are automatically calculated and added to their profile in real-time." 
            />
            <FAQItem 
              question="Can I share voucher links on social media?" 
              answer="Yes, you get unique links for your vouchers that you can share on Instagram, Facebook, or WhatsApp to drive online sales." 
            />
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 text-center">
         <div className="max-w-4xl mx-auto space-y-8 px-4">
            <h2 className="text-3xl lg:text-4xl font-black text-charcoal">Ready to Turn Clients Into Fans?</h2>
            <p className="text-xl text-charcoal/60 font-medium">Start rewarding your best customers today with ReSpark's loyalty and voucher engine.</p>
            <button className="px-12 py-5 bg-rose-gold text-white rounded-full font-black text-xl hover:bg-purple-800 shadow-2xl transition-all">
               Get Started For Free
            </button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonLoyaltyVouchers;













