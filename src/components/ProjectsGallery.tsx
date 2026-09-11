import React, { useState } from 'react';
import { PROJECTS } from '../data/studioData';
import { ProjectItem } from '../types';
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
    <section id="projects" className="py-20 lg:py-32 border-b border-[#E8E2D7] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#8A7360]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#8A7360] font-medium font-sans">
                Portfolio • Prayagraj
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] font-normal tracking-tight">
              Selected Spaces
            </h2>
            <p className="text-[#706C64] text-base mt-3 font-sans max-w-xl">
              A selection of interiors designed with attention to detail, material and function.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mt-6 lg:mt-0 pt-4 border-t lg:border-t-0 border-[#E8E2D7]">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] transition-all rounded-[2px] whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1C1B19] text-[#FBF9F5] font-medium shadow-sm'
                    : 'text-[#706C64] hover:text-[#1C1B19] hover:bg-[#EAE4D9]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Item 1: Large Featured Hero Piece (Living Room) */}
          {filteredProjects.find((p) => p.id === 'proj-1') && (
            <div
              id="project-card-proj-1"
              className="md:col-span-12 lg:col-span-7 group relative cursor-pointer overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px]"
              onClick={() => {
                const idx = PROJECTS.findIndex((p) => p.id === 'proj-1');
                onOpenLightbox(idx);
              }}
            >
              <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden">
                <img
                  src="/assets/images/image-1.jpg"
                  alt="Contemporary Living & Media Space by Grand Interior Studio"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-[#FBF9F5] flex items-end justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#D8D1C4] block mb-1">
                      Living Room • Featured Project
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                      Contemporary Living & Media Space
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1C1B19] transition-all">
                    <Expand className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Two Stacked Projects (proj-2 & proj-3) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            
            {/* Item 2: Architectural Ceiling (Residential) */}
            {filteredProjects.find((p) => p.id === 'proj-2') && (
              <div
                id="project-card-proj-2"
                className="group relative cursor-pointer overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px]"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === 'proj-2');
                  onOpenLightbox(idx);
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/images/image-2.jpg"
                    alt="Architectural False Ceiling & Illumination"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-[#FBF9F5] flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8D1C4] block mb-0.5">
                        Residential • Illumination
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                        Architectural False Ceiling & Lighting
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1C1B19] transition-all">
                      <Expand className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Item 3: Kitchen Modular (Kitchen) */}
            {filteredProjects.find((p) => p.id === 'proj-3') && (
              <div
                id="project-card-proj-3"
                className="group relative cursor-pointer overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px]"
                onClick={() => {
                  const idx = PROJECTS.findIndex((p) => p.id === 'proj-3');
                  onOpenLightbox(idx);
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/images/image-3.jpg"
                    alt="Modern Modular Kitchen Architecture"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-[#FBF9F5] flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8D1C4] block mb-0.5">
                        Kitchen • Modular Ergonomics
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                        Modern Modular Kitchen Architecture
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1C1B19] transition-all">
                      <Expand className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Row 2: Four Balanced Editorial Spaces (proj-4, proj-5, proj-6, proj-7) */}
          
          {/* Item 4: Master Suite / Bedroom */}
          {filteredProjects.find((p) => p.id === 'proj-4') && (
            <div
              id="project-card-proj-4"
              className="md:col-span-6 lg:col-span-3 group relative cursor-pointer overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px]"
              onClick={() => {
                const idx = PROJECTS.findIndex((p) => p.id === 'proj-4');
                onOpenLightbox(idx);
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/images/image-4.jpg"
                  alt="Refined Master Suite Wall Composition"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8D1C4] block mb-0.5">
                    Bedroom • Fluted Joinery
                  </span>
                  <h3 className="font-serif text-lg font-normal">
                    Master Suite Composition
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Item 5: Commercial / Executive */}
          {filteredProjects.find((p) => p.id === 'proj-5') && (
            <div
              id="project-card-proj-5"
              className="md:col-span-6 lg:col-span-3 group relative cursor-pointer overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px]"
              onClick={() => {
                const idx = PROJECTS.findIndex((p) => p.id === 'proj-5');
                onOpenLightbox(idx);
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/images/image-5.jpg"
                  alt="Executive Interior & Bespoke Joinery"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8D1C4] block mb-0.5">
                    Commercial • Workspaces
                  </span>
                  <h3 className="font-serif text-lg font-normal">
                    Executive Suite & Joinery
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Item 6: Hospitality & Lounge */}
          {filteredProjects.find((p) => p.id === 'proj-6') && (
            <div
              id="project-card-proj-6"
              className="md:col-span-6 lg:col-span-3 group relative cursor-pointer overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px]"
              onClick={() => {
                const idx = PROJECTS.findIndex((p) => p.id === 'proj-6');
                onOpenLightbox(idx);
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/images/image-6.jpg"
                  alt="Bespoke Ambient Lounge & Display"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8D1C4] block mb-0.5">
                    Hospitality • Ambient
                  </span>
                  <h3 className="font-serif text-lg font-normal">
                    Bespoke Ambient Lounge
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Item 7: Corridor & Entrance Architecture */}
          {filteredProjects.find((p) => p.id === 'proj-7') && (
            <div
              id="project-card-proj-7"
              className="md:col-span-6 lg:col-span-3 group relative cursor-pointer overflow-hidden bg-[#F5F1E9] border border-[#E8E2D7] rounded-[2px]"
              onClick={() => {
                const idx = PROJECTS.findIndex((p) => p.id === 'proj-7');
                onOpenLightbox(idx);
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/images/image-7.jpg"
                  alt="Crafted Interior Corridor & Entrance"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D8D1C4] block mb-0.5">
                    Interior Project • Transition
                  </span>
                  <h3 className="font-serif text-lg font-normal">
                    Corridor & Reveal Architecture
                  </h3>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Action / View All CTA */}
        <div className="mt-12 text-center">
          <button
            id="view-all-projects-btn"
            onClick={() => {
              setSelectedCategory('All');
              onOpenLightbox(0);
            }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-[#1C1B19] text-[#1C1B19] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#1C1B19] hover:text-[#FBF9F5] transition-all duration-200 rounded-[2px]"
          >
            <span>View All Projects in Lightbox</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
