import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Thoughtful Design',
      description: 'Functional planning combined with refined aesthetics.',
    },
    {
      title: 'End-to-End Approach',
      description: 'Design and execution under one workflow.',
    },
    {
      title: 'Attention To Detail',
      description: 'Focus on materials, finishes and proportions.',
    },
    {
      title: 'Client-Focused Solutions',
      description: 'Design decisions based around the client\'s requirements.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 lg:py-40 bg-[#ECE6DC] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-8 h-[1px] bg-[#8A7360]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
              The Studio
            </span>
            <span className="w-8 h-[1px] bg-[#8A7360]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal leading-[1.12] tracking-tight">
            Why Choose Grand Interior Studio?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FBF9F5] p-10 rounded-sm border border-[#E8E2D7] hover:border-[#1C1B19] transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${100 + (idx * 150)}ms` }}
            >
              <div className="w-12 h-[1px] bg-[#D8D1C4] mb-8 group-hover:bg-[#8A7360] group-hover:w-16 transition-all duration-500" />
              <h3 className="font-serif text-2xl text-[#1C1B19] font-normal mb-4">
                {point.title}
              </h3>
              <p className="text-sm text-[#706C64] leading-relaxed font-sans">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
