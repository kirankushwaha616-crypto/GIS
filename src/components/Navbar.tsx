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
      setIsScrolled(window.scrollY > 30);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#FBF9F5]/92 backdrop-blur-md border-b border-[#E8E2D7] shadow-[0_2px_12px_rgba(28,27,25,0.03)]'
            : 'py-5 lg:py-6 bg-[#FBF9F5]/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group"
              id="header-brand-logo"
            >
              <div className="h-9 w-auto overflow-hidden rounded-[2px] bg-[#F5F1E9] p-0.5 border border-[#E8E2D7]">
                <img
                  src={STUDIO_INFO.logo}
                  alt="Grand Interior Studio Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to text monogram if logo rendering fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl tracking-wider text-[#1C1B19] font-medium leading-none uppercase">
                  Grand Interior Studio
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#706C64] font-sans mt-0.5">
                  Prayagraj • Architecture & Interiors
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.16em] text-[#706C64] hover:text-[#1C1B19] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1C1B19] hover:after:w-full after:transition-all after:duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                  STUDIO_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-[#706C64] hover:text-[#1C1B19] transition-colors font-medium px-2 py-1"
                title="Direct WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#8A7360]" />
                <span>+91 79918 97321</span>
              </a>

              <button
                id="header-consultation-btn"
                onClick={handleConsultationClick}
                className="px-5 py-2.5 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.14em] font-medium hover:bg-[#322F2A] transition-colors duration-200 inline-flex items-center gap-2 rounded-[2px]"
              >
                <span>Get a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C1B19] hover:bg-[#EAE4D9]/40 rounded transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-50 bg-[#1C1B19]/50 backdrop-blur-sm lg:hidden flex flex-col justify-start pt-20 px-6 transition-opacity animate-in fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#FBF9F5] border border-[#E8E2D7] rounded-[2px] p-6 shadow-xl flex flex-col gap-6 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D7]">
              <div>
                <p className="font-serif text-lg text-[#1C1B19] uppercase tracking-wide">
                  Grand Interior Studio
                </p>
                <p className="text-[11px] text-[#706C64] uppercase tracking-widest">
                  Ashok Nagar, Prayagraj
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#706C64] hover:text-[#1C1B19]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-serif text-[#1C1B19] hover:text-[#8A7360] py-1 border-b border-[#F0EAE1] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#706C64]" />
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={handleConsultationClick}
                className="w-full py-3.5 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.14em] font-medium text-center rounded-[2px]"
              >
                Get Free Consultation
              </button>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                    STUDIO_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 border border-[#E8E2D7] text-center text-xs text-[#1C1B19] flex items-center justify-center gap-1.5 hover:bg-[#F5F1E9]"
                >
                  <MessageCircle className="w-4 h-4 text-[#8A7360]" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="py-2.5 px-3 border border-[#E8E2D7] text-center text-xs text-[#1C1B19] flex items-center justify-center gap-1.5 hover:bg-[#F5F1E9]"
                >
                  <Phone className="w-4 h-4 text-[#8A7360]" />
                  <span>Call Studio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
