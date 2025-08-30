import React from "react";
import Header from "./components/Header";
import GameHero from "./components/GameHero";
import PricePanel from "./components/PricePanel";
import GameInfo from "./components/GameInfo";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-200">
      <div className="fixed inset-0 -z-10 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,#243042_20%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_0%,#1a2331_20%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f14] to-[#0b0f14]" />
      </div>
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <GameHero />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 order-2 lg:order-none">
            <GameInfo />
          </div>
          <div className="lg:col-span-1 order-1 lg:order-none">
            <PricePanel />
          </div>
        </div>
      </main>
      <footer className="mt-16 py-10 border-t border-white/5 text-slate-400">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm">
          © 2025 Nebula Games. All trademarks are property of their respective owners.
        </div>
      </footer>
    </div>
  );
}
