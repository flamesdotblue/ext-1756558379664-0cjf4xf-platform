import React, { useMemo, useState } from "react";
import { ShoppingCart, Heart, Check } from "lucide-react";

const CURRENCIES = [
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "BTC", label: "Bitcoin", symbol: "₿" },
  { code: "ETH", label: "Ethereum", symbol: "Ξ" },
  { code: "ADA", label: "Cardano", symbol: "ADA" },
];

export default function PricePanel() {
  const [selected, setSelected] = useState("USD");

  const prices = useMemo(() => {
    // Base price in USD
    const usd = 59.99;
    // Static example rates; in a real app you'd fetch live rates
    const rates = {
      USD: 1,
      EUR: 0.92, // 1 USD = 0.92 EUR
      BTC: 1 / 65000, // 1 USD = this many BTC
      ETH: 1 / 3000,
      ADA: 1 / 0.45,
    };

    const fmtFiat = (amt, currency) =>
      new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amt);

    const fmtCrypto = (amt, symbol, max = 8) => `${amt.toFixed(amt < 0.0001 ? 8 : 6)} ${symbol}`;

    return {
      USD: fmtFiat(usd, "USD"),
      EUR: fmtFiat(usd * rates.EUR, "EUR"),
      BTC: fmtCrypto(usd * rates.BTC, "BTC"),
      ETH: fmtCrypto(usd * rates.ETH, "ETH"),
      ADA: `${Math.round(usd * rates.ADA).toLocaleString()} ADA`,
      raw: {
        USD: usd,
        EUR: usd * rates.EUR,
        BTC: usd * rates.BTC,
        ETH: usd * rates.ETH,
        ADA: usd * rates.ADA,
      },
    };
  }, []);

  const buyLabel = useMemo(() => {
    const sym = CURRENCIES.find((c) => c.code === selected)?.symbol || "";
    const formatted = prices[selected];
    return `Buy for ${formatted}`;
  }, [selected, prices]);

  return (
    <aside className="rounded-xl border border-white/5 bg-white/5 p-5 sm:p-6">
      <h3 className="text-slate-100 font-semibold">Purchase Options</h3>
      <p className="text-sm text-slate-400 mt-1">Choose your preferred currency. All prices are shown for convenience.</p>

      <div className="mt-4 grid grid-cols-1 gap-2">
        {CURRENCIES.map((cur) => {
          const isSelected = selected === cur.code;
          return (
            <button
              key={cur.code}
              onClick={() => setSelected(cur.code)}
              className={`group w-full text-left rounded-lg border transition-all px-3 py-3 sm:px-4 sm:py-3.5 flex items-center justify-between ${
                isSelected
                  ? "border-sky-400/40 bg-sky-400/10 shadow-[0_0_0_1px_rgba(56,189,248,0.25)_inset]"
                  : "border-white/10 hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                    isSelected ? "border-sky-400 bg-sky-400/20" : "border-white/20"
                  }`}
                >
                  {isSelected && <Check size={14} className="text-sky-300" />}
                </div>
                <div>
                  <div className="text-slate-200 text-sm font-medium">{cur.code} • {cur.label}</div>
                  <div className="text-slate-400 text-xs">Preferred for checkout</div>
                </div>
              </div>
              <div className="text-slate-100 font-semibold tracking-tight">{prices[cur.code]}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-600 active:to-sky-700 text-white font-medium px-4 py-3 shadow">
          <ShoppingCart size={18} />
          {buyLabel}
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 px-4 py-3">
          <Heart size={18} />
          Wishlist
        </button>
      </div>

      <div className="mt-4 text-xs text-slate-400">
        Taxes/VAT included where applicable. Crypto prices are estimates based on indicative rates.
      </div>
    </aside>
  );
}
