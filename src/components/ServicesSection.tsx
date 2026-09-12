import React, { useState } from 'react';
import { SERVICES } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const handleRowClick = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-40 border-b border-[#E8E2D7] bg-[#FBF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 lg:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#8A7360]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
              Capabilities
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#1C1B19] font-normal tracking-tight">
            What We Create
          </h2>
        </div>

        {/* Premium Service Rows */}
        <div className="flex flex-col border-t border-[#1C1B19]">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              id={`service-row-${service.id}`}
              onClick={() => handleRowClick(service.name)}
              onMouseEnter={() => setHoveredService(service.previewImage || null)}
              onMouseLeave={() => setHoveredService(null)}
              className="group cursor-pointer flex flex-col md:flex-row md:items-center py-8 lg:py-12 border-b border-[#E8E2D7] transition-all duration-500 hover:border-[#1C1B19] relative animate-fade-in-up"
              style={{ animationDelay: `${100 + (idx * 50)}ms` }}
            >
              {/* Desktop Hover Image Preview (Floating) */}
              <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[320px] aspect-[4/3] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden xl:block z-0 overflow-hidden shadow-2xl rounded-sm">
                 {service.previewImage && (
                    <img src={service.previewImage} alt={service.name} className="w-full h-full object-cover" />
                 )}
              </div>

              {/* Number */}
              <div className="w-16 md:w-32 shrink-0 mb-4 md:mb-0 relative z-10">
                <span className="text-xs font-mono tracking-[0.2em] text-[#8A7360] font-medium group-hover:text-[#1C1B19] transition-colors">
                  {service.number} —
                </span>
              </div>
              
              {/* Title & Description */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 relative z-10">
                <h3 className="font-serif text-3xl lg:text-4xl text-[#1C1B19] group-hover:text-[#8A7360] transition-colors duration-500 font-normal">
                  {service.name}
                </h3>
                <p className="text-sm text-[#706C64] leading-relaxed font-sans max-w-md group-hover:text-[#1C1B19] transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-end w-16 shrink-0 relative z-10">
                <div className="w-10 h-10 rounded-full border border-[#D8D1C4] group-hover:border-[#1C1B19] group-hover:bg-[#1C1B19] group-hover:text-[#FBF9F5] text-[#1C1B19] flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

