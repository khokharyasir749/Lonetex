import React from 'react';
import { Factory, Building2, Globe, Phone, Mail, MessageSquare, Clock, MapPin, Store } from 'lucide-react';
import { LONETEX_COMPANY } from '../data/lonetexProducts';

export default function ContactSection() {
  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 select-none">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-heading font-extrabold uppercase tracking-wider mb-3">
            <Building2 className="h-3.5 w-3.5 text-emerald-700" />
            <span>Locations &amp; Direct Ordering</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
            Visit Our Showroom &amp; Facilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Connect with our sales desks for institutional quotations, tender supplies, or wholesale distributor partnerships.
          </p>
        </div>

        {/* 4 Location & Contact Cards: Showroom, Factory, Head Office, KSA Branch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* 1. Lahore Showroom */}
          <div className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-700 hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4">
                <Store className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-heading font-extrabold text-emerald-700 uppercase tracking-widest">Showroom</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">Lahore Showroom</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {LONETEX_COMPANY.showroomAddress}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent('Hello Lonetex, I would like to visit the Lahore showroom.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5 fill-white" />
                <span>Showroom Desk</span>
              </a>
            </div>
          </div>

          {/* 2. Lonetex Factory */}
          <div className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-700 hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4">
                <Factory className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-heading font-extrabold text-emerald-700 uppercase tracking-widest">Manufacturing Unit</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">Lonetex Factory</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {LONETEX_COMPANY.factoryAddress}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent('Hello Lonetex, I want to inquire with the Factory desk.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5 fill-white" />
                <span>Factory Desk</span>
              </a>
            </div>
          </div>

          {/* 3. Head Office */}
          <div className="bg-white p-6 border border-emerald-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative">
            <span className="absolute -top-3 right-4 px-2 py-0.5 bg-emerald-800 text-white text-[9px] font-heading font-extrabold uppercase tracking-wider">
              Corporate HQ
            </span>
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-heading font-extrabold text-emerald-700 uppercase tracking-widest">Administration</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">Head Office Lahore</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                {LONETEX_COMPANY.headOffice}
              </p>
              <p className="text-xs font-semibold text-slate-800">
                Landline: <a href={`tel:${LONETEX_COMPANY.headOfficePhone}`} className="text-emerald-700 hover:underline">{LONETEX_COMPANY.headOfficePhone}</a>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={`tel:${LONETEX_COMPANY.headOfficePhone}`}
                className="w-full py-2.5 border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-700" />
                <span>Call {LONETEX_COMPANY.headOfficePhone}</span>
              </a>
            </div>
          </div>

          {/* 4. Saudi Arabia Branch */}
          <div className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-700 hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-heading font-extrabold text-emerald-700 uppercase tracking-widest">KSA Distribution</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-1">Saudi Arabia Branch</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                {LONETEX_COMPANY.ksaBranch.address}
              </p>
              <p className="text-xs font-semibold text-slate-800">
                Direct: <a href={`tel:${LONETEX_COMPANY.ksaBranch.phoneRaw}`} className="text-emerald-700 hover:underline">{LONETEX_COMPANY.ksaBranch.phone}</a>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${LONETEX_COMPANY.ksaBranch.phoneRaw}?text=${encodeURIComponent('Hello Lonetex KSA, I would like to inquire about cleaning supplies in Saudi Arabia.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5 fill-white" />
                <span>KSA WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Operating Hours & Direct Inquiry Bar */}
        <div className="bg-white p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-emerald-700 shrink-0" />
            <div>
              <span className="font-bold text-slate-900">Operating Schedule:</span>
              <p className="text-slate-500">{LONETEX_COMPANY.operatingHours}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-emerald-700 shrink-0" />
            <div>
              <span className="font-bold text-slate-900">Official Tender &amp; Wholesale Email:</span>
              <p>
                <a href={`mailto:${LONETEX_COMPANY.email}`} className="text-emerald-700 font-semibold hover:underline">
                  {LONETEX_COMPANY.email}
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
