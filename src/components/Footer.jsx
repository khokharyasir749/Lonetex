import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact-footer" className="bg-[#F4F7F9] border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-10">
        
        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: LONETEX FACTORY */}
          <div>
            <h3 className="text-[#0A1D37] text-sm font-bold tracking-wider mb-4 uppercase">
              LONETEX FACTORY
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Behind Kingston College,<br />
              Main Canal Road, Lahore, Pakistan
            </p>
            <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mt-4 mb-1">
              CONTACT
            </div>
            <div className="space-y-1">
              <a 
                href="tel:03458177695" 
                className="text-[#0A1D37] font-bold text-sm block hover:text-blue-700 transition"
              >
                0345-8177695
              </a>
              <a 
                href="tel:03277771764" 
                className="text-[#0A1D37] font-bold text-sm block hover:text-blue-700 transition"
              >
                0327-7771764
              </a>
            </div>
          </div>

          {/* Column 2: HEAD OFFICE */}
          <div>
            <h3 className="text-[#0A1D37] text-sm font-bold tracking-wider mb-4 uppercase">
              HEAD OFFICE
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              71-C3 Gulberg, Lahore, Pakistan
            </p>
            <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mt-4 mb-1">
              CONTACT
            </div>
            <div className="space-y-1">
              <a 
                href="tel:04235253436" 
                className="text-[#0A1D37] font-bold text-sm block hover:text-blue-700 transition"
              >
                042-35253436
              </a>
              <a 
                href="tel:+966542863980" 
                className="text-[#0A1D37] font-bold text-sm block hover:text-blue-700 transition"
              >
                +966 542 863 980
              </a>
            </div>
          </div>

          {/* Column 3: SAUDI ARABIA */}
          <div>
            <h3 className="text-[#0A1D37] text-sm font-bold tracking-wider mb-4 uppercase">
              SAUDI ARABIA
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ash Shoula,<br />
              Dammam, KSA 34264
            </p>
            <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mt-4 mb-1">
              CONTACT
            </div>
            <div className="space-y-1">
              <a 
                href="tel:+966598481826" 
                className="text-[#0A1D37] font-bold text-sm block hover:text-blue-700 transition"
              >
                +966 598 481 826
              </a>
              <a 
                href="tel:+966567471842" 
                className="text-[#0A1D37] font-bold text-sm block hover:text-blue-700 transition"
              >
                +966 56 747 1842
              </a>
            </div>
          </div>

          {/* Column 4: CONTACT */}
          <div>
            <h3 className="text-[#0A1D37] text-sm font-bold tracking-wider mb-4 uppercase">
              CONTACT
            </h3>
            <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mt-0 mb-1">
              EMAIL
            </div>
            <a 
              href="mailto:info@lonetex.com.pk" 
              className="text-[#0A1D37] font-bold text-sm block hover:text-blue-700 transition"
            >
              info@lonetex.com.pk
            </a>
            <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mt-4 mb-1">
              HOURS
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Monday – Saturday, 10:00 AM – 6:00 PM
            </p>
          </div>

        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t border-slate-200/80 my-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Lonetex Pakistan. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="border border-slate-300 rounded p-2 text-slate-600 hover:text-[#0A1D37] hover:border-slate-400 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="border border-slate-300 rounded p-2 text-slate-600 hover:text-[#0A1D37] hover:border-slate-400 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border border-slate-300 rounded p-2 text-slate-600 hover:text-[#0A1D37] hover:border-slate-400 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
