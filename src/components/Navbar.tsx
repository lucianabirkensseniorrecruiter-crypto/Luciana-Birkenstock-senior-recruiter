import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LBMonogramLogo } from './LBMonogramLogo';
import { useBrandAssets } from '../context/BrandAssetsContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { setIsAssetModalOpen } = useBrandAssets();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section spy
      const sections = ['home', 'about', 'services', 'process', 'why-luciana', 'recommendations', 'candidates', 'employers', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Recommendations', href: '#recommendations', id: 'recommendations' },
    { label: 'Career Opportunities', href: '#candidates', id: 'candidates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E7EB] py-3'
          : 'bg-white/90 backdrop-blur-xs border-b border-[#E5E7EB]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center transition-opacity hover:opacity-95"
            aria-label="Luciana Birkenstock Executive Recruitment"
          >
            <LBMonogramLogo variant="dark" size="sm" showWordmark={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                    isActive
                      ? 'text-[#142B43] font-semibold'
                      : 'text-[#4B5563] hover:text-[#142B43]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A15B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Prominent Gold "Hire Talent" button */}
            <button
              onClick={() => scrollToSection('employers')}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#C6A15B] hover:bg-[#B5904A] text-white text-xs font-semibold uppercase tracking-[0.16em] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-98"
            >
              Hire Talent
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => scrollToSection('employers')}
              className="px-3.5 py-1.5 bg-[#C6A15B] text-white text-[11px] font-semibold tracking-wider uppercase"
            >
              Hire Talent
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#142B43] hover:bg-[#F5F6F8] rounded transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E7EB] shadow-xl px-5 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3.5 pb-5 border-b border-[#E5E7EB]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm tracking-wider uppercase font-medium py-1.5 transition-colors ${
                    isActive ? 'text-[#C6A15B] font-semibold' : 'text-[#252B32] hover:text-[#142B43]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => scrollToSection('employers')}
              className="w-full py-3 bg-[#C6A15B] hover:bg-[#B5904A] text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors cursor-pointer"
            >
              Hire Talent
            </button>
            <button
              onClick={() => scrollToSection('candidates')}
              className="w-full py-2.5 border border-[#142B43] text-[#142B43] hover:bg-[#142B43] hover:text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors cursor-pointer"
            >
              Explore Opportunities
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAssetModalOpen(true);
              }}
              className="text-center text-[11px] text-[#6B7280] hover:text-[#142B43] pt-2"
            >
              Manage Brand Assets (Logo & Portrait)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
