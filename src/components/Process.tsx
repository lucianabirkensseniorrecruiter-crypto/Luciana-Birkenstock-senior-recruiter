import React from 'react';
import { PROCESS_STEPS } from '../data/process';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F5F6F8] border-t border-b border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-2">
            Methodology
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B43] tracking-tight mb-4">
            A Thoughtful Approach to Recruitment
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light max-w-2xl mx-auto">
            A structured, people-first pathway that brings clarity, momentum, and high alignment to every search.
          </p>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
        </div>

        {/* Desktop Horizontal Timeline (>= lg) */}
        <div className="hidden lg:block relative">
          {/* Continuous Connecting Line */}
          <div className="absolute top-16 left-8 right-8 h-0.5 bg-[#DFCA9B]/50 -z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.step} className="flex flex-col items-center text-center group">
                
                {/* Step Marker Badge */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C6A15B] group-hover:bg-[#142B43] group-hover:border-[#142B43] flex items-center justify-center transition-all duration-300 shadow-sm mb-6">
                  <span className="font-serif font-bold text-sm text-[#142B43] group-hover:text-[#C6A15B] transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Card Container */}
                <div className="w-full bg-white border border-[#E5E7EB] group-hover:border-[#C6A15B] p-6 shadow-xs group-hover:shadow-md transition-all duration-300 flex-1 flex flex-col text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C6A15B]">
                      Phase {step.step}
                    </span>
                    <span className="text-xs text-[#6B7280]">0{idx + 1}/05</span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-[#142B43] mb-3">
                    {step.name}
                  </h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (< lg) */}
        <div className="lg:hidden relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-[#DFCA9B]/50 -z-0" />

          <div className="space-y-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.step} className="flex items-start gap-4">
                {/* Step Marker */}
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border-2 border-[#C6A15B] flex items-center justify-center shadow-xs">
                  <span className="font-serif font-bold text-sm text-[#142B43]">
                    {step.step}
                  </span>
                </div>

                {/* Card Container */}
                <div className="flex-1 bg-white border border-[#E5E7EB] p-5 shadow-xs text-left">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C6A15B]">
                      Phase {step.step}
                    </span>
                    <span className="text-xs text-[#6B7280]">Step {idx + 1} of 5</span>
                  </div>
                  
                  <h3 className="font-serif text-lg font-bold text-[#142B43] mb-2">
                    {step.name}
                  </h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
