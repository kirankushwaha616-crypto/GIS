import React from 'react';
import { PROCESS_STEPS } from '../data/studioData';

interface ProcessSectionProps {
  onStartProject?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  return (
    <section id="process" className="py-24 lg:py-40 bg-[#FBF9F5] border-b border-[#E8E2D7] relative overflow-hidden">
      
      {/* Decorative background element for glass to sit on */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#E8E2D7] z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-8 h-[1px] bg-[#8A7360]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
              Methodology
            </span>
            <span className="w-8 h-[1px] bg-[#8A7360]" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#1C1B19] font-normal tracking-tight">
            From Idea To Reality.
          </h2>
        </div>

        {/* 4-Step Editorial Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="group flex flex-col p-8 sm:p-10 bg-white/60 backdrop-blur-md border border-[#E8E2D7] shadow-[0_4px_24px_rgba(28,27,25,0.02)] rounded-[2px] hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${100 + (idx * 150)}ms` }}
            >
              {/* Step indicator */}
              <div className="flex items-start justify-between mb-16">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A7360] font-medium border border-[#E8E2D7] px-3 py-1 rounded-[1px]">
                  Step {step.number}
                </span>
                <span className="font-serif text-5xl lg:text-6xl text-[#E8E2D7] group-hover:text-[#8A7360] transition-colors duration-500 leading-none">
                  0{idx + 1}
                </span>
              </div>
              
              {/* Title & Description */}
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl text-[#1C1B19] font-normal mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-[#706C64] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
