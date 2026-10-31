import React from 'react';
import { LBMonogramLogo } from './LBMonogramLogo';
import { Linkedin, Mail, ArrowUp, ShieldCheck, Sparkles } from 'lucide-react';
import { useBrandAssets } from '../context/BrandAssetsContext';

export const Footer: React.FC = () => {
  const { setIsAssetModalOpen } = useBrandAssets();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Luciana', href: '#why-luciana' },
    { label: 'Recommendations', href: '#recommendations' },
    { label: 'For Employers', href: '#employers' },
    { label: 'For Candidates', href: '#candidates' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D1C2C] text-white border-t border-[#DFCA9B]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center">
              <LBMonogramLogo variant="footer" size="md" showWordmark={true} />
            </div>

            <p className="font-serif italic text-base text-[#DFCA9B] pt-2">
              "Connecting Exceptional Talent with Forward-Thinking Organizations."
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
              Executive recruitment, talent acquisition strategy, and personalized candidate engagement focused on lasting organizational impact.
            </p>

            {/* Social / Email Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/lucianabirkenstock"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-[#C6A15B] flex items-center justify-center text-slate-300 hover:text-[#C6A15B] transition-colors"
                aria-label="Luciana Birkenstock on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:luciana.birkens.seniorrecruiter@gmail.com"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-[#C6A15B] flex items-center justify-center text-slate-300 hover:text-[#C6A15B] transition-colors"
                aria-label="Email Luciana Birkenstock"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsAssetModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-[#C6A15B] text-[11px] text-[#DFCA9B] hover:text-white transition-colors cursor-pointer"
                title="Manage brand assets"
              >
                <Sparkles className="w-3 h-3 text-[#C6A15B]" />
                <span>Brand Assets</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-[#C6A15B] transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Core Focus / Location */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-light">
              <li>Executive & C-Suite Search</li>
              <li>Global Talent Acquisition</li>
              <li>Engineering & Tech Leadership</li>
              <li>Candidate Experience Excellence</li>
              <li>Hiring Strategy Consulting</li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#C6A15B] transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Confidentiality Notice (Verbatim from prompt) */}
        <div className="py-6 border-b border-white/10 text-left">
          <div className="flex items-start gap-2.5 max-w-4xl">
            <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              <strong className="text-slate-300 font-normal">Confidentiality Notice:</strong> "This message and any information shared through this website may contain confidential information intended for the designated recipient. If received in error, please notify the sender."
            </p>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Luciana Birkenstock. Senior Recruiter | Executive Search & Global Talent Acquisition. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Confidential Executive Recruitment</span>
            <span>·</span>
            <span>Worldwide Reach</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
