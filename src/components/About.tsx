import React from 'react';
import { Check, Quote, Sparkles } from 'lucide-react';
import { useBrandAssets } from '../context/BrandAssetsContext';

export const About: React.FC = () => {
  const { portraitUrl } = useBrandAssets();

  const coreFocusAreas = [
    'Talent acquisition',
    'Candidate sourcing',
    'Recruitment coordination',
    'Professional relationship building',
    'Candidate experience',
    'Hiring manager collaboration',
    'Strategic recruitment',
    'Talent identification',
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F5F6F8] relative overflow-hidden border-t border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-2">
            Professional Profile
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B43] tracking-tight mb-3">
            Meet Luciana Birkenstock
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#4B5563]">
            Your Strategic Partner in Talent Acquisition
          </p>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-5" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Quote Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative accents */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C6A15B]/30 -z-10" />
              
              <div className="relative bg-white p-3 shadow-xl border border-[#E5E7EB]">
                <img
                  src={portraitUrl}
                  alt="Luciana Birkenstock"
                  className="w-full h-auto object-cover object-center aspect-square sm:aspect-[4/4.5]"
                />
              </div>

              {/* People-first pull quote card */}
              <div className="mt-4 p-5 bg-white border border-[#E5E7EB] shadow-xs">
                <Quote className="w-6 h-6 text-[#C6A15B] mb-2 opacity-80" />
                <p className="font-serif italic text-sm text-[#142B43] leading-relaxed">
                  "Successful hiring goes beyond filling positions. It is about understanding people, recognizing potential, and creating connections that make a lasting impact."
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C6A15B] mt-2">
                  — Luciana Birkenstock
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose & Focus Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4 text-base sm:text-lg text-[#252B32] font-normal leading-relaxed">
              <p>
                Luciana Birkenstock is a Senior Recruiter passionate about connecting exceptional professionals with meaningful career opportunities and helping organizations discover the talent they need to grow.
              </p>
              
              <p>
                With a strong focus on professional relationships, candidate engagement, and recruitment excellence, Luciana believes successful hiring goes beyond filling positions. It is about understanding people, recognizing potential, and creating connections that make a lasting impact.
              </p>

              <p>
                Whether supporting organizations in their hiring journey or helping professionals navigate career opportunities, Luciana brings a people-focused approach to recruitment.
              </p>
            </div>

            {/* Core Competencies & Emphasis Areas */}
            <div className="pt-6 border-t border-[#E5E7EB]">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#142B43] mb-4">
                Core Focus & Expertise
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreFocusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 p-3 bg-white border border-[#E5E7EB] hover:border-[#C6A15B] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#142B43]/5 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#C6A15B]" />
                    </div>
                    <span className="text-sm font-medium text-[#142B43]">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#employers"
                className="px-6 py-3 bg-[#142B43] hover:bg-[#1D3D5E] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Collaborate on Hiring
              </a>
              <a
                href="#recommendations"
                className="px-6 py-3 border border-[#C6A15B] text-[#142B43] hover:bg-[#C6A15B]/10 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Read Client Testimonials
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
