import React from 'react';
import { STUDIO_INFO, GOOGLE_REVIEWS } from '../data/studioData';
import { Star, ArrowUpRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 lg:py-40 border-b border-[#E8E2D7] bg-[#FBF9F5] relative overflow-hidden">
      
      {/* Decorative architectural background line */}
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-[#E8E2D7]/50 hidden lg:block z-0" />
      <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-[#E8E2D7]/50 hidden lg:block z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with large 5.0 rating & metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 animate-fade-in-up">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#8A7360]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                Client Testimonials
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#1C1B19] font-normal tracking-tight">
              Trusted By Our Clients.
            </h2>
          </div>
          
          {/* Large Rating Display */}
          <div className="mt-10 lg:mt-0 flex items-center gap-8 bg-white/60 backdrop-blur-md px-8 py-5 border border-white/40 rounded-sm shadow-[0_4px_24px_rgba(28,27,25,0.04)]">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-serif text-4xl text-[#1C1B19] font-normal leading-none">
                  {STUDIO_INFO.googleRating}★
                </span>
                <div className="flex text-[#8A7360]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#706C64] font-medium mt-1">
                Google Rating • {STUDIO_INFO.reviewCount} Reviews
              </p>
            </div>
            <a
              href={STUDIO_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1C1B19] hover:text-[#8A7360] pl-8 border-l border-[#D8D1C4] transition-colors"
            >
              <span>View On Google</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Elegant Glass Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              id={`review-card-${idx + 1}`}
              className="bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_4px_24px_rgba(28,27,25,0.03)] p-10 lg:p-12 rounded-[2px] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500 animate-fade-in-up"
              style={{ animationDelay: `${200 + (idx * 150)}ms` }}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#8A7360] gap-1 mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                {/* Exact Excerpt Quote */}
                <blockquote className="font-serif text-2xl lg:text-[1.75rem] text-[#1C1B19] leading-snug font-normal mb-10 italic relative">
                  <span className="absolute -top-4 -left-4 text-5xl text-[#D8D1C4] font-serif leading-none select-none">"</span>
                  <span className="relative z-10">{review.quote}</span>
                </blockquote>
              </div>
              
              {/* Attribution */}
              <div className="pt-6 border-t border-[#E8E2D7] flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#1C1B19] font-medium">
                    Google Review Excerpt
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-[#706C64] mt-1">
                    {review.role}
                  </p>
                </div>
                <span className="text-xs text-[#8A7360] font-serif italic">
                  Prayagraj
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Google Reviews Button */}
        <div className="mt-12 text-center sm:hidden animate-fade-in-up animate-delay-400">
          <a
            href={STUDIO_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full py-4 border border-[#1C1B19] text-[#1C1B19] text-[10px] uppercase tracking-[0.2em] font-medium rounded-[2px]"
          >
            <span>View All Google Reviews</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
