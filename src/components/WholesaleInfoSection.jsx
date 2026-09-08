import React from 'react';
import { Factory, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { LONETEX_COMPANY } from '../data/lonetexProducts';

export default function WholesaleInfoSection() {
  return (
    <section id="about-section" className="relative w-full overflow-hidden py-16 sm:py-24 text-white select-none border-t border-slate-800">
      
      {/* 1. Full-Bleed Background Image Layer */}
      <img 
        src="/banners/Gemini_Generated_Image_wnrrczwnrrczwnrr.jfif" 
        alt="Lonetex Production Facility"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* 2. Soft Dark Gradient Tint (Zero boxes, even tint across the full section) */}
      <div className="absolute inset-0 bg-[#0A1D37]/80 backdrop-blur-[1px]" />

      {/* 3. Direct Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Text directly on background */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#FFC700] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>ABOUT LONETEX MANUFACTURER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md font-display">
              Bulk Manufacturing &amp; Wholesale Supply For Commercial Facilities
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl drop-shadow-sm font-normal">
              Lonetex is Pakistan's leading manufacturer of commercial looped and cut-end Kentucky mops, electrostatic dry sweepers, anodized aluminum handles, and microfiber cleaning systems. Serving commercial facilities, hospitals, and distributors across Pakistan and Saudi Arabia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <span className="text-[#FFC700] font-bold text-base leading-none mt-0.5">✓</span>
                <span className="text-slate-100 text-sm font-medium">Custom yarn weights &amp; OEM private labeling</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFC700] font-bold text-base leading-none mt-0.5">✓</span>
                <span className="text-slate-100 text-sm font-medium">HACCP 4-color hygiene zone segregation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFC700] font-bold text-base leading-none mt-0.5">✓</span>
                <span className="text-slate-100 text-sm font-medium">Nationwide Pakistan &amp; KSA container dispatch</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FFC700] font-bold text-base leading-none mt-0.5">✓</span>
                <span className="text-slate-100 text-sm font-medium">Direct factory wholesale contract pricing</span>
              </div>
            </div>

          </div>

          {/* Right Side: Sleek Inquiries Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A1D37]/70 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-4">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFC700] text-slate-950 flex items-center justify-center font-black shadow-md">
                  <Factory className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Commercial Inquiries</h3>
                  <p className="text-xs text-slate-300">Direct sales &amp; wholesale desk</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Speak directly with our technical team to request product samples, custom yarn specifications, or institutional tender pricing.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent('Hello Lonetex, I would like to inquire about wholesale bulk pricing and catalog supply.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-[#FFC700] hover:bg-[#ffb700] text-slate-950 font-heading font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4 fill-slate-950" />
                  <span>Inquire Via WhatsApp</span>
                </a>

                <a
                  href={`tel:${LONETEX_COMPANY.phoneDisplay.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4 text-[#FFC700]" />
                  <span>Call Desk: {LONETEX_COMPANY.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 text-center">
                Lahore Showroom: {LONETEX_COMPANY.showroomAddress}
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
