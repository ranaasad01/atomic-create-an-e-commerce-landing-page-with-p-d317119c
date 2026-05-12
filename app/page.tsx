"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="pt-16">
        <Hero />
        <ProductGrid searchQuery={searchQuery} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
