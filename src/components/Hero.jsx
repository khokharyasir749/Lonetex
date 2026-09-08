import React from 'react';
import { ShieldCheck, Truck, Factory, MessageSquare, Award, ArrowRight } from 'lucide-react';
import { LONETEX_COMPANY } from '../data/lonetexProducts';

export default function Hero({ onExploreCatalog }) {
  return (
    <div className="relative bg-gradient-to-b from-lonetex-900 via-lonetex-950 to-slate-950 text-white pt-10 pb-14 border-b border-lonetex-800/80 overflow-hidden">
      {/* Background Subtle Industrial Grid & Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lonetex-800/80 border border-lonetex-700 text-emerald-300 text-xs font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Direct Manufacturer & Wholesale Supplier • Lahore, Pakistan</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
            Industrial & Commercial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Cleaning Equipment Catalog
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl font-normal">
            Lonetex manufactures heavy-duty Kentucky mops, electrostatic dust mops, color-coded hygiene systems, aluminum hardware, and institutional microfiber textiles for commercial facilities across Pakistan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href={`https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent('Assalam-o-Alaikum Lonetex, I would like to inquire about placing a bulk wholesale order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-5 py-3 font-semibold shadow-emerald-glow"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              onClick={onExploreCatalog}
              className="btn-secondary bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 text-sm px-5 py-3 font-medium"
            >
              <span>Explore Products Below</span>
              <ArrowRight className="h-4 w-4 text-emerald-400" />
            </button>
          </div>

          {/* Trust Indicators / Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Factory className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Direct Factory Wholesale</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>HACCP & Hospital Grade</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Truck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Pakistan-Wide Freight Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
