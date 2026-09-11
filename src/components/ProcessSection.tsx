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
    <section id="process" className="py-24 lg:py-40 bg-[#1C1B19] border-b border-[#322F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 animate-fade-in-up">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                Methodology
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FBF9F5] font-normal tracking-tight">
              From Concept To Reality.
            </h2>
          </div>
          
          <div className="mt-8 lg:mt-0 lg:max-w-md">
             <p className="text-[#A69788] text-base font-sans leading-relaxed">
              A structured, disciplined progression ensuring full transparency from initial conversation through physical delivery and handover.
             </p>
          </div>
        </div>

        {/* 4-Step Editorial Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative mb-24">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="relative flex flex-col group animate-fade-in-up"
              style={{ animationDelay: `${200 + (idx * 150)}ms` }}
            >
              <div className="h-[1px] w-full bg-[#322F2A] mb-8 relative">
                <div className="absolute top-0 left-0 h-full w-0 bg-[#8A7360] transition-all duration-700 ease-out group-hover:w-full" />
              </div>

              {/* Step indicator */}
              <div className="flex items-end gap-3 mb-6">
                <span className="font-serif text-5xl text-[#FBF9F5] opacity-20 group-hover:opacity-100 transition-opacity duration-500 leading-none">
                  {`0${idx + 1}`}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A7360] font-medium mb-1.5">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-[#FBF9F5] font-normal mb-4 group-hover:text-[#8A7360] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#A69788] font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="pt-16 border-t border-[#322F2A] flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in-up animate-delay-400">
          <div>
            <p className="font-serif text-3xl sm:text-4xl text-[#FBF9F5] mb-2">
              Ready to shape your space?
            </p>
            <p className="text-sm text-[#A69788] font-sans">
              Schedule an in-person site visit or studio meeting in Ashok Nagar, Prayagraj.
            </p>
          </div>

          <button
            id="process-start-project-btn"
            onClick={handleCta}
            className="px-8 py-4 bg-[#FBF9F5] text-[#1C1B19] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#8A7360] hover:text-[#FBF9F5] transition-all duration-300 inline-flex items-center gap-2 rounded-[2px]"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

