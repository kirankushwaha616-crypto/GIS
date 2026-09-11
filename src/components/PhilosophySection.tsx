import React from 'react';
import { PHILOSOPHY } from '../data/studioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-36 border-b border-[#E8E2D7] bg-[#F8F5EF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Headline with Generous Whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#8A7360]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
              Our Principles
            </span>
            <span className="w-6 h-[1px] bg-[#8A7360]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-[1.12]">
            Where Aesthetics Meet Function.
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#706C64] font-sans leading-relaxed max-w-xl mx-auto">
            At Grand Interior Studio, design is not merely decoration. It is an intentional orchestration of light, material, ergonomics, and architectural longevity.
          </p>
        </div>

        {/* 3 Core Principles Grid with Real Architectural Image Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Principles Column */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#E8E2D7]">
            {PHILOSOPHY.map((item) => (
              <div
                key={item.number}
                id={`philosophy-item-${item.number}`}
                className="py-8 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm tracking-widest text-[#8A7360] font-semibold pt-1">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B19] font-normal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#706C64] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtly Integrated Real Project Image */}
          <div className="lg:col-span-5">
            <div className="relative p-2 bg-[#FBF9F5] border border-[#E8E2D7] rounded-[2px] shadow-sm">
              <div className="overflow-hidden aspect-[4/5] bg-[#F5F1E9]">
                <img
                  src="/assets/images/image-6.jpg"
                  alt="Architectural atmosphere and balance by Grand Interior Studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#FBF9F5] text-center border-t border-[#E8E2D7]">
                <p className="text-xs uppercase tracking-[0.18em] text-[#706C64]">
                  Calm • Proportional • Enduring
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
