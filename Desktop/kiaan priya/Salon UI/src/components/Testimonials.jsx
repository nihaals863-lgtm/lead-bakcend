import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Owner, Glow Beauty Studio',
    text: 'ReSpark transformed how I run my salon. Appointments, billing, and WhatsApp reminders — everything is automated. My revenue went up by 40% in just 3 months!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?u=priyasharma',
    location: 'Mumbai',
    highlight: '40% Revenue Growth'
  },
  {
    id: 2,
    name: 'Anjali Mehta',
    role: 'Founder, Anara Spa & Wellness',
    text: 'The multi-branch management is a game changer. I can now track inventory, staff performance, and sales across all my 3 locations from one screen. Absolutely love it!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?u=anjalimehta',
    location: 'Delhi',
    highlight: '3 Branches Managed'
  },
  {
    id: 3,
    name: 'Rohan Verma',
    role: 'Manager, The Men\'s Room Salon',
    text: 'POS billing with automatic discounts and WhatsApp invoices has saved us 2 hours every single day. Our clients love how smooth and professional the experience is now.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?u=rohanverma',
    location: 'Pune',
    highlight: '2 Hrs Saved Daily'
  },
  {
    id: 4,
    name: 'Sneha Kulkarni',
    role: 'Owner, Zoe Nails & Beauty',
    text: 'The loyalty program and membership features have helped me retain clients like never before. I now have 500+ active members who visit regularly!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?u=snehakulkarni',
    location: 'Bangalore',
    highlight: '500+ Active Members'
  },
  {
    id: 5,
    name: 'Manila DSouza',
    role: 'CEO, Elora\'s PMU & Korean Esthetics',
    text: 'The CRM and campaign creator helped us run targeted WhatsApp promotions that brought back lapsed clients. Our repeat visit rate jumped by 60%!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?u=maniladouza',
    location: 'Goa',
    highlight: '60% Repeat Visits'
  },
  {
    id: 6,
    name: 'Janhavi Patil',
    role: 'Director, Four Fountains De-Stress Spa',
    text: 'Online booking and therapist scheduling has made our daily operations completely stress-free. ReSpark is truly built for the spa industry.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?u=janhavipatil',
    location: 'Hyderabad',
    highlight: '100% Stress-Free Ops'
  }
];

const Testimonials = () => {
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [page, setPage] = useState(0);
  const perPage = windowWidth < 768 ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-20 bg-gradient-to-b from-royal-purple-light/20 to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-royal-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-sm font-black text-royal-purple uppercase tracking-[0.4em]">Real Results</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-charcoal">
            Loved by <span className="text-royal-purple">10,000+ Salons</span>
          </h3>
          <p className="text-charcoal/50 text-lg max-w-xl mx-auto">
            Don't just take our word for it — see what salon owners across India are saying.
          </p>
          <div className="w-20 h-1.5 bg-royal-purple mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visible.map((t) => (
              <motion.div
                key={t.id}
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-[2rem] p-8 shadow-xl border border-royal-purple/5 hover:shadow-2xl hover:shadow-royal-purple/10 transition-all duration-500 flex flex-col"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-royal-purple text-white rounded-2xl flex items-center justify-center shadow-lg shadow-purple-900/20">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                {/* Highlight Badge */}
                <div className="absolute top-6 right-6 bg-royal-purple/10 text-royal-purple text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {t.highlight}
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4 mt-2 text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-charcoal/70 leading-relaxed text-sm flex-1 italic mb-6">
                  "{t.text}"
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-royal-purple/10 mb-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-royal-purple/20"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal text-sm">{t.name}</h4>
                    <p className="text-[11px] text-royal-purple font-semibold">{t.role}</p>
                    <p className="text-[10px] text-charcoal/30 font-bold uppercase tracking-wider">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-12 h-12 rounded-full border-2 border-royal-purple/20 flex items-center justify-center text-royal-purple hover:bg-royal-purple hover:text-white disabled:opacity-30 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === page ? 'bg-royal-purple w-8' : 'bg-royal-purple/20'}`}
            />
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-12 h-12 rounded-full border-2 border-royal-purple/20 flex items-center justify-center text-royal-purple hover:bg-royal-purple hover:text-white disabled:opacity-30 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
