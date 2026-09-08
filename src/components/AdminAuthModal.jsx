import React, { useState } from 'react';
import { Lock, KeyRound, X, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useProducts, ADMIN_DEFAULT_PASSCODE } from '../context/ProductContext';
import BrandLogo from './BrandLogo';

export default function AdminAuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, loginAdmin } = useProducts();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const result = loginAdmin(passcode.trim());
    if (!result.success) {
      setError(result.error);
    } else {
      setPasscode('');
    }
  };

  const handleClose = () => {
    setIsAuthModalOpen(false);
    setPasscode('');
    setError('');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#022c22] p-6 text-white text-center relative border-b border-emerald-900/60">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex justify-center mb-3">
            <BrandLogo variant="light" size="sm" showTagline={true} />
          </div>

          <h3 className="font-heading font-extrabold text-lg tracking-tight text-white mt-2">
            Catalog Manager Access
          </h3>
          <p className="text-xs text-emerald-300/80 mt-0.5">
            Enter administrative passcode to manage products
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Admin Passcode
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="password"
                autoFocus
                placeholder="Enter passcode (e.g. lonetex2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lonetex-700 focus:border-transparent"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs animate-shake">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Demo default passcode:</span>
            <code className="font-mono font-bold text-lonetex-800 bg-white px-2 py-0.5 rounded border border-slate-200">
              {ADMIN_DEFAULT_PASSCODE}
            </code>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="btn-secondary w-1/2 py-2.5 text-xs font-semibold justify-center"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn-primary w-1/2 py-2.5 text-xs font-bold justify-center"
            >
              <span>Unlock Admin</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
