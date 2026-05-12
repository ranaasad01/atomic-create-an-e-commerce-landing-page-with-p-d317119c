"use client";

import { useState } from "react";
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";
import Toast from "./Toast";

interface ProductCardProps {
  product: Product;
}

const BADGE_STYLES: Record<string, string> = {
  sale: "bg-red-500 text-white",
  new: "bg-emerald-500 text-white",
  bestseller: "bg-amber-400 text-slate-900",
  hot: "bg-orange-500 text-white",
};

const BADGE_LABELS: Record<string, string> = {
  sale: "SALE",
  new: "NEW",
  bestseller: "BEST",
  hot: "HOT",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [wished, setWished] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  function handleAddToCart() {
    addToCart(product);
    setToastVisible(true);
  }

  const badgeClass = product.badge ? BADGE_STYLES[product.badge] : "";
  const badgeLabel = product.badge ? BADGE_LABELS[product.badge] : "";
  const shortName = product.name.length > 30 ? product.name.slice(0, 30) + "…" : product.name;
  const toastMsg = '"' + shortName + '" added to cart';

  return (
    <>
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300 flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden bg-slate-50 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span className={"absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full " + badgeClass}>
              {badgeLabel}
            </span>
          )}
          {discount && (
            <span className="absolute top-3 right-3 text-xs font-bold bg-red-500 text-white px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
          <button
            onClick={() => setWished(!wished)}
            aria-label="Add to wishlist"
            className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          >
            <Heart
              size={15}
              className={wished ? "text-red-500 fill-red-500" : "text-slate-400"}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 gap-2">
          <span className="text-xs font-semibold text-violet-600 uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2 flex-1">
            {product.name}
          </h3>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-150"
          >
            <ShoppingCart size={15} />
            Add to Cart
          </button>
        </div>
      </div>

      <Toast
        message={toastMsg}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
}
