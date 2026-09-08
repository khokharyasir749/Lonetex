import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductCarouselSection({
  id,
  title = "BEST SELLING",
  products = [],
  onViewAll
}) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <section id={id} className="py-12 sm:py-16 bg-white border-b border-slate-100 select-none">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Title & VIEW ALL link + Arrow buttons */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-3 border-b border-slate-200">
          
          {/* Section Title */}
          <div className="flex items-center gap-3">
            <h2 className="text-lg sm:text-2xl font-display font-black tracking-wider uppercase text-slate-900">
              {title}
            </h2>
          </div>

          {/* Right Actions: VIEW ALL and Carousel Controls (< >) */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* VIEW ALL link */}
            <button
              onClick={onViewAll}
              className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider text-slate-700 hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5 group"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Circular Prev/Next Arrow Buttons (< and >) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-300 hover:border-slate-800 bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm active:scale-90"
                aria-label={`Scroll left in ${title}`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={() => handleScroll('right')}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-300 hover:border-slate-800 bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm active:scale-90"
                aria-label={`Scroll right in ${title}`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          className="flex items-start gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[230px] sm:w-[260px] md:w-[280px] lg:w-[285px] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
