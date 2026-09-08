import React from 'react';
import { Plus, MessageSquare } from 'lucide-react';
import { generateWhatsAppQuoteUrl, DEFAULT_PRODUCT_IMAGE } from '../data/lonetexProducts';
import { useQuote } from '../context/QuoteContext';

export default function ProductCard({ product }) {
  const { setSelectedProductForModal } = useQuote() || {};
  if (!product) return null;

  const handleCardClick = () => {
    if (setSelectedProductForModal) setSelectedProductForModal(product);
  };

  const handlePlusClick = (e) => {
    e.stopPropagation();
    if (setSelectedProductForModal) setSelectedProductForModal(product);
  };

  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
  };

  const whatsappUrl = generateWhatsAppQuoteUrl(product);

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer flex flex-col bg-transparent select-none transition-all duration-300 w-full"
    >
      {/* 1. Pure White (#FFFFFF) Square Canvas for Product Image */}
      <div className="relative aspect-square w-full bg-white rounded-none border border-slate-100 flex items-center justify-center p-4 overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:border-slate-200">
        
        {/* Clean Product Image on Pure White Background */}
        <img
          src={product.image || DEFAULT_PRODUCT_IMAGE}
          alt={product.name || 'Lonetex Product'}
          loading="lazy"
          className="w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = DEFAULT_PRODUCT_IMAGE;
          }}
        />

        {/* Small Plus (+) Quick-View Button on Hover */}
        <button
          onClick={handlePlusClick}
          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 text-slate-800 shadow-md border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 z-10"
          title="Quick View & Details"
          aria-label="Quick View"
        >
          <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
        </button>
      </div>

      {/* 2. Product Meta & Information */}
      <div className="pt-3 pb-1 flex flex-col flex-1 text-left">
        
        {/* Title: Exact product name */}
        <h3 className="font-heading font-bold text-sm text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2">
          {product.name || 'Commercial Item'}
        </h3>

        {/* Subtitle: Gray category label (e.g. - Product, - Dust/Flat Mops, etc.) */}
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          {product.subtitle || `- ${product.category}`}
        </p>

        {/* Price: Bold "Contact for price" */}
        <div className="mt-2 flex items-center justify-between">
          <span className="font-heading font-bold text-xs text-slate-900">
            Contact for price
          </span>

          {/* Quick WhatsApp Inquiry link */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="text-emerald-700 hover:text-emerald-800 p-1 opacity-80 hover:opacity-100 transition-opacity"
            title="Inquire via WhatsApp"
          >
            <MessageSquare className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
