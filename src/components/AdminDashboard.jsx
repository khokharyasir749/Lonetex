import React, { useState, useMemo } from 'react';
import {
  Package, Plus, Search, Filter, Edit, Trash2, RotateCcw,
  ArrowLeft, LogOut, CheckCircle2, XCircle, AlertTriangle,
  Image as ImageIcon, Tag, FileText, Check, X, ShieldAlert,
  Boxes, Layers, RefreshCw
} from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { CATEGORIES, DEFAULT_PRODUCT_IMAGE } from '../data/lonetexProducts';
import BrandLogo from './BrandLogo';

const INITIAL_FORM_STATE = {
  name: '',
  sku: '',
  category: 'Kentucky Mops',
  price: 'Contact for price',
  badge: '',
  image: '',
  description: '',
  specsText: '',
  featuresText: '',
  inStock: true
};

export default function AdminDashboard() {
  const {
    products,
    openStorefront,
    logoutAdmin,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleProductStock,
    resetToFactory
  } = useProducts();

  // Search & filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [stockFilter, setStockFilter] = useState('All');

  // Modal states
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [formError, setFormError] = useState('');

  // Delete & Reset confirmation states
  const [productToDelete, setProductToDelete] = useState(null);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  // Filter products for the table safely
  const filteredProducts = useMemo(() => {
    const list = Array.isArray(products) ? products : [];
    return list.filter((item) => {
      if (!item) return false;

      const matchCat =
        categoryFilter === 'All' || item.category === categoryFilter;

      const matchStock =
        stockFilter === 'All' ||
        (stockFilter === 'InStock' && item.inStock !== false) ||
        (stockFilter === 'OutOfStock' && item.inStock === false);

      const query = (searchTerm || '').toLowerCase().trim();
      const matchSearch =
        !query ||
        Boolean(item.name && item.name.toLowerCase().includes(query)) ||
        Boolean(item.sku && item.sku.toLowerCase().includes(query)) ||
        Boolean(item.category && item.category.toLowerCase().includes(query)) ||
        Boolean(item.description && item.description.toLowerCase().includes(query));

      return matchCat && matchStock && matchSearch;
    });
  }, [products, categoryFilter, stockFilter, searchTerm]);

  // Statistics
  const validProducts = Array.isArray(products) ? products.filter(Boolean) : [];
  const inStockCount = validProducts.filter(p => p.inStock !== false).length;
  const outOfStockCount = validProducts.length - inStockCount;
  const uniqueCategories = new Set(validProducts.map(p => p.category || 'Other')).size;

  // Open Form to Add
  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormData({
      ...INITIAL_FORM_STATE,
      sku: `LTX-${Date.now().toString().slice(-4)}`
    });
    setFormError('');
    setIsFormModalOpen(true);
  };

  // Open Form to Edit
  const handleOpenEdit = (product) => {
    if (!product) return;
    setEditingProduct(product);
    setFormData({
      name: product.name || '',
      sku: product.sku || '',
      category: product.category || 'Kentucky Mops',
      price: product.price || 'Contact for price',
      badge: product.badge || '',
      image: product.image || '',
      description: product.description || '',
      specsText: Array.isArray(product.specs) ? product.specs.join('\n') : '',
      featuresText: Array.isArray(product.features) ? product.features.join('\n') : '',
      inStock: product.inStock !== false
    });
    setFormError('');
    setIsFormModalOpen(true);
  };

  // Handle Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim()) {
      setFormError('Product Name is required.');
      return;
    }
    if (!formData.sku.trim()) {
      setFormError('Product SKU is required.');
      return;
    }

    // Parse specs and features from multi-line text
    const specs = (formData.specsText || '')
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const features = (formData.featuresText || '')
      .split('\n')
      .map(f => f.trim())
      .filter(Boolean);

    const payload = {
      name: formData.name.trim(),
      sku: formData.sku.trim().toUpperCase(),
      category: formData.category,
      price: formData.price.trim() || 'Contact for price',
      badge: formData.badge.trim() || undefined,
      image: formData.image.trim() || DEFAULT_PRODUCT_IMAGE,
      description: formData.description.trim(),
      specs: specs.length > 0 ? specs : ['Commercial Grade Industrial Quality'],
      features: features.length > 0 ? features : ['Manufactured for high traffic facility cleaning'],
      inStock: formData.inStock
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, payload);
    } else {
      addProduct(payload);
    }

    setIsFormModalOpen(false);
  };

  // Confirm and execute delete
  const handleConfirmDelete = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id);
      setProductToDelete(null);
    }
  };

  // Confirm and execute reset
  const handleConfirmReset = () => {
    resetToFactory();
    setIsResetConfirmOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      
      {/* Top Admin Navigation Header */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-30 shadow-lg">
        <div className="container mx-auto px-4 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3.5 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={openStorefront}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-heading font-semibold transition-colors border border-slate-700"
            >
              <ArrowLeft className="h-4 w-4 text-emerald-400" />
              <span>Storefront</span>
            </button>

            <div className="flex items-center gap-2.5">
              <BrandLogo variant="light" size="sm" showTagline={false} />
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-heading font-extrabold uppercase tracking-wider">
                Admin Panel
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={() => setIsResetConfirmOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-colors"
              title="Reset catalog back to initial factory products"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Reset to Factory</span>
            </button>

            <button
              onClick={handleOpenAdd}
              className="btn-primary bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-2 px-3.5 text-xs rounded-lg shadow-emerald-sm flex items-center gap-1.5"
            >
              <Plus className="h-4 w-4 stroke-[3]" />
              <span>Add New Product</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="p-2 rounded-lg bg-slate-800 hover:bg-red-950/60 text-slate-400 hover:text-red-400 border border-slate-700 transition-colors"
              title="Logout from Admin"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="container mx-auto px-4 py-6 flex-1">
        
        {/* Inventory Statistics Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm flex items-center gap-3">
            <div className="p-3 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/60">
              <Boxes className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Total Catalog Items</span>
              <p className="text-xl font-bold text-white leading-none mt-1">{validProducts.length}</p>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm flex items-center gap-3">
            <div className="p-3 rounded-lg bg-emerald-950/70 text-emerald-400 border border-emerald-800/60">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Active In-Stock</span>
              <p className="text-xl font-bold text-emerald-400 leading-none mt-1">{inStockCount}</p>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm flex items-center gap-3">
            <div className="p-3 rounded-lg bg-amber-950/70 text-amber-400 border border-amber-800/60">
              <XCircle className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Out of Stock</span>
              <p className="text-xl font-bold text-amber-400 leading-none mt-1">{outOfStockCount}</p>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-sm flex items-center gap-3">
            <div className="p-3 rounded-lg bg-blue-950/70 text-blue-400 border border-blue-800/60">
              <Layers className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Core Categories</span>
              <p className="text-xl font-bold text-blue-400 leading-none mt-1">{uniqueCategories}</p>
            </div>
          </div>
        </div>

        {/* Live Filter and Search Controls */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by name, SKU, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-8 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Category & Stock Dropdowns */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All">All Categories ({validProducts.length})</option>
              {CATEGORIES.filter(c => c !== 'All').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All">All Stock Status</option>
              <option value="InStock">In Stock Only ({inStockCount})</option>
              <option value="OutOfStock">Out of Stock ({outOfStockCount})</option>
            </select>
          </div>

        </div>

        {/* Catalog Table */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 text-slate-400 uppercase font-bold tracking-wider border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3.5">Product</th>
                  <th className="px-4 py-3.5">SKU</th>
                  <th className="px-4 py-3.5">Category</th>
                  <th className="px-4 py-3.5">Price Status</th>
                  <th className="px-4 py-3.5">Stock Status</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-slate-500">
                      No products found matching the current search filters.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr
                      key={product.id || product.sku}
                      className="hover:bg-slate-900/50 transition-colors group"
                    >
                      {/* Thumbnail & Name */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image || DEFAULT_PRODUCT_IMAGE}
                            alt={product.name || 'Product'}
                            className="w-10 h-10 object-cover rounded-lg bg-slate-800 border border-slate-700 shrink-0"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = DEFAULT_PRODUCT_IMAGE;
                            }}
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white text-xs truncate max-w-xs block">
                                {product.name || 'Untitled Product'}
                              </span>
                              {product.badge && (
                                <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold shrink-0">
                                  {product.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-slate-400 line-clamp-1 max-w-sm">
                              {product.description || ''}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* SKU */}
                      <td className="px-4 py-3 font-mono text-slate-400 font-bold whitespace-nowrap">
                        {product.sku || 'N/A'}
                      </td>

                      {/* Category */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-emerald-900/60 font-semibold text-[11px]">
                          {product.category || 'General'}
                        </span>
                      </td>

                      {/* Price Status */}
                      <td className="px-4 py-3 whitespace-nowrap text-slate-300">
                        {product.price || 'Contact for price'}
                      </td>

                      {/* In Stock Toggle Switch */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <button
                          onClick={() => toggleProductStock(product.id)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                            product.inStock !== false
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-700/50 hover:bg-emerald-900'
                              : 'bg-red-950/60 text-red-400 border border-red-800/50 hover:bg-red-900'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              product.inStock !== false ? 'bg-emerald-400' : 'bg-red-400'
                            }`}
                          />
                          <span>{product.inStock !== false ? 'In Stock' : 'Out of Stock'}</span>
                        </button>
                      </td>

                      {/* Actions (Edit / Delete) */}
                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(product)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                            title="Edit product"
                          >
                            <Edit className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => setProductToDelete(product)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-900/80 text-slate-400 hover:text-red-200 transition-colors"
                            title="Delete product"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer Summary */}
          <div className="p-3.5 bg-slate-900/80 border-t border-slate-800 text-slate-400 text-xs flex items-center justify-between">
            <span>Showing {filteredProducts.length} of {validProducts.length} products</span>
            <span className="text-[11px] text-emerald-400 font-medium">● LocalStorage Sync Active</span>
          </div>
        </div>

      </main>

      {/* ======================================================== */}
      {/* 1. ADD / EDIT PRODUCT MODAL FORM                         */}
      {/* ======================================================== */}
      {isFormModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsFormModalOpen(false)}
        >
          <div
            className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-lg text-white">
                  {editingProduct ? 'Edit Catalog Product' : 'Add New Catalog Product'}
                </h3>
                <p className="text-xs text-slate-400">
                  {editingProduct ? `Updating SKU: ${editingProduct.sku}` : 'Fill in the technical details to add item to catalog'}
                </p>
              </div>
              <button
                onClick={() => setIsFormModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {formError && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Product Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Heavy Duty Loop-End Kentucky Mop Head"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* SKU Code */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    SKU Code *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. LTX-KM-LE450"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {CATEGORIES.filter(c => c !== 'All').map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Pricing Status */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Pricing Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Contact for price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Badge (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Status Badge (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Best Seller / HACCP Hygiene"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Image URL */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Product Image URL
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="/products/spray-mop.png or https://..."
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    {formData.image && (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-9 h-9 object-cover rounded-lg bg-slate-800 border border-slate-700 shrink-0"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = DEFAULT_PRODUCT_IMAGE;
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Product Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter commercial product overview and applications..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Technical Specifications (one per line) */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Technical Specifications (One per line)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="450g Yarn Weight&#10;Cotton-Synthetic Blend&#10;Reinforced Tailband"
                    value={formData.specsText}
                    onChange={(e) => setFormData({ ...formData, specsText: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Features (one per line) */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Commercial Features (One per line)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Heavy duty looped ends prevent tangling&#10;Universal clip frame compatible&#10;Machine washable"
                    value={formData.featuresText}
                    onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* In Stock Checkbox */}
                <div className="sm:col-span-2 flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="inStockCheck"
                    checked={formData.inStock}
                    onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 bg-slate-950 border-slate-700 focus:ring-emerald-500"
                  />
                  <label htmlFor="inStockCheck" className="text-xs font-semibold text-slate-300 cursor-pointer">
                    Item is currently in stock & available for immediate wholesale order
                  </label>
                </div>
              </div>

              {/* Form Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsFormModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-5 py-2 text-xs rounded-lg"
                >
                  {editingProduct ? 'Update Product' : 'Create Product'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. DELETE CONFIRMATION MODAL                             */}
      {/* ======================================================== */}
      {productToDelete && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setProductToDelete(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-red-950 border border-red-800 mx-auto flex items-center justify-center text-red-400 mb-3">
              <Trash2 className="h-6 w-6" />
            </div>

            <h4 className="font-heading font-bold text-lg text-white mb-1">Delete Product?</h4>
            <p className="text-xs text-slate-400 mb-4">
              Are you sure you want to delete <span className="font-bold text-slate-200">"{productToDelete.name || 'this product'}"</span> (SKU: {productToDelete.sku || 'N/A'}) from the catalog?
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setProductToDelete(null)}
                className="w-1/2 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="w-1/2 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-xs font-bold text-white shadow-lg"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. RESET TO FACTORY CONFIRMATION MODAL                   */}
      {/* ======================================================== */}
      {isResetConfirmOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsResetConfirmOpen(false)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-amber-950 border border-amber-800 mx-auto flex items-center justify-center text-amber-400 mb-3">
              <AlertTriangle className="h-6 w-6" />
            </div>

            <h4 className="font-heading font-bold text-lg text-white mb-1">Restore Factory Catalog?</h4>
            <p className="text-xs text-slate-400 mb-4">
              This will restore all default Lonetex items from <code className="text-emerald-400 font-mono">lonetexProducts.js</code> and overwrite custom edits in localStorage.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="w-1/2 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReset}
                className="w-1/2 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-xs font-bold text-slate-950 shadow-lg"
              >
                Yes, Restore
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
