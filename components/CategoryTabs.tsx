"use client";

import { CATEGORIES } from "@/lib/products";

interface CategoryTabsProps {
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            "flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 " +
            (active === cat
              ? "bg-violet-600 text-white shadow-md shadow-violet-200"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200")
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
