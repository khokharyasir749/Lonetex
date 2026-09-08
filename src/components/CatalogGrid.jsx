import React from 'react';
import ProductCard from './ProductCard';
import { PackageSearch, RefreshCw } from 'lucide-react';

export default function CatalogGrid({ products, selectedCategory, searchTerm, onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-8">
        <div className="w-16 h-16 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400 mb-4">
          <PackageSearch className="h-8 w-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">No products match your criteria</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
          We couldn't find any items matching "{searchTerm}" in the selected category. Try searching for "Kentucky", "mop", "handle", or "duster".
        </p>
        <button
          onClick={onResetFilters}
          className="btn-primary inline-flex items-center gap-2 text-xs font-semibold"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header bar showing counts and active filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {selectedCategory}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Showing {products.length} commercial grade products {searchTerm ? `matching "${searchTerm}"` : ''}
          </p>
        </div>

        {searchTerm && (
          <button
            onClick={onResetFilters}
            className="text-xs text-lonetex-700 hover:text-lonetex-900 font-semibold self-start sm:self-auto underline"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
