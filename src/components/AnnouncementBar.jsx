import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Linkedin, Globe, Phone } from 'lucide-react';
import { LONETEX_COMPANY } from '../data/lonetexProducts';

export default function AnnouncementBar() {
  const announcements = LONETEX_COMPANY.tickerAnnouncements || [
    "📍 VISIT OUR LAHORE SHOWROOM — KHAIRA RD, KHAIRA, LAHORE",
    "📞 Call: 0345-8177695 · 0327-7771764 · 042-35253436 · +966 542 863 980 · +966 598 481 826 · +966 56 747 1842",
    "💼 REQUEST A BULK QUOTE — CONTACT US ONLINE OR VIA WHATSAPP",
    "📦 WHOLESALE SUPPLIER — BULK ORDERS WELCOME FOR BUSINESSES & FACILITIES"
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

  return (
    <header className="w-full select-none z-50">
      {/* -------------------------------------------------------------
          BAR 1: Light Gray / White Utility Bar
          - Left: Social Icons (Instagram, Facebook, LinkedIn)
          - Center: Bold WHOLESALE & BULK ORDERS WELCOME
          - Right: PK PAKISTAN Country Indicator
      ------------------------------------------------------------- */}
      <div className="bg-[#f8f9fa] text-slate-700 border-b border-slate-200 text-xs py-2 px-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-pink-600 transition-colors"
              title="Lonetex on Instagram"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors"
              title="Lonetex on Facebook"
              aria-label="Facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-700 transition-colors"
              title="Lonetex on LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Center: Wholesale Announcement */}
          <div className="text-center font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider text-slate-800">
            <span>WHOLESALE &amp; BULK ORDERS WELCOME</span>
          </div>

          {/* Right: Country Indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
            <span className="text-base leading-none">🇵🇰</span>
            <span>PK PAKISTAN</span>
          </div>

        </div>
      </div>

      {/* -------------------------------------------------------------
          BAR 2: Rotating Marquee / Ticker with Interactive < > Arrows
          - Background: Deep Industrial Emerald / Charcoal
          - Content: Cycling official showroom, contact, and RFQ messages
      ------------------------------------------------------------- */}
      <div
        className="bg-[#022c22] text-white py-2 px-4 border-b border-emerald-950 transition-colors"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto flex items-center justify-between gap-2 max-w-5xl">
          
          {/* Left Arrow (<) */}
          <button
            onClick={handlePrev}
            className="p-1 rounded-full hover:bg-emerald-900/80 text-emerald-300 hover:text-white transition-all shrink-0 active:scale-95"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Announcement Text with Fade In Animation */}
          <div className="flex-1 text-center overflow-hidden px-2">
            <div
              key={currentIndex}
              className="text-[11px] sm:text-xs font-heading font-medium tracking-wide text-emerald-100 animate-fade-in truncate"
            >
              {announcements[currentIndex]}
            </div>
          </div>

          {/* Right Arrow (>) */}
          <button
            onClick={handleNext}
            className="p-1 rounded-full hover:bg-emerald-900/80 text-emerald-300 hover:text-white transition-all shrink-0 active:scale-95"
            aria-label="Next announcement"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </header>
  );
}
