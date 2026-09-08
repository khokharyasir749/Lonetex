import React from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ArrowRight, ShieldCheck, Package } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { generateMultiItemWhatsAppUrl, LONETEX_COMPANY, DEFAULT_PRODUCT_IMAGE } from '../data/lonetexProducts';

export default function QuoteCartModal() {
  const {
    quoteItems,
    isQuoteModalOpen,
    setIsQuoteModalOpen,
    removeFromQuote,
    updateQuantity,
    clearQuote
  } = useQuote();

  if (!isQuoteModalOpen) return null;

  const whatsappUrl = generateMultiItemWhatsAppUrl(quoteItems);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-fade-in flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-lonetex-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-lonetex-800">
              <Package className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg leading-tight">
                Bulk Quote Request (RFQ)
              </h3>
              <p className="text-xs text-emerald-200/80">
                Confirm order or get price list via WhatsApp
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsQuoteModalOpen(false)}
            className="p-1.5 rounded-lg bg-lonetex-800 hover:bg-lonetex-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto flex-1">
          {quoteItems.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <Package className="h-8 w-8 text-slate-400" />
              </div>
              <h4 className="font-bold text-slate-800 text-base mb-1">Your Quote List is Empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto mb-4">
                Explore the Lonetex catalog and click "+ Quote" to build your custom wholesale quotation.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="btn-primary py-2 px-4 text-xs font-semibold"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
                <span>Selected Products ({quoteItems.length})</span>
                <button
                  onClick={clearQuote}
                  className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-1"
                >
                  <Trash2 className="h-3 w-3" />
                  <span>Clear All</span>
                </button>
              </div>

              {quoteItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <img
                    src={item.image || DEFAULT_PRODUCT_IMAGE}
                    alt={item.name || 'Product'}
                    className="w-12 h-12 object-cover rounded-lg bg-white border border-slate-200 shrink-0"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = DEFAULT_PRODUCT_IMAGE;
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </h5>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="font-mono">{item.sku}</span>
                      <span>•</span>
                      <span className="text-lonetex-700 font-medium">{item.category}</span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-slate-100 text-slate-700"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-2 text-xs font-bold text-slate-900 min-w-[24px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-slate-100 text-slate-700"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromQuote(item.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {quoteItems.length > 0 && (
          <div className="p-5 bg-slate-50 border-t border-slate-200">
            <div className="mb-3 text-xs text-slate-600 flex items-center justify-between">
              <span>Delivery / Dispatch:</span>
              <span className="font-semibold text-slate-800">Lahore Factory / Nationwide Pakistan</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full py-3 text-sm font-bold justify-center shadow-emerald-md"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Send Multi-Item RFQ to WhatsApp</span>
            </a>
            
            <p className="text-[11px] text-slate-500 text-center mt-2.5">
              Instant reply during working hours (Mon-Sat, 9am-6pm PKT)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
