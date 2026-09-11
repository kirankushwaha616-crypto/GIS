import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ConsultationFormData } from '../types';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  ArrowUpRight,
  CheckCircle2,
  Navigation,
  Clock,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    projectType: 'Home',
    message: initialService ? `Interested in: ${initialService}` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions = [
    'Home',
    'Apartment',
    'Office',
    'Shop / Commercial',
    'Restaurant / Hospitality',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    // Simulate swift client consultation submission & store locally
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      projectType: 'Home',
      message: '',
    });
  };

  const whatsappInquiryUrl = `https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hello Grand Interior Studio, my name is ${formData.name || 'a client'}. I am planning a ${formData.projectType} interior project in Prayagraj. Please get in touch with me at ${formData.phone || ''}.`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-32 border-b border-[#E8E2D7] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#E8E2D7]">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#8A7360]" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A7360] font-medium font-sans">
              Get In Touch
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] font-normal tracking-tight">
            Start A Conversation.
          </h2>
          <p className="text-sm sm:text-base text-[#706C64] font-sans max-w-xl mt-3">
            Whether planning a complete residential interior or commercial space in Prayagraj, our team is ready to discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Studio Information & Location Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8A7360] font-medium block mb-2">
                  Studio Address
                </span>
                <h3 className="font-serif text-2xl text-[#1C1B19] font-normal mb-2">
                  Grand Interior Studio
                </h3>
                <address className="not-italic text-sm text-[#706C64] leading-relaxed font-sans">
                  Shop Number 12,<br />
                  Bahuguna Market,<br />
                  Hastings Rd,<br />
                  Ashok Nagar,<br />
                  Prayagraj, Uttar Pradesh 211001
                </address>
              </div>

              {/* Communication Channels */}
              <div className="pt-6 border-t border-[#E8E2D7] space-y-4 text-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#706C64] block mb-1">
                    Direct Phone Call
                  </span>
                  <a
                    href={`tel:${STUDIO_INFO.phoneRaw}`}
                    className="text-[#1C1B19] font-medium hover:text-[#8A7360] transition-colors inline-flex items-center gap-2 text-base font-sans"
                  >
                    <Phone className="w-4 h-4 text-[#8A7360]" />
                    <span>+91 79918 97321</span>
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#706C64] block mb-1">
                    Instant WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                      STUDIO_INFO.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1C1B19] font-medium hover:text-[#8A7360] transition-colors inline-flex items-center gap-2 text-base font-sans"
                  >
                    <MessageCircle className="w-4 h-4 text-[#8A7360]" />
                    <span>+91 79918 97321</span>
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#706C64] block mb-1">
                    Studio Instagram
                  </span>
                  <a
                    href={STUDIO_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1C1B19] font-medium hover:text-[#8A7360] transition-colors inline-flex items-center gap-2 text-base font-sans"
                  >
                    <Instagram className="w-4 h-4 text-[#8A7360]" />
                    <span>{STUDIO_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="pt-6 border-t border-[#E8E2D7] text-xs text-[#706C64] flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#8A7360] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#1C1B19] font-medium">Studio Consultation Hours:</span>
                  <p className="mt-0.5">Monday – Sunday: 10:00 AM – 8:00 PM</p>
                  <p className="text-[11px] text-[#8A7360] mt-0.5">Prior appointment recommended for site visits.</p>
                </div>
              </div>
            </div>

            {/* Polished Location Card */}
            <div className="mt-10 bg-[#F5F1E9] border border-[#E8E2D7] p-6 rounded-[2px]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8A7360] font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Location</span>
                  </div>
                  <h4 className="font-serif text-xl text-[#1C1B19] font-normal mt-1">
                    Visit Grand Interior Studio
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono uppercase text-[#706C64] block">
                    Prayagraj
                  </span>
                  <span className="text-[11px] text-[#8A7360] font-medium">5.0★ Google Verified</span>
                </div>
              </div>

              <p className="text-xs text-[#706C64] leading-relaxed mb-5">
                Conveniently located at Bahuguna Market, Hastings Road in Ashok Nagar. Centrally accessible across Prayagraj.
              </p>

              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#FBF9F5] border border-[#D8D1C4] hover:border-[#1C1B19] text-[#1C1B19] text-xs uppercase tracking-[0.14em] font-medium flex items-center justify-center gap-2 transition-all rounded-[2px]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#8A7360]" />
                <span>Get Directions on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F5EF] border border-[#E8E2D7] p-8 sm:p-10 rounded-[2px] shadow-[0_2px_12px_rgba(28,27,25,0.02)]">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#EAE4D9] text-[#1C1B19] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#8A7360]" />
                  </div>

                  <h3 className="font-serif text-3xl text-[#1C1B19] font-normal mb-3">
                    Thank You, {formData.name}.
                  </h3>

                  <p className="text-sm text-[#706C64] max-w-md mx-auto mb-8 font-sans leading-relaxed">
                    Your consultation request for <strong className="text-[#1C1B19]">{formData.projectType}</strong> interior planning has been received. Our studio team will reach out at <strong className="text-[#1C1B19]">{formData.phone}</strong> shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.14em] font-medium inline-flex items-center gap-2 rounded-[2px]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#8A7360]" />
                      <span>Send Direct via WhatsApp</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="px-6 py-3 border border-[#D8D1C4] text-[#1C1B19] text-xs uppercase tracking-[0.14em] font-medium hover:bg-white rounded-[2px]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D7]">
                    <h3 className="font-serif text-2xl text-[#1C1B19] font-normal">
                      Schedule a Consultation
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider text-[#706C64]">
                      Free Initial Discussion
                    </span>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs uppercase tracking-[0.14em] text-[#1C1B19] font-medium mb-2"
                    >
                      Your Full Name <span className="text-[#8A7360]">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Rajesh Sharma"
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#D8D1C4] focus:border-[#1C1B19] focus:outline-none text-sm text-[#1C1B19] rounded-[2px] transition-colors"
                    />
                  </div>

                  {/* Phone Number Input */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs uppercase tracking-[0.14em] text-[#1C1B19] font-medium mb-2"
                    >
                      Phone Number <span className="text-[#8A7360]">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#D8D1C4] focus:border-[#1C1B19] focus:outline-none text-sm text-[#1C1B19] rounded-[2px] transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="form-project-type"
                      className="block text-xs uppercase tracking-[0.14em] text-[#1C1B19] font-medium mb-2"
                    >
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypeOptions.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`py-2.5 px-3 text-xs uppercase tracking-wider text-center border transition-all rounded-[2px] ${
                            formData.projectType === type
                              ? 'bg-[#1C1B19] text-[#FBF9F5] border-[#1C1B19] font-medium'
                              : 'bg-[#FBF9F5] text-[#706C64] border-[#D8D1C4] hover:border-[#1C1B19] hover:text-[#1C1B19]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs uppercase tracking-[0.14em] text-[#1C1B19] font-medium mb-2"
                    >
                      Brief Message or Space Details (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your space, carpet area, location in Prayagraj, or expected timeline..."
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#D8D1C4] focus:border-[#1C1B19] focus:outline-none text-sm text-[#1C1B19] rounded-[2px] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#322F2A] transition-colors duration-200 flex items-center justify-center gap-2 rounded-[2px] disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Request Consultation'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Prefer WhatsApp Alternative */}
                  <div className="pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-xs text-[#706C64]">
                    <span>Prefer immediate chat?</span>
                    <a
                      href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                        STUDIO_INFO.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1C1B19] font-medium hover:text-[#8A7360] inline-flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#8A7360]" />
                      <span>Prefer WhatsApp?</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
