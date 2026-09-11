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
    <footer className="bg-[#1C1B19] text-[#FBF9F5] pt-20 lg:pt-32 pb-28 lg:pb-16 border-t border-[#322F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#322F2A] animate-fade-in-up">
          
          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-wider uppercase block font-normal text-white">
                {STUDIO_INFO.name}
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7360] mt-3 font-sans font-medium">
                {STUDIO_INFO.tagline}
              </p>
              <p className="text-sm text-[#A69788] mt-8 max-w-md font-sans leading-relaxed">
                Elevating residential homes and commercial establishments across Prayagraj with architectural discipline, material integrity, and turnkey execution.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#322F2A]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A7360] block mb-2 font-medium">
                Studio Office
              </span>
              <p className="text-sm text-[#D8D1C4] font-sans leading-relaxed max-w-xs">
                {STUDIO_INFO.address.shop}, {STUDIO_INFO.address.market}, {STUDIO_INFO.address.road}, {STUDIO_INFO.address.locality},<br />
                {STUDIO_INFO.address.city} – {STUDIO_INFO.address.pincode}
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 lg:col-span-3 lg:ml-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A7360] block mb-6 font-medium">
              Navigation
            </span>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-[#D8D1C4] hover:text-white transition-colors uppercase tracking-widest text-[11px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="md:col-span-3 lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A7360] block mb-6 font-medium">
              Direct Contact
            </span>

            <div className="space-y-6 text-sm font-sans text-[#D8D1C4]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#706C64] block mb-1">
                  Telephone
                </span>
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors text-lg font-serif"
                >
                  {STUDIO_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#706C64] block mb-1">
                  Location
                </span>
                <span className="text-sm">Ashok Nagar, Prayagraj</span>
              </div>

              <div className="pt-6 border-t border-[#322F2A] flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-widest text-[#706C64] block">
                  Connect Online
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href={STUDIO_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-[0.2em] text-[#D8D1C4] hover:text-white inline-flex items-center gap-2 transition-colors w-fit"
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
                    className="text-[11px] uppercase tracking-[0.2em] text-[#D8D1C4] hover:text-white inline-flex items-center gap-2 transition-colors w-fit"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8A7360]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-[#706C64] gap-4 animate-fade-in-up animate-delay-200">
          <p>© {new Date().getFullYear()} Grand Interior Studio. All Rights Reserved.</p>
          <p>
            Prayagraj, Uttar Pradesh
          </p>
        </div>

      </div>
    </footer>
  );
};

