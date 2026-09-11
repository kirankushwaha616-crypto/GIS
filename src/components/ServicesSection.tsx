import React from 'react';
import { SERVICES } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleCardClick = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-36 border-b border-[#E8E2D7] bg-[#F8F5EF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                Capabilities
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal tracking-tight">
              Studio Services
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#706C64] font-sans max-w-sm mt-6 md:mt-0 animate-fade-in-up animate-delay-100">
            Comprehensive spatial design and turnkey execution from initial blueprints to final handover.
          </p>
        </div>

        {/* Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => handleCardClick(service.name)}
              className="group relative cursor-pointer flex flex-col bg-[#FBF9F5] border border-[#E8E2D7] p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(28,27,25,0.04)] hover:-translate-y-1 rounded-sm overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${200 + (idx * 100)}ms` }}
            >
              {/* Background Preview (Subtle) */}
              {service.previewImage && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0">
                  <img
                    src={service.previewImage}
                    alt=""
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-12">
                  <span className="text-xs font-mono tracking-widest text-[#8A7360] font-medium">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#D8D1C4] group-hover:border-[#1C1B19] group-hover:bg-[#1C1B19] group-hover:text-[#FBF9F5] text-[#706C64] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#1C1B19] group-hover:text-[#8A7360] transition-colors duration-300 font-normal mb-4">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#706C64] leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Animated underline indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#8A7360] transition-all duration-500 group-hover:w-full z-10"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

