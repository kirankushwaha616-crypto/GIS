import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

export const TrustStrip: React.FC = () => {
  const stats = [
    {
      primary: 'Residential',
      secondary: 'Interior Design',
    },
    {
      primary: 'Commercial',
      secondary: 'Office Spaces',
    },
    {
      primary: 'Prayagraj',
      secondary: 'Based Studio',
    },
    {
      primary: `${STUDIO_INFO.reviewCount}+`,
      secondary: '5.0★ Google Reviews',
    },
  ];

  return (
    <section id="trust-strip" className="bg-[#1C1B19] py-12 lg:py-16 border-b border-[#322F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y divide-[#322F2A] lg:divide-y-0 lg:divide-x">
          {stats.map((item, idx) => (
            <div
              key={idx}
              id={`trust-stat-${idx + 1}`}
              className={`flex flex-col items-center justify-center text-center py-6 lg:py-0 lg:px-8 border-[#322F2A]`}
            >
              <span className="font-serif text-2xl lg:text-3xl text-[#FBF9F5] font-normal tracking-tight mb-2">
                {item.primary}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#A69788] font-sans font-medium">
                {item.secondary}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

