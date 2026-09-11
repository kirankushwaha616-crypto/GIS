import React from 'react';
import { PHILOSOPHY } from '../data/studioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-40 border-b border-[#E8E2D7] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                Our Principles
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-[1.12] tracking-tight">
              Where Aesthetics Meet Function.
            </h2>
          </div>

          <div className="mt-8 lg:mt-0 lg:max-w-sm shrink-0">
             <p className="text-sm sm:text-base text-[#706C64] font-sans leading-relaxed">
              At Grand Interior Studio, design is not merely decoration. It is an intentional orchestration of light, material, ergonomics, and architectural longevity.
             </p>
          </div>
        </div>

        {/* 3 Core Principles Grid with Real Architectural Image Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Subtly Integrated Real Project Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 animate-fade-in-up animate-delay-200">
            <div className="relative p-3 bg-[#ECE6DC] rounded-sm">
              <div className="overflow-hidden aspect-[4/5] bg-[#E8E2D7]">
                <img
                  src="/assets/images/image-6.jpg"
                  alt="Architectural atmosphere and balance by Grand Interior Studio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1C1B19] text-[#FBF9F5] p-6 lg:p-8 rounded-sm shadow-xl hidden sm:block">
                 <p className="text-[10px] uppercase tracking-[0.25em] font-medium">
                  Calm • Proportional • Enduring
                </p>
              </div>
            </div>
          </div>

          {/* Principles Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <div className="w-full h-[1px] bg-[#E8E2D7] mb-8" />
            {PHILOSOPHY.map((item, idx) => (
              <div
                key={item.number}
                id={`philosophy-item-${item.number}`}
                className="py-10 first:pt-0 border-b border-[#E8E2D7] group animate-fade-in-up"
                style={{ animationDelay: `${100 + (idx * 150)}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-12">
                  <span className="font-serif text-4xl text-[#D8D1C4] group-hover:text-[#8A7360] transition-colors duration-500 leading-none pt-1">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B19] font-normal mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#706C64] leading-relaxed font-sans max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
