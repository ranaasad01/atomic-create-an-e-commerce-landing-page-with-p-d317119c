"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="bg-gradient-to-r from-violet-600 to-violet-800 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-5">
          <Mail size={28} className="text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Get Exclusive Deals in Your Inbox
        </h2>
        <p className="text-violet-200 mb-8 text-base">
          Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and members-only discounts.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full text-base font-semibold">
            <Check size={20} className="text-amber-400" />
            You&apos;re subscribed! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-violet-300 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
