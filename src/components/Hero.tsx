import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

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
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FBF9F5] overflow-hidden border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in-up">
            
            {/* Minimal Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                {STUDIO_INFO.name}
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-[5rem] text-[#1C1B19] font-normal leading-[1.05] tracking-tight mb-6">
              Spaces Designed <br className="hidden sm:block" />
              <span className="italic pr-2 text-[#1C1B19]">Around</span> Your Life.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#706C64] font-sans leading-relaxed max-w-xl mb-10">
              Thoughtful interior design, detailed planning and complete execution for residential and commercial spaces in Prayagraj.
            </p>

            {/* Refined Action Buttons */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                id="hero-consultation-btn"
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#322F2A] transition-colors duration-200 inline-flex items-center gap-2 rounded-[2px]"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-projects-btn"
                onClick={onViewProjects}
                className="px-8 py-4 border border-[#D8D1C4] text-[#1C1B19] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#1C1B19] transition-colors duration-200 rounded-[2px]"
              >
                View Projects
              </button>
            </div>
            
            {/* Trust Indicator */}
          <div className="mt-12 lg:mt-16 flex items-center gap-6 animate-fade-in-up animate-delay-200">
             <div className="flex flex-col">
                <span className="text-[#1C1B19] text-sm tracking-[0.2em] mb-1">★★★★★</span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#706C64] font-medium">
                  5.0 Google Rating <br/> 44 Reviews
                </p>
             </div>
          </div>

          </div>

          {/* Subtly Masked Image Area */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] animate-reveal">
            <div className="absolute inset-0 bg-[#F5F1E9] border border-[#E8E2D7] p-2.5 rounded-[2px] shadow-sm">
              <div 
                className="relative w-full h-full overflow-hidden bg-[#ECE6DC] group cursor-pointer"
                onClick={() => onOpenLightboxWithImage && onOpenLightboxWithImage('/assets/images/image-1.jpg')}
              >
                <img
                  src="/assets/images/image-1.jpg"
                  alt="Modern minimalist living space crafted by Grand Interior Studio"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Subtle Hover Action */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#FBF9F5] text-[#1C1B19] text-[10px] uppercase tracking-widest py-2 px-4 rounded-[1px]">
                    Enlarge Image
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Glass Information Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-md shadow-[0_8px_30px_rgba(28,27,25,0.08)] hidden sm:block animate-fade-in-up animate-delay-400">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#1C1B19] font-medium">Interior Design</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#1C1B19] font-medium">Planning</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#1C1B19] font-medium">Execution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
