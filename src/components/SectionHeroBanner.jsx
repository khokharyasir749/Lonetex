import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'kentucky-mops',
    title: 'KENTUCKY MOPS',
    subtitle: 'LONETEX COLLECTION',
    link: '#kentucky-mops',
    targetSectionId: 'carousel-kentucky-mops',
    image: '/banners/Gemini_Generated_Image_l4qa1yl4qa1yl4qa.jfif',
    fallbackImage: '/banners/Gemini_Generated_Image_l4qa1yl4qa1yl4qa.png',
    alt: 'Lonetex Kentucky Mops Collection'
  },
  {
    id: 'accessories',
    title: 'ACCESSORIES',
    subtitle: 'LONETEX COLLECTION',
    link: '#accessories',
    targetSectionId: 'carousel-accessories',
    image: '/banners/Gemini_Generated_Image_kl337xkl337xkl33.jfif',
    fallbackImage: '/banners/Gemini_Generated_Image_kl337xkl337xkl33.png',
    alt: 'Lonetex Handles & Accessories Collection'
  },
  {
    id: 'flat-mops',
    title: 'MINI MOP',
    subtitle: 'LONETEX COLLECTION',
    link: '#flat-mops',
    targetSectionId: 'carousel-flat-mops',
    image: '/banners/Gemini_Generated_Image_wnrrczwnrrczwnrr.jfif',
    fallbackImage: '/banners/Gemini_Generated_Image_wnrrczwnrrczwnrr.png',
    alt: 'Lonetex Mini Mop Collection'
  },
  {
    id: 'practical-cleaning',
    title: 'PRACTICAL CLEANINGS',
    subtitle: 'LONETEX COLLECTION',
    link: '#practical-cleaning',
    targetSectionId: 'carousel-practical-cleaning',
    image: '/banners/Gemini_Generated_Image_552san552san552s.jfif',
    fallbackImage: '/banners/Gemini_Generated_Image_552san552san552s.png',
    alt: 'Lonetex Practical Cleanings Collection'
  }
];

