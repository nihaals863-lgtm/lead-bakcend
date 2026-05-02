import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFAB = () => {
  const whatsappNumber = "+919876543210"; // Replace with actual number
  const message = "Hello ReSpark, I would like to know more about your Salon Management Software.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-8 right-8 z-[9999]"
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        {/* Label */}
        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-charcoal text-xs font-black rounded-xl shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
        
        {/* Button */}
        <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-2 active:scale-95 group relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <MessageCircle className="w-8 h-8 relative z-10" />
          
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></div>
        </div>
      </a>
    </motion.div>
  );
};

export default WhatsAppFAB;
