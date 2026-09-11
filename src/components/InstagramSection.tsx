import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Instagram, ArrowUpRight } from 'lucide-react';

interface InstagramSectionProps {
  onOpenLightbox?: (index: number) => void;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ onOpenLightbox }) => {
  // Curated studio previews from real supplied images
  const feedImages = [
    { src: '/assets/images/image-1.jpg', alt: 'Living Room Architecture' },
    { src: '/assets/images/image-2.jpg', alt: 'Ceiling Lighting Detail' },
    { src: '/assets/images/image-3.jpg', alt: 'Modular Kitchen Plan' },
    { src: '/assets/images/image-4.jpg', alt: 'Master Suite Joinery' },
    { src: '/assets/images/image-5.jpg', alt: 'Commercial Studio Interior' },
    { src: '/assets/images/image-6.jpg', alt: 'Hospitality Ambient Lounge' },
  ];

  return (
    <section id="instagram" className="py-20 lg:py-28 border-b border-[#E8E2D7] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#8A7360] font-medium font-sans">
                Social Feed
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] font-normal tracking-tight">
              Follow The Studio
            </h2>
            <p className="text-sm text-[#706C64] font-sans mt-2">
              On-site progress, material selections, and project walkthroughs in Prayagraj.
            </p>
          </div>

          <div className="mt-6 sm:mt-0 flex items-center gap-4">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1C1B19] text-[#1C1B19] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#1C1B19] hover:text-[#FBF9F5] transition-all rounded-[2px]"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{STUDIO_INFO.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Visual Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {feedImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px] cursor-pointer"
              onClick={() => onOpenLightbox && onOpenLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1C1B19]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
