import React, { createContext, useContext, useState, useEffect } from 'react';
import { lonetexProducts as initialFactoryProducts, DEFAULT_PRODUCT_IMAGE } from '../data/lonetexProducts';

const ProductContext = createContext();

const STORAGE_KEY = 'lonetex_catalog_inventory_v30';
const AUTH_KEY = 'lonetex_admin_auth';
export const ADMIN_DEFAULT_PASSCODE = 'lonetex2026';

export function ProductProvider({ children }) {
  // Load products from localStorage or seed with initial factory data
  const [products, setProducts] = useState(() => {
    try {
      const localData = localStorage.getItem(STORAGE_KEY);
      if (localData) {
        const parsed = JSON.parse(localData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading catalog from localStorage', e);
    }
    return initialFactoryProducts;
  });

  // Current active view: 'storefront' | 'admin'
  const [currentView, setCurrentView] = useState(() => {
    // Check URL query param e.g. ?view=admin or /admin
    if (typeof window !== 'undefined') {
      if (window.location.search.includes('admin') || window.location.hash.includes('admin') || window.location.pathname.includes('/admin')) {
        return 'admin';
      }
    }
    return 'storefront';
  });

  // Admin authentication state
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Sync products to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (e) {
      console.error('Failed to sync products to localStorage', e);
    }
  }, [products]);

  // Admin Login
  const loginAdmin = (passcode) => {
    if (passcode === ADMIN_DEFAULT_PASSCODE) {
      setIsAdminAuthenticated(true);
      try {
        sessionStorage.setItem(AUTH_KEY, 'true');
      } catch (e) {
        console.error(e);
      }
      setIsAuthModalOpen(false);
      setCurrentView('admin');
      return { success: true };
    }
    return { success: false, error: 'Invalid Passcode. Default passcode is "lonetex2026".' };
  };

  // Admin Logout
  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    try {
      sessionStorage.removeItem(AUTH_KEY);
    } catch (e) {
      console.error(e);
    }
    setCurrentView('storefront');
  };

  // Navigate to Admin (gates with passcode if not authenticated)
  const openAdminPanel = () => {
    if (isAdminAuthenticated) {
      setCurrentView('admin');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const openStorefront = () => {
    setCurrentView('storefront');
  };

  // CRUD Actions
  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: newProduct.id || `lon-custom-${Date.now()}`,
      inStock: newProduct.inStock !== false,
      price: newProduct.price || "Contact for price",
      image: newProduct.image?.trim() || DEFAULT_PRODUCT_IMAGE,
      specs: Array.isArray(newProduct.specs) ? newProduct.specs : [],
      features: Array.isArray(newProduct.features) ? newProduct.features : []
    };

    setProducts(prev => [productWithId, ...prev]);
    return productWithId;
  };

  const updateProduct = (productId, updatedFields) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, ...updatedFields } : item
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts(prev => prev.filter(item => item.id !== productId));
  };

  const toggleProductStock = (productId) => {
    setProducts(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  const resetToFactory = () => {
    setProducts(initialFactoryProducts);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialFactoryProducts));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        currentView,
        setCurrentView,
        isAdminAuthenticated,
        isAuthModalOpen,
        setIsAuthModalOpen,
        loginAdmin,
        logoutAdmin,
        openAdminPanel,
        openStorefront,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleProductStock,
        resetToFactory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
