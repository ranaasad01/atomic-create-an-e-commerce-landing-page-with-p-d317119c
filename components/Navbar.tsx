"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 " +
        (scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="flex items-center justify-center w-8 h-8 bg-violet-600 rounded-lg">
              <Sparkles size={16} className="text-white" />
            </span>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Lumière
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white focus:border-violet-200 transition-all"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-violet-600 transition-colors">Shop</Link>
            <Link href="/" className="hover:text-violet-600 transition-colors">Deals</Link>
            <Link href="/" className="hover:text-violet-600 transition-colors">New Arrivals</Link>
          </nav>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-3 ml-4">
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} className="text-slate-700" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 bg-violet-600 text-white text-xs font-bold rounded-full">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100 pt-3 space-y-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-600">
              <Link href="/" className="py-1 hover:text-violet-600 transition-colors" onClick={() => setMobileOpen(false)}>Shop</Link>
              <Link href="/" className="py-1 hover:text-violet-600 transition-colors" onClick={() => setMobileOpen(false)}>Deals</Link>
              <Link href="/" className="py-1 hover:text-violet-600 transition-colors" onClick={() => setMobileOpen(false)}>New Arrivals</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
