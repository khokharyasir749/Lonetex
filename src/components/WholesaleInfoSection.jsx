import React from 'react';
import { Factory, ShieldCheck, Truck, PhoneCall, CheckCircle, MessageSquare, Award, Sparkles } from 'lucide-react';
import { LONETEX_COMPANY } from '../data/lonetexProducts';

export default function WholesaleInfoSection() {
  return (
    <section id="about-section" className="py-16 sm:py-20 bg-slate-950 text-white border-t border-slate-800 select-none">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#064E3B] via-[#022c22] to-slate-950 p-8 sm:p-12 lg:p-16 border border-emerald-800/60 shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC700]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-[#FFC700] text-xs font-heading font-extrabold uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5" />
                <span>ABOUT LONETEX MANUFACTURER</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-tight">
                Bulk Manufacturing &amp; Wholesale Supply For Commercial Facilities
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Lonetex is Pakistan's leading manufacturer of commercial looped and cut-end Kentucky mops, electrostatic dry sweepers, anodized aluminum handles, and microfiber cleaning systems. Serving commercial facilities, hospitals, and distributors across Pakistan and Saudi Arabia.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-emerald-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-[#FFC700] shrink-0" />
                  <span>Custom yarn weights &amp; OEM private labeling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-[#FFC700] shrink-0" />
                  <span>HACCP 4-color hygiene zone segregation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-[#FFC700] shrink-0" />
                  <span>Nationwide Pakistan &amp; KSA container dispatch</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-[#FFC700] shrink-0" />
                  <span>Direct factory wholesale contract pricing</span>
                </div>
              </div>

            </div>

            {/* Right Card: Quick Wholesale Action */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-emerald-700/50 shadow-xl space-y-4">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFC700] text-slate-950 flex items-center justify-center font-black">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Commercial Inquiries</h3>
                    <p className="text-xs text-emerald-300">Direct sales &amp; wholesale desk</p>
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
                    className="w-full py-3 px-4 rounded-none bg-[#FFC700] hover:bg-[#ffb700] text-slate-950 font-heading font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4 fill-slate-950" />
                    <span>Inquire Via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${LONETEX_COMPANY.phoneDisplay.replace(/[^0-9+]/g, '')}`}
                    className="w-full py-3 px-4 rounded-none bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="h-4 w-4 text-emerald-400" />
                    <span>Call Desk: {LONETEX_COMPANY.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 text-center">
                  Lahore Showroom: {LONETEX_COMPANY.showroomAddress}
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
