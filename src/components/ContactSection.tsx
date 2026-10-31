import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, ArrowRight, Clock, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please enter at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 800);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-2">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B43] tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light max-w-2xl mx-auto">
            "Whether you're looking to hire exceptional talent or explore your next career opportunity, I would love to hear from you."
          </p>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
        </div>

        {/* Two Clear Primary CTAs */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 bg-[#F5F6F8] border border-[#E5E7EB] text-center">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#142B43] mb-2">
            How Can Luciana Assist You Today?
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] mb-6 max-w-lg mx-auto">
            Select your primary objective to jump directly to the specialized employer or candidate engagement workflow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('employers')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C6A15B] hover:bg-[#B5904A] text-white text-xs font-semibold uppercase tracking-[0.16em] shadow-sm transition-colors cursor-pointer"
            >
              <span>Hire Talent</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('candidates')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#142B43] text-[#142B43] hover:bg-[#142B43] hover:text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Layout: Info on Left, Direct Message Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#142B43] text-white p-8 border border-[#DFCA9B]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed font-light">
                For confidential inquiries, recruitment advisory, or prospective partnership discussions.
              </p>

              <div className="space-y-6">
                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">Professional Email</p>
                    <a
                      href="mailto:luciana.birkens.seniorrecruiter@gmail.com"
                      className="text-sm font-medium text-white hover:text-[#C6A15B] transition-colors break-all"
                    >
                      luciana.birkens.seniorrecruiter@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <Linkedin className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">LinkedIn Network</p>
                    <a
                      href="https://www.linkedin.com/in/lucianabirkenstock"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-white hover:text-[#C6A15B] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>linkedin.com/in/lucianabirkenstock</span>
                    </a>
                  </div>
                </div>

                {/* Location & Global Scope */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">Search Reach</p>
                    <p className="text-sm text-white">
                      Global Talent Acquisition & Remote Search
                    </p>
                  </div>
                </div>

                {/* Response Commitment */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">Response Window</p>
                    <p className="text-sm text-white">
                      Within 24–48 business hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400">
                <p>Confidential executive handling guaranteed for all communications.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-[#F5F6F8] p-8 sm:p-10 border border-[#E5E7EB] text-left">
            <h3 className="font-serif text-2xl font-bold text-[#142B43] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-[#6B7280] mb-6">
              Have a question or custom inquiry? Send a note directly to Luciana.
            </p>

            {isSuccess ? (
              <div className="p-8 bg-white border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#142B43]">Message Delivered</h4>
                <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding "<strong>{formData.subject}</strong>" has been received. Luciana will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setIsSuccess(false);
                  }}
                  className="px-5 py-2 bg-[#142B43] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-1.5">
                      Your Name <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#252B32] focus:outline-hidden transition-colors ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-1.5">
                      Your Email <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@organization.com"
                      className={`w-full px-4 py-3 bg-white border text-sm text-[#252B32] focus:outline-hidden transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-1.5">
                    Subject <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Executive Talent Inquiry / Advisory Consultation"
                    className={`w-full px-4 py-3 bg-white border text-sm text-[#252B32] focus:outline-hidden transition-colors ${
                      errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-1.5">
                    Message <span className="text-[#C6A15B]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can Luciana help connect your organization with exceptional talent or advise on your career journey?"
                    className={`w-full px-4 py-3 bg-white border text-sm text-[#252B32] focus:outline-hidden transition-colors ${
                      errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#142B43] hover:bg-[#1D3D5E] text-white text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-[#C6A15B]" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
