import React from 'react';
import { Scissors, MessageCircle, Share2, Globe, User, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-purple/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-royal-purple rounded-xl flex items-center justify-center shadow-xl shadow-royal-purple/20 transform -rotate-6">
                <Scissors className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">RES<span className="text-royal-purple">PARK</span></span>
            </Link>
            <p className="text-white/40 leading-relaxed text-sm font-medium italic max-w-xs">
              Globally Trusted All-in-One Salon & Spa Software with POS, Online Booking & Catalog, Reminders, Membership, Packages, Loyalty, Feedback, Incentives, Inventory & CRM.
            </p>
            <div className="flex gap-3">
              {[MessageCircle, Share2, Globe, User].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-royal-purple transition-all duration-300 transform hover:-translate-y-1 group">
                  <Icon className="w-5 h-5 text-white group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Software Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-royal-purple flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-royal-purple rounded-full"></div> Software
            </h4>
            <ul className="space-y-2.5 text-white/40 font-medium text-sm">
              <li><Link to="#" className="hover:text-white transition-colors"> Beauty Salon Software</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors"> Spa Management Software</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors"> Pet Grooming Software</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors"> Tattoo Parlour Software</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors"> Nails Studio Software</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-royal-purple flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-royal-purple rounded-full"></div> Company
            </h4>
            <ul className="space-y-2.5 text-white/40 font-medium text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-royal-purple flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-royal-purple rounded-full"></div> Contact Us
            </h4>
            <ul className="space-y-4 text-white/40 font-medium text-[13px]">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-royal-purple mt-0.5" />
                <span>Pune, India - 411006.</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-royal-purple" />
                <span>+91 91750 99232</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-royal-purple" />
                <span>contact@respark.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-medium">© {new Date().getFullYear()} ReSpark Salon Software. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
