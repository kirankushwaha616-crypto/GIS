import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1C1B19] text-[#FBF9F5] pt-24 lg:pt-32 pb-24 lg:pb-12 border-t border-[#322F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#322F2A] animate-fade-in-up">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-wide uppercase block font-normal text-[#FBF9F5]">
                {STUDIO_INFO.name}
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7360] mt-4 font-sans font-medium">
                Interior Design • Planning • Execution
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-6 lg:col-span-3 lg:ml-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A7360] block mb-6 font-medium">
              Quick Links
            </span>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-[11px] text-[#D8D1C4] hover:text-[#FBF9F5] transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-6 lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A7360] block mb-6 font-medium">
              Contact
            </span>
            <div className="space-y-4 text-[11px] font-sans text-[#D8D1C4] uppercase tracking-widest">
              <div>
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="hover:text-[#FBF9F5] transition-colors"
                >
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div>
                <span>Ashok Nagar, Prayagraj</span>
              </div>
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FBF9F5] inline-flex items-center gap-2 transition-colors w-fit"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A7360]" />
                </a>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                    STUDIO_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FBF9F5] inline-flex items-center gap-2 transition-colors w-fit"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A7360]" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-8 flex flex-col items-center justify-center text-[10px] uppercase tracking-widest text-[#706C64] animate-fade-in-up animate-delay-200">
          <p>© 2026 Grand Interior Studio. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
