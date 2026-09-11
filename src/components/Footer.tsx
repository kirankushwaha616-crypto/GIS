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
    <footer className="bg-[#1C1B19] text-[#FBF9F5] pt-16 lg:pt-24 pb-28 lg:pb-16 border-t border-[#322F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-wider uppercase block font-normal text-white">
                {STUDIO_INFO.name}
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#A69788] mt-2 font-sans">
                {STUDIO_INFO.tagline}
              </p>
              <p className="text-sm text-[#D8D1C4] mt-6 max-w-md font-sans leading-relaxed">
                Elevating residential homes and commercial establishments across Prayagraj with architectural discipline, material integrity, and turnkey execution.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-[#A69788] block mb-1">
                Studio Office
              </span>
              <p className="text-xs text-[#D8D1C4] font-sans leading-relaxed">
                {STUDIO_INFO.address.shop}, {STUDIO_INFO.address.market}, {STUDIO_INFO.address.road}, {STUDIO_INFO.address.locality}, {STUDIO_INFO.address.city} – {STUDIO_INFO.address.pincode}
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A69788] block mb-6 font-medium">
              Navigation
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-[#D8D1C4] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="md:col-span-3 lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#A69788] block mb-6 font-medium">
              Direct Contact
            </span>

            <div className="space-y-4 text-sm font-sans text-[#D8D1C4]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#A69788] block">
                  Telephone
                </span>
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors text-base font-serif"
                >
                  {STUDIO_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#A69788] block">
                  Location
                </span>
                <span>Ashok Nagar, Prayagraj</span>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-wider text-[#A69788] block">
                  Connect Online
                </span>
                <div className="flex items-center gap-6">
                  <a
                    href={STUDIO_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-[#D8D1C4] hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A69788]" />
                  </a>
                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                      STUDIO_INFO.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-[#D8D1C4] hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A69788]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A69788] gap-4">
          <p>© 2026 Grand Interior Studio. All Rights Reserved.</p>
          <p className="text-[11px]">
            Ashok Nagar • Bahuguna Market • Prayagraj, Uttar Pradesh
          </p>
        </div>

      </div>
    </footer>
  );
};
