import React from 'react';
import { HeartHandshake, Target, Users, Sparkles } from 'lucide-react';
import { WHY_WORK_WITH_LUCIANA, ValuePillar } from '../data/values';

export const WhyWorkWithLuciana: React.FC = () => {
  const getIcon = (iconName: ValuePillar['iconName']) => {
    const props = { className: 'w-7 h-7 text-[#C6A15B]' };
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
    <section id="why-luciana" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-2">
            The Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B43] tracking-tight mb-4">
            Recruitment Built on Relationships
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light max-w-2xl mx-auto">
            Honoring the human dimension of executive recruitment with precision, integrity, and proactive communication.
          </p>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
        </div>

        {/* 4 Professional Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_WORK_WITH_LUCIANA.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F5F6F8] border border-[#E5E7EB] hover:border-[#C6A15B] p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between text-left"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 bg-white border border-[#E5E7EB] group-hover:border-[#C6A15B] flex items-center justify-center mb-6 shadow-2xs transition-colors">
                  {getIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#142B43] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                  "{item.description}"
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 pt-4 border-t border-[#E5E7EB]/60 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#C6A15B] font-semibold">
                  Core Pillar
                </span>
                <span className="w-6 h-0.5 bg-[#C6A15B]/40 group-hover:w-12 group-hover:bg-[#C6A15B] transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
