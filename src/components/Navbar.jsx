import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Lock } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { useQuote } from '../context/QuoteContext';
import { useProducts } from '../context/ProductContext';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItemCount = 0, setIsQuoteModalOpen, setSelectedProduct } = useQuote() || {};
  const { openAdminPanel } = useProducts() || {};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    if (setSelectedProduct) setSelectedProduct(null);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setTimeout(() => {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav
      className={`sticky top-0 z-40 bg-white border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-300 shadow-md py-2.5'
          : 'border-slate-200 py-3.5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* 1. Left: Official Oval Lonetex Emblem Badge */}
          <div className="flex items-center">
            <BrandLogo
              variant="dark"
              size={isScrolled ? "sm" : "md"}
              showTagline={true}
              onClick={() => scrollToSection('top')}
            />
          </div>

          {/* 2. Center: Clean Uppercase Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => scrollToSection('top')}
              className="text-xs lg:text-sm font-heading font-bold uppercase tracking-wider text-slate-800 hover:text-emerald-700 transition-colors py-1"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="text-xs lg:text-sm font-heading font-bold uppercase tracking-wider text-slate-800 hover:text-emerald-700 transition-colors py-1"
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-xs lg:text-sm font-heading font-bold uppercase tracking-wider text-slate-800 hover:text-emerald-700 transition-colors py-1"
            >
              CONTACT US
            </button>
          </div>

          {/* 3. Right: Search Icon & Shopping Bag Live Badge Icon */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-slate-700 hover:text-emerald-800 hover:bg-slate-100 transition-colors"
              title="Search Catalog (Click or Press '/' )"
              aria-label="Search Catalog"
            >
              <Search className="h-5 w-5 sm:h-5 sm:w-5 stroke-[2.2]" />
            </button>

            {/* Shopping Bag RFQ Cart Trigger with Live Counter */}
            <button
              onClick={() => setIsQuoteModalOpen && setIsQuoteModalOpen(true)}
              className="relative p-2 rounded-full text-slate-700 hover:text-emerald-800 hover:bg-slate-100 transition-colors"
              title="View Quote List / Shopping Bag"
              aria-label="Shopping Bag Cart"
            >
              <ShoppingBag className="h-5 w-5 sm:h-5 sm:w-5 stroke-[2.2]" />
              {totalItemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-emerald-700 text-white font-heading font-bold text-[10px] flex items-center justify-center shadow-sm">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Admin trigger */}
            <button
              onClick={openAdminPanel}
              className="hidden lg:inline-flex items-center gap-1 text-[11px] font-heading font-semibold text-slate-400 hover:text-emerald-700 ml-2"
              title="Admin Portal"
            >
              <Lock className="h-3 w-3" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-3 font-heading font-bold text-sm tracking-wider uppercase">
            <button
              onClick={() => scrollToSection('top')}
              className="text-left py-2 text-slate-800 hover:text-emerald-700 border-b border-slate-100"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="text-left py-2 text-slate-800 hover:text-emerald-700 border-b border-slate-100"
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-left py-2 text-slate-800 hover:text-emerald-700 border-b border-slate-100"
            >
              CONTACT US
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (openAdminPanel) openAdminPanel();
              }}
              className="text-left py-2 text-slate-500 hover:text-emerald-700 flex items-center gap-2 text-xs"
            >
              <Lock className="h-3.5 w-3.5" />
              <span>Admin Catalog Portal</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
