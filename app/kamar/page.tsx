"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Search, X, SlidersHorizontal } from "lucide-react";
import KamarCard from "@/components/KamarCard";
import { kamarList } from "@/lib/data";

const KOTA_LIST = [
  { label: "Semua", value: "", emoji: "🗺️" },
  { label: "Yogyakarta", value: "Yogyakarta", emoji: "🏛️" },
  { label: "Malang", value: "Malang", emoji: "🌿" },
  { label: "Bandung", value: "Bandung", emoji: "🌺" },
  { label: "Jakarta", value: "Jakarta", emoji: "🏙️" },
  { label: "Bali", value: "Bali", emoji: "🌴" },
];

const PENGHUNI_LIST = [
  { label: "Semua", value: "" },
  { label: "Putra", value: "Putra" },
  { label: "Putri", value: "Putri" },
  { label: "Pasutri", value: "Pasutri" },
];

function KamarPageContent() {
  const searchParams = useSearchParams();
  const [kota, setKota] = useState(searchParams.get("lokasi") || "");
  const [penghuni, setPenghuni] = useState(searchParams.get("penghuni") || "");
  const [cari, setCari] = useState("");
  const [filtered, setFiltered] = useState(kamarList);
  const [showFilterSheet, setShowFilterSheet] = useState(false);

  const jumlahPerKota = (kotaVal: string) => {
    if (!kotaVal) return kamarList.length;
    return kamarList.filter((k) => k.kota === kotaVal).length;
  };

  useEffect(() => {
    let result = kamarList;
    if (kota) result = result.filter((k) => k.kota === kota);
    if (penghuni) result = result.filter((k) => k.penghuni === penghuni);
    if (cari) {
      const q = cari.toLowerCase();
      result = result.filter(
        (k) =>
          k.nama.toLowerCase().includes(q) ||
          k.lokasi.toLowerCase().includes(q) ||
          k.kota.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [kota, penghuni, cari]);

  const resetFilter = () => {
    setKota("");
    setPenghuni("");
    setCari("");
  };

  const hasFilter = kota || penghuni || cari;
  const kotaInfo = KOTA_LIST.find((k) => k.value === kota);
  const activeFilterCount = [kota, penghuni, cari].filter(Boolean).length;

  return (
    <main className="min-h-screen bg-gray-50 pb-24 md:pb-0">

      {/* ===== MOBILE HEADER ===== */}
      <div className="md:hidden bg-white border-b border-gray-100 sticky top-[60px] z-30">
        {/* Search + Filter Row */}
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari kost atau area..."
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 bg-gray-50"
            />
            {cari && (
              <button onClick={() => setCari("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilterSheet(true)}
            className="relative flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 flex-shrink-0"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: "#e879a0" }}>
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Kota Scroll Pills */}
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide">
          {KOTA_LIST.map((k) => {
            const isActive = kota === k.value;
            return (
              <button
                key={k.value}
                onClick={() => setKota(k.value)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  isActive
                    ? "text-white border-transparent"
                    : "bg-white text-gray-600 border-gray-200"
                }`}
                style={isActive ? { backgroundColor: "#e879a0" } : {}}
              >
                <span>{k.emoji}</span>
                <span>{k.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                  {jumlahPerKota(k.value)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active filter chips */}
        {hasFilter && (
          <div className="flex items-center gap-2 px-4 pb-2 overflow-x-auto scrollbar-hide">
            {kota && (
              <span className="flex-shrink-0 flex items-center gap-1 bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full border border-pink-200">
                {kotaInfo?.emoji} {kota}
                <button onClick={() => setKota("")}><X className="w-3 h-3 ml-0.5" /></button>
              </span>
            )}
            {penghuni && (
              <span className="flex-shrink-0 flex items-center gap-1 bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full border border-pink-200">
                {penghuni}
                <button onClick={() => setPenghuni("")}><X className="w-3 h-3 ml-0.5" /></button>
              </span>
            )}
            <button onClick={resetFilter} className="flex-shrink-0 text-xs text-gray-400 underline ml-1">
              Reset semua
            </button>
          </div>
        )}
      </div>

      {/* ===== DESKTOP HEADER ===== */}
      <div className="hidden md:block bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-1">Jelajahi Kamar</p>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {kota ? (
                  <>Kost & Villa di <span className="text-pink-500">{kotaInfo?.emoji} {kota}</span></>
                ) : (
                  <>Semua <span className="text-pink-500">Properti Dzawani</span></>
                )}
              </h1>
              <p className="text-gray-500 text-sm mt-1">{filtered.length} properti tersedia{kota ? ` di ${kota}` : " di 5 kota"}</p>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama kost atau area..."
                value={cari}
                onChange={(e) => setCari(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 bg-gray-50"
              />
              {cari && (
                <button onClick={() => setCari("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* ===== DESKTOP FILTER KOTA ===== */}
        <div className="hidden md:grid grid-cols-6 gap-2 mb-6">
          {KOTA_LIST.map((k) => {
            const jumlah = jumlahPerKota(k.value);
            const isActive = kota === k.value;
            return (
              <button
                key={k.value}
                onClick={() => setKota(k.value)}
                className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-2xl border-2 text-center transition-all ${
                  isActive ? "border-pink-500 bg-pink-50 shadow-md shadow-pink-100" : "border-gray-200 bg-white hover:border-pink-300 hover:bg-pink-50/50"
                }`}
              >
                <span className="text-2xl">{k.emoji}</span>
                <p className={`font-bold text-xs leading-tight ${isActive ? "text-pink-600" : "text-gray-700"}`}>{k.label}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${isActive ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-500"}`}>{jumlah}</span>
              </button>
            );
          })}
        </div>

        {/* ===== DESKTOP FILTER PENGHUNI ===== */}
        <div className="hidden md:flex flex-wrap items-center gap-2 mb-6">
          <span className="text-sm font-semibold text-gray-500 mr-1">Penghuni:</span>
          {PENGHUNI_LIST.map((p) => (
            <button
              key={p.value}
              onClick={() => setPenghuni(p.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                penghuni === p.value ? "bg-pink-500 text-white border-pink-500" : "bg-white text-gray-600 border-gray-200 hover:border-pink-300"
              }`}
            >
              {p.label}
            </button>
          ))}
          {hasFilter && (
            <button onClick={resetFilter} className="ml-auto flex items-center gap-1.5 text-sm text-pink-500 border border-pink-200 px-4 py-1.5 rounded-full hover:bg-pink-50 transition-colors">
              <X className="w-3.5 h-3.5" />
              Reset Filter
            </button>
          )}
        </div>

        {/* ===== MOBILE: Jumlah hasil ===== */}
        <div className="md:hidden flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-700">
            {filtered.length} properti
            {kota ? <span className="text-pink-500"> di {kota}</span> : ""}
          </p>
          {hasFilter && (
            <button onClick={resetFilter} className="text-xs text-pink-500 font-medium">
              Reset filter
            </button>
          )}
        </div>

        {/* ===== HASIL ===== */}
        {filtered.length > 0 ? (
          <>
            {kota && (
              <div className="hidden md:flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Menampilkan {filtered.length} properti di <span className="text-pink-500">{kota}</span>
                </span>
              </div>
            )}
            {/* Mobile: 1 col, Desktop: 2-3 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((kamar) => (
                <KamarCard key={kamar.id} kamar={kamar} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl">🏠</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2">Properti Tidak Ditemukan</h3>
            <p className="text-gray-400 text-sm mb-6">Tidak ada properti yang sesuai dengan filter yang dipilih.</p>
            <button onClick={resetFilter} className="px-6 py-2.5 text-white rounded-full text-sm font-semibold" style={{ backgroundColor: "#e879a0" }}>
              Lihat Semua Properti
            </button>
          </div>
        )}
      </div>

      {/* ===== MOBILE FILTER BOTTOM SHEET ===== */}
      {showFilterSheet && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilterSheet(false)} />
          {/* Sheet */}
          <div className="relative bg-white rounded-t-3xl px-5 pt-5 pb-8 z-10">
            {/* Handle */}
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900">Filter Kamar</h3>
              <button onClick={() => setShowFilterSheet(false)}>
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Filter Penghuni */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Jenis Penghuni</p>
              <div className="flex flex-wrap gap-2">
                {PENGHUNI_LIST.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setPenghuni(p.value)}
                    className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                      penghuni === p.value ? "text-white border-transparent" : "bg-white text-gray-600 border-gray-200"
                    }`}
                    style={penghuni === p.value ? { backgroundColor: "#e879a0" } : {}}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setShowFilterSheet(false)}
              className="w-full py-3.5 rounded-2xl text-white font-semibold text-sm"
              style={{ backgroundColor: "#e879a0" }}
            >
              Terapkan Filter ({filtered.length} hasil)
            </button>
            {hasFilter && (
              <button onClick={() => { resetFilter(); setShowFilterSheet(false); }} className="w-full py-3 text-sm text-gray-500 font-medium mt-2">
                Reset Semua Filter
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default function KamarPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-pink-500 text-lg font-medium">Memuat...</div>
        </div>
      }
    >
      <KamarPageContent />
    </Suspense>
  );
}
