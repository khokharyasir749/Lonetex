import React from 'react';
import { CATEGORIES, lonetexProducts } from '../data/lonetexProducts';

export default function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  // Calculate item counts for each category
  const getCategoryCount = (cat) => {
    if (cat === 'All Products') return lonetexProducts.length;
    return lonetexProducts.filter(p => p.category === cat).length;
  };

  return (
    <div className="py-4 border-b border-slate-200 bg-white sticky top-[69px] z-30 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none w-full">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = getCategoryCount(cat);

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-pill flex items-center gap-2 transition-all ${
                    isActive ? 'category-pill-active' : 'category-pill-inactive'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? 'bg-emerald-800 text-emerald-100'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
