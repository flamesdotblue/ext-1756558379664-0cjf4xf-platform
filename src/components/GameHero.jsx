import React from "react";
import { Star, Monitor, Globe } from "lucide-react";

export default function GameHero() {
  return (
    <section className="mt-6 overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="relative lg:col-span-2 h-[260px] sm:h-[360px] lg:h-[420px]">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_60%_30%,#2e3a4d,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(9,12,17,0.9)_90%)]" />
          <div className="absolute inset-0 flex items-end p-6 sm:p-8">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-sky-300">Featured</div>
              <h1 className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight text-white">Eclipse Protocol</h1>
              <p className="mt-2 max-w-2xl text-slate-300 text-sm sm:text-base">A tactical sci‑fi adventure through a fractured star system. Pilot, craft, and outsmart rival factions in a living galaxy.</p>
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-300">
                <div className="inline-flex items-center gap-1 text-amber-400"><Star size={16} fill="currentColor" /> 4.7</div>
                <span className="opacity-50">•</span>
                <span>Action • Exploration • Singleplayer</span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-2 py-1 rounded"><Monitor size={14}/> PC</div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-2 py-1 rounded"><Globe size={14}/> Cloud Saves</div>
              </div>
            </div>
          </div>
        </div>
        <aside className="p-6 sm:p-8 bg-gradient-to-b from-white/5 to-transparent">
          <h2 className="text-slate-100 font-medium">Includes</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li className="flex items-center justify-between">
              <span>Base Game</span>
              <span className="text-slate-400">Eclipse Protocol</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Digital Artbook</span>
              <span className="text-slate-400">Concept Suite</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Soundtrack</span>
              <span className="text-slate-400">Vol. 1</span>
            </li>
          </ul>
          <div className="mt-6 text-xs text-slate-400">
            Released: Apr 12, 2025 • Developer: Orpheon Labs • Publisher: Nebula Collective
          </div>
        </aside>
      </div>
    </section>
  );
}
