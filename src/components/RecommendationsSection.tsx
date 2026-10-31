import React, { useState } from 'react';
import { Quote, Search, Filter, ChevronDown, ChevronUp, CheckCircle, ExternalLink } from 'lucide-react';
import { RECOMMENDATIONS, Recommendation } from '../data/recommendations';
import { TestimonialHighlights } from './TestimonialHighlights';

export const RecommendationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'leader' | 'candidate' | 'colleague'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredRecommendations = RECOMMENDATIONS.filter((item) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'leader'
        ? item.category === 'leader'
        : filter === 'colleague'
        ? item.category === 'colleague'
        : item.category === 'candidate';

    const matchesSearch =
      searchQuery.trim() === ''
        ? true
        : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.testimonial.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.relationship.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Color generator for initials avatar
  const getAvatarBg = (initials: string) => {
    const palette = [
      'bg-[#142B43] text-[#DFCA9B]',
      'bg-[#1D3D5E] text-white',
      'bg-[#23486F] text-white',
      'bg-[#0D1C2C] text-[#C6A15B]',
    ];
    const index = initials.charCodeAt(0) % palette.length;
    return palette[index];
  };

  return (
    <section id="recommendations" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F6F8] border border-[#E5E7EB] text-[#142B43] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#142B43]">
              Verified LinkedIn Endorsements
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B43] tracking-tight mb-4">
            What People Say About Luciana
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] font-light max-w-2xl mx-auto">
            "Building meaningful professional relationships is at the heart of recruitment. Discover what colleagues, hiring leaders, and professionals have to say about their experience working with Luciana."
          </p>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-6" />
        </div>

        {/* Section 13: Testimonial Highlights */}
        <TestimonialHighlights />

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E5E7EB]">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#F5F6F8] p-1.5 border border-[#E5E7EB]">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#142B43] shadow-xs border border-[#E5E7EB]'
                  : 'text-[#4B5563] hover:text-[#142B43]'
              }`}
            >
              All Recommendations ({RECOMMENDATIONS.length})
            </button>
            <button
              onClick={() => setFilter('candidate')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                filter === 'candidate'
                  ? 'bg-white text-[#142B43] shadow-xs border border-[#E5E7EB]'
                  : 'text-[#4B5563] hover:text-[#142B43]'
              }`}
            >
              Candidates & Clients (5)
            </button>
            <button
              onClick={() => setFilter('leader')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                filter === 'leader'
                  ? 'bg-white text-[#142B43] shadow-xs border border-[#E5E7EB]'
                  : 'text-[#4B5563] hover:text-[#142B43]'
              }`}
            >
              Hiring Leaders & Execs (3)
            </button>
            <button
              onClick={() => setFilter('colleague')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                filter === 'colleague'
                  ? 'bg-white text-[#142B43] shadow-xs border border-[#E5E7EB]'
                  : 'text-[#4B5563] hover:text-[#142B43]'
              }`}
            >
              Team Colleagues (2)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recommendations..."
              className="w-full pl-9 pr-4 py-2 bg-[#F5F6F8] border border-[#E5E7EB] text-xs text-[#252B32] focus:bg-white focus:border-[#C6A15B] focus:outline-hidden transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-xs text-[#6B7280] hover:text-[#142B43]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 10 Testimonial Cards Responsive Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        {filteredRecommendations.length === 0 ? (
          <div className="text-center py-12 bg-[#F5F6F8] border border-[#E5E7EB] p-8">
            <p className="text-sm text-[#4B5563]">No recommendations matching your search query.</p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#C6A15B] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredRecommendations.map((item) => {
              const isExpanded = !!expandedCards[item.id];
              const isLong = item.testimonial.length > 280;
              const displayText =
                !isLong || isExpanded
                  ? item.testimonial
                  : item.testimonial.slice(0, 275) + '...';

              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E5E7EB] hover:border-[#C6A15B] shadow-2xs hover:shadow-lg transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between text-left relative group"
                >
                  {/* LinkedIn Verified Badge & Quote Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Initials-based Avatar */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-base shadow-xs shrink-0 ${getAvatarBg(
                          item.initials
                        )}`}
                      >
                        {item.initials}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-serif text-lg font-bold text-[#142B43] leading-snug">
                            {item.name}
                          </h4>
                          {/* LinkedIn mark icon */}
                          <svg
                            className="w-3.5 h-3.5 fill-[#0A66C2] shrink-0"
                            viewBox="0 0 24 24"
                            aria-label="LinkedIn Verified Recommendation"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </div>
                        <p className="text-[11px] text-[#4B5563] leading-snug mt-0.5 font-medium line-clamp-2">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <Quote className="w-5 h-5 text-[#C6A15B]/40 shrink-0 group-hover:text-[#C6A15B] transition-colors" />
                  </div>

                  {/* Relationship & Date Header Bar */}
                  <div className="bg-[#F5F6F8] px-3 py-1.5 border-l-2 border-[#C6A15B] text-[11px] text-[#6B7280] mb-4">
                    <span className="font-semibold text-[#142B43]">{item.date}</span>
                    <span className="mx-1">·</span>
                    <span>{item.relationship}</span>
                  </div>

                  {/* Testimonial Text */}
                  <div className="flex-1 text-sm text-[#252B32] leading-relaxed mb-4 whitespace-pre-line font-light">
                    "{displayText}"
                  </div>

                  {/* Read More / Read Less Toggle */}
                  {isLong && (
                    <div className="pt-2 border-t border-[#F5F6F8]">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#C6A15B] hover:text-[#B5904A] transition-colors cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <span>Read Less</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
