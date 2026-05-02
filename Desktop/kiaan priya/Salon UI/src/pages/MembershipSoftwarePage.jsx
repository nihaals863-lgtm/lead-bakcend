import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, CheckCircle, Gift, Users, Zap, Smartphone, Star, Plus, Minus, BarChart3 } from 'lucide-react';
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

const MembershipSoftwarePage = () => {
  const whyFeatures = [
    { title: "100% Digital, 100% Cashless", desc: "No more manual cards. Manage everything digitally with automated tracking.", icon: Smartphone },
    { title: "Fully Integrated with POS Billing", desc: "Sync memberships directly with your billing for automated discounts and redemptions.", icon: Zap },
    { title: "Flexible Payment Choice", desc: "Allow clients to pay upfront or through session-based plans that suit their needs.", icon: CreditCard },
    { title: "Online Membership Management", desc: "Let clients view and manage their plans through your branded portal.", icon: Users },
    { title: "Tiered Memberships & Packages", desc: "Create custom tiers like Silver, Gold, Platinum with specific benefits.", icon: Star },
    { title: "Session-Based Packages", desc: "Track service sessions with automated balance updates.", icon: Gift },
    { title: "Real-Time Reporting Dashboard", desc: "Track membership sales, renewals, and usage patterns with real-time data.", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#f8f5ff] to-white relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1600"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 space-y-6 text-left"
          >
            <h1 className="text-3xl lg:text-4xl font-black text-charcoal leading-[1.1]">
              Salon <span className="text-rose-gold">Membership</span> <br />
              &amp; <span className="text-rose-gold">Package</span> Software
            </h1>
            <h2 className="text-2xl font-bold text-charcoal/80">Streamline Memberships, Boost Loyalty and Automate Operations</h2>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              ReSpark's salon membership software helps you manage and monitor membership plans, gift cards, and prepaid packages to boost customer retention and revenue.
            </p>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-rose-gold/90 transition-colors shadow-lg shadow-rose-gold/20">
              Get Started
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000"
              alt="Membership Preview"
              className="w-full aspect-[4/3] object-cover drop-shadow-2xl rounded-[2.5rem] border-[8px] border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Why Choose Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-charcoal mb-4">
              Why Choose ReSpark's Salon <span className="text-rose-gold">Membership Software</span>?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-rose-gold/10 rounded-2xl flex items-center justify-center text-rose-gold mb-4 group-hover:bg-rose-gold group-hover:text-white transition-all duration-300">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-charcoal mb-2">{f.title}</h4>
                <p className="text-charcoal/60 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Flexible Plans Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8 text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black text-charcoal leading-tight"
            >
              ReSpark Offers Flexible Client Plans <br />
              with <span className="text-rose-gold">Multiple Membership Types</span>
            </motion.h2>
            <div className="space-y-6">
              {[
                { title: "Percentage Memberships", desc: "Offer flat discounts on all services for members with automated redemption." },
                { title: "Fixed Memberships", desc: "Clients pay a monthly fee and get a fixed number of services or credits." },
                { title: "Group Memberships", desc: "Perfect for families or corporate teams to share a common plan and benefits." },
                { title: "Yearly Memberships", desc: "Annual plans for the most loyal clients with maximum benefits and incentives." },
              ].map((plan, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">{plan.title}</h4>
                    <p className="text-charcoal/60 text-sm">{plan.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
              alt="Plans"
              className="w-full aspect-[4/3] object-cover rounded-[3rem] shadow-2xl"
              onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800'}
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Why Salons Love Section */}
      <section className="py-12 bg-[#f8f5ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black text-charcoal leading-tight"
            >
              Why Salons Love <span className="text-rose-gold">ReSpark Membership</span>
            </motion.h2>
            <ul className="space-y-4">
              {[
                "No more manual logs - everything is digital and tracked.",
                "Easy for clients to use and manage their own plans.",
                "One Platform, multiple benefits across all locations.",
                "Increased Client Loyalty with personalized packages.",
                "Streamline staff tracking and incentives automatically.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-charcoal/70 font-bold">
                  <CheckCircle className="w-5 h-5 text-rose-gold shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800"
              alt="Happy Client"
              className="w-full aspect-[4/3] object-cover rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. How it Works */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black text-charcoal"
          >
            How it <span className="text-rose-gold">Works</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "Create", desc: "Design membership plans and packages in just a few clicks." },
              { step: "Track", desc: "Automatically track usage and balance for every member in real-time." },
              { step: "Sell", desc: "Sell plans online or at the counter with seamless POS integration." },
              { step: "Renew", desc: "Automated reminders for renewals and easy upgrade options." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-3 p-6 rounded-3xl hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-14 h-14 bg-rose-gold text-white rounded-2xl flex items-center justify-center text-xl font-black mx-auto shadow-lg shadow-rose-gold/20 group-hover:scale-110 transition-transform duration-300">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-charcoal">{item.step}</h4>
                <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Logo Marquee */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-black text-charcoal"
          >
            Brands That Trust ReSpark <span className="text-rose-gold">Salon Membership Software</span>
          </motion.h2>
          <div className="mt-8 relative overflow-hidden py-4">
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

      {/* 7. FAQ Section */}
      <section className="py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
        >
          <div className="text-center">
            <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">Frequently Asked Questions</h2>
            <h3 className="text-4xl font-black text-charcoal">FAQs About ReSpark's Salon Membership Software</h3>
          </div>
          <div className="space-y-2">
            <FAQItem question="How does salon membership software work?" answer="It digitizes your loyalty programs, allowing you to create, sell, and track membership plans from a single dashboard." />
            <FAQItem question="Can I manage memberships with hourly booking?" answer="Yes, the system handles complex scheduling and service durations for members seamlessly." />
            <FAQItem question="Is it available for both salon and spa centers?" answer="Absolutely, it's customized for both fast-paced salons and detailed spa services." />
            <FAQItem question="Can I create custom packages for my salon?" answer="Yes, you can bundle services and create unique prepaid packages with automated balance tracking." />
            <FAQItem question="Can I monitor membership sales in individual branches?" answer="Yes, the admin dashboard provides location-wise performance data and centralized management." />
          </div>
        </motion.div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]"
        >
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1600"
            alt="Membership Background"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-left">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">Ready to Simplify Membership Management?</h2>
              <p className="text-lg text-white/90">Join our free demo today and see how ReSpark can boost your client retention.</p>
            </div>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-bold text-lg hover:bg-rose-gold/90 transition-all shadow-xl whitespace-nowrap">
              Schedule Now
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default MembershipSoftwarePage;
