import React from 'react';
import { Search, Phone, MessageSquare, FileText, ShoppingBag, ShieldCheck } from 'lucide-react';
import { LONETEX_COMPANY } from '../data/lonetexProducts';
import { useQuote } from '../context/QuoteContext';

export default function Header({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {
  const { totalItemCount, setIsQuoteModalOpen } = useQuote();

  return (
    <header className="sticky top-0 z-40 bg-lonetex-900 border-b border-lonetex-800 text-white shadow-emerald-md">
      <div className="container mx-auto py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedCategory('All Products')}>
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-lonetex-700 to-emerald-400 p-0.5 shadow-emerald-sm flex items-center justify-center">
              <div className="h-full w-full bg-lonetex-950 rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-2xl text-emerald-400 tracking-tighter">L</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white">LONETEX</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-lonetex-700 text-emerald-100">
                  Catalog
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/80 tracking-wide font-normal hidden sm:block">
                Commercial & Industrial Cleaning Equipment
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search mops, handles, dust sweepers, cloths..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/60 border border-lonetex-700/80 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Actions & Contact */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Direct WhatsApp Action */}
            <a
              href={`https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent('Assalam-o-Alaikum Lonetex, I would like to inquire about your cleaning products catalog.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium"
              title="Chat directly with Lonetex on WhatsApp"
            >
              <MessageSquare className="h-4 w-4 fill-white text-whatsapp-500" />
              <span className="hidden sm:inline">WhatsApp Order</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Quote Request Cart Button */}
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="relative inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-lonetex-800 hover:bg-lonetex-700 border border-lonetex-700 text-white text-xs sm:text-sm font-medium transition-all"
              title="View your Request for Quote (RFQ) items"
            >
              <FileText className="h-4 w-4 text-emerald-300" />
              <span className="hidden lg:inline">Quote List</span>
              {totalItemCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-lonetex-950 bg-emerald-300 rounded-full animate-pulse-subtle">
                  {totalItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products, SKUs, mops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/60 border border-lonetex-700/80 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
