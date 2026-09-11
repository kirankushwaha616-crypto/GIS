import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenConsultation?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenConsultation }) => {
  const handleConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      id="mobile-action-bar"
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FBF9F5]/96 backdrop-blur-md border-t border-[#E8E2D7] px-3 py-2.5 shadow-[0_-4px_16px_rgba(28,27,25,0.06)]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Action */}
        <a
          href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
            STUDIO_INFO.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#F5F1E9] border border-[#E8E2D7] text-[#1C1B19] rounded-[2px] active:bg-[#ECE6DC]"
        >
          <MessageCircle className="w-4 h-4 text-[#8A7360]" />
          <span className="text-[10px] uppercase tracking-wider font-medium mt-1">
            WhatsApp
          </span>
        </a>

        {/* Call Now Action */}
        <a
          href={`tel:${STUDIO_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#F5F1E9] border border-[#E8E2D7] text-[#1C1B19] rounded-[2px] active:bg-[#ECE6DC]"
        >
          <Phone className="w-4 h-4 text-[#8A7360]" />
          <span className="text-[10px] uppercase tracking-wider font-medium mt-1">
            Call Now
          </span>
        </a>

        {/* Get Consultation */}
        <button
          onClick={handleConsultation}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#1C1B19] text-[#FBF9F5] rounded-[2px] active:bg-[#322F2A]"
        >
          <Calendar className="w-4 h-4 text-[#D8D1C4]" />
          <span className="text-[10px] uppercase tracking-wider font-medium mt-1">
            Consult
          </span>
        </button>

      </div>
    </aside>
  );
};
