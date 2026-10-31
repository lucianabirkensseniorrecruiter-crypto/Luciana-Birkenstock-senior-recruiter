import React from 'react';
import { HeartHandshake, Target, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIAL_HIGHLIGHTS } from '../data/values';

export const TestimonialHighlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#C6A15B]' };
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Target':
        return <Target {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="mb-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-1.5">
          Proven Impact & Peer Feedback
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142B43]">
          The Difference Luciana Makes
        </h3>
        <p className="text-xs sm:text-sm text-[#4B5563] mt-2">
          Themes synthesized directly from colleagues, hiring leaders, and candidates who have worked closely with Luciana.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIAL_HIGHLIGHTS.map((item) => (
          <div
            key={item.title}
            className="p-6 bg-white border border-[#E5E7EB] hover:border-[#C6A15B] shadow-2xs hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-[#F5F6F8] border border-[#E5E7EB] flex items-center justify-center mb-4">
                {getIcon(item.iconName)}
              </div>
              <h4 className="font-serif text-lg font-bold text-[#142B43] mb-2 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                {item.description}
              </p>
            </div>
            
            <div className="pt-4 mt-4 border-t border-[#F5F6F8] flex items-center gap-1.5 text-[11px] text-[#C6A15B] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Recommendation Theme</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
