import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Star, ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
  onViewProjects?: () => void;
  onOpenLightboxWithImage?: (imageSrc: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onViewProjects,
  onOpenLightboxWithImage,
}) => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden border-b border-[#E8E2D7]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#8A7360]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#8A7360] font-sans font-medium">
                {STUDIO_INFO.name}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] leading-[1.08] font-normal tracking-tight mb-6">
              Spaces Designed <br className="hidden sm:inline" />
              <span className="italic font-normal">Around Your Life.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-[#706C64] text-base sm:text-lg leading-relaxed font-sans max-w-xl mb-8">
              Thoughtful interior design, detailed planning and complete execution for residential and commercial spaces in Prayagraj.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                id="hero-consultation-btn"
                onClick={onOpenConsultation || (() => scrollTo('#contact'))}
                className="px-7 py-3.5 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#322F2A] transition-all duration-200 inline-flex items-center gap-2.5 rounded-[2px] shadow-[0_2px_8px_rgba(28,27,25,0.08)]"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-view-projects-btn"
                onClick={onViewProjects || (() => scrollTo('#projects'))}
                className="px-7 py-3.5 border border-[#1C1B19]/25 text-[#1C1B19] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#F5F1E9] hover:border-[#1C1B19] transition-all duration-200 rounded-[2px] inline-flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Small Trust Indicator */}
            <div className="pt-6 border-t border-[#E8E2D7] flex items-center gap-5">
              <div className="flex items-center gap-1 text-[#8A7360]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1C1B19]">
                <span className="font-semibold text-sm">5.0★</span>
                <span className="text-[#706C64]">Google Rating</span>
                <span className="text-[#D8D1C4]">•</span>
                <span className="text-[#706C64]">44 Verified Client Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Large Project Visual Asset */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group cursor-pointer" onClick={() => onOpenLightboxWithImage && onOpenLightboxWithImage('/assets/images/image-1.jpg')}>
              {/* Outer architectural frame */}
              <div className="relative overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px] shadow-[0_8px_30px_rgba(28,27,25,0.05)]">
                <img
                  src="/assets/images/image-1.jpg"
                  alt="Living & Media Interior by Grand Interior Studio in Prayagraj"
                  className="w-full h-[380px] sm:h-[480px] lg:h-[560px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Subtle bottom-right caption badge */}
                <div className="absolute bottom-4 right-4 bg-[#FBF9F5]/90 backdrop-blur-md px-3.5 py-2 border border-[#E8E2D7] text-[11px] uppercase tracking-wider text-[#1C1B19] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A7360]" />
                  <span>Real Project • Prayagraj</span>
                </div>
              </div>

              {/* Decorative architectural offset outline */}
              <div className="hidden sm:block absolute -inset-3 border border-[#E8E2D7]/50 -z-10 pointer-events-none rounded-[2px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
