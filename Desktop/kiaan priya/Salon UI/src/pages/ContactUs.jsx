import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Scissors, Globe, Shield } from 'lucide-react';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            
            {/* Left Side: Content */}
            <div className="space-y-8 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="inline-block px-4 py-1.5 bg-royal-purple/10 text-royal-purple text-[10px] font-black uppercase tracking-[0.25em] rounded-full mb-6">
                  Get In Touch
                </span>
                <h1 className="text-4xl lg:text-5xl font-black text-charcoal leading-tight mb-4">
                  Let's Build Your <br />
                  <span className="text-royal-purple italic">Dream Salon</span> Together
                </h1>
                <p className="text-lg text-charcoal/60 leading-relaxed max-w-md font-medium">
                  Have questions about ReSpark? Our team of salon growth experts is ready to help you scale your business.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Mail, title: 'Email Support', info: 'hello@respark.ai', color: 'bg-blue-50 text-blue-600' },
                  { icon: Phone, title: 'Sales Inquiry', info: '+91 91750 99232', color: 'bg-emerald-50 text-emerald-600' },
                  { icon: MapPin, title: 'Headquarters', info: 'Pune, India', color: 'bg-rose-gold/10 text-rose-gold' },
                  { icon: Shield, title: 'Data Security', info: 'GDPR Compliant', color: 'bg-purple-50 text-purple-600' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 mb-1">{item.title}</p>
                    <p className="text-sm font-black text-charcoal">{item.info}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trusted By snippet */}
              <div className="pt-8 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-charcoal/30 mb-4">Trusted by industry leaders</p>
                <div className="flex gap-6 grayscale opacity-30">
                  <Globe className="w-8 h-8" />
                  <Scissors className="w-8 h-8" />
                  <Shield className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              {/* Decorative blobs */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl -z-10"></div>

              <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden">
                {submitted ? (
                  <div className="py-20 text-center">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-charcoal mb-2">Message Sent!</h3>
                    <p className="text-charcoal/50 font-medium">We'll get back to you within 2 business hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-8 text-royal-purple font-black text-sm uppercase tracking-widest hover:underline">Send another message</button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-charcoal">Send us a message</h3>
                      <p className="text-sm text-charcoal/40 font-bold mt-1">We typically respond in minutes.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Full Name</label>
                          <input type="text" required placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:ring-4 focus:ring-royal-purple/5 outline-none p-4 rounded-2xl text-sm font-bold text-charcoal transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Work Email</label>
                          <input type="email" required placeholder="john@salon.com" className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:ring-4 focus:ring-royal-purple/5 outline-none p-4 rounded-2xl text-sm font-bold text-charcoal transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Phone Number</label>
                          <input type="tel" placeholder="+91 ..." className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:ring-4 focus:ring-royal-purple/5 outline-none p-4 rounded-2xl text-sm font-bold text-charcoal transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Salon Name</label>
                          <input type="text" placeholder="Lux Studio" className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:ring-4 focus:ring-royal-purple/5 outline-none p-4 rounded-2xl text-sm font-bold text-charcoal transition-all" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 ml-1">How can we help?</label>
                        <textarea rows="4" required placeholder="Tell us about your business goals..." className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:ring-4 focus:ring-royal-purple/5 outline-none p-4 rounded-2xl text-sm font-bold text-charcoal transition-all resize-none"></textarea>
                      </div>

                      <button type="submit" className="w-full py-5 bg-charcoal text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-royal-purple transition-all transform hover:-translate-y-1 shadow-xl shadow-charcoal/10 flex items-center justify-center gap-3">
                        <Send className="w-4 h-4" /> Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
