import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleConsultationClick = () => {
    setMobileMenuOpen(false);
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'py-3 bg-[#FBF9F5]/90 backdrop-blur-lg border-[#E8E2D7] shadow-sm'
            : 'py-5 bg-transparent border-transparent'
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 lg:gap-4 group z-50 shrink-0"
            aria-label="Home"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-sm bg-[#F5F1E9] border border-[#E8E2D7] p-0.5 overflow-hidden flex items-center justify-center shrink-0">
               <img
                  src={STUDIO_INFO.logo}
                  alt="Logo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg lg:text-xl tracking-[0.05em] text-[#1C1B19] leading-none uppercase">
                Grand Interior
              </span>
              <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#706C64] mt-1 font-medium">
                Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[11px] xl:text-xs uppercase tracking-[0.15em] text-[#706C64] hover:text-[#1C1B19] font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#1C1B19] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6 shrink-0">
             <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="text-[11px] xl:text-xs tracking-[0.1em] text-[#706C64] hover:text-[#1C1B19] transition-colors font-medium whitespace-nowrap hidden xl:block"
              >
                {STUDIO_INFO.phone}
              </a>
            <button
              onClick={handleConsultationClick}
              className="px-6 py-3 bg-[#1C1B19] text-[#FBF9F5] text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#322F2A] transition-all duration-300 inline-flex items-center gap-2 rounded-sm"
            >
              <span>Get a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-[#1C1B19] focus:outline-none z-50 shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#FBF9F5] z-40 lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full flex flex-col px-6 pt-28 pb-8 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-3xl sm:text-4xl text-[#1C1B19] flex items-center justify-between border-b border-[#E8E2D7] pb-4"
                style={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s ease ${0.1 + i * 0.05}s, transform 0.4s ease ${0.1 + i * 0.05}s`
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-6 h-6 text-[#D8D1C4]" />
              </a>
            ))}
          </nav>

          <div 
            className="mt-auto pt-8 flex flex-col gap-4"
             style={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: `opacity 0.6s ease 0.5s`
             }}
          >
            <button
              onClick={handleConsultationClick}
              className="w-full py-4 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.15em] font-medium text-center rounded-sm"
            >
              Get Free Consultation
            </button>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(STUDIO_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 border border-[#E8E2D7] text-center text-xs uppercase tracking-wider text-[#1C1B19] flex items-center justify-center gap-2 hover:bg-[#F5F1E9] rounded-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="py-3 px-4 border border-[#E8E2D7] text-center text-xs uppercase tracking-wider text-[#1C1B19] flex items-center justify-center gap-2 hover:bg-[#F5F1E9] rounded-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

