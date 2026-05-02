import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, PieChart, LayoutGrid, CheckCircle, Plus, Minus, Shield, Zap, Smartphone, MessageSquare } from 'lucide-react';
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

const SalonCRMSoftware = () => {
  const smartTools = [
    {
      title: "Build Lasting Customer Relationships",
      desc: "Track and engage regular and lost clients with intelligent filters and alerts. Identify selling opportunities based on customer history.",
      icon: Heart,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Automate Client Reminders and Updates",
      desc: "Send automated appointment reminders, birthday wishes, and anniversary greetings via WhatsApp and SMS to keep clients engaged.",
      icon: Sparkles,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Powerful Customer Segmentation",
      desc: "Group clients based on spending, visit frequency, or service preferences to run highly targeted and effective marketing campaigns.",
      icon: PieChart,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Integrated with Appointments, Billing & Loyalty",
      desc: "A unified view where CRM data flows seamlessly between POS, booking, and loyalty modules for a 360-degree client view.",
      icon: LayoutGrid,
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  const filteringFeatures = [
    "Gender, profession, locality and channel source",
    "Special days like birthdays, anniversaries or loyalty anniversaries",
    "Last visited date, non-returning clients, high spenders or clients with active memberships"
  ];

  const reportingInsights = [
    "Monitor which clients respond to birthday wishes or service reminders",
    "Measure the engagement success of SMS, WhatsApp and promotional messages",
    "Access dashboards that track customer reactivation, loyalty usage and more"
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-purple-50 via-white to-white relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 space-y-8 z-10">
            <h1 className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]">
              <span className="text-rose-gold">CRM Software</span> for Salons, <br />
              Spas & Wellness Centers
            </h1>
            <p className="text-xl text-charcoal/80 font-bold">Personalize every interaction, retain more clients and automate reminders with ReSpark’s powerful salon CRM.</p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              In the beauty and wellness industry, building strong client relationships is the key to repeat business. ReSpark’s salon CRM software helps salons, spas, and wellness centers build loyalty, improve communication, and personalize every visit.
            </p>
            <div className="flex gap-4">
              <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-rose-gold/90 transition-all shadow-lg shadow-rose-gold/20">
                Get Started
              </button>
            </div>
          </motion.div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000" 
                alt="CRM Dashboard Preview" 
                className="w-full aspect-[4/3] drop-shadow-2xl rounded-[2.5rem] object-cover border-[8px] border-white"
              />
            </motion.div>
            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-gold/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>
      </section>

      {/* 2. Smart CRM & Tools Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl lg:text-4xl font-black text-charcoal mb-16">
            Smart <span className="text-rose-gold">CRM</span> & Communication Tools
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smartTools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 text-left space-y-6"
              >
                <div className={`w-14 h-14 ${tool.bg} ${tool.color} rounded-2xl flex items-center justify-center`}>
                  <tool.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-charcoal leading-tight">{tool.title}</h3>
                <p className="text-charcoal/60 font-medium text-sm leading-relaxed">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Salons Prefer Section */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 relative">
               <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl rotate-2">
                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Team Meeting" className="rounded-[2rem] w-full" />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-rose-gold p-8 rounded-3xl shadow-xl -rotate-3 hidden lg:block">
                  <div className="flex items-center gap-4 text-white">
                    <div className="text-4xl font-black">95%</div>
                    <div className="text-sm font-bold leading-tight">Customer<br/>Retention Rate</div>
                  </div>
               </div>
            </div>
            <div className="flex-1 space-y-8">
              <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
                Why Salons Prefer <span className="text-rose-gold">ReSpark CRM</span>
          </motion.h2>
              <p className="text-lg text-charcoal/60 leading-relaxed font-medium">
                ReSpark isn’t just CRM software for salons—it’s a complete ecosystem designed to build deeper relationships. Whether you want to upsell services, re-engage dormant clients, or simply make each visit more personal, our spa CRM helps you automate communication and make smarter decisions.
              </p>
              <div className="space-y-4">
                {["Automate communication", "Analyze client behavior", "Improve retention", "Personalized messaging"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-rose-gold" />
                    <span className="text-charcoal font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <button className="px-10 py-4 bg-charcoal text-white rounded-full font-bold hover:bg-black transition-all">
                Book A Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Advanced Filtering Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Advanced <span className="text-rose-gold">Filtering</span> & Customer Targeting
          </motion.h2>
            <p className="text-lg text-charcoal font-bold">Segment and personalize your communication with advanced filters and CRM logic :</p>
            <ul className="space-y-4">
              {filteringFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                  <span className="text-charcoal/70 font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal/60 italic font-medium pt-4">
              ReSpark’s CRM system for beauty salons helps your staff run smarter, more targeted campaigns that lead to measurable business results.
            </p>
          </div>
          <div className="flex-1">
             <img src="https://respark.in/wp-content/uploads/2024/02/crm-filtering-mockup.png" alt="Filtering Dashboard" className="rounded-3xl shadow-2xl border border-gray-100" 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'} />
          </div>
        </div>
      </section>

      {/* 5. Reporting & Engagement Section */}
      <section className="py-12 bg-rose-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              CRM <span className="text-rose-gold">Reporting</span> & Engagement Insights
          </motion.h2>
            <p className="text-lg text-charcoal font-bold">Track how your client relationships are growing and evolving</p>
            <ul className="space-y-4">
              {reportingInsights.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-gold mt-1 shrink-0" />
                  <span className="text-charcoal/70 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
             <img src="https://respark.in/wp-content/uploads/2024/02/crm-insights-dashboard.png" alt="Reporting Insights" className="rounded-3xl shadow-2xl border border-gray-100" 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800'} />
          </div>
        </div>
      </section>

      {/* 6. Leading Salons Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-black text-charcoal">ReSpark <span className="text-rose-gold">CRM Powers</span> Leading Salons & Spas</h2>
          <p className="text-charcoal/60 font-medium max-w-3xl mx-auto leading-relaxed">
            From beauty salons and luxury spas to wellness centers and dermatology clinics, ReSpark CRM for salons and spas is trusted across the beauty industry.
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

      {/* 7. FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-12">
          <div className="flex-1 space-y-12">
            <div className="text-left">
              <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">Frequently Asked Questions</h2>
              <h3 className="text-4xl font-black text-charcoal">Salon CRM & Reminder Features</h3>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="What is salon CRM software?" 
                answer="Salon CRM (Customer Relationship Management) software helps you track client preferences, visit history, and contact details to provide a personalized experience and automate marketing efforts." 
              />
              <FAQItem 
                question="How can CRM help in increasing salon revenue?" 
                answer="By identifying lost clients and high-spenders, you can send targeted promotions and automated reminders that bring people back through your doors more frequently." 
              />
              <FAQItem 
                question="Can I send automated birthday and anniversary wishes?" 
                answer="Yes, ReSpark allows you to set up automated workflows that send personalized greetings and offers to clients on their special days via WhatsApp or SMS." 
              />
              <FAQItem 
                question="Does it support client segmentation?" 
                answer="Absolutely. You can segment clients by gender, locality, profession, spending habits, and more to ensure your marketing messages are always relevant." 
              />
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full">
              <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800" alt="Modern Salon" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[3.5rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]">
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1600" 
            alt="Salon Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Ready To Personalize Your Salon Experience?
              </h2>
              <p className="text-xl text-white/80 font-medium">
                Join thousands of salons using ReSpark to automate their growth and delight every client.
              </p>
            </div>
            <button className="px-12 py-5 bg-rose-gold text-white rounded-full font-black text-xl hover:bg-rose-gold/90 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonCRMSoftware;













