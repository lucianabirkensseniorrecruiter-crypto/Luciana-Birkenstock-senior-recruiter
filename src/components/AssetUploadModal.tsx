import React, { useState } from 'react';
import { X, Upload, CheckCircle2, RotateCcw, Image, Sparkles } from 'lucide-react';
import { useBrandAssets } from '../context/BrandAssetsContext';

export const AssetUploadModal: React.FC = () => {
  const {
    portraitUrl,
    logoUrl,
    setPortraitUrl,
    setLogoUrl,
    resetToDefaults,
    isCustomPortrait,
    isCustomLogo,
    isAssetModalOpen,
    setIsAssetModalOpen,
  } = useBrandAssets();

  const [portraitStatus, setPortraitStatus] = useState<string | null>(null);
  const [logoStatus, setLogoStatus] = useState<string | null>(null);

  if (!isAssetModalOpen) return null;

  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setPortraitStatus('Please select an image file (.png, .jpg, .webp)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setPortraitUrl(event.target.result);
        setPortraitStatus('Portrait updated successfully!');
        setTimeout(() => setPortraitStatus(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setLogoStatus('Please select an image file (.png, .jpg, .svg)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setLogoUrl(event.target.result);
        setLogoStatus('Monogram logo updated successfully!');
        setTimeout(() => setLogoStatus(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1C2C]/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="asset-modal-title"
    >
      <div className="relative w-full max-w-xl bg-white border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 text-[#252B32]">
        {/* Close Button */}
        <button
          onClick={() => setIsAssetModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-[#4B5563] hover:text-[#142B43] hover:bg-[#F5F6F8] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-[#C6A15B] text-xs font-semibold tracking-wider uppercase mb-1.5">
          <Sparkles className="w-4 h-4" />
          <span>Brand Assets Manager</span>
        </div>
        <h2 id="asset-modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-[#142B43]">
          Luciana's Brand Assets
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5563] mt-2 mb-6">
          Upload Luciana's official LB monogram logo and high-resolution professional portrait. Changes instantly update the header, hero, about section, and footer.
        </p>

        <div className="space-y-6">
          {/* Logo Asset */}
          <div className="p-4 border border-[#E5E7EB] bg-[#F5F6F8]">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-[#142B43]">1. LB Monogram Logo</h3>
                <p className="text-xs text-[#6B7280]">
                  {isCustomLogo ? 'Custom logo active' : 'Vector bespoke LB monogram active'}
                </p>
              </div>
              {isCustomLogo && (
                <button
                  onClick={() => setLogoUrl(null)}
                  className="text-xs text-[#C6A15B] hover:underline"
                >
                  Use Default Monogram
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 bg-white border border-[#E5E7EB] flex items-center justify-center p-2 overflow-hidden">
                {logoUrl ? (
                  <img src={logoUrl} alt="Custom Logo" className="w-full h-full object-contain" />
                ) : (
                  <span className="font-serif font-bold text-xl text-[#C6A15B]">LB</span>
                )}
              </div>

              <label className="flex-1 flex flex-col items-center justify-center px-4 py-3 border-2 border-dashed border-[#DFCA9B] hover:border-[#C6A15B] bg-white cursor-pointer transition-colors group">
                <Upload className="w-4 h-4 text-[#C6A15B] mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-[#142B43]">Upload LB Monogram Logo</span>
                <span className="text-[10px] text-[#6B7280]">PNG, JPG, or SVG with transparent background</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/svg+xml,image/webp"
                  className="hidden"
                  onChange={handleLogoUpload}
                />
              </label>
            </div>
            {logoStatus && (
              <p className="flex items-center gap-1.5 text-xs text-emerald-700 mt-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> {logoStatus}
              </p>
            )}
          </div>

          {/* Portrait Asset */}
          <div className="p-4 border border-[#E5E7EB] bg-[#F5F6F8]">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-[#142B43]">2. Professional Portrait</h3>
                <p className="text-xs text-[#6B7280]">
                  {isCustomPortrait ? 'Custom portrait active' : 'Default executive portrait active'}
                </p>
              </div>
              {isCustomPortrait && (
                <button
                  onClick={() => resetToDefaults()}
                  className="text-xs text-[#C6A15B] hover:underline"
                >
                  Reset to Default
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-20 shrink-0 bg-white border border-[#E5E7EB] overflow-hidden">
                <img
                  src={portraitUrl}
                  alt="Portrait preview"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <label className="flex-1 flex flex-col items-center justify-center px-4 py-3 border-2 border-dashed border-[#DFCA9B] hover:border-[#C6A15B] bg-white cursor-pointer transition-colors group">
                <Image className="w-4 h-4 text-[#C6A15B] mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-[#142B43]">Upload Luciana's Portrait</span>
                <span className="text-[10px] text-[#6B7280]">High-resolution JPG or PNG (portrait orientation)</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={handlePortraitUpload}
                />
              </label>
            </div>
            {portraitStatus && (
              <p className="flex items-center gap-1.5 text-xs text-emerald-700 mt-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> {portraitStatus}
              </p>
            )}
          </div>
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#E5E7EB]">
          {(isCustomLogo || isCustomPortrait) && (
            <button
              onClick={resetToDefaults}
              className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#142B43] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset all to original defaults
            </button>
          )}
          <div className="ml-auto">
            <button
              onClick={() => setIsAssetModalOpen(false)}
              className="px-5 py-2 bg-[#142B43] text-white hover:bg-[#1D3D5E] text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
