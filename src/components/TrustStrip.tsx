import React from 'react';

export const TrustStrip: React.FC = () => {
  const stats = [
    {
      primary: '5.0★',
      secondary: 'Google Rating',
    },
    {
      primary: '44+',
      secondary: 'Google Reviews',
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
    <section id="trust-strip" className="border-b border-[#E8E2D7] bg-[#F8F5EF]/60 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {stats.map((item, idx) => (
            <div
              key={idx}
              id={`trust-stat-${idx + 1}`}
              className={`flex flex-col ${
                idx === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
              } ${
                idx !== 0 ? 'lg:border-l lg:border-[#E8E2D7] lg:pl-8' : ''
              }`}
            >
              <span className="font-serif text-2xl sm:text-3xl lg:text-3xl text-[#1C1B19] font-normal tracking-tight">
                {item.primary}
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-[#706C64] font-sans mt-1">
                {item.secondary}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
