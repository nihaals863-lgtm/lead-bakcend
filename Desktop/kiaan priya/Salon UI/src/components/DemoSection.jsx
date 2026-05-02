import React from 'react';
import { Send, CheckCircle } from 'lucide-react';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      {/* Vibrant Colored Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1500" 
          alt="Vibrant Salon" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-royal-purple/90 via-royal-purple/80 to-charcoal/90 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-white">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Ready to scale? <br />
              <span className="text-rose-gold">Book your Demo</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-medium max-w-lg">
              Join 10,000+ salon owners who transformed their business with ReSpark. Get a personalized walkthrough today.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Personalized Demo",
                "Growth Roadmap",
                "Custom Pricing",
                "Instant Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <CheckCircle className="text-rose-gold w-5 h-5" />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Form */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white p-6 lg:p-8 rounded-[2rem] shadow-2xl border border-white/20 text-charcoal">
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Full Name*</label>
                  <input type="text" required className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:bg-white outline-none p-2.5 rounded-lg text-sm transition-all" placeholder="Enter your name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Phone*</label>
                    <input type="tel" required className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:bg-white outline-none p-2.5 rounded-lg text-sm transition-all" placeholder="Phone" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Email*</label>
                    <input type="email" required className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:bg-white outline-none p-2.5 rounded-lg text-sm transition-all" placeholder="Email" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Business Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:bg-white outline-none p-2.5 rounded-lg text-sm transition-all" placeholder="Your Salon/Spa name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Country*</label>
                    <input type="text" required className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:bg-white outline-none p-2.5 rounded-lg text-sm transition-all" placeholder="Country" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-charcoal/40 ml-1">City*</label>
                    <input type="text" required className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:bg-white outline-none p-2.5 rounded-lg text-sm transition-all" placeholder="City" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-charcoal/40 ml-1">Message</label>
                  <textarea rows="2" className="w-full bg-gray-50 border border-gray-100 focus:border-royal-purple focus:bg-white outline-none p-2.5 rounded-lg text-sm transition-all resize-none" placeholder="How can we help?"></textarea>
                </div>

                <button type="submit" className="w-full py-3.5 bg-royal-purple text-white rounded-lg font-black text-base hover:bg-purple-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-royal-purple/20 mt-2">
                  Book Free Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
