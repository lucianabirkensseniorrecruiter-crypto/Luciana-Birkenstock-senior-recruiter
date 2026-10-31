import React, { createContext, useContext, useState, useEffect } from 'react';
const defaultPortraitPath = '/assets/aistudio/Professional_Portrait_in_a_Soft_Office_Setting_a7c30939.png';

interface BrandAssetsContextType {
  portraitUrl: string;
  logoUrl: string | null;
  setPortraitUrl: (url: string) => void;
  setLogoUrl: (url: string | null) => void;
  resetToDefaults: () => void;
  isCustomPortrait: boolean;
  isCustomLogo: boolean;
  isAssetModalOpen: boolean;
  setIsAssetModalOpen: (open: boolean) => void;
}

const BrandAssetsContext = createContext<BrandAssetsContextType | undefined>(undefined);

const STORAGE_PORTRAIT_KEY = 'lb_recruitment_custom_portrait_v2';
const STORAGE_LOGO_KEY = 'lb_recruitment_custom_logo';

export const BrandAssetsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portraitUrl, setPortraitUrlState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PORTRAIT_KEY);
      return saved || defaultPortraitPath;
    } catch {
      return defaultPortraitPath;
    }
  });

  const [logoUrl, setLogoUrlState] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_LOGO_KEY);
    } catch {
      return null;
    }
  });

  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);

  const setPortraitUrl = (url: string) => {
    setPortraitUrlState(url);
    try {
      localStorage.setItem(STORAGE_PORTRAIT_KEY, url);
    } catch (err) {
      console.warn('Failed to save portrait to localStorage:', err);
    }
  };

  const setLogoUrl = (url: string | null) => {
    setLogoUrlState(url);
    try {
      if (url) {
        localStorage.setItem(STORAGE_LOGO_KEY, url);
      } else {
        localStorage.removeItem(STORAGE_LOGO_KEY);
      }
    } catch (err) {
      console.warn('Failed to save logo to localStorage:', err);
    }
  };

  const resetToDefaults = () => {
    setPortraitUrlState(defaultPortraitPath);
    setLogoUrlState(null);
    try {
      localStorage.removeItem(STORAGE_PORTRAIT_KEY);
      localStorage.removeItem(STORAGE_LOGO_KEY);
    } catch (err) {
      console.warn('Failed to clear storage:', err);
    }
  };

  return (
    <BrandAssetsContext.Provider
      value={{
        portraitUrl,
        logoUrl,
        setPortraitUrl,
        setLogoUrl,
        resetToDefaults,
        isCustomPortrait: portraitUrl !== defaultPortraitPath,
        isCustomLogo: logoUrl !== null,
        isAssetModalOpen,
        setIsAssetModalOpen,
      }}
    >
      {children}
    </BrandAssetsContext.Provider>
  );
};

export const useBrandAssets = () => {
  const context = useContext(BrandAssetsContext);
  if (!context) {
    throw new Error('useBrandAssets must be used within a BrandAssetsProvider');
  }
  return context;
};
