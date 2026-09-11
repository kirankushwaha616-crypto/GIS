import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { PhilosophySection } from './components/PhilosophySection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { MobileBottomBar } from './components/MobileBottomBar';
import { PROJECTS } from './data/studioData';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>(undefined);

  const handleOpenLightbox = (index: number) => {
    setActiveProjectIndex(index);
    setLightboxOpen(true);
  };

  const handleOpenLightboxWithImage = (imageSrc: string) => {
    const idx = PROJECTS.findIndex((p) => p.image === imageSrc);
    if (idx !== -1) {
      setActiveProjectIndex(idx);
    } else {
      setActiveProjectIndex(0);
    }
    setLightboxOpen(true);
  };

  const handleConsultation = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForForm(serviceName);
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1B19] font-sans flex flex-col relative selection:bg-[#ECE6DC] selection:text-[#1C1B19]">
      {/* Sticky Editorial Header */}
      <Navbar onOpenConsultation={handleConsultation} />

      {/* Main Experience Flow: DISCOVER → TRUST → EXPLORE WORK → UNDERSTAND SERVICES → CONTACT */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenConsultation={handleConsultation}
          onViewProjects={handleViewProjects}
          onOpenLightboxWithImage={handleOpenLightboxWithImage}
        />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. About Studio */}
        <AboutSection
          onLearnMore={() => {
            const el = document.querySelector('#process');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenLightboxWithImage={handleOpenLightboxWithImage}
        />

        {/* 4. Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Featured Projects Gallery */}
        <ProjectsGallery onOpenLightbox={handleOpenLightbox} />

        {/* 6. Design Philosophy */}
        <PhilosophySection />

        {/* 7. Process */}
        <ProcessSection onStartProject={handleConsultation} />

        {/* 8. Google Reviews */}
        <ReviewsSection />

        {/* 9. Large CTA Section */}
        <CtaSection onOpenConsultation={handleConsultation} />

        {/* 10. Contact & Location Information */}
        <ContactSection initialService={selectedServiceForForm} />

        {/* 11. Instagram Feed */}
        <InstagramSection onOpenLightbox={handleOpenLightbox} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        projects={PROJECTS}
        currentIndex={activeProjectIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveProjectIndex(idx)}
      />

      {/* Mobile Sticky Action Bar for quick WhatsApp/Phone/Consultation on phones */}
      <MobileBottomBar onOpenConsultation={handleConsultation} />
    </div>
  );
}
