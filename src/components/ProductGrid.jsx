import React from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/lonetexProducts';
import { PackageSearch, Search, X, SlidersHorizontal } from 'lucide-react';

export default function ProductGrid({
  products,
  allProducts,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  setSearchTerm,
  onResetFilters
}) {
  const inventoryList = allProducts || products;

  // Count items per category dynamically from live inventory
  const getCategoryCount = (category) => {
    if (category === "All") return inventoryList.length;
    return inventoryList.filter((p) => {
      if (category === "Dust/Flat Mops") {
        return p.category === "Dust/Flat Mops" || p.category === "Dust / Flat Mops";
      }
      if (category === "Cloths") {
        return p.category === "Cloths" || p.category === "Cleaning Cloths";
      }
      if (category === "Handles & Accessories") {
        return p.category === "Handles & Accessories" || p.category === "Accessories";
      }
      return p.category === category;
    }).length;
  };

  return (
    <section id="catalog-section" className="py-8">
      {/* Section Title & Live Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-lonetex-700 uppercase tracking-wider mb-1">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Wholesale Cleaning Catalog</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Commercial Grade Product Range
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Explore {inventoryList.length} manufactured items with custom yarn weights & packaging
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-80 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search mops, SKUs, dusters, hardware..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lonetex-700 focus:border-transparent transition-all shadow-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
              aria-label="Clear search query"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills (All, Kentucky Mops, Practical Cleaning, Dust/Flat Mops, Handles & Accessories, Cloths) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none mb-8 border-b border-slate-200">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = getCategoryCount(cat);

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`category-pill flex items-center gap-2 transition-all ${
                isActive
                  ? 'bg-lonetex-900 text-white shadow-emerald-sm border border-lonetex-900 font-bold'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-lonetex-700 hover:text-lonetex-900'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Empty Search / Filter State */}
      {products.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400 mb-4">
            <PackageSearch className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">No catalog items found</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
            We couldn't find any products matching "{searchTerm}" under "{selectedCategory}".
          </p>
          <button
            onClick={onResetFilters}
            className="btn-primary py-2 px-4 text-xs font-bold"
          >
            Reset Catalog Filters
          </button>
        </div>
      ) : (
        /* Responsive Card Grid (1 col mobile, 2 col tablet, 3-4 col desktop) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
