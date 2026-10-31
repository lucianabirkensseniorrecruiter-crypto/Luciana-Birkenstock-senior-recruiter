import React from 'react';
import { useBrandAssets } from '../context/BrandAssetsContext';

interface LBMonogramLogoProps {
  variant?: 'light' | 'dark' | 'footer';
  showWordmark?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LBMonogramLogo: React.FC<LBMonogramLogoProps> = ({
  variant = 'dark',
  showWordmark = true,
  className = '',
  size = 'md',
}) => {
  const { logoUrl } = useBrandAssets();

  const isDark = variant === 'dark'; // Dark text/lines on light background
  const isLight = variant === 'light'; // Light text/gold on dark navy
  const isFooter = variant === 'footer';

  const dimensionMap = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: { name: 'text-sm tracking-[0.18em]', title: 'text-[9px] tracking-[0.22em]' },
    md: { name: 'text-base sm:text-lg tracking-[0.16em]', title: 'text-[10px] tracking-[0.24em]' },
    lg: { name: 'text-xl sm:text-2xl tracking-[0.16em]', title: 'text-xs tracking-[0.26em]' },
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {logoUrl ? (
        <div className={`relative flex items-center justify-center overflow-hidden rounded ${dimensionMap[size]}`}>
          <img
            src={logoUrl}
            alt="Luciana Birkenstock LB Monogram Logo"
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        /* Bespoke Luxury Vector LB Monogram Emblem */
        <div
          className={`relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${dimensionMap[size]}`}
          title="Luciana Birkenstock LB Monogram"
        >
          {/* Subtle Outer Geometric Border */}
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFCA9B" />
                <stop offset="50%" stopColor="#C6A15B" />
                <stop offset="100%" stopColor="#9F7A34" />
              </linearGradient>
              <linearGradient id={`navyGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1A3755" />
                <stop offset="100%" stopColor="#0F2032" />
              </linearGradient>
            </defs>

            {/* Circular luxury frame */}
            <circle
              cx="50"
              cy="50"
              r="47"
              stroke={`url(#goldGrad-${variant})`}
              strokeWidth={isLight || isFooter ? '1.75' : '1.5'}
              fill={isLight || isFooter ? '#0D1C2C' : '#FFFFFF'}
              className="transition-colors duration-300"
            />
            {/* Inner concentric ring */}
            <circle
              cx="50"
              cy="50"
              r="43"
              stroke={isLight || isFooter ? 'rgba(198, 161, 91, 0.35)' : 'rgba(20, 43, 67, 0.12)'}
              strokeWidth="0.75"
            />

            {/* Monogram L and B interlocking serif typography */}
            <g transform="translate(2, 0)">
              {/* Letter L in Deep Navy or Gold */}
              <path
                d="M32 28 V70 H52 C53 70 54 69 54 67.5 C54 66 53 65 51 65 H38 V28 C38 26.5 37 26 35 26 C33 26 32 26.5 32 28 Z"
                fill={isLight || isFooter ? '#FFFFFF' : '#142B43'}
              />
              {/* Serifs on L */}
              <rect
                x="28"
                y="26"
                width="14"
                height="2.5"
                rx="0.5"
                fill={isLight || isFooter ? '#FFFFFF' : '#142B43'}
              />

              {/* Letter B in Gold Foil Gradient */}
              <path
                d="M45 28 V70 H61 C68 70 73 66.5 73 60 C73 55.5 70 52 64.5 50.5 C68.5 49 71 45.8 71 41.5 C71 34 65.5 28 58 28 H45 Z M51 34 H58 C62 34 65 36.5 65 40.5 C65 44.5 62 47 58 47 H51 V34 Z M51 51.5 H59 C63.5 51.5 67 54.5 67 59.5 C67 64 63.5 65.5 59 65.5 H51 V51.5 Z"
                fill={`url(#goldGrad-${variant})`}
              />
              {/* Interlocking accent dot */}
              <circle cx="50" cy="50" r="1.5" fill="#C6A15B" />
            </g>
          </svg>
        </div>
      )}

      {showWordmark && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif font-semibold leading-tight tracking-[0.16em] uppercase ${
              textSizes[size].name
            } ${isLight || isFooter ? 'text-white' : 'text-[#142B43]'}`}
          >
            Luciana Birkenstock
          </span>
          <span
            className={`font-sans font-medium uppercase mt-0.5 ${
              textSizes[size].title
            } ${isLight || isFooter ? 'text-[#C6A15B]' : 'text-[#C6A15B]'}`}
          >
            Executive Search & Talent Acquisition
          </span>
        </div>
      )}
    </div>
  );
};
