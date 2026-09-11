import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onOpenLightboxWithImage?: (imageSrc: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMore,
  onOpenLightboxWithImage,
}) => {
  return (
    <section id="about" className="py-24 lg:py-40 bg-[#FBF9F5] border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Large Architectural Real Image */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative group cursor-pointer animate-reveal"
              onClick={() => onOpenLightboxWithImage && onOpenLightboxWithImage('/assets/images/image-4.jpg')}
            >
              <div className="overflow-hidden bg-[#ECE6DC] border border-[#E8E2D7] rounded-[2px] shadow-sm aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src="/assets/images/image-4.jpg"
                  alt="Interior detail and craftsmanship by Grand Interior Studio Prayagraj"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Minimal caption */}
              <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-between text-[10px] sm:text-xs text-[#706C64]">
                <span className="uppercase tracking-widest">Craftsmanship & Detail</span>
                <span className="text-[#8A7360] uppercase tracking-widest">Prayagraj</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center mt-12 lg:mt-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                About The Studio
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] leading-[1.1] mb-8 font-normal tracking-tight">
              Design With Purpose.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#706C64] font-sans leading-relaxed mb-12 max-w-xl">
              <p>
                Grand Interior Studio creates thoughtfully designed spaces where aesthetics and everyday functionality work seamlessly together.
              </p>
              <p>
                Based in Ashok Nagar, Prayagraj, the studio works across residential and commercial interiors, taking projects from design and planning through complete execution.
              </p>
            </div>

            {/* Studio Core Attributes */}
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-[#E8E2D7] mb-10 max-w-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#1C1B19] font-medium mb-2">
                  Complete Execution
                </p>
                <p className="text-sm text-[#706C64] leading-relaxed">
                  End-to-end on-site supervision and verified artisanal craftsmanship.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#1C1B19] font-medium mb-2">
                  Bespoke Planning
                </p>
                <p className="text-sm text-[#706C64] leading-relaxed">
                  Custom material palettes, lighting schemes, and spatial zoning.
                </p>
              </div>
            </div>

            {/* Small CTA */}
            <div>
              <button
                id="about-know-more-btn"
                onClick={onLearnMore || (() => {
                  const el = document.querySelector('#process');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                })}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] font-medium text-[#1C1B19] hover:text-[#8A7360] transition-colors group py-2"
              >
                <span>Know More About Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

