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
    'Commercial',
    'Hospitality',
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
    <section id="contact" className="py-24 lg:py-40 border-b border-[#E8E2D7] bg-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#8A7360]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A7360] font-medium font-sans">
              Connect With Us
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1B19] font-normal tracking-tight">
            Start A Conversation.
          </h2>
          <p className="text-sm sm:text-base text-[#706C64] font-sans max-w-xl mt-6">
            Whether planning a complete residential interior or commercial space in Prayagraj, our team is ready to discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Studio Information & Location Card */}
          <div className="lg:col-span-5 flex flex-col justify-between animate-fade-in-up animate-delay-100">
            <div className="space-y-12">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8A7360] font-medium block mb-3">
                  Studio Address
                </span>
                <h3 className="font-serif text-3xl text-[#1C1B19] font-normal mb-4">
                  Grand Interior Studio
                </h3>
                <address className="not-italic text-sm text-[#706C64] leading-relaxed font-sans max-w-xs">
                  Shop Number 12,<br />
                  Bahuguna Market,<br />
                  Hastings Rd, Ashok Nagar,<br />
                  Prayagraj, Uttar Pradesh 211001
                </address>
              </div>

              {/* Communication Channels */}
              <div className="pt-8 border-t border-[#D8D1C4] space-y-6 text-sm">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#706C64] block mb-2 font-medium">
                    Direct Phone Call
                  </span>
                  <a
                    href={`tel:${STUDIO_INFO.phoneRaw}`}
                    className="text-[#1C1B19] font-medium hover:text-[#8A7360] transition-colors inline-flex items-center gap-3 text-base font-sans"
                  >
                    <Phone className="w-4 h-4 text-[#8A7360]" />
                    <span>+91 79918 97321</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#706C64] block mb-2 font-medium">
                    Instant WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                      STUDIO_INFO.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1C1B19] font-medium hover:text-[#8A7360] transition-colors inline-flex items-center gap-3 text-base font-sans"
                  >
                    <MessageCircle className="w-4 h-4 text-[#8A7360]" />
                    <span>+91 79918 97321</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#706C64] block mb-2 font-medium">
                    Studio Instagram
                  </span>
                  <a
                    href={STUDIO_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1C1B19] font-medium hover:text-[#8A7360] transition-colors inline-flex items-center gap-3 text-base font-sans"
                  >
                    <Instagram className="w-4 h-4 text-[#8A7360]" />
                    <span>{STUDIO_INFO.instagramHandle}</span>
                  </a>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="pt-8 border-t border-[#D8D1C4] text-xs text-[#706C64] flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8A7360] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#1C1B19] font-medium uppercase tracking-widest text-[10px]">Studio Consultation Hours</span>
                  <p className="mt-1.5 font-sans">Monday – Sunday: 10:00 AM – 8:00 PM</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#8A7360] mt-2 font-medium">Prior appointment recommended for site visits.</p>
                </div>
              </div>
            </div>

            {/* Polished Location Card */}
            <div className="mt-12 bg-[#FBF9F5] border border-[#E8E2D7] p-8 rounded-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8A7360] font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Location</span>
                  </div>
                  <h4 className="font-serif text-2xl text-[#1C1B19] font-normal mt-1">
                    Visit The Studio
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-[#706C64] block">
                    Prayagraj
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#706C64] leading-relaxed mb-8 max-w-[200px]">
                Conveniently located at Bahuguna Market, Hastings Road in Ashok Nagar.
              </p>

              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-transparent border border-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#FBF9F5] text-[#1C1B19] text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 transition-all rounded-[2px]"
              >
                <Navigation className="w-4 h-4 text-current" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7 animate-fade-in-up animate-delay-200">
            <div className="bg-[#FBF9F5] border border-[#E8E2D7] p-8 lg:p-12 rounded-sm shadow-sm">
              
              {isSubmitted ? (
                <div className="py-20 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#EAE4D9] text-[#1C1B19] flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-8 h-8 text-[#8A7360]" />
                  </div>

                  <h3 className="font-serif text-4xl text-[#1C1B19] font-normal mb-4">
                    Thank You, {formData.name}.
                  </h3>

                  <p className="text-base text-[#706C64] max-w-md mx-auto mb-10 font-sans leading-relaxed">
                    Your consultation request for <strong className="text-[#1C1B19] font-medium">{formData.projectType}</strong> interior planning has been received. Our studio team will reach out at <strong className="text-[#1C1B19] font-medium">{formData.phone}</strong> shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.16em] font-medium inline-flex items-center justify-center gap-2 rounded-[2px]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#8A7360]" />
                      <span>Send Direct via WhatsApp</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-8 py-4 border border-[#D8D1C4] text-[#1C1B19] text-xs uppercase tracking-[0.16em] font-medium hover:border-[#1C1B19] rounded-[2px] transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" id="consultation-form">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#D8D1C4] gap-4">
                    <h3 className="font-serif text-3xl lg:text-4xl text-[#1C1B19] font-normal">
                      Schedule a Consultation
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#706C64] font-medium">
                      Free Initial Discussion
                    </span>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#1C1B19] font-medium mb-3"
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
                      className="w-full px-5 py-4 bg-[#ECE6DC] border border-transparent focus:border-[#8A7360] focus:bg-[#FBF9F5] focus:outline-none text-sm text-[#1C1B19] rounded-[2px] transition-colors"
                    />
                  </div>

                  {/* Phone Number Input */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#1C1B19] font-medium mb-3"
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
                      className="w-full px-5 py-4 bg-[#ECE6DC] border border-transparent focus:border-[#8A7360] focus:bg-[#FBF9F5] focus:outline-none text-sm text-[#1C1B19] rounded-[2px] transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="form-project-type"
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#1C1B19] font-medium mb-3"
                    >
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {projectTypeOptions.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`py-3 px-4 text-[10px] uppercase tracking-[0.16em] text-center border transition-all rounded-[2px] ${
                            formData.projectType === type
                              ? 'bg-[#1C1B19] text-[#FBF9F5] border-[#1C1B19] font-medium'
                              : 'bg-transparent text-[#706C64] border-[#D8D1C4] hover:border-[#1C1B19] hover:text-[#1C1B19]'
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
                      className="block text-[10px] uppercase tracking-[0.2em] text-[#1C1B19] font-medium mb-3"
                    >
                      Brief Message or Space Details (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your space, carpet area, location in Prayagraj, or expected timeline..."
                      className="w-full px-5 py-4 bg-[#ECE6DC] border border-transparent focus:border-[#8A7360] focus:bg-[#FBF9F5] focus:outline-none text-sm text-[#1C1B19] rounded-[2px] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-[#1C1B19] text-[#FBF9F5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#322F2A] transition-colors duration-200 flex items-center justify-center gap-3 rounded-[2px] disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Request Consultation'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Prefer WhatsApp Alternative */}
                  <div className="pt-6 border-t border-[#D8D1C4] flex items-center justify-between text-[10px] text-[#706C64]">
                    <span className="uppercase tracking-widest">Prefer immediate chat?</span>
                    <a
                      href={`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${encodeURIComponent(
                        STUDIO_INFO.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1C1B19] font-medium hover:text-[#8A7360] inline-flex items-center gap-2 uppercase tracking-widest"
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

