"use client";

import { useEffect } from "react";
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      style={{ transition: "opacity 0.3s, transform 0.3s" }}
      className={
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-full shadow-2xl " +
        (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")
      }
    >
      <span className="flex items-center justify-center w-5 h-5 bg-violet-600 rounded-full flex-shrink-0">
        <Check size={12} strokeWidth={3} />
      </span>
      <span className="text-sm font-medium whitespace-nowrap">{message}</span>
      <button onClick={onClose} className="ml-1 text-slate-400 hover:text-white transition-colors">
        <X size={14} />
      </button>
    </div>
  );
}
