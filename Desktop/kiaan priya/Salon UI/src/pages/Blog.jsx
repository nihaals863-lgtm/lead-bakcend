import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "The Ultimate Guide to Salon Marketing Ideas",
    desc: "Transforming your salon into a thriving, profitable business takes more than just creative flair and technical expertise—it demands a well-thought-out, realistic, and consistently executed marketing strategy. Whether you're an independent stylist, a boutique salon owner, or managing a full-service beauty studio...",
    date: "March 16, 2026",
    author: "Radhika Sathe",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  },
  {
    title: "Top 5 Salon Trends for 2026 to Win More Clients",
    desc: "Driven by biotech innovations, regenerative sustainability, and AI-driven autonomy, the salon industry is entering a new era of sophistication. Staying ahead of these trends is crucial for attracting and retaining modern clients who expect more than just basic services...",
    date: "March 10, 2026",
    author: "ReSpark Team",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  },
  {
    title: "5 Reasons Your Salon Clients Aren’t Coming Back (And What to Do About It)",
    desc: "Have you ever wondered why some clients don’t return to your salon even after saying they enjoyed the service? This happens more often than you might think. We break down the top five reasons for client churn and actionable strategies to fix them...",
    date: "March 5, 2026",
    author: "ReSpark Team",
    image: "https://images.unsplash.com/photo-1516975080661-46bca8210168?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  },
  {
    title: "Salon Technology, Simplified: A Practical Guide for Owners",
    desc: "It’s 4 PM on a packed Friday. The phone won’t stop ringing, your front desk is managing a line of walk-ins, someone’s waiting to pay, a stylist is calling out for stock... Sound familiar? Discover how the right technology can streamline these chaotic moments...",
    date: "February 28, 2026",
    author: "ReSpark Team",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  },
  {
    title: "Transform Referrals into Revenue with ReSpark’s Salon Billing Software",
    desc: "The beauty salon industry has seen exponential growth over the years, and strong client relationships help you bring success to your salon business. Learn how to leverage billing software to automate referrals and increase your bottom line...",
    date: "February 20, 2026",
    author: "ReSpark Team",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  },
  {
    title: "The Complete Guide to Salon Billing Software: Features, Benefits & Choosing the Right Fit",
    desc: "Choosing the right billing software is a critical decision for any salon owner. From inventory management to tax compliance, discover the essential features your billing software must have to keep your operations running smoothly and efficiently...",
    date: "February 15, 2026",
    author: "ReSpark Team",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  },
  {
    title: "Why ReSpark’s Salon Management Software Essential for Your Salon and Spa Business?",
    desc: "Managing a modern salon requires juggling multiple tasks simultaneously. ReSpark's comprehensive suite brings scheduling, billing, staff management, and marketing into one unified platform, saving you hours of administrative work each week...",
    date: "February 10, 2026",
    author: "ReSpark Team",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  },
  {
    title: "The Real ROI of Salon Scheduling Software: More Clients, Less Admin, Higher Profits",
    desc: "Investing in scheduling software is more than just a convenience—it's a profit driver. We break down the real return on investment, showing how automated reminders and seamless online booking can dramatically increase your salon's monthly revenue...",
    date: "February 5, 2026",
    author: "ReSpark Team",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  },
  {
    title: "10 Ways Salon Appointment Software Can Boost Your Client Retention",
    desc: "Client retention is the lifeblood of any salon. Discover ten powerful ways appointment software helps you create memorable customer experiences, from personalized booking journeys to automated re-engagement campaigns...",
    date: "January 28, 2026",
    author: "ReSpark Team",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    link: "/blog/salon-marketing-ideas"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-rose-gold/20">
      <Navbar />
      
      {/* 1. Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-gold/5 via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal leading-tight mb-6"
          >
            ReSpark Salon Blog: <br/> 
            <span className="text-rose-gold">Insights & Tips</span> For Growth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-xl text-charcoal/60 font-medium max-w-2xl mx-auto"
          >
            Stay ahead in the salon industry with blogs on salon management, appointment software, billing, client retention & much more.
          </motion.p>
        </div>
      </section>

      {/* 2. Blog Layout (Main Content + Sidebar) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Blog Posts List */}
          <div className="flex-1 space-y-16">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="group border-b border-gray-100 pb-16 last:border-0"
              >
                <Link to={post.link} className="block overflow-hidden rounded-[2rem] mb-8 bg-gray-100 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-64 sm:h-80 lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </Link>
                
                <div className="flex items-center gap-2 text-sm font-bold text-rose-gold uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="text-charcoal/30">•</span>
                  <span>{post.author}</span>
                </div>
                
                <Link to={post.link}>
                  <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-4 group-hover:text-rose-gold transition-colors leading-tight">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-lg text-charcoal/70 leading-relaxed mb-6 line-clamp-3 font-medium">
                  {post.desc}
                </p>
                
                <Link 
                  to={post.link} 
                  className="inline-flex items-center gap-2 text-rose-gold font-bold hover:text-purple-800 transition-colors group/btn"
                >
                  Read More 
                  <ChevronRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}


          </div>

          {/* Right Column: Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-12 lg:sticky lg:top-32 h-fit">
            
            {/* Search Widget */}
            <div>
              <h3 className="text-sm font-black text-charcoal uppercase tracking-widest mb-4">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-all text-sm font-medium"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-rose-gold transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div>
              <h3 className="text-sm font-black text-charcoal uppercase tracking-widest mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {blogPosts.slice(0, 5).map((post, i) => (
                  <div key={i} className="group">
                    <Link to={post.link} className="flex gap-4">
                      <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-charcoal line-clamp-2 group-hover:text-rose-gold transition-colors leading-snug mb-1">
                          {post.title}
                        </h4>
                        <span className="text-xs font-bold text-rose-gold/60 uppercase tracking-wider">{post.date}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Widget */}
            <div>
              <h3 className="text-sm font-black text-charcoal uppercase tracking-widest mb-4">Categories</h3>
              <div className="flex flex-col gap-2">
                {['Marketing & Growth', 'Salon Technology', 'Client Retention', 'Productivity', 'Salon Billing'].map((cat, i) => (
                  <a key={i} href="#" className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 group">
                    <span className="text-charcoal/70 font-medium group-hover:text-rose-gold transition-colors">{cat}</span>
                    <span className="text-xs font-bold bg-gray-50 text-charcoal/40 px-2 py-1 rounded-lg group-hover:bg-rose-gold/10 group-hover:text-rose-gold transition-colors">
                      {Math.floor(Math.random() * 15) + 2}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-rose-gold to-indigo-900 rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
              Ready to implement these strategies?
            </h2>
            <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
              Get started with ReSpark today and turn these ideas into reality with our powerful all-in-one software.
            </p>
            <div className="pt-4">
              <button className="px-10 py-4 bg-white text-rose-gold rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 active:scale-95">
                Book Your Free Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
