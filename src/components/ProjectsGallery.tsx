import React, { useState } from 'react';
import { PROJECTS } from '../data/studioData';
import { Expand, ArrowUpRight } from 'lucide-react';

interface ProjectsGalleryProps {
  onOpenLightbox: (index: number) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Residential',
    'Living Room',
    'Kitchen',
    'Bedroom',
    'Commercial',
    'Hospitality',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 lg:py-40 border-b border-[#E8E2D7] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
                Portfolio
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal tracking-tight">
              Selected Spaces
            </h2>
            <p className="text-[#706C64] text-base mt-4 font-sans max-w-xl">
              A selection of interiors designed with rigorous attention to detail, material integrity, and architectural function in Prayagraj.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap mt-10 lg:mt-0 animate-fade-in-up animate-delay-100">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-all rounded-[1px] whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1C1B19] text-[#FBF9F5] font-medium'
                    : 'text-[#706C64] hover:text-[#1C1B19] bg-transparent border border-transparent hover:border-[#D8D1C4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 animate-fade-in-up animate-delay-200">
          
          {/* Item 1: Large Featured Hero Piece (Living Room) */}
          {filteredProjects.find((p) => p.id === 'proj-1') && (
            <div
              id="project-card-proj-1"
              className="md:col-span-12 lg:col-span-7 group relative cursor-pointer"
              onClick={() => {
                const idx = PROJECTS.findIndex((p) => p.id === 'proj-1');
                onOpenLightbox(idx);
              }}
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-[#ECE6DC] border border-[#E8E2D7] rounded-sm">
                <img
                  src="/assets/images/image-1.jpg"
                  alt="Contemporary Living & Media Space by Grand Interior Studio"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle Hover Action */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#FBF9F5] rounded-full flex items-center justify-center text-[#1C1B19] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <Expand className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between">
                 <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1B19]">
                      Contemporary Living & Media Space
                    </h3>
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#706C64] block mt-1.5">
                      Living Room • Featured Project
                    </span>
                 </div>
              </div>
            </div>
          )}

          {/* Right Column: Two Stacked Projects (proj-2 & proj-3) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-10 lg:gap-12">
            
            {/* Item 2: Architectural Ceiling (Residential) */}
            {filteredProjects.find((p) => p.id === 'proj-2') && (
              <div
                id="project-card-proj-2"
                className="group relative cursor-pointer"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === 'proj-2');
                  onOpenLightbox(idx);
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE6DC] border border-[#E8E2D7] rounded-sm">
                  <img
                    src="/assets/images/image-2.jpg"
                    alt="Architectural False Ceiling & Illumination"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="w-12 h-12 bg-[#FBF9F5] rounded-full flex items-center justify-center text-[#1C1B19] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <Expand className="w-5 h-5" />
                     </div>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                 <div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1C1B19]">
                      Architectural False Ceiling & Lighting
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#706C64] block mt-1">
                      Residential • Illumination
                    </span>
                 </div>
              </div>
              </div>
            )}

            {/* Item 3: Kitchen Modular (Kitchen) */}
            {filteredProjects.find((p) => p.id === 'proj-3') && (
              <div
                id="project-card-proj-3"
                className="group relative cursor-pointer"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === 'proj-3');
                  onOpenLightbox(idx);
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE6DC] border border-[#E8E2D7] rounded-sm">
                  <img
                    src="/assets/images/image-3.jpg"
                    alt="Modern Modular Kitchen Architecture"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="w-12 h-12 bg-[#FBF9F5] rounded-full flex items-center justify-center text-[#1C1B19] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <Expand className="w-5 h-5" />
                     </div>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                 <div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1C1B19]">
                      Modern Modular Kitchen
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#706C64] block mt-1">
                      Kitchen • Modular Ergonomics
                    </span>
                 </div>
              </div>
              </div>
            )}

          </div>

          {/* Row 2: Four Balanced Editorial Spaces */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mt-4 lg:mt-8">
            
            {/* Item 4 */}
            {filteredProjects.find((p) => p.id === 'proj-4') && (
              <div
                id="project-card-proj-4"
                className="group relative cursor-pointer"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === 'proj-4');
                  onOpenLightbox(idx);
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE6DC] border border-[#E8E2D7] rounded-sm">
                  <img src="/assets/images/image-4.jpg" alt="" className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-normal text-[#1C1B19]">Master Suite</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#706C64] block mt-1">Bedroom • Joinery</span>
                </div>
              </div>
            )}

            {/* Item 5 */}
            {filteredProjects.find((p) => p.id === 'proj-5') && (
              <div
                id="project-card-proj-5"
                className="group relative cursor-pointer"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === 'proj-5');
                  onOpenLightbox(idx);
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE6DC] border border-[#E8E2D7] rounded-sm">
                  <img src="/assets/images/image-5.jpg" alt="" className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-normal text-[#1C1B19]">Executive Suite</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#706C64] block mt-1">Commercial</span>
                </div>
              </div>
            )}

            {/* Item 6 */}
            {filteredProjects.find((p) => p.id === 'proj-6') && (
              <div
                id="project-card-proj-6"
                className="group relative cursor-pointer"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === 'proj-6');
                  onOpenLightbox(idx);
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE6DC] border border-[#E8E2D7] rounded-sm">
                  <img src="/assets/images/image-6.jpg" alt="" className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-normal text-[#1C1B19]">Ambient Lounge</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#706C64] block mt-1">Hospitality</span>
                </div>
              </div>
            )}

            {/* Item 7 */}
            {filteredProjects.find((p) => p.id === 'proj-7') && (
              <div
                id="project-card-proj-7"
                className="group relative cursor-pointer"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === 'proj-7');
                  onOpenLightbox(idx);
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE6DC] border border-[#E8E2D7] rounded-sm">
                  <img src="/assets/images/image-7.jpg" alt="" className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-normal text-[#1C1B19]">Corridor & Reveal</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#706C64] block mt-1">Interior • Transition</span>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Bottom Action / View All CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <button
            id="view-all-projects-btn"
            onClick={() => {
              setSelectedCategory('All');
              onOpenLightbox(0);
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#1C1B19] text-[#1C1B19] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#1C1B19] hover:text-[#FBF9F5] transition-all duration-300 rounded-[2px]"
          >
            <span>Explore Complete Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

