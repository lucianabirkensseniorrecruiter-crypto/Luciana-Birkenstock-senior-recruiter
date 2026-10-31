import React, { useState } from 'react';
import { Building2, Send, CheckCircle2, AlertCircle, Sparkles, Mail, Briefcase } from 'lucide-react';

interface EmployersSectionProps {
  initialPosition?: string;
}

export const EmployersSection: React.FC<EmployersSectionProps> = ({ initialPosition = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    positionToFill: initialPosition || '',
    numberOfPositions: '1',
    hiringLocation: '',
    employmentType: 'Full-time Executive',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionData, setSubmissionData] = useState<typeof formData | null>(null);

  // Sync if initialPosition changes
  React.useEffect(() => {
    if (initialPosition) {
      setFormData((prev) => ({ ...prev, positionToFill: initialPosition }));
    }
  }, [initialPosition]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Please enter a valid business email address';
    }
    if (!formData.positionToFill.trim()) errs.positionToFill = 'Position to be filled is required';
    if (!formData.hiringLocation.trim()) errs.hiringLocation = 'Hiring location is required';
    if (!formData.message.trim()) {
      errs.message = 'Please provide details on your hiring needs or ideal candidate profile';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your hiring needs';
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

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsLoading(false);
      setSubmissionData({ ...formData });
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      positionToFill: '',
      numberOfPositions: '1',
      hiringLocation: '',
      employmentType: 'Full-time Executive',
      message: '',
    });
    setIsSuccess(false);
    setSubmissionData(null);
  };

  return (
    <section id="employers" className="py-20 sm:py-28 bg-[#142B43] text-white relative overflow-hidden">
      {/* Background Decorative Lines & Shimmer */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-2">
            For Employers & Hiring Leaders
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Looking for Exceptional Talent?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto">
            "Finding the right professional can make all the difference. Let's connect and discuss your recruitment needs."
          </p>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
        </div>

        {/* Employer Card Container */}
        <div className="max-w-4xl mx-auto bg-white text-[#252B32] shadow-2xl border border-[#DFCA9B]/30 p-8 sm:p-12">
          
          {isSuccess && submissionData ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                Inquiry Received
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142B43]">
                Thank You, {submissionData.fullName}
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] max-w-lg mx-auto leading-relaxed">
                Your hiring inquiry for the <strong className="text-[#142B43]">{submissionData.positionToFill}</strong> role at <strong className="text-[#142B43]">{submissionData.companyName}</strong> has been transmitted. Luciana will review your requirements and reach out via <span className="font-medium text-[#142B43]">{submissionData.businessEmail}</span> promptly to schedule an exploratory discussion.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#142B43] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1D3D5E] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="border-b border-[#E5E7EB] pb-4 mb-2 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#142B43]">
                    Hiring Needs Specification
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    Provide your hiring objectives to initiate a confidential talent search consultation.
                  </p>
                </div>
                <Building2 className="w-5 h-5 text-[#C6A15B] shrink-0" />
              </div>

              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Full Name <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Company Name <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Acme Global Technologies"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.companyName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.companyName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Business Email & Position To Fill */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Business Email <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.businessEmail ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.businessEmail && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.businessEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Position to be Filled <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.positionToFill}
                    onChange={(e) => setFormData({ ...formData, positionToFill: e.target.value })}
                    placeholder="e.g. VP of Engineering or Senior Staff Specialist"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.positionToFill ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.positionToFill && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.positionToFill}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Number of Positions, Hiring Location, Employment Type */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Number of Positions
                  </label>
                  <select
                    value={formData.numberOfPositions}
                    onChange={(e) => setFormData({ ...formData, numberOfPositions: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F6F8] border border-[#E5E7EB] text-sm text-[#252B32] focus:bg-white focus:border-[#C6A15B] focus:outline-hidden transition-colors"
                  >
                    <option value="1">1 position (Single hire)</option>
                    <option value="2-3">2 - 3 positions</option>
                    <option value="4-6">4 - 6 positions</option>
                    <option value="7+">7+ positions (Team scale)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Hiring Location <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.hiringLocation}
                    onChange={(e) => setFormData({ ...formData, hiringLocation: e.target.value })}
                    placeholder="e.g. San Francisco, London, Remote"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.hiringLocation ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.hiringLocation && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.hiringLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Employment Type
                  </label>
                  <select
                    value={formData.employmentType}
                    onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F6F8] border border-[#E5E7EB] text-sm text-[#252B32] focus:bg-white focus:border-[#C6A15B] focus:outline-hidden transition-colors"
                  >
                    <option value="Full-time Executive">Full-time Executive</option>
                    <option value="Permanent / Direct Hire">Permanent / Direct Hire</option>
                    <option value="Executive Interim / Contract">Executive Interim / Contract</option>
                    <option value="Advisory / Board">Advisory / Board</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                  Message & Scope of Search <span className="text-[#C6A15B]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your target seniority, cultural dynamics, desired timeline, or key technical qualifications..."
                  className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                    errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                  }`}
                />
                {errors.message && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#6B7280]">
                  Confidential consultation. Direct reply from Luciana Birkenstock.
                </p>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-[#C6A15B] hover:bg-[#B5904A] text-white text-xs font-semibold uppercase tracking-[0.18em] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Discuss Your Hiring Needs</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
