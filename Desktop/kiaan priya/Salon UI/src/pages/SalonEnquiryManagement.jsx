import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, PhoneCall, MessageSquare, Filter, CheckCircle, Plus, Minus, UserPlus, BellRing, Target, Activity } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-rose-gold/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="text-lg font-bold text-charcoal">{question}</span>
        {isOpen ? <Minus className="text-rose-gold" /> : <Plus className="text-charcoal/40" />}
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

const SalonEnquiryManagement = () => {
  const enquiryFeatures = [
    {
      title: "Omnichannel Lead Capture",
      desc: "Automatically funnel enquiries from WhatsApp, Instagram, Facebook, and walk-ins into one centralized dashboard.",
      icon: MessageSquare,
      color: "text-rose-gold",
      bg: "bg-rose-gold/10"
    },
    {
      title: "Smart Follow-up Reminders",
      desc: "Never miss a lead. Set automated alerts for staff to follow up on high-value enquiries like bridal packages.",
      icon: BellRing,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Lead Prioritization",
      desc: "Tag enquiries as High, Medium, or Low priority to ensure your team focuses on the most urgent or lucrative leads first.",
      icon: Target,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Conversion Analytics",
      desc: "Track which channels bring in the most leads and monitor staff conversion rates in real-time.",
      icon: Activity,
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-50"
    }
  ];

  const benefits = [
    "Centralize all customer enquiries in one simple dashboard.",
    "Prevent lead leakage with mandatory follow-up schedules.",
    "Assign leads to specific staff members based on expertise.",
    "Analyze marketing ROI by tracking enquiry sources.",
    "Seamlessly convert enquiries into booked appointments."
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
              Salon <span className="text-rose-gold">Enquiry</span> <br />
              Management
            </h1>
            <p className="text-xl text-charcoal/80 font-bold">Never let a potential client slip through the cracks again.</p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              Turn every question into a booked appointment. ReSpark’s Enquiry Management Software captures leads from every channel—WhatsApp, social media, and walk-ins—organizing them into a single, actionable dashboard with smart follow-up reminders.
            </p>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-lg shadow-rose-gold/20">
              Start Tracking Leads
            </button>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Enquiry Management Dashboard" 
                className="w-full aspect-[4/3] object-cover drop-shadow-2xl rounded-[2.5rem] border-[8px] border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-rose-gold/10">
                 <div className="w-12 h-12 bg-rose-gold/10 rounded-full flex items-center justify-center text-rose-gold">
                    <UserPlus className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-sm font-black text-charcoal">+60% Conversion</div>
                    <div className="text-[10px] text-charcoal/40 font-bold uppercase tracking-widest text-left">Lead to Booking</div>
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
            Everything You Need to <br /> <span className="text-rose-gold">Close More Bookings</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enquiryFeatures.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-[2.5rem] bg-white border border-rose-gold/5 shadow-xl shadow-rose-gold/5 text-left space-y-6"
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

      {/* 3. Follow-up Workflow */}
      <section className="py-12 bg-rose-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 relative order-2 lg:order-1">
             <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" alt="Lead Follow Up" className="rounded-[3rem] shadow-2xl" />
          </div>
          <div className="flex-1 space-y-8 order-1 lg:order-2 text-left">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Automated <span className="text-rose-gold">Follow-Up Workflow</span>
          </motion.h2>
            <p className="text-lg text-charcoal/70 font-medium">
              High-ticket services like bridal makeup or premium spa packages take time to close. Keep track of every conversation effortlessly.
            </p>
            <div className="space-y-4">
               {[
                 { title: "Capture Details", desc: "Instantly log client needs, dates, and budget." },
                 { title: "Assign to Staff", desc: "Route the lead to your best closing manager." },
                 { title: "Set Reminders", desc: "Get notified when it's time to call them back." },
                 { title: "Track Status", desc: "Move leads from 'New' to 'Follow Up' to 'Booked'." }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-rose-gold/10">
                    <div className="w-8 h-8 rounded-full bg-rose-gold text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal text-sm">{item.title}</h4>
                      <p className="text-[11px] text-charcoal/50 font-medium">{item.desc}</p>
                    </div>
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
              Why Centralize Your <br /> <span className="text-rose-gold">Enquiries?</span>
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
             <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Team Collaboration" className="rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-12 bg-rose-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-rose-gold uppercase tracking-widest mb-2">FAQs</h2>
            <h3 className="text-4xl font-black text-charcoal leading-tight">About Enquiry Management</h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-2 bg-white p-8 rounded-[2rem] shadow-xl border border-rose-gold/5">
            <FAQItem 
              question="Can it capture leads from Instagram?" 
              answer="Yes, the system allows you to log enquiries coming from social media platforms, ensuring no DM or comment is forgotten." 
            />
            <FAQItem 
              question="Can I assign leads to specific team members?" 
              answer="Absolutely. You can assign specific enquiries to stylists or managers best suited to handle them, complete with due dates." 
            />
            <FAQItem 
              question="Does it integrate with the appointment calendar?" 
              answer="Yes! Once an enquiry is successfully converted, you can push the details directly into your appointment calendar with one click." 
            />
            <FAQItem 
              question="Can I see how many leads convert?" 
              answer="Yes, the dashboard provides detailed analytics showing your lead conversion rate, helping you measure your marketing success." 
            />
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-20 text-center bg-white">
         <div className="max-w-4xl mx-auto space-y-8 px-4">
            <h2 className="text-3xl lg:text-4xl font-black text-charcoal">Stop Losing Valuable Leads Today</h2>
            <p className="text-xl text-charcoal/60 font-medium">Organize your follow-ups, boost your conversion rates, and fill your calendar faster.</p>
            <button className="px-12 py-5 bg-rose-gold text-white rounded-full font-black text-xl hover:bg-purple-800 shadow-2xl shadow-rose-gold/30 transition-all">
               Request A Demo
            </button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonEnquiryManagement;













