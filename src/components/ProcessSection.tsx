import React from 'react';
import { PROCESS_STEPS } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

interface ProcessSectionProps {
  onStartProject?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const handleCta = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-20 lg:py-32 border-b border-[#E8E2D7] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E2D7]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#8A7360] font-medium font-sans">
                Project Methodology
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] font-normal tracking-tight">
              From Idea To Reality.
            </h2>
          </div>

          <p className="text-sm text-[#706C64] font-sans max-w-md mt-4 md:mt-0">
            A structured, disciplined progression ensuring full transparency from initial conversation through physical delivery.
          </p>
        </div>

        {/* 4-Step Editorial Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="relative flex flex-col pt-6 border-t border-[#E8E2D7] group"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm tracking-widest text-[#8A7360] font-semibold">
                  {step.number}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#706C64]/60">
                  Step 0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-[#1C1B19] font-normal mb-3 group-hover:text-[#8A7360] transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#706C64] font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 pt-10 border-t border-[#E8E2D7] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl sm:text-2xl text-[#1C1B19]">
              Ready to begin your space in Prayagraj?
            </p>
            <p className="text-xs text-[#706C64] mt-1 font-sans">
              Schedule an in-person site visit or studio meeting in Ashok Nagar.
            </p>
          </div>

          <button
            id="process-start-project-btn"
            onClick={handleCta}
            className="px-7 py-3.5 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#322F2A] transition-all duration-200 inline-flex items-center gap-2 rounded-[2px]"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
