import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MessageSquare, Plus, Check, ArrowRight } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useQuote } from '../context/QuoteContext';
import { generateWhatsAppQuoteUrl, DEFAULT_PRODUCT_IMAGE } from '../data/lonetexProducts';

export default function SearchModal({ isOpen, onClose }) {
  const { products } = useProducts();
  const { setSelectedProductForModal, addToQuote, isInQuote } = useQuote();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();
  const filtered = query
    ? (products || []).filter((p) => {
        if (!p) return false;
        return (
          p.name?.toLowerCase().includes(query) ||
          p.sku?.toLowerCase().includes(query) ||
          p.category?.toLowerCase().includes(query) ||
          p.subtitle?.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query)
        );
      })
    : [];

  const handleProductClick = (product) => {
    onClose();
    if (setSelectedProductForModal) setSelectedProductForModal(product);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="h-5 w-5 text-emerald-800 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search Kentucky mops, spray mops, handles, squeegees, SKUs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent border-none text-slate-900 placeholder-slate-400 text-sm sm:text-base font-heading font-medium focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors ml-2"
          >
            ESC
          </button>
        </div>

        {/* Search Results / Empty State */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          {!searchTerm ? (
            <div className="py-8 text-center text-slate-400">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-40 text-emerald-700" />
              <p className="text-xs sm:text-sm font-medium">Type any product name or model code above...</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {["Kentucky Mops", "Spray Mop", "Microfiber", "Aluminum Handle", "Spin Mop"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="text-[11px] font-semibold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-600 px-2.5 py-1 rounded-full transition-colors border border-slate-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm font-bold text-slate-800 mb-1">No products found for "{searchTerm}"</p>
              <p className="text-xs text-slate-400">Try searching with a different term like "mop", "handle", or "squeegee".</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Search Results ({filtered.length})
              </div>
              {filtered.map((item) => {
                const inQuote = isInQuote ? isInQuote(item.id) : false;
                const whatsappUrl = generateWhatsAppQuoteUrl(item);

                return (
                  <div
                    key={item.id}
                    onClick={() => handleProductClick(item)}
                    className="group flex items-center justify-between gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer"
                  >
                    {/* Square Image Canvas */}
                    <div className="w-14 h-14 bg-white rounded-lg border border-slate-100 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                      <img
                        src={item.image || DEFAULT_PRODUCT_IMAGE}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = DEFAULT_PRODUCT_IMAGE;
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-emerald-800">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                        <span className="text-slate-400">{item.subtitle || `- ${item.category}`}</span>
                        <span>•</span>
                        <span className="font-bold text-slate-700">Contact for price</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors"
                        title="WhatsApp Inquiry"
                      >
                        <MessageSquare className="h-4 w-4" />
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (addToQuote) addToQuote(item, 1);
                        }}
                        className={`p-2 rounded-lg transition-colors ${
                          inQuote
                            ? 'bg-emerald-700 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                        title={inQuote ? 'In Quote List' : 'Add to Quote List'}
                      >
                        {inQuote ? <Check className="h-4 w-4 stroke-[3]" /> : <Plus className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
