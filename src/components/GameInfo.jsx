import React from "react";
import { Cpu, HardDrive, Check } from "lucide-react";

export default function GameInfo() {
  return (
    <section className="rounded-xl border border-white/5 bg-white/5 p-6">
      <h3 className="text-slate-100 font-semibold">About this game</h3>
      <p className="mt-3 text-slate-300 leading-relaxed">
        In Eclipse Protocol, command a customizable starship as you navigate volatile trade routes and unravel a conspiracy at the edge of known space. Make allies, outwit rivals, and decide the fate of fractured colonies across a reactive, open‑ended campaign.
      </p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
          <h4 className="text-slate-200 font-medium">System Requirements</h4>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400"><Cpu size={16}/> Minimum</div>
              <ul className="space-y-1">
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> CPU: Quad‑core 3.0 GHz</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> RAM: 8 GB</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> GPU: GTX 970 / RX 570</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> Storage: 40 GB</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400"><HardDrive size={16}/> Recommended</div>
              <ul className="space-y-1">
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> CPU: 6‑core 3.6 GHz</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> RAM: 16 GB</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> GPU: RTX 2070 / RX 6700 XT</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-400"/> Storage: 40 GB SSD</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
          <h4 className="text-slate-200 font-medium">Languages</h4>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-slate-300">
            {["English","German","French","Spanish","Portuguese","Japanese"].map((lang) => (
              <div key={lang} className="flex items-center gap-2 bg-white/5 border border-white/10 px-2 py-1 rounded">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> {lang}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-slate-200 font-medium">Screenshots</h4>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[0,1,2,3,4,5].map((i) => (
            <div key={i} className="aspect-video rounded-md overflow-hidden border border-white/10 bg-[radial-gradient(200px_100px_at_60%_20%,#2c3b52,transparent_70%)]">
              <div className="w-full h-full bg-gradient-to-b from-black/10 to-black/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
