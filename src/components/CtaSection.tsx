import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenConsultation?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation }) => {
  const handleScrollToForm = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta-section" className="py-24 lg:py-36 border-b border-[#E8E2D7] bg-[#F5F1E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                Next Steps
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-[1.1] mb-6">
              Let's Create Your Space.
            </h2>

            <p className="text-[#706C64] text-base sm:text-lg font-sans leading-relaxed max-w-xl mb-10">
              Have a home, office or commercial space in mind? Start a conversation with Grand Interior Studio.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="cta-free-consultation-btn"
                onClick={handleScrollToForm}
                className="px-8 py-4 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#322F2A] transition-all duration-200 inline-flex items-center gap-2.5 rounded-[2px] shadow-[0_4px_16px_rgba(28,27,25,0.08)]"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                id="cta-whatsapp-btn"
                href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                  STUDIO_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FBF9F5] border border-[#D8D1C4] text-[#1C1B19] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#1C1B19] transition-all duration-200 inline-flex items-center gap-2.5 rounded-[2px]"
              >
                <MessageCircle className="w-4 h-4 text-[#8A7360]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E2D7] text-xs text-[#706C64]">
              Direct Phone: <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="text-[#1C1B19] font-medium hover:underline">+91 79918 97321</a> • Studio located in Ashok Nagar, Prayagraj
            </div>
          </div>

          {/* Subtly Framed Real Image Beside Text */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-[#FBF9F5] border border-[#E8E2D7] p-2 rounded-[2px] shadow-[0_8px_30px_rgba(28,27,25,0.04)]">
              <div className="aspect-[4/3] overflow-hidden bg-[#ECE6DC]">
                <img
                  src="/assets/images/image-3.jpg"
                  alt="Modern kitchen crafted by Grand Interior Studio Prayagraj"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#706C64]">
                  Turnkey Execution • Prayagraj
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
