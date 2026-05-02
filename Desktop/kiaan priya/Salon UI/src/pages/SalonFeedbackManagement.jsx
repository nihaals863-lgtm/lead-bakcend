import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Star, ClipboardCheck, BarChart3, Users, CheckCircle, Plus, Minus, Search, Smartphone, Award, ShieldCheck } from 'lucide-react';
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

const SalonFeedbackManagement = () => {
  const feedbackFeatures = [
    {
      title: "Customizable Feedback Forms",
      desc: "Ask what matters most to you and your clients, from feedback for parlor services to ambience, product suggestions, and staff performance.",
      icon: ClipboardCheck,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Spa Feedback Form Ready",
      desc: "Tailor forms to suit spas, salons, or hybrid setups. Ideal for wellness centers offering massages, skincare, or therapy sessions.",
      icon: Smartphone,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Auto-Google Review Integration",
      desc: "Clients who rate their experience 4+ stars are redirected to your salon’s Google Review page, helping you build a stronger online reputation.",
      icon: Search,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Feedback After Every Visit",
      desc: "Unlike a one-time hair salon review, ReSpark captures input for each service and each team member, showing clients that every visit matters.",
      icon: MessageSquare,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  const reportCards = [
    {
      title: "High-Performing Team Members",
      content: [
        "Identify high-performing team members",
        "Spot areas that need staff training",
        "Track trends in service quality or client sentiment"
      ],
      icon: Award
    },
    {
      title: "Stylist-Specific Performance Monitoring",
      content: [
        "Understand the stylist’s performance and client satisfaction",
        "Provide targeted coaching and recognition",
        "Make informed HR and training decisions based on real feedback"
      ],
      icon: Users
    },
    {
      title: "Anonymous Feedback for Honest Opinions",
      content: [
        "Some clients hesitate to share feedback in person",
        "Forms include an anonymous option for honest sharing",
        "Builds a stronger, more transparent relationship"
      ],
      icon: ShieldCheck
    }
  ];

  const benefits = [
    "Improve service quality with specific, stylist-wise feedback.",
    "Increase staff accountability and boost morale.",
    "Automate the entire feedback process, reducing workload.",
    "Grow your salon’s reputation with consistent, positive reviews.",
    "Make better decisions using real data, not assumptions."
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
              Feedback <span className="text-rose-gold">Management</span> <br />
              Software For Spas & Salons
            </h1>
            <p className="text-xl text-charcoal/80 font-bold">Automated feedback forms, stylist-specific reviews and auto-Google prompts to help you improve every experience.</p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl font-medium">
              In the beauty and wellness industry, every experience matters. Yet collecting consistent, honest feedback can be a challenge. Manual methods often go ignored, while one-time online reviews don’t reflect the full picture. That’s where ReSpark’s salon feedback management software steps in. With every bill, your clients automatically receive a customized feedback form—no follow-ups needed.
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Feedback Dashboard" 
                className="w-full aspect-[4/3] drop-shadow-2xl rounded-[2.5rem] object-cover border-[8px] border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Automated Feedback Collection Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" alt="Feedback Collection" className="rounded-[3rem] shadow-2xl" />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-black text-charcoal leading-tight">
              Automated <br /> <span className="text-rose-gold">Feedback Collection</span>
            </h2>
            <p className="text-lg text-charcoal/70 font-medium">
              Clients receive a feedback link with every e-invoice—no manual reminders needed. This ensures ongoing, structured feedback for salon services.
            </p>
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-charcoal">Each Form can include:</h4>
              <div className="space-y-4">
                 {[
                   "Star ratings for stylists and services.",
                   "Feedback on overall salon hygiene, wait time, ambience and more.",
                   "Targeted expertise questions (e.g. \"Did our parlor service meet your expectations?\")"
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-rose-gold shrink-0 mt-1" />
                     <span className="text-charcoal/70 font-medium leading-relaxed">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Real-Time Dashboard Section */}
      <section className="py-12 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-4">
            Real-Time Feedback <br /> <span className="text-rose-gold">Dashboard & Daily Reports</span>
          </h2>
          <p className="text-lg text-charcoal/60 font-medium mb-16">
            Every response is automatically compiled into daily reports sent to the salon owner or manager.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reportCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl text-left space-y-6"
              >
                <div className="w-14 h-14 bg-rose-gold/5 text-rose-gold rounded-2xl flex items-center justify-center">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-charcoal leading-tight">{card.title}</h3>
                <ul className="space-y-3">
                  {card.content.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-charcoal/60 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-4 bg-rose-gold/5 rounded-2xl border border-purple-100 inline-block">
             <p className="text-rose-gold font-bold flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> All feedback remains private to salon owners and managers
             </p>
          </div>
        </div>
      </section>

      {/* 4. Make Every Visit Count Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[3.5rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600" 
            alt="Make Every Visit Count" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Make Every Visit Count</h2>
              <p className="text-lg text-white/80 font-medium">
                Capture actionable feedback with every bill, not just once. With ReSpark’s salon feedback management software, you turn every client interaction into a chance to improve and grow.
              </p>
            </div>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-2xl whitespace-nowrap">
              Book A Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* 5. Key Features Section (Side-by-Side Layout) */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image with Stats */}
            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800" 
                  alt="Feedback Tool" 
                  className="rounded-[4rem] shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-rose-gold/5 rounded-2xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-rose-gold" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-charcoal">4.9/5</div>
                      <div className="text-xs font-bold text-charcoal/50 uppercase tracking-widest">Avg. Rating</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
                   <div className="text-center">
                      <div className="text-3xl font-black text-emerald-600">329</div>
                      <div className="text-xs font-bold text-charcoal/50 uppercase tracking-widest">Feedbacks Recieved</div>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Right Features List */}
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-black text-charcoal leading-tight">
                  Key Features of ReSpark's <br />
                  <span className="text-rose-gold text-3xl lg:text-4xl">Feedback Management Tool</span>
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    num: "1",
                    title: "Customizable Feedback Forms",
                    desc: "Ask what matters most to you and your clients, from feedback for parlor services to ambience, product suggestions, and staff performance"
                  },
                  {
                    num: "2",
                    title: "Spa Feedback Form Ready",
                    desc: "Tailor forms to suit spas, salons, or hybrid setups. Ideal for wellness centers offering massages, skincare, or therapy sessions"
                  },
                  {
                    num: "3",
                    title: "Auto-Google Review Integration",
                    desc: "Clients who rate their experience 4+ stars are redirected to your salon's Google Review page, helping you build a stronger online reputation with minimal effort."
                  },
                  {
                    num: "4",
                    title: "Feedback After Every Visit",
                    desc: "Unlike a one-time hair salon review, ReSpark captures input for each service and each team member, showing clients that every visit matters."
                  },
                  {
                    num: "5",
                    title: "Owner-Only Access",
                    desc: "All feedback remains private to salon owners and managers, ensuring client trust and candid sharing."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-rose-gold/5 text-rose-gold flex items-center justify-center font-black text-xl border-2 border-dashed border-purple-200 group-hover:bg-rose-gold group-hover:text-white group-hover:border-solid transition-all duration-300">
                      {item.num}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-black text-charcoal leading-tight">{item.title}</h4>
                      <p className="text-charcoal/60 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-12 bg-rose-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-black text-charcoal leading-tight">
              Benefits of Using ReSpark's <br /> <span className="text-rose-gold">Feedback Module</span>
          </motion.h2>
            <div className="space-y-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 mt-1">
                     <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="text-charcoal/80 font-medium text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
             <img src="https://respark.in/wp-content/uploads/2024/02/feedback-mobile-mockup.png" alt="Feedback App" className="w-full max-w-sm mx-auto drop-shadow-2xl" 
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600'} />
          </div>
        </div>
      </section>

      {/* 6. Trusted Brands Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-black text-charcoal">Trusted by Top <span className="text-rose-gold">Salons, Spas & Wellness Brands</span></h2>
          <div className="mt-12 relative overflow-hidden py-4">
            <motion.div 
              className="flex items-center gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[
                "https://respark.in/wp-content/uploads/2025/05/Amira.png",
                "https://respark.in/wp-content/uploads/2025/05/Beauty-lovers-logo.png",
                "https://respark.in/wp-content/uploads/2025/05/DrPriya.png",
                "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png",
                "https://respark.in/wp-content/uploads/2025/05/v_cut.png",
                "https://respark.in/wp-content/uploads/2025/05/zira.png",
                "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png",
                "https://respark.in/wp-content/uploads/2025/05/habit.png",
                // duplicate
                "https://respark.in/wp-content/uploads/2025/05/Amira.png",
                "https://respark.in/wp-content/uploads/2025/05/Beauty-lovers-logo.png",
                "https://respark.in/wp-content/uploads/2025/05/DrPriya.png",
                "https://respark.in/wp-content/uploads/2025/05/Glaze_Logo.png",
                "https://respark.in/wp-content/uploads/2025/05/v_cut.png",
                "https://respark.in/wp-content/uploads/2025/05/zira.png",
                "https://respark.in/wp-content/uploads/2025/05/Sana-Chouhan.png",
                "https://respark.in/wp-content/uploads/2025/05/habit.png",
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
              <h3 className="text-4xl font-black text-charcoal leading-tight">FAQs About ReSpark's Feedback System</h3>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="Can I customize the feedback form for different services?" 
                answer="Yes, you can! Whether it’s questions about hair color, spa hygiene, or retail products, you can customize the fields to gather the specific data you need." 
              />
              <FAQItem 
                question="Is client feedback truly anonymous?" 
                answer="Absolutely. ReSpark allows clients to choose anonymity. This means you receive honest, unfiltered feedback for salon services, leading to better action plans." 
              />
              <FAQItem 
                question="How does the Google Review integration work?" 
                answer="If a client gives a 4+ star rating in their private feedback, ReSpark automatically redirects them to your Google Review page—helping you collect more salons reviews without ever asking for it directly." 
              />
              <FAQItem 
                question="How do I access the daily reports?" 
                answer="All feedback is consolidated into a report sent daily to the salon owner or designated manager. You can view stylist-wise summaries, customer satisfaction trends, and flagged concerns in one place." 
              />
              <FAQItem 
                question="Can I gather feedback after every visit, not just once?" 
                answer="Yes! This is what sets ReSpark apart. Every bill generates a feedback link, so you get ongoing updates, not just one-time customer feedback for salon services." 
              />
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full">
               <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" alt="Feedback System FAQ" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-24">
        <div className="relative w-full rounded-[3.5rem] overflow-hidden min-h-[180px] flex items-center bg-[#0a0a0a]">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600" 
            alt="Feedback Transform" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="relative z-10 w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                Ready to Transform Feedback into Growth?
              </h2>
              <p className="text-lg text-white/80 font-medium">
                Don’t wait for reviews—create them. With ReSpark, feedback becomes your superpower.
              </p>
            </div>
            <button className="px-10 py-4 bg-rose-gold text-white rounded-full font-black text-lg hover:bg-purple-800 transition-all shadow-2xl whitespace-nowrap mx-auto md:mx-0">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalonFeedbackManagement;













