import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, Menu, X, Scissors, Calendar, ShieldCheck, PieChart, Users, Star,
  MessageSquare, Gift, Rocket, ShoppingCart, Info, UserCheck, Layout, Package,
  Target, MessageCircle, Send, Globe, HelpCircle
} from 'lucide-react';
import { FEATURE_MENU_ITEMS } from '../data/dummyData';

const Navbar = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsFeaturesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsFeaturesOpen(false);
    }, 200); // 200ms delay to prevent flickering
  };

  const iconMap = {
    ShoppingCart: ShoppingCart,
    Calendar: Calendar,
    Layout: Layout,
    Package: Package,
    Users: Users,
    Target: Target,
    MessageCircle: MessageCircle,
    Gift: Gift,
    Send: Send,
    Globe: Globe,
    HelpCircle: HelpCircle,
    UserCheck: UserCheck
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-royal-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-royal-purple rounded-lg flex items-center justify-center">
                <Scissors className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-charcoal tracking-tight">RES<span className="text-royal-purple">PARK</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-charcoal hover:text-royal-purple transition-colors font-medium">Home</Link>

            {/* Features Dropdown */}
            <div
              className="relative py-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-charcoal hover:text-royal-purple transition-colors font-medium cursor-pointer">
                Features <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isFeaturesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-xl shadow-2xl border border-royal-purple/10 p-4 grid grid-cols-2 gap-x-4 gap-y-2 mt-0 animate-in fade-in slide-in-from-top-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Transparent Bridge to prevent closing on gap */}
                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />

                  {FEATURE_MENU_ITEMS.map((item) => {
                    const Icon = iconMap[item.icon] || Info;
                    return (
                      <Link
                        key={item.title}
                        to={item.link}
                        className="flex gap-3 p-2 rounded-lg hover:bg-royal-purple/5 transition-colors group/item cursor-pointer"
                        onClick={() => setIsFeaturesOpen(false)}
                      >
                        <div className="w-9 h-9 shrink-0 rounded-lg bg-royal-purple/10 flex items-center justify-center text-royal-purple group-hover/item:bg-royal-purple group-hover/item:text-white transition-colors">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-charcoal group-hover/item:text-royal-purple transition-colors truncate">{item.title}</h4>
                          <p className="text-[11px] text-charcoal/60 line-clamp-1">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/blog" className="text-charcoal hover:text-royal-purple transition-colors font-medium">Blog</Link>
            <Link to="/contact" className="text-charcoal hover:text-royal-purple transition-colors font-medium">Contact Us</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="px-6 py-2 text-charcoal font-medium hover:text-royal-purple transition-colors">Login</Link>
            <button className="px-6 py-2.5 bg-royal-purple text-white rounded-full font-semibold hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg shadow-purple-900/20">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/login" className="px-4 py-2 text-charcoal font-medium hover:text-royal-purple transition-colors">Login</Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-charcoal">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-royal-purple/20 p-4 space-y-4">
          <Link to="/" className="block text-lg font-medium text-charcoal">Home</Link>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-royal-purple uppercase tracking-wider">Features</p>
            <div className="grid grid-cols-1 gap-2 pl-4">
              {FEATURE_MENU_ITEMS.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="text-charcoal/70 hover:text-royal-purple py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/blog" className="block text-lg font-medium text-charcoal">Blog</Link>
          <Link to="/contact" className="block text-lg font-medium text-charcoal">Contact Us</Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link to="/login" className="w-full py-3 text-center border border-royal-purple/20 rounded-xl font-semibold">Login</Link>
            <button className="w-full py-3 bg-royal-purple text-white rounded-xl font-semibold shadow-lg shadow-purple-900/20">Request Demo</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
