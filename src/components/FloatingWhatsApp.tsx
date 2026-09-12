import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      id="floating-whatsapp"
      href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
        STUDIO_INFO.whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden lg:flex fixed bottom-8 right-8 z-50 items-center justify-center w-14 h-14 bg-white/70 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(28,27,25,0.12)] rounded-full text-[#1C1B19] hover:-translate-y-1 transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6 text-[#1C1B19] group-hover:text-[#8A7360] transition-colors" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <div className="bg-[#1C1B19] text-[#FBF9F5] text-[10px] uppercase tracking-widest px-3 py-2 rounded-[2px]">
          Chat With Us
        </div>
      </div>
    </a>
  );
};
