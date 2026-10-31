import React from 'react';
import { Crown, Users, Search, Clock, Compass, Briefcase, ArrowUpRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/services';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    const props = { className: 'w-6 h-6 text-[#C6A15B]' };
    switch (iconName) {
      case 'Crown':
        return <Crown {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'Search':
        return <Search {...props} />;
      case 'Clock':
        return <Clock {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      default:
        return <Users {...props} />;
    }
  };

  const handleCtaClick = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const targetId = service.id === 'career-opportunities' ? 'candidates' : 'employers';
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-2">
            Tailored Capabilities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B43] tracking-tight mb-4">
            Recruitment Solutions That Make a Difference
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light max-w-2xl mx-auto">
            "Helping organizations attract exceptional talent and professionals discover meaningful opportunities."
          </p>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
        </div>

        {/* 6 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white border border-[#E5E7EB] p-8 flex flex-col justify-between hover:border-[#C6A15B] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Top Accent Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#C6A15B] transition-colors duration-300" />

              <div>
                {/* Header: Icon & Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#F5F6F8] group-hover:bg-[#142B43] flex items-center justify-center transition-colors duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-serif text-xl font-semibold text-[#DFCA9B] group-hover:text-[#C6A15B] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#142B43] mb-3 group-hover:text-[#142B43]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Tags / Sub-focus areas */}
                <div className="flex flex-wrap items-center gap-2 mb-8 text-xs text-[#6B7280]">
                  {service.focusKeywords.map((kw, i) => (
                    <React.Fragment key={kw}>
                      <span>{kw}</span>
                      {i < service.focusKeywords.length - 1 && (
                        <span aria-hidden="true" className="text-[#C6A15B]">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4 border-t border-[#F5F6F8]">
                <button
                  onClick={() => handleCtaClick(service)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#142B43] group-hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
