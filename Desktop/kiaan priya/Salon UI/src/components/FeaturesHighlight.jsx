import React from 'react';
import { ShoppingCart, Calendar, Users, BarChart3, Package, Megaphone, Smartphone, MessageCircle, Layout, UserCheck, Gift, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: ShoppingCart,
    title: 'POS Billing',
    desc: 'Invoices via WhatsApp/SMS. Automatically apply memberships & discounts.',
    color: 'from-purple-500 to-royal-purple',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
    link: '/salon-pos-software'
  },
  {
    icon: Calendar,
    title: 'Online Appointments',
    desc: 'Clients book services and choose stylists through an integrated catalog.',
    color: 'from-rose-gold to-rose-gold-dark',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400',
    link: '/salon-appointment-booking-software'
  },
  {
    icon: UserCheck,
    title: 'Staff Management',
    desc: 'Schedule shifts, track attendance, and set goals with automated incentive calculations.',
    color: 'from-emerald-400 to-teal-600',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    link: '/salon-staff-management'
  },
  {
    icon: Layout,
    title: 'Digital Catalog',
    desc: 'Create, manage and update your customized digital store for all services and products.',
    color: 'from-purple-400 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600',
    link: '/salon-digital-catalog'
  },
  {
    icon: Users,
    title: 'Membership',
    desc: 'Provide repeat customers with special rewards and increase loyalty.',
    color: 'from-purple-600 to-indigo-700',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400',
    link: '/salon-spa-membership-software'
  },
  {
    icon: BarChart3,
    title: 'CRM Insights',
    desc: '360-degree view of client history to personalize service and build loyalty.',
    color: 'from-charcoal to-charcoal-light',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    link: '/salon-crm-software'
  },
  {
    icon: Package,
    title: 'Inventory Control',
    desc: 'Real-time stock tracking with low-stock alerts linked directly to billing.',
    color: 'from-orange-400 to-red-500',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600',
    link: '/salon-inventory-management-software'
  },
  {
    icon: Megaphone,
    title: 'WhatsApp Marketing',
    desc: 'Send confirmations, promos, and reminders directly to your clients.',
    color: 'from-green-400 to-green-600',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    link: '/salon-spa-whatsapp-integration'
  },
  {
    icon: Smartphone,
    title: 'E-Commerce',
    desc: 'Sell your salon products online 24/7 with our unified platform.',
    color: 'from-royal-purple to-pink-500',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=400',
    link: '/spa-salon-ecommerce-software'
  },
  {
    icon: MessageCircle,
    title: 'Feedback Management',
    desc: 'Collect real-time reviews to enhance customer satisfaction instantly.',
    color: 'from-blue-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&q=80&w=600',
    link: '/salon-feedback-management'
  },
  {
    icon: Gift,
    title: 'Loyalty & E-Vouchers',
    desc: 'Reward repeat clients with gift cards, vouchers, and personalized points.',
    color: 'from-amber-400 to-orange-600',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400',
    link: '/salon-loyalty-program-software'
  },
  {
    icon: HelpCircle,
    title: 'Enquiry Management',
    desc: 'Track and convert every potential lead with integrated follow-up tools.',
    color: 'from-cyan-400 to-blue-600',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=400',
    link: '/salon-enquiry-management-software'
  },
];

const FeaturesHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-royal-purple-light/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black text-royal-purple uppercase tracking-[0.4em]">Powerful Features</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-charcoal">
            Everything you need to <span className="text-royal-purple">scale your Salon</span>
          </h3>
          <div className="w-24 h-1.5 bg-royal-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(107,33,168,0.2)] border border-royal-purple/5 transition-all duration-500"
            >
              {/* Image Preview */}
              <div className="h-48 overflow-hidden relative">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h4 className="text-xl font-bold text-charcoal group-hover:text-royal-purple transition-colors">
                  {feature.title}
                </h4>
                <p className="text-charcoal/60 leading-relaxed font-medium text-sm">
                  {feature.desc}
                </p>
                <div className="pt-4">
                  <Link to={feature.link} className="inline-flex text-royal-purple font-bold text-xs uppercase tracking-widest items-center gap-2 group/btn cursor-pointer">
                    Learn More
                    <span className="w-6 h-px bg-royal-purple group-hover/btn:w-10 transition-all"></span>
                  </Link>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;
