import React, { useState, useRef } from 'react';
import { UserCheck, UploadCloud, FileText, X, CheckCircle2, AlertCircle, Send, Linkedin } from 'lucide-react';

export const CandidatesSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    currentJobTitle: '',
    preferredJobTitle: '',
    preferredLocation: '',
    linkedInUrl: '',
    message: '',
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.emailAddress.trim()) {
      errs.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      errs.emailAddress = 'Please enter a valid email address';
    }
    if (!formData.currentJobTitle.trim()) errs.currentJobTitle = 'Current job title is required';
    if (!formData.preferredJobTitle.trim()) errs.preferredJobTitle = 'Preferred job title is required';
    if (!formData.preferredLocation.trim()) errs.preferredLocation = 'Preferred location is required';

    if (formData.linkedInUrl.trim()) {
      if (!formData.linkedInUrl.includes('linkedin.com/')) {
        errs.linkedInUrl = 'Please enter a valid LinkedIn URL (e.g. linkedin.com/in/username)';
      }
    }

    if (!cvFile) {
      errs.cvFile = 'Please attach your CV/Resume (PDF or DOCX)';
    }

    return errs;
  };

  const handleFileChange = (file: File | undefined) => {
    if (!file) return;
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setErrors((prev) => ({ ...prev, cvFile: 'Only PDF or Word documents (.pdf, .doc, .docx) are accepted' }));
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, cvFile: 'File size must be under 15MB' }));
      return;
    }
    setCvFile(file);
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.cvFile;
      return copy;
    });
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
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      emailAddress: '',
      currentJobTitle: '',
      preferredJobTitle: '',
      preferredLocation: '',
      linkedInUrl: '',
      message: '',
    });
    setCvFile(null);
    setIsSuccess(false);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <section id="candidates" className="py-20 sm:py-28 bg-[#F5F6F8] border-t border-b border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-2">
            For Experienced Professionals
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B43] tracking-tight mb-4">
            Your Next Career Opportunity Starts Here
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light max-w-2xl mx-auto">
            "Your skills, experience, and ambitions deserve the right opportunity. Connect with Luciana to explore potential career opportunities."
          </p>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
        </div>

        {/* Candidate Form Card */}
        <div className="max-w-4xl mx-auto bg-white border border-[#E5E7EB] shadow-xl p-8 sm:p-12 text-[#252B32]">
          
          {isSuccess ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <p className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                Profile Submitted
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142B43]">
                Welcome, {formData.fullName}
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] max-w-lg mx-auto leading-relaxed">
                Your career profile and resume ({cvFile?.name}) have been received by Luciana Birkenstock. Luciana reviews every submission personally to match candidates with upcoming confidential executive and leadership opportunities.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#142B43] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1D3D5E] transition-colors"
                >
                  Submit Another Profile
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
              
              <div className="border-b border-[#E5E7EB] pb-4 mb-2 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#142B43]">
                    Candidate Profile Submission
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    Share your current background and target roles for confidential consideration.
                  </p>
                </div>
                <UserCheck className="w-5 h-5 text-[#C6A15B] shrink-0" />
              </div>

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Full Name <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David Alexander"
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
                    Email Address <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="david.alexander@example.com"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.emailAddress ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.emailAddress && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.emailAddress}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Current Job Title & Preferred Job Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Current Job Title <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.currentJobTitle}
                    onChange={(e) => setFormData({ ...formData, currentJobTitle: e.target.value })}
                    placeholder="e.g. Lead Software Architect"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.currentJobTitle ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.currentJobTitle && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.currentJobTitle}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Preferred Job Title <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.preferredJobTitle}
                    onChange={(e) => setFormData({ ...formData, preferredJobTitle: e.target.value })}
                    placeholder="e.g. Director of Engineering / VP"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.preferredJobTitle ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.preferredJobTitle && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.preferredJobTitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Preferred Location & LinkedIn Profile URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    Preferred Location <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.preferredLocation}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    placeholder="e.g. Remote (US / Europe) or New York"
                    className={`w-full px-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                      errors.preferredLocation ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.preferredLocation && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.preferredLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                    LinkedIn Profile URL
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={formData.linkedInUrl}
                      onChange={(e) => setFormData({ ...formData, linkedInUrl: e.target.value })}
                      placeholder="https://www.linkedin.com/in/username"
                      className={`w-full pl-10 pr-4 py-3 bg-[#F5F6F8] border text-sm text-[#252B32] focus:bg-white focus:outline-hidden transition-colors ${
                        errors.linkedInUrl ? 'border-rose-400 bg-rose-50/20' : 'border-[#E5E7EB] focus:border-[#C6A15B]'
                      }`}
                    />
                    <Linkedin className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3.5" />
                  </div>
                  {errors.linkedInUrl && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                      <AlertCircle className="w-3 h-3" /> {errors.linkedInUrl}
                    </p>
                  )}
                </div>
              </div>

              {/* CV Upload Component */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                  CV / Resume Upload <span className="text-[#C6A15B]">*</span>
                </label>

                {cvFile ? (
                  <div className="flex items-center justify-between p-4 bg-[#F5F6F8] border border-[#C6A15B]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#142B43] text-white flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#C6A15B]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#142B43]">{cvFile.name}</p>
                        <p className="text-xs text-[#6B7280]">{formatFileSize(cvFile.size)}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCvFile(null)}
                      className="p-1.5 text-[#6B7280] hover:text-rose-600 hover:bg-white rounded transition-colors"
                      title="Remove file"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                      const file = e.dataTransfer.files?.[0];
                      handleFileChange(file);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`flex flex-col items-center justify-center p-8 border-2 border-dashed cursor-pointer transition-colors ${
                      isDragging
                        ? 'border-[#C6A15B] bg-[#C6A15B]/5'
                        : errors.cvFile
                        ? 'border-rose-400 bg-rose-50/20'
                        : 'border-[#DFCA9B] hover:border-[#C6A15B] bg-[#F5F6F8]'
                    }`}
                  >
                    <UploadCloud className="w-8 h-8 text-[#C6A15B] mb-2" />
                    <p className="text-sm font-semibold text-[#142B43]">
                      Click to upload or drag & drop your CV
                    </p>
                    <p className="text-xs text-[#6B7280] mt-1">
                      PDF or DOCX format (Max 15MB)
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="hidden"
                      onChange={(e) => handleFileChange(e.target.files?.[0])}
                    />
                  </div>
                )}
                {errors.cvFile && (
                  <p className="flex items-center gap-1 text-xs text-rose-600 mt-1.5">
                    <AlertCircle className="w-3 h-3" /> {errors.cvFile}
                  </p>
                )}
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#142B43] mb-2">
                  Message / Career Objectives (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific role criteria, compensation expectations, or availability timeline..."
                  className="w-full px-4 py-3 bg-[#F5F6F8] border border-[#E5E7EB] text-sm text-[#252B32] focus:bg-white focus:border-[#C6A15B] focus:outline-hidden transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#6B7280]">
                  Confidential review. Your profile is not shared without your prior discussion and consent.
                </p>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-[#142B43] hover:bg-[#1D3D5E] text-white text-xs font-semibold uppercase tracking-[0.18em] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Your Profile</span>
                      <Send className="w-4 h-4 text-[#C6A15B]" />
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
