import React from 'react';
import { STUDIO_INFO, GOOGLE_REVIEWS } from '../data/studioData';
import { Star, ArrowUpRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-32 border-b border-[#E8E2D7] bg-[#F8F5EF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with large 5.0 rating & metadata */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#E8E2D7]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#8A7360] font-medium font-sans">
                Client Testimonials
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] font-normal tracking-tight">
              Trusted By Our Clients.
            </h2>
          </div>

          {/* Large Rating Display */}
          <div className="mt-6 lg:mt-0 flex items-center gap-6 bg-[#FBF9F5] px-6 py-4 border border-[#E8E2D7] rounded-[2px]">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-4xl text-[#1C1B19] font-normal leading-none">
                  {STUDIO_INFO.googleRating}★
                </span>
                <div className="flex text-[#8A7360]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#706C64] mt-1.5">
                Google Rating • {STUDIO_INFO.reviewCount} Reviews
              </p>
            </div>

            <a
              href={STUDIO_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-medium text-[#1C1B19] hover:text-[#8A7360] pl-6 border-l border-[#E8E2D7]"
            >
              <span>View Google Reviews</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Grid (Using the 3 exact client review excerpts provided) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              id={`review-card-${idx + 1}`}
              className="bg-[#FBF9F5] border border-[#E8E2D7] p-8 rounded-[2px] flex flex-col justify-between shadow-[0_2px_12px_rgba(28,27,25,0.02)] relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#8A7360] gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Exact Excerpt Quote */}
                <blockquote className="font-serif text-xl sm:text-2xl text-[#1C1B19] leading-snug font-normal mb-8 italic">
                  “{review.quote}”
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E8E2D7] flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#1C1B19] font-medium">
                    Google Review Excerpt
                  </p>
                  <p className="text-[11px] text-[#706C64] mt-0.5">
                    {review.role}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#8A7360] font-mono">
                  Prayagraj
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Google Reviews Button */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href={STUDIO_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 border border-[#1C1B19] text-[#1C1B19] text-xs uppercase tracking-[0.14em] font-medium rounded-[2px]"
          >
            <span>View Google Reviews</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
