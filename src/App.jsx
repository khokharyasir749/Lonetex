import React, { useState, useMemo, Component } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import SectionHeroBanner from './components/SectionHeroBanner';
import ProductCarouselSection from './components/ProductCarouselSection';
import WholesaleInfoSection from './components/WholesaleInfoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ProductModal from './components/ProductModal';
import ProductDetailPage from './components/ProductDetailPage';
import QuoteCartModal from './components/QuoteCartModal';
import SearchModal from './components/SearchModal';
import AdminDashboard from './components/AdminDashboard';
import AdminAuthModal from './components/AdminAuthModal';
import { QuoteProvider, useQuote } from './context/QuoteContext';
import { ProductProvider, useProducts } from './context/ProductContext';
import {
  getBestSellingProducts,
  getKentuckyMopsProducts,
  getAccessoriesProducts,
  getPracticalCleaningProducts,
  getFlatMopsProducts,
  getClothsProducts
} from './data/lonetexProducts';

// Safe Error Boundary to prevent any uncaught React render crash
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center shadow-2xl">
            <div className="w-12 h-12 bg-red-950 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-800">
              ⚠️
            </div>
            <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
            <p className="text-xs text-slate-400 mb-4">
              {this.state.error?.message || 'An unexpected rendering error occurred.'}
            </p>
            <button
              onClick={() => {
                try {
                  localStorage.removeItem('lonetex_catalog_inventory_v30');
                } catch (e) {
                  console.error(e);
                }
                window.location.reload();
              }}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs rounded-lg transition-colors"
            >
              Reset Catalog &amp; Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function StorefrontApp() {
  const { products, currentView } = useProducts();
  const { selectedProduct, setSelectedProduct } = useQuote();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Group current catalog into sections dynamically
  const bestSellingList = useMemo(() => {
    return (products || []).filter((p) =>
      ["lon-bs-001", "lon-bs-002", "lon-bs-003", "lon-bs-004", "lon-bs-005", "lon-bs-006", "lon-bs-007", "lon-bs-008", "lon-bs-009", "lon-bs-010"].includes(p.id) ||
      (p.id && p.id.startsWith("lon-bs-"))
    ).slice(0, 10);
  }, [products]);

  const kentuckyMopsList = useMemo(() => {
    return (products || []).filter((p) => p.category === "Kentucky Mops");
  }, [products]);

  const accessoriesList = useMemo(() => {
    return (products || []).filter((p) => p.category === "Handles & Accessories" || p.category === "Accessories");
  }, [products]);

  const practicalCleaningList = useMemo(() => {
    return (products || []).filter((p) => p.category === "Practical Cleaning");
  }, [products]);

  const flatMopsList = useMemo(() => {
    return (products || []).filter((p) => p.category === "Flat Mops" || p.category === "Dust/Flat Mops" || (p.id && p.id.startsWith("lon-fm-")));
  }, [products]);

  const clothsList = useMemo(() => {
    return (products || []).filter((p) => p.category === "Cloths" || p.category === "Cleaning Cloths" || (p.id && p.id.startsWith("lon-cl-")));
  }, [products]);

  // If active view is Admin Dashboard, render admin panel directly
  if (currentView === 'admin') {
    return <AdminDashboard />;
  }

  // If a product is selected, render the dedicated full-page Product Detail view
  if (selectedProduct) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-800 selection:text-white">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Navigation Bar */}
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Dedicated Full-Page Product Detail View */}
        <main className="flex-1">
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        </main>

        {/* Light Minimalist Footer */}
        <Footer />

        {/* Floating Circular Back-To-Top Button */}
        <BackToTop />

        {/* Modals & Overlays */}
        <QuoteCartModal />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <AdminAuthModal />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-800 selection:text-white">
      
      {/* 1. Top Utilities & Announcement Bars (Bar 1 & Bar 2) */}
      <AnnouncementBar />

      {/* 2. Exact Header with Oval Lonetex Badge, Center Links, Right Search & Shopping Bag */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* 3. SECTION 1: HERO 1 (Dynamic 4-Slide Auto-Rotating Header Carousel) */}
      <SectionHeroBanner
        id="hero-1"
        isMainHero={true}
      />

      {/* 4. SECTION 1: CAROUSEL 1 ("BEST SELLING") */}
      <ProductCarouselSection
        id="carousel-best-selling"
        title="BEST SELLING"
        products={bestSellingList.length > 0 ? bestSellingList : getBestSellingProducts()}
        onViewAll={() => setIsSearchOpen(true)}
      />

      {/* 5. SECTION 2: HERO 2 ("WET / KENTUCKY MOPS") */}
      <div id="kentucky-mops" className="scroll-mt-16 sm:scroll-mt-24">
        <SectionHeroBanner
          id="hero-2"
          isMainHero={false}
          eyebrow="WET / KENTUCKY MOPS"
          title="KENTUCKY MOPS"
          ctaText="SHOP COLLECTION →"
          targetSectionId="carousel-kentucky-mops"
          bgImage="/banners/slide-kentucky.png"
          slideIndicator="01 / 05"
        />

        {/* 6. SECTION 2: CAROUSEL 2 ("KENTUCKY MOPS") */}
        <ProductCarouselSection
          id="carousel-kentucky-mops"
          title="KENTUCKY MOPS"
          products={kentuckyMopsList.length > 0 ? kentuckyMopsList : getKentuckyMopsProducts()}
          onViewAll={() => setIsSearchOpen(true)}
        />
      </div>

      {/* SECTION 3: ACCESSORIES */}
      <div id="accessories" className="scroll-mt-16 sm:scroll-mt-24">
        <SectionHeroBanner
          id="hero-3"
          isMainHero={false}
          eyebrow="HANDLES & FRAMES"
          title="ACCESSORIES"
          ctaText="SHOP COLLECTION →"
          targetSectionId="carousel-accessories"
          bgImage="/banners/slide-accessories.png"
          slideIndicator="02 / 05"
        />

        <ProductCarouselSection
          id="carousel-accessories"
          title="ACCESSORIES"
          products={accessoriesList.length > 0 ? accessoriesList : getAccessoriesProducts()}
          onViewAll={() => setIsSearchOpen(true)}
        />
      </div>

      {/* SECTION 4: PRACTICAL CLEANING */}
      <div id="practical-cleaning" className="scroll-mt-16 sm:scroll-mt-24">
        <SectionHeroBanner
          id="hero-4"
          isMainHero={false}
          eyebrow="EVERYDAY SOLUTIONS"
          title="PRACTICAL CLEANING"
          ctaText="SHOP COLLECTION →"
          targetSectionId="carousel-practical-cleaning"
          bgImage="/banners/slide-practical.png"
          slideIndicator="03 / 05"
        />

        <ProductCarouselSection
          id="carousel-practical-cleaning"
          title="PRACTICAL CLEANING"
          products={practicalCleaningList.length > 0 ? practicalCleaningList : getPracticalCleaningProducts()}
          onViewAll={() => setIsSearchOpen(true)}
        />
      </div>

      {/* SECTION 5: FLAT MOPS */}
      <div id="flat-mops" className="scroll-mt-16 sm:scroll-mt-24">
        <SectionHeroBanner
          id="hero-flat-mops"
          isMainHero={false}
          eyebrow="PROFESSIONAL FLAT MOPS"
          title="FLAT MOPS"
          ctaText="SHOP COLLECTION →"
          targetSectionId="carousel-flat-mops"
          bgImage="/banners/slide-flat-mops.png"
          slideIndicator="04 / 05"
        />

        <ProductCarouselSection
          id="carousel-flat-mops"
          title="FLAT MOPS"
          products={flatMopsList.length > 0 ? flatMopsList : getFlatMopsProducts()}
          onViewAll={() => setIsSearchOpen(true)}
        />
      </div>

      {/* SECTION 6: LONETEX CLOTHS */}
      <div id="cloths" className="scroll-mt-16 sm:scroll-mt-24">
        <SectionHeroBanner
          id="hero-cloths"
          isMainHero={false}
          eyebrow="CLEANING CLOTHS"
          title="LONETEX CLOTHS"
          ctaText="SHOP COLLECTION →"
          targetSectionId="carousel-cloths"
          bgImage="/banners/slide-cloths.png"
          slideIndicator="05 / 05"
        />

        <ProductCarouselSection
          id="carousel-cloths"
          title="CLEANING CLOTHS"
          products={clothsList.length > 0 ? clothsList : getClothsProducts()}
          onViewAll={() => setIsSearchOpen(true)}
        />
      </div>

      {/* 11. Wholesale OEM & Manufacturing Capabilities Section */}
      <WholesaleInfoSection />

      {/* 12. Contact & Showroom / Branches Section */}
      <ContactSection />

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating Circular Dark Blue Back-To-Top Button (↑) */}
      <BackToTop />

      {/* 15. Modals & Overlays */}
      <ProductModal />
      <QuoteCartModal />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AdminAuthModal />

    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ProductProvider>
        <QuoteProvider>
          <StorefrontApp />
        </QuoteProvider>
      </ProductProvider>
    </ErrorBoundary>
  );
}
