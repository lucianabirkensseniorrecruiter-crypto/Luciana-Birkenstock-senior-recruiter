import React from 'react';
import { ArrowRight, Sparkles, Building2, UserCheck, ShieldCheck } from 'lucide-react';
import { useBrandAssets } from '../context/BrandAssetsContext';

export const Hero: React.FC = () => {
  const { portraitUrl, setIsAssetModalOpen } = useBrandAssets();

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
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pb-32 bg-white overflow-hidden">
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-[#F5F6F8] to-white -z-10 pointer-events-none" />
      <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-[#C6A15B]/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#142B43]/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Small Introductory Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F6F8] border border-[#E5E7EB] text-[#142B43] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#142B43]">
                EXECUTIVE RECRUITMENT & TALENT ACQUISITION
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#142B43] leading-[1.12] tracking-tight mb-6 text-balance">
              Connecting Exceptional Talent with{' '}
              <span className="text-gold-gradient italic font-normal">Forward-Thinking</span> Organizations.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-2xl font-light">
              "I help organizations identify exceptional professionals and build high-performing teams through strategic recruitment, talent acquisition, and personalized candidate engagement."
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('employers')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C6A15B] hover:bg-[#B5904A] text-white font-medium text-xs sm:text-sm uppercase tracking-[0.18em] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98 group"
              >
                <span>Hire Talent</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollTo('candidates')}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#142B43] text-[#142B43] hover:bg-[#142B43] hover:text-white font-medium text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer active:scale-98"
              >
                Explore Opportunities
              </button>
            </div>

            {/* Trust Indicator Badges */}
            <div className="mt-12 pt-8 border-t border-[#E5E7EB] w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B7280]">Specialization</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#142B43] mt-0.5">Executive & Tech</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B7280]">Approach</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#142B43] mt-0.5">People-Centric</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B7280]">Network</p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#142B43] mt-0.5">Global Reach</p>
              </div>
            </div>

          </div>

          {/* Right Column: Luciana's Professional Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Elegant Navy and Gold Accent Framing */}
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Gold Border Offset */}
              <div className="absolute -inset-2.5 sm:-inset-4 border border-[#C6A15B]/40 pointer-events-none translate-x-2 translate-y-2 -z-10" />
              <div className="absolute -inset-1 border border-[#142B43]/15 pointer-events-none -translate-x-1 -translate-y-1 -z-10" />

              {/* Portrait Container */}
              <div className="relative overflow-hidden bg-[#142B43] shadow-2xl group">
                <img
                  src={portraitUrl}
                  alt="Luciana Birkenstock - Senior Recruiter & Executive Talent Acquisition Specialist"
                  className="w-full h-auto object-cover object-center aspect-square sm:aspect-[4/4.5] transition-transform duration-700 group-hover:scale-102"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#142B43]/60 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Floating Credibility Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 border border-[#E5E7EB] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif font-semibold text-[#142B43] text-sm">
                        Luciana Birkenstock
                      </p>
                      <p className="text-[10px] text-[#C6A15B] font-semibold uppercase tracking-wider">
                        Senior Recruiter | Executive Search
                      </p>
                    </div>
                    <button
                      onClick={() => setIsAssetModalOpen(true)}
                      className="text-[10px] text-[#6B7280] hover:text-[#142B43] underline cursor-pointer"
                      title="Update official photo or logo"
                    >
                      Brand Assets
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
