"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import CategoryTabs from "./CategoryTabs";
import { Search } from 'lucide-react';

interface ProductGridProps {
  searchQuery: string;
}

export default function ProductGrid({ searchQuery }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const bestsellers = useMemo(
    () => products.filter((p) => p.badge === "bestseller"),
    []
  );

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Bestsellers row */}
      {!searchQuery && activeCategory === "All" && (
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🏆</span>
            <h2 className="text-2xl font-bold text-slate-900">Bestsellers</h2>
            <span className="ml-auto text-sm text-violet-600 font-semibold cursor-pointer hover:underline">
              View all
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* All Products */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {activeCategory === "All" ? "All Products" : activeCategory}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              {filtered.length} {filtered.length === 1 ? "product" : "products"} found
            </p>
          </div>
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Search size={48} className="text-slate-200 mb-4" />
            <h3 className="text-lg font-semibold text-slate-700 mb-1">No products found</h3>
            <p className="text-slate-400 text-sm">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
