import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-royal-purple/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold text-charcoal group-hover:text-royal-purple transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-royal-purple shrink-0" /> : <ChevronDown className="text-charcoal/30 group-hover:text-royal-purple shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-charcoal/60 leading-relaxed text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How can ReSpark help grow my salon business?",
      answer: "ReSpark automates your daily operations, from online bookings to inventory management. By reducing manual work and providing data-driven insights, it helps you focus on client satisfaction and marketing, which leads to increased revenue and growth."
    },
    {
      question: "Is my data secure with ReSpark?",
      answer: "Absolutely. We use industry-standard encryption and secure cloud servers to ensure your client data, financial records, and business insights are protected 24/7."
    },
    {
      question: "Can I manage multiple salon branches with one account?",
      answer: "Yes, ReSpark is built for multi-location businesses. You can track performance, manage staff, and sync inventory across all your branches from a single unified dashboard."
    },
    {
      question: "Does it support WhatsApp and SMS reminders?",
      answer: "Yes! ReSpark has built-in integration for WhatsApp and SMS to send automated booking confirmations, reminders, and promotional campaigns directly to your customers."
    },
    {
      question: "How difficult is it to migrate my existing data?",
      answer: "It's completely seamless. Our onboarding team helps you import all your existing client records, inventory lists, and service menus so you can start using ReSpark from day one without losing any historical data."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted Grid: FAQ takes 60% (1.2fr), Image takes 40% (0.8fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: FAQ Content (Wider) */}
          <div className="space-y-12">
            <div className="text-left space-y-4">
              <h2 className="text-sm font-black text-royal-purple uppercase tracking-[0.4em]">Got Questions?</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-charcoal leading-tight">
                Frequently Asked <br />
                <span className="text-royal-purple">Questions</span>
              </h3>
              <div className="w-20 h-1.5 bg-royal-purple rounded-full"></div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-4 lg:p-10 shadow-2xl shadow-royal-purple/5 border border-royal-purple/5">
              {faqs.map((faq, i) => (
                <FAQItem key={i} {...faq} />
              ))}
            </div>
          </div>

          {/* Right Column: Premium Bouquet Image (Taller & Proportional) */}
          <div className="relative hidden lg:flex items-center justify-center h-full min-h-[500px]">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury Bouquet" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-purple/10 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-royal-purple/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-gold/5 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
