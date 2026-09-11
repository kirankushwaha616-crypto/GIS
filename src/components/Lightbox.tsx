import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  projects: ProjectItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  projects,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + projects.length) % projects.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % projects.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, projects.length, onClose, onNavigate]);

  if (!isOpen || !projects[currentIndex]) return null;

  const currentProject = projects[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % projects.length);
  };

  return (
    <div
      id="project-lightbox"
      className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8 select-none transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Top Bar: Title & Close Button */}
      <div
        className="flex items-center justify-between text-[#FBF9F5] max-w-7xl w-full mx-auto pb-4 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-[#A69788]">
            {currentProject.category} • Grand Interior Studio
          </span>
          <h3 className="font-serif text-lg sm:text-xl text-[#FBF9F5] font-normal mt-0.5">
            {currentProject.title}
          </h3>
        </div>

        <div className="flex items-center gap-6">
          <div className="font-mono text-xs tracking-widest text-[#A69788]">
            <span className="text-[#FBF9F5] font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span> / </span>
            <span>{String(projects.length).padStart(2, '0')}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#A69788] hover:text-[#FBF9F5] transition-colors rounded hover:bg-white/5"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center py-4 sm:py-6 overflow-hidden max-w-7xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 transition-colors backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* High-res Image */}
        <div className="relative max-h-[78vh] max-w-full flex items-center justify-center">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="max-h-[78vh] max-w-full object-contain rounded-[2px] shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 transition-colors backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div
        className="max-w-7xl w-full mx-auto pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A69788] gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-center sm:text-left text-xs font-sans max-w-xl text-[#D8D1C4]">
          {currentProject.description || 'Custom crafted architectural execution by Grand Interior Studio, Prayagraj.'}
        </p>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-[#A69788]">
          <span>Use keyboard ← / → arrows to navigate</span>
          <span>•</span>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              onClose();
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#FBF9F5] underline hover:text-[#A69788]"
          >
            Inquire about this style
          </button>
        </div>
      </div>
    </div>
  );
};
