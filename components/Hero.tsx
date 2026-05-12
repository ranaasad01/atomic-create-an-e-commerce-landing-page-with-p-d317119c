import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-violet-700 to-violet-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-800/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">
              <Sparkles size={14} className="text-amber-400" />
              <span>Summer Sale — Up to 40% Off</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Discover
              <span className="block text-amber-400">Premium Products</span>
              You&apos;ll Love
            </h1>
            <p className="text-lg text-violet-200 max-w-md leading-relaxed">
              Shop thousands of curated products from top brands. Free shipping on orders over $50. New arrivals every week.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight size={18} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                View Deals
              </a>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2">
              {[
                { value: "50K+", label: "Products" },
                { value: "4.9★", label: "Avg Rating" },
                { value: "Free", label: "Returns" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-violet-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured product image */}
          <div className="relative hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20" />
              <img
                src="https://cdn.prod.website-files.com/659415b46df8ea43c3877776/67d49f3d8922c5f1f1c33801_featured-products-blog-post-cover-image.jpg"
                alt="Featured products"
                className="relative w-full h-full object-cover rounded-3xl"
              />
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 font-bold text-sm px-4 py-2 rounded-2xl shadow-lg rotate-3">
                🔥 Hot Deals
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 font-semibold text-sm px-4 py-3 rounded-2xl shadow-xl">
                <div className="text-xs text-slate-500 font-normal">Starting from</div>
                <div className="text-violet-600 font-bold text-lg">$24.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L1440 40L1440 20C1200 0 960 40 720 20C480 0 240 40 0 20L0 40Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}