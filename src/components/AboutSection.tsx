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
    <section id="about" className="py-20 lg:py-32 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Architectural Real Image */}
          <div className="lg:col-span-6">
            <div
              className="relative group cursor-pointer"
              onClick={() => onOpenLightboxWithImage && onOpenLightboxWithImage('/assets/images/image-4.jpg')}
            >
              <div className="overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px]">
                <img
                  src="/assets/images/image-4.jpg"
                  alt="Interior detail and craftsmanship by Grand Interior Studio Prayagraj"
                  className="w-full h-[400px] sm:h-[500px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Minimal caption */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#706C64]">
                <span>Material Craftsmanship & Joinery Detail</span>
                <span className="text-[#8A7360] uppercase tracking-wider">Prayagraj</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#8A7360] font-medium font-sans">
                About The Studio
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] leading-[1.15] mb-6 font-normal">
              Design With Purpose.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#706C64] font-sans leading-relaxed mb-8">
              <p>
                Grand Interior Studio creates thoughtfully designed spaces where aesthetics and everyday functionality work together.
              </p>
              <p>
                Based in Ashok Nagar, Prayagraj, the studio works across residential and commercial interiors, taking projects from design and planning through execution.
              </p>
            </div>

            {/* Studio Core Attributes */}
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#E8E2D7] mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#1C1B19] font-medium">
                  Complete Execution
                </p>
                <p className="text-xs text-[#706C64] mt-1 leading-normal">
                  End-to-end on-site supervision and verified artisanal craftsmanship.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#1C1B19] font-medium">
                  Bespoke Planning
                </p>
                <p className="text-xs text-[#706C64] mt-1 leading-normal">
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
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#1C1B19] hover:text-[#8A7360] transition-colors group"
              >
                <span>Know More About Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
