import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Linkedin, Phone } from 'lucide-react';
import { LONETEX_COMPANY } from '../data/lonetexProducts';

export default function AnnouncementBar() {
  const announcements = [
    {
      icon: "📞",
      text: "Call & WhatsApp:",
      highlight: "0328-0790704",
      extra: "· 0327-7771764 · 042-35253436 · +966 542 863 980"
    },
    {
      icon: "📍",
      text: "Visit Showroom:",
      highlight: "Khaira Rd, Khaira, Lahore, Pakistan",
      extra: "(Mon – Sat, 9:00 AM – 6:00 PM)"
    },
    {
      icon: "💼",
      text: "Institutional Supply:",
      highlight: "Custom Yarn Specifications & Bulk Orders Welcome",
      extra: ""
    },
    {
      icon: "📦",
      text: "Nationwide Dispatch:",
      highlight: "Serving Pakistan & Saudi Arabia Commercial Facilities",
      extra: ""
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle announcements every 4.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, announcements.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const current = announcements[currentIndex];

  return (
    <header className="w-full select-none z-50">
      {/* -------------------------------------------------------------
          BAR 1: Light Gray / White Utility Bar
          - Left: Social Media Icons
          - Center: Bold WHOLESALE & BULK ORDERS WELCOME
          - Right: PK PAKISTAN Country Indicator
      ------------------------------------------------------------- */}
      <div className="bg-[#F8FAFC] text-slate-600 border-b border-slate-200/80 text-xs py-1.5 px-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0A1D37] transition-colors"
              title="Lonetex on Instagram"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0A1D37] transition-colors"
              title="Lonetex on Facebook"
              aria-label="Facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0A1D37] transition-colors"
              title="Lonetex on LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Center: Wholesale Announcement */}
          <div className="text-center font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#0A1D37]">
            <span>WHOLESALE &amp; BULK ORDERS WELCOME</span>
          </div>

          {/* Right: Country Indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
            <span className="text-base leading-none">🇵🇰</span>
            <span>PK PAKISTAN</span>
          </div>

        </div>
      </div>

      {/* -------------------------------------------------------------
          BAR 2: Clean Minimalist White Ticker Bar
          - Background: Pure White with subtle bottom border
          - Typography: Slate text with bold deep navy numbers & links
      ------------------------------------------------------------- */}
      <div
        className="bg-white text-slate-700 py-2 px-4 border-b border-slate-200/80 transition-colors"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto flex items-center justify-between gap-2 max-w-5xl">
          
          {/* Left Arrow (<) */}
          <button
            onClick={handlePrev}
            className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-all shrink-0 active:scale-95"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Announcement Text with High Contrast & Navy Accents */}
          <div className="flex-1 text-center overflow-hidden px-2">
            <div
              key={currentIndex}
              className="text-xs sm:text-sm font-heading font-medium tracking-wide text-slate-600 animate-fade-in truncate flex items-center justify-center gap-1.5"
            >
              <span>{current.icon}</span>
              <span className="text-slate-500">{current.text}</span>
              {current.highlight.includes("0328-0790704") ? (
                <a
                  href="tel:03280790704"
                  className="text-[#0A1D37] font-bold hover:text-blue-600 transition-colors"
                >
                  {current.highlight}
                </a>
              ) : (
                <span className="text-[#0A1D37] font-bold">{current.highlight}</span>
              )}
              {current.extra && (
                <span className="text-slate-400 font-normal hidden md:inline">
                  {current.extra}
                </span>
              )}
            </div>
          </div>

          {/* Right Arrow (>) */}
          <button
            onClick={handleNext}
            className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-all shrink-0 active:scale-95"
            aria-label="Next announcement"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </header>
  );
}