export default function SectionHeroBanner({
  id = 'hero-banner',
  isMainHero = true,
  title,
  ctaLink,
  targetSectionId,
  bgImage,
  imageUrl,
  slides = HERO_SLIDES,
  autoRotateInterval = 4000
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Bulletproof continuous auto-rotation every 4 seconds (4000ms)
  useEffect(() => {
    if (!isMainHero || !slides || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoRotateInterval);

    return () => clearInterval(timer);
  }, [isMainHero, slides.length, autoRotateInterval]);

  const goToSlide = (idx, e) => {
    if (e) e.stopPropagation();
    setCurrentSlide(idx);
  };

  const handlePrevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleCtaClick = (e, link, targetId) => {
    if (e) e.preventDefault();
    const cleanId = (targetId || (link ? link.replace('#', '') : '')).trim();
    
    // Attempt direct match by ID
    let elem = cleanId ? document.getElementById(cleanId) : null;

    // Aliases fallback
    if (!elem && cleanId === 'kentucky-mops') {
      elem = document.getElementById('kentucky-mops') || document.getElementById('carousel-kentucky-mops') || document.getElementById('carousel-best-selling');
    } else if (!elem && cleanId === 'accessories') {
      elem = document.getElementById('accessories') || document.getElementById('carousel-accessories');
    } else if (!elem && (cleanId === 'mini-mop' || cleanId === 'flat-mops')) {
      elem = document.getElementById('flat-mops') || document.getElementById('carousel-flat-mops');
    } else if (!elem && cleanId === 'practical-cleaning') {
      elem = document.getElementById('practical-cleaning') || document.getElementById('carousel-practical-cleaning');
    } else if (!elem && cleanId === 'cloths') {
      elem = document.getElementById('cloths') || document.getElementById('carousel-cloths');
    }

    if (!elem && link && link.startsWith('#')) {
      elem = document.querySelector(link);
    }

    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ----------------------------------------------------
  // 1. DYNAMIC 4-SLIDE ROTATING HERO CAROUSEL
  // ----------------------------------------------------
  if (isMainHero) {
    return (
      <section
        id={id}
        className="relative w-full max-w-[1920px] mx-auto aspect-[1890/770] bg-slate-950 overflow-hidden select-none group"
        aria-label="Lonetex Featured Collections Hero Carousel"
      >
        {/* Full-Slide Layers with Crossfade & Cinematic Hero Zoom */}
        {slides.map((slide, idx) => {
          const isCurrent = currentSlide === idx;
          return (
            <div
              key={slide.id || idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isCurrent ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Studio Banner Image */}
              <img
                key={isCurrent ? `active-${currentSlide}` : `inactive-${idx}`}
                src={slide.image}
                alt={slide.alt || slide.title}
                className={`w-full h-full object-cover object-left md:object-center aspect-[1890/770] ${
                  isCurrent ? 'animate-hero-zoom' : 'scale-100'
                }`}
                onError={(e) => {
                  if (slide.fallbackImage && !e.target.dataset.triedFallback) {
                    e.target.dataset.triedFallback = 'true';
                    e.target.src = slide.fallbackImage;
                  } else if (!e.target.dataset.triedAltExt) {
                    e.target.dataset.triedAltExt = 'true';
                    if (e.target.src.includes('.jfif')) {
                      e.target.src = e.target.src.replace('.jfif', '.png');
                    } else if (e.target.src.includes('.png')) {
                      e.target.src = e.target.src.replace('.png', '.jfif');
                    }
                  }
                }}
              />

              {/* Exact Slide Typography & CTA Action Button Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 z-10 max-w-4xl pointer-events-none">
                <div className="pointer-events-auto flex flex-col items-start">
                  {/* Subtitle Badge: Gold/Yellow Uppercase */}
                  <span className="inline-block text-[#FFC700] text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase mb-1 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                    {slide.subtitle || 'LONETEX COLLECTION'}
                  </span>

                  {/* Main Title: Bold White Uppercase with drop-shadow-md */}
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md uppercase leading-tight mb-3 sm:mb-5">
                    {slide.title}
                  </h2>

                  {/* SHOP COLLECTION → Yellow Button */}
                  <a
                    href={slide.link}
                    onClick={(e) => handleCtaClick(e, slide.link, slide.targetSectionId)}
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[#FFC700] hover:bg-[#ffb700] text-slate-950 font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all duration-200 active:scale-95 cursor-pointer rounded-none border border-black/10"
                    title={`Shop ${slide.title} Collection`}
                  >
                    <span>SHOP COLLECTION →</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous Slide Chevron Button */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-75 hover:!opacity-100 transition-all duration-200 border border-white/15 shadow-xl active:scale-90"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Next Slide Chevron Button */}
        <button
          onClick={handleNextSlide}
          className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-75 hover:!opacity-100 transition-all duration-200 border border-white/15 shadow-xl active:scale-90"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Bottom Navigation Dots & Slide Indicator */}
        <div className="absolute bottom-2.5 sm:bottom-4 md:bottom-5 left-4 sm:left-8 md:left-10 z-20 flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/15 shadow-md">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id || idx}
                onClick={(e) => goToSlide(idx, e)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  currentSlide === idx
                    ? 'w-4 sm:w-6 h-1.5 sm:h-2 bg-[#FFC700] shadow-[0_0_8px_rgba(255,199,0,0.85)]'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/45 hover:bg-white/90'
                }`}
                aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
              />
            ))}
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white/90 pl-1 border-l border-white/20">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </section>
    );
  }

  // ----------------------------------------------------
  // 2. STATIC SECTION DIVIDER BANNER MODE
  // ----------------------------------------------------
  const bannerImage = bgImage || imageUrl || '/banners/slide-1-kentucky-mops.png';
  const effectiveTitle = title || 'Lonetex Collection';
  const effectiveLink = ctaLink || (targetSectionId ? `#${targetSectionId}` : '#');

  return (
    <section
      id={id}
      className="relative w-full max-w-[1920px] mx-auto aspect-[1890/770] bg-slate-950 overflow-hidden select-none"
    >
      <a
        href={effectiveLink}
        onClick={(e) => handleCtaClick(e, effectiveLink, targetSectionId)}
        className="block w-full h-full cursor-pointer relative"
        title={`Shop ${effectiveTitle}`}
        aria-label={`Shop ${effectiveTitle}`}
      >
        <img
          src={bannerImage}
          alt={effectiveTitle}
          className="w-full h-full object-cover object-left md:object-center"
        />
      </a>
    </section>
  );
}