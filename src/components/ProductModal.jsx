import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Plus, Minus, Check, ShieldCheck, Factory, Truck, CheckCircle2 } from 'lucide-react';
import { generateWhatsAppQuoteUrl, LONETEX_COMPANY, DEFAULT_PRODUCT_IMAGE } from '../data/lonetexProducts';
import { useQuote } from '../context/QuoteContext';

export default function ProductModal() {
  const { selectedProductForModal, setSelectedProductForModal, addToQuote, isInQuote } = useQuote();
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');

  useEffect(() => {
    setQuantity(1);
    setCustomNote('');
  }, [selectedProductForModal]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && setSelectedProductForModal) {
        setSelectedProductForModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedProductForModal]);

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;
  const inQuote = isInQuote ? isInQuote(product.id) : false;

  const buildWhatsAppUrl = () => {
    const name = product.name || 'Commercial Item';
    const sku = product.sku || 'N/A';
    let msg = `Hello Lonetex, I would like to inquire about bulk wholesale pricing for ${name} (SKU: ${sku}).`;
    if (quantity > 1) {
      msg += ` Quantity: ${quantity} units.`;
    }
    if (customNote.trim()) {
      msg += ` Additional Notes: ${customNote.trim()}`;
    }
    return `https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleAddAndClose = () => {
    if (addToQuote) addToQuote(product, quantity);
    if (setSelectedProductForModal) setSelectedProductForModal(null);
  };

  const specsList = Array.isArray(product.specs) ? product.specs : [];
  const featuresList = Array.isArray(product.features) ? product.features : [];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fade-in"
      onClick={() => setSelectedProductForModal && setSelectedProductForModal(null)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductForModal && setSelectedProductForModal(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors shadow-md border border-slate-200/60"
          aria-label="Close product modal"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* High-Res Image Column */}
          <div className="relative aspect-[4/3] md:aspect-auto bg-slate-100 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-200">
            <img
              src={product.image || DEFAULT_PRODUCT_IMAGE}
              alt={product.name || 'Product'}
              className="max-h-80 w-full object-cover rounded-xl shadow-sm"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DEFAULT_PRODUCT_IMAGE;
              }}
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-lonetex-900 text-white shadow-sm border border-emerald-500/30 uppercase tracking-wide">
                {product.category || 'Product'}
              </span>
              {product.badge && (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500 text-slate-950 shadow-sm self-start">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Product Details & WhatsApp Quote Generator Column */}
          <div className="p-5 sm:p-6 flex flex-col justify-between max-h-[82vh] overflow-y-auto">
            <div>
              {/* SKU & Category header */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1.5">
                <span className="font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                  SKU: {product.sku || 'N/A'}
                </span>
                <span className="text-emerald-700 font-semibold text-[11px]">
                  ● Available for Bulk Dispatch
                </span>
              </div>

              {/* Title */}
              <h2 id="modal-product-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 leading-tight">
                {product.name || 'Commercial Product'}
              </h2>

              {/* Price Tag */}
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200">
                <span className="text-xs text-slate-600 font-medium">Pricing:</span>
                <span className="text-sm font-bold text-lonetex-900">{product.price || 'Contact for price'}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {product.description || ''}
              </p>

              {/* Full Specs List */}
              {specsList.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Full Technical Specifications
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {specsList.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features List */}
              {featuresList.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Commercial Features
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {featuresList.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-lonetex-600 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Embedded WhatsApp Inquiry Generator */}
            <div className="pt-4 border-t border-slate-200 mt-2">
              
              {/* Quantity Selector */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700">Inquiry Units:</span>
                <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-slate-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:bg-slate-200 text-slate-700 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-900 min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:bg-slate-200 text-slate-700 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Optional inquiry note */}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Optional requirement (e.g. Red band color / 100 pcs)"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  className="w-full text-xs px-3 py-1.5 rounded-lg border border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-lonetex-700"
                />
              </div>

              {/* Actions: Send to WhatsApp & Add to Quote Cart */}
              <div className="flex flex-col gap-2">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-2.5 text-xs sm:text-sm font-bold justify-center shadow-emerald-md"
                >
                  <MessageSquare className="h-4 w-4 fill-white" />
                  <span>Send WhatsApp Inquiry</span>
                </a>

                <button
                  onClick={handleAddAndClose}
                  className="btn-secondary py-2 text-xs font-semibold justify-center"
                >
                  <Plus className="h-3.5 w-3.5 text-slate-600" />
                  <span>{inQuote ? 'Update in Bulk Quote List' : 'Add to Multi-Item RFQ List'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
