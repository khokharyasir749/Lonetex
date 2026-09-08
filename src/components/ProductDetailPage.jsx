import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  ShoppingBag, 
  MessageSquare, 
  Check, 
  Phone, 
  ShieldCheck, 
  Store, 
  CheckCircle2,
  Package
} from 'lucide-react';
import { generateWhatsAppQuoteUrl, LONETEX_COMPANY, DEFAULT_PRODUCT_IMAGE } from '../data/lonetexProducts';
import { useQuote } from '../context/QuoteContext';

export default function ProductDetailPage({ product, onBack }) {
  const { addToQuote, isInQuote } = useQuote();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image || DEFAULT_PRODUCT_IMAGE);
  const [addedFeedback, setAddedFeedback] = useState(false);
  
  // Accordion state (Section 1: Description default open)
  const [openSections, setOpenSections] = useState({
    description: true,
    materialCare: false,
    ordersReturns: false
  });

  const thumbnailScrollRef = useRef(null);

  // Scroll to top on mount or product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setActiveImage(product?.image || DEFAULT_PRODUCT_IMAGE);
    setAddedFeedback(false);
    setOpenSections({
      description: true,
      materialCare: false,
      ordersReturns: false
    });
  }, [product]);

  if (!product) return null;

  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // Compile gallery images (main product image + variations/alternates)
  const galleryImages = React.useMemo(() => {
    const list = [product.image || DEFAULT_PRODUCT_IMAGE];
    if (Array.isArray(product.images) && product.images.length > 0) {
      product.images.forEach(img => {
        if (img && !list.includes(img)) list.push(img);
      });
    } else {
      // Complementary gallery thumbnails for rich interactive experience
      const commonAlternatives = [
        "/products/spray-mop.png",
        "/products/spin-mop.png",
        "/products/microfiber-dust-mop.png",
        "/products/self-wringing-mop.png",
        "/products/practical/spray-mop-green.png",
        "/products/practical/spin-mop-blue.png"
      ];
      commonAlternatives.forEach(alt => {
        if (!list.includes(alt) && list.length < 4) {
          list.push(alt);
        }
      });
    }
    return list;
  }, [product]);

  const handleScrollThumbnails = (direction) => {
    if (thumbnailScrollRef.current) {
      const scrollAmount = direction === 'left' ? -180 : 180;
      thumbnailScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAddToCart = () => {
    if (addToQuote) {
      addToQuote(product, quantity);
      setAddedFeedback(true);
      setTimeout(() => setAddedFeedback(false), 2500);
    }
  };

  const buildWhatsAppUrl = () => {
    const name = product.name || 'Commercial Item';
    const sku = product.sku || 'LT-12159';
    let msg = `Hello Lonetex, I would like to inquire about bulk wholesale pricing for ${name} (SKU: ${sku}). Quantity: ${quantity} units.`;
    return `https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  // Specification table rows
  const specRows = [
    { size: "16oz", weight: "450g - 650g", packing: "6 Pcs / Box" },
    { size: "24oz", weight: "650g - 750g", packing: "12 Pcs / Box" },
    { size: "32oz", weight: "750g - 900g", packing: "24 Pcs / Carton" }
  ];

  const specsList = Array.isArray(product.specs) ? product.specs : [];
  const featuresList = Array.isArray(product.features) ? product.features : [];

  return (
    <div className="bg-white text-slate-900 min-h-screen py-6 sm:py-10 animate-fade-in select-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumb Navigation / Back Button */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 font-medium">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-black font-semibold transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Catalog</span>
          </button>
          <span className="text-slate-300">/</span>
          <button onClick={onBack} className="hover:text-black transition-colors cursor-pointer">
            Home
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500">{product.category || 'Cleaning Products'}</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </div>

        {/* Two-Column Product Layout (50% / 50% on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Gallery & Thumbnails Strip                    */}
          {/* ========================================================= */}
          <div className="flex flex-col space-y-4">
            
            {/* Primary Large Image Preview */}
            <div className="relative bg-[#FAFAFA] border border-slate-200 rounded-lg p-6 sm:p-10 flex items-center justify-center aspect-square w-full shadow-sm overflow-hidden group">
              <img
                src={activeImage}
                alt={product.name || 'Product'}
                className="max-h-[400px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DEFAULT_PRODUCT_IMAGE;
                }}
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-[#0A1D37] text-white uppercase tracking-wider shadow-sm">
                  {product.category || 'Commercial Item'}
                </span>
                {product.badge && (
                  <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Thumbnail Gallery Strip */}
            {galleryImages.length > 1 && (
              <div className="relative flex items-center pt-2">
                <button
                  onClick={() => handleScrollThumbnails('left')}
                  className="w-8 h-8 rounded-full border border-slate-300 hover:border-black bg-white text-slate-700 hover:text-black flex items-center justify-center shrink-0 shadow-sm transition active:scale-95"
                  aria-label="Scroll thumbnails left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div
                  ref={thumbnailScrollRef}
                  className="flex items-center gap-3 overflow-x-auto px-3 py-1 no-scrollbar scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {galleryImages.map((imgUrl, index) => {
                    const isActive = activeImage === imgUrl;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-[#FAFAFA] rounded-md p-1.5 border transition-all cursor-pointer flex items-center justify-center overflow-hidden ${
                          isActive
                            ? 'border-2 border-black ring-2 ring-black/10'
                            : 'border-slate-200 hover:border-slate-400'
                        }`}
                        aria-label={`View image thumbnail ${index + 1}`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = DEFAULT_PRODUCT_IMAGE;
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => handleScrollThumbnails('right')}
                  className="w-8 h-8 rounded-full border border-slate-300 hover:border-black bg-white text-slate-700 hover:text-black flex items-center justify-center shrink-0 shadow-sm transition active:scale-95"
                  aria-label="Scroll thumbnails right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Product Information & Purchase               */}
          {/* ========================================================= */}
          <div className="flex flex-col">
            
            {/* Top Notice */}
            <p className="text-xs text-slate-400 italic mb-2 leading-relaxed">
              *Product color may slightly vary due to photographic lighting sources or your monitor settings.
            </p>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1D37] tracking-tight font-heading mb-2 leading-tight">
              {product.name} - Product
            </h1>

            {/* Price Status */}
            <div className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Contact for price
            </div>

            {/* SKU */}
            <div className="text-slate-500 text-xs tracking-wider uppercase font-mono mb-6">
              SKU: {product.sku || 'LT-12159'}
            </div>

            {/* Quantity & Add to Cart Row */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-4">
              
              {/* Stepper Box */}
              <div className="flex items-stretch border border-slate-300 rounded overflow-hidden h-12 w-full sm:w-36 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 flex items-center justify-center hover:bg-slate-100 text-slate-800 font-bold transition text-lg select-none"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="flex-1 text-center text-sm font-bold text-slate-900 border-x border-slate-300 focus:outline-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 flex items-center justify-center hover:bg-slate-100 text-slate-800 font-bold transition text-lg select-none"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Solid Black ADD TO CART Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black hover:bg-neutral-800 text-white font-bold py-3 px-8 uppercase text-sm tracking-wider rounded transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 h-12 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{addedFeedback ? 'ADDED TO CART ✓' : 'ADD TO CART'}</span>
              </button>

            </div>

            {/* Direct WhatsApp Bulk Inquiry Button */}
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-6 rounded text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-colors mb-6"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>INQUIRE VIA WHATSAPP</span>
            </a>

            {/* Feature Checklist */}
            <div className="border-t border-b border-slate-200/80 py-4 mb-6 space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-slate-800 shrink-0 stroke-[2.5]" />
                <span>Premium quality Lonetex cleaning products</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-slate-800 shrink-0 stroke-[2.5]" />
                <span>In-store pickup at our Lahore showroom</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-slate-800 shrink-0 stroke-[2.5]" />
                <a href="tel:+923280790704" className="hover:text-blue-700 transition-colors">
                  Call us 24/7: +92 328 0790704
                </a>
              </div>
            </div>

            {/* ========================================================= */}
            {/* COLLAPSIBLE ACCORDIONS                                     */}
            {/* ========================================================= */}
            <div className="space-y-3 pt-2">
              
              {/* SECTION 1: DESCRIPTION (Default Open) */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleSection('description')}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left font-bold text-sm uppercase tracking-wider text-[#0A1D37] bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span>DESCRIPTION</span>
                  {openSections.description ? (
                    <ChevronUp className="w-4 h-4 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                  )}
                </button>

                {openSections.description && (
                  <div className="p-5 border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      {product.description ||
                        `${product.name} is manufactured with high-grade industrial fibers and robust structural components engineered for heavy-duty commercial facilities, janitorial applications, and high-traffic healthcare environments.`}
                    </p>

                    {/* Specification Table (High-contrast 3-column table) */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-[#0A1D37] uppercase tracking-wider mb-2">
                        Product Specifications
                      </h4>
                      <div className="border border-slate-300 rounded overflow-hidden shadow-xs">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-[#2B4C8C] text-[#FFC700] uppercase font-bold text-[11px] sm:text-xs">
                              <th className="py-2.5 px-4 border-r border-[#3b5e9f]">Size</th>
                              <th className="py-2.5 px-4 border-r border-[#3b5e9f]">Weight</th>
                              <th className="py-2.5 px-4">packing</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {specRows.map((row, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                                <td className="py-2.5 px-4 font-semibold text-slate-800 border-r border-slate-200">
                                  {row.size}
                                </td>
                                <td className="py-2.5 px-4 text-slate-700 border-r border-slate-200">
                                  {row.weight}
                                </td>
                                <td className="py-2.5 px-4 text-slate-700">
                                  {row.packing}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Technical Specs List if provided */}
                    {specsList.length > 0 && (
                      <div className="pt-2">
                        <h4 className="text-xs font-bold text-[#0A1D37] uppercase tracking-wider mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {specsList.map((spec, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                )}
              </div>

              {/* SECTION 2: MATERIAL AND CARE */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleSection('materialCare')}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left font-bold text-sm uppercase tracking-wider text-[#0A1D37] bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span>MATERIAL AND CARE</span>
                  {openSections.materialCare ? (
                    <ChevronUp className="w-4 h-4 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                  )}
                </button>

                {openSections.materialCare && (
                  <div className="p-5 border-t border-slate-200 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      • <strong>Composition:</strong> High-grade industrial spun cotton yarn / split-microfiber electrostatic fabric with corrosion-resistant aluminum and high-impact polypropylene (PP) fittings.
                    </p>
                    <p>
                      • <strong>Washing Instructions:</strong> Machine washable up to 60°C (140°F) using standard commercial detergents.
                    </p>
                    <p>
                      • <strong>Care Guidelines:</strong> Air dry / hang dry recommended. Avoid chlorine bleach or silicone-based fabric softeners to maintain optimal capillary absorption and fiber longevity.
                    </p>
                  </div>
                )}
              </div>

              {/* SECTION 3: ORDERS & RETURNS */}
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleSection('ordersReturns')}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left font-bold text-sm uppercase tracking-wider text-[#0A1D37] bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span>ORDERS &amp; RETURNS</span>
                  {openSections.ordersReturns ? (
                    <ChevronUp className="w-4 h-4 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                  )}
                </button>

                {openSections.ordersReturns && (
                  <div className="p-5 border-t border-slate-200 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      • <strong>Nationwide Delivery:</strong> Bulk wholesale orders and commercial tenders dispatched across Pakistan (Lahore, Karachi, Islamabad) and Saudi Arabia (Dammam, Riyadh, Jeddah) within 24–48 hours.
                    </p>
                    <p>
                      • <strong>Showroom Pickup:</strong> Direct factory counter pickup available at Khaira Rd, Khaira, Lahore during operating hours (Mon – Sat, 9:00 AM – 6:00 PM).
                    </p>
                    <p>
                      • <strong>Factory Warranty:</strong> 7-day replacement guarantee against any manufacturing defects upon delivery.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
