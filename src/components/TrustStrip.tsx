import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

export const TrustStrip: React.FC = () => {
  const stats = [
    {
      primary: '5.0★',
      secondary: 'Google Rating',
    },
    {
      primary: `${STUDIO_INFO.reviewCount}+`,
      secondary: 'Reviews',
    },
    {
      primary: 'Residential',
      secondary: 'Interiors',
    },
    {
      primary: 'Commercial',
      secondary: 'Spaces',
    },
    {
      primary: 'Concept to',
      secondary: 'Execution',
    },
  ];

  return (
    <section id="trust-strip" className="bg-[#F5F1E9] py-12 lg:py-16 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 divide-y divide-[#E8E2D7] sm:divide-y-0 sm:divide-x">
          {stats.map((item, idx) => (
            <div
              key={idx}
              id={`trust-stat-${idx + 1}`}
              className={`flex flex-col items-center justify-center text-center py-6 sm:py-0 sm:px-4 lg:px-8 border-[#E8E2D7] animate-fade-in-up`}
              style={{ animationDelay: `${100 + (idx * 100)}ms` }}
            >
              <span className="font-serif text-3xl lg:text-4xl text-[#1C1B19] font-normal tracking-tight mb-2">
                {item.primary}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#706C64] font-sans font-medium">
                {item.secondary}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

