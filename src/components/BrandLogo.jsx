import React from 'react';

/**
 * Official Lonetex Oval Emblem Logo Component
 * Renders the golden-yellow oval badge with royal/navy blue (#002B49) border and typography.
 */
export default function BrandLogo({
  size = 'md',        // 'sm', 'md', 'lg', 'xl'
  className = '',
  onClick
}) {
  // Height presets for the horizontal oval badge
  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9 md:h-10',
    lg: 'h-11 sm:h-12 md:h-14',
    xl: 'h-16 sm:h-20'
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center select-none bg-transparent ${
        onClick ? 'cursor-pointer group' : ''
      } ${className}`}
      title="LONETEX — COME CLEAN"
    >
      <svg
        viewBox="0 0 220 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${selectedSize} w-auto object-contain transition-transform duration-200 group-hover:scale-105 active:scale-95`}
      >
        {/* Yellow Oval Badge with Vibrant Royal Blue Border */}
        <ellipse
          cx="110"
          cy="37.5"
          rx="104"
          ry="32"
          fill="#FFC700"
          stroke="#2B4C8C"
          strokeWidth="4.5"
        />
        {/* Inner Accent Ring */}
        <ellipse
          cx="110"
          cy="37.5"
          rx="97"
          ry="26"
          fill="none"
          stroke="#2B4C8C"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />

        {/* Slanted Bold Vibrant Royal Blue Text: LONETEX */}
        <text
          x="110"
          y="48"
          textAnchor="middle"
          fontFamily="'Montserrat', 'Plus Jakarta Sans', 'Arial Black', sans-serif"
          fontSize="33"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="2.5"
          fill="#2B4C8C"
        >
          LONETEX
        </text>
      </svg>
    </div>
  );
}
