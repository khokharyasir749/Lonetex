import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Factory, Truck, Sparkles, ChevronLeft, ChevronRight, Globe2 } from 'lucide-react';
import { LONETEX_COMPANY, DEFAULT_PRODUCT_IMAGE } from '../data/lonetexProducts';

export default function HeroSlider({ onExploreCatalog }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Come Clean — Professional Cleaning Products & Uniforms",
      subtitle: "Industrial Heavy Duty Mopping Systems & Floor Maintenance Hardware",
      highlight: "Direct Factory Wholesale & Tender Contracts",
      bgGradient: "from-lonetex-950 via-lonetex-900 to-slate-950",
      image: "/banners/slide-1-kentucky-mops.png",
      badgeText: "🇵🇰 Pakistan & 🇸🇦 KSA Distribution"
    },
    {
      title: "HACCP Hygiene Color-Coded Janitorial Systems",
      subtitle: "Prevent Cross-Contamination in Hospitals, Food Processing & Hospitality",
      highlight: "Loop-End Kentucky Mops, Electrostatic Sweepers & Microfiber",
      bgGradient: "from-slate-950 via-lonetex-950 to-emerald-950",
      image: "/banners/slide-2-accessories.png",
      badgeText: "Hospital & Institutional Grade"
    },
    {
      title: "Commercial Janitorial Hardware & Custom Uniforms",
      subtitle: "Anodized Aluminum Poles, Stainless Spin Systems & Institutional Textiles",
      highlight: "Serving 500+ Commercial Facilities Across South Asia & Middle East",
      bgGradient: "from-emerald-950 via-slate-950 to-lonetex-950",
      image: "/banners/slide-3-mini-mop.png",
      badgeText: "Direct OEM Manufacturing"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden border-b border-lonetex-800">
      {/* Background Subtle Industrial Tech Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className={`relative bg-gradient-to-r ${active.bgGradient} transition-all duration-700 py-12 sm:py-16 lg:py-20`}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Dual Distribution Badge (Pakistan & KSA) */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-lonetex-800/90 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-sm">
                  <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>🇵🇰 Pakistan & 🇸🇦 Saudi Arabia Distribution</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Wholesale & Bulk Orders Only</span>
                </div>
              </div>

              {/* High-Contrast Hero Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Come Clean —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  Professional Cleaning Products & Uniforms
                </span>
              </h1>

              {/* Subtitles & Descriptions */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Manufactured for high-traffic facilities, commercial cleaning contractors, healthcare institutions, and hospitality chains. Custom yarn configurations and private labeling available.
              </p>

              {/* High-Contrast Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onExploreCatalog}
                  className="btn-primary bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-sm px-6 py-3.5 shadow-emerald-glow rounded-xl flex items-center gap-2"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={`https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent('Hello Lonetex, I would like to inquire about bulk wholesale pricing.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-3.5 px-5 text-sm font-bold rounded-xl shadow-lg"
                >
                  <MessageSquare className="h-4 w-4 fill-white" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Factory className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Lahore Factory Direct</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>HACCP Sanitization</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Truck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Pakistan & KSA Cargo</span>
                </div>
              </div>

            </div>

            {/* Right Showcase Card / Visual Slide */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl bg-slate-900 group">
                <img
                  src={active.image || DEFAULT_PRODUCT_IMAGE}
                  alt={active.title}
                  className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = DEFAULT_PRODUCT_IMAGE;
                  }}
                />
                
                {/* Floating Spec Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider mb-1.5 self-start">
                    {active.badgeText}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {active.subtitle}
                  </h3>
                  <p className="text-xs text-emerald-300 mt-1">
                    {active.highlight}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex items-center gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx
                          ? 'w-6 bg-emerald-400'
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === 0 ? slides.length - 1 : prev - 1
                      )
                    }
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % slides.length)
                    }
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
