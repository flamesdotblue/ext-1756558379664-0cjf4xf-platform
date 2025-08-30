import React from "react";
import { Search, User, ShoppingCart, Home } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/70 bg-[#0b0f14]/80 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-sky-400 to-indigo-500" />
          <span className="text-slate-100 font-semibold tracking-wide">Nebula Games</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 ml-6 text-slate-300 text-sm">
          <a className="hover:text-white transition-colors inline-flex items-center gap-2" href="#"><Home size={16}/> Store</a>
          <a className="hover:text-white transition-colors" href="#">Library</a>
          <a className="hover:text-white transition-colors" href="#">Community</a>
        </nav>
        <div className="ml-auto flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-initial md:w-[380px]">
            <input
              className="w-full bg-white/5 border border-white/10 focus:border-sky-400/40 outline-none rounded-md pl-9 pr-3 py-2 text-sm placeholder:text-slate-400"
              placeholder="Search the store"
            />
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200">
            <User size={18} />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}
