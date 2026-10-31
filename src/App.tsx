import React, { useState } from 'react';
import { BrandAssetsProvider } from './context/BrandAssetsContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyWorkWithLuciana } from './components/WhyWorkWithLuciana';
import { EmployersSection } from './components/EmployersSection';
import { CandidatesSection } from './components/CandidatesSection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AssetUploadModal } from './components/AssetUploadModal';

export default function App() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
  };

  return (
    <BrandAssetsProvider>
      <div className="min-h-screen bg-white text-[#252B32] font-sans flex flex-col selection:bg-[#C6A15B]/20 selection:text-[#142B43]">
        {/* 1. Sticky Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 2. Hero Section */}
          <Hero />

          {/* 3. About Luciana */}
          <About />

          {/* 4. Recruitment Services */}
          <Services onSelectService={handleSelectService} />

          {/* 5. Recruitment Process (5-step timeline) */}
          <Process />

          {/* 6. Why Work With Luciana (4 relationship pillars) */}
          <WhyWorkWithLuciana />

          {/* 7. Employers Section */}
          <EmployersSection initialPosition={selectedServiceTitle} />

          {/* 8. Candidates Section */}
          <CandidatesSection />

          {/* 9. LinkedIn Recommendations (All 10 recommendations + The Difference Luciana Makes) */}
          <RecommendationsSection />

          {/* 10. Contact Section */}
          <ContactSection />
        </main>

        {/* 11. Footer */}
        <Footer />

        {/* Brand Assets Upload & Switcher Modal */}
        <AssetUploadModal />
      </div>
    </BrandAssetsProvider>
  );
}
