import React, { useState } from 'react';
import { SERVICES } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  const handleRowClick = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 border-b border-[#E8E2D7] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E2D7]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#8A7360] font-medium font-sans">
                Capabilities & Scope
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] font-normal tracking-tight">
              What We Do
            </h2>
          </div>

          <p className="text-sm text-[#706C64] font-sans max-w-md mt-4 md:mt-0">
            Comprehensive spatial design and turnkey execution from initial architectural blueprints to on-site handover in Prayagraj.
          </p>
        </div>

        {/* Large Numbered Service Rows */}
        <div className="divide-y divide-[#E8E2D7] border-b border-[#E8E2D7]">
          {SERVICES.map((service) => {
            const isHovered = activeHoverId === service.id;

            return (
              <div
                key={service.id}
                id={`service-row-${service.id}`}
                onMouseEnter={() => setActiveHoverId(service.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                onClick={() => handleRowClick(service.name)}
                className="group relative py-7 sm:py-8 lg:py-9 cursor-pointer transition-colors duration-300 hover:bg-[#F6F2E9]/70 px-3 sm:px-6 -mx-3 sm:-mx-6 rounded-[1px]"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  
                  {/* Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-xs sm:text-sm font-mono tracking-widest text-[#8A7360] font-medium">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Name */}
                  <div className="col-span-8 sm:col-span-5 lg:col-span-5">
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1C1B19] group-hover:text-[#8A7360] transition-colors duration-200 font-normal">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-10 sm:col-span-5 lg:col-span-5 col-start-3 sm:col-start-auto">
                    <p className="text-xs sm:text-sm text-[#706C64] leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow & Optional Hover Preview */}
                  <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
                    <div className="w-8 h-8 rounded-full border border-[#D8D1C4] group-hover:border-[#1C1B19] group-hover:bg-[#1C1B19] group-hover:text-[#FBF9F5] text-[#706C64] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                </div>

                {/* Subtle Hover Image Reveal on Large Screens */}
                {service.previewImage && (
                  <div
                    className={`hidden lg:block absolute right-14 top-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-300 ${
                      isHovered
                        ? 'opacity-100 scale-100 translate-x-0'
                        : 'opacity-0 scale-95 translate-x-4'
                    }`}
                  >
                    <div className="w-44 h-28 overflow-hidden rounded-[2px] border border-[#D8D1C4] shadow-[0_8px_20px_rgba(28,27,25,0.08)] bg-[#F5F1E9]">
                      <img
                        src={service.previewImage}
                        alt={`${service.name} preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#706C64] gap-4">
          <span>Click any service to discuss your specific site requirements.</span>
          <a
            href="#contact"
            className="text-[#1C1B19] font-medium uppercase tracking-wider hover:text-[#8A7360] inline-flex items-center gap-1.5"
          >
            <span>Request Custom Scope Estimate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
