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
    <section id="cta-section" className="py-24 lg:py-40 bg-[#1C1B19] border-b border-[#322F2A] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
         <img
            src="/assets/images/image-4.jpg"
            alt="Background texture"
            className="w-full h-full object-cover grayscale"
          />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#8A7360]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                Next Steps
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#FBF9F5] font-normal leading-[1.05] mb-8 tracking-tight">
              Let's Create<br />Your Space.
            </h2>

            <p className="text-[#A69788] text-base sm:text-lg font-sans leading-relaxed max-w-xl mb-12">
              Have a home, office or commercial space in mind? Start a conversation with Grand Interior Studio in Prayagraj.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button
                id="cta-free-consultation-btn"
                onClick={handleScrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-[#FBF9F5] text-[#1C1B19] text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#8A7360] hover:text-[#FBF9F5] transition-colors duration-300 inline-flex items-center justify-center gap-3 rounded-[2px]"
              >
                <span>Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                id="cta-whatsapp-btn"
                href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                  STUDIO_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#322F2A] text-[#FBF9F5] text-[10px] uppercase tracking-[0.2em] font-medium hover:border-[#8A7360] transition-colors duration-300 inline-flex items-center justify-center gap-3 rounded-[2px]"
              >
                <MessageCircle className="w-4 h-4 text-[#8A7360]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-[#322F2A] text-[10px] uppercase tracking-widest text-[#706C64]">
              Direct: <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="text-[#A69788] font-medium hover:text-[#FBF9F5]">+91 79918 97321</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Ashok Nagar, Prayagraj
            </div>
          </div>

          {/* Subtly Framed Real Image Beside Text */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-in-up animate-delay-200">
            <div className="relative overflow-hidden bg-[#242220] p-3 rounded-[2px]">
              <div className="aspect-[3/4] overflow-hidden bg-[#1C1B19]">
                <img
                  src="/assets/images/image-3.jpg"
                  alt="Modern kitchen crafted by Grand Interior Studio Prayagraj"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-8 -left-8 bg-[#FBF9F5] text-[#1C1B19] px-6 py-3 -rotate-90 origin-bottom-left border border-[#E8E2D7]">
                <span className="text-[9px] uppercase tracking-[0.25em] font-medium">
                  Turnkey Execution
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

