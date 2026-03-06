"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import KamarCard from "@/components/KamarCard";
import { kamarList } from "@/lib/data";

function KamarPageContent() {
  const searchParams = useSearchParams();
  const [lokasi, setLokasi] = useState(searchParams.get("lokasi") || "");
  const [penghuni, setPenghuni] = useState(searchParams.get("penghuni") || "");
  const [periode, setPeriode] = useState(searchParams.get("periode") || "");
  const [filtered, setFiltered] = useState(kamarList);

  useEffect(() => {
    let result = kamarList;
    if (lokasi) result = result.filter((k) => k.lokasi === lokasi);
    if (penghuni) result = result.filter((k) => k.penghuni === penghuni);
    setFiltered(result);
  }, [lokasi, penghuni, periode]);

  const handleSearch = (l: string, p: string, per: string) => {
    setLokasi(l);
    setPenghuni(p);
    setPeriode(per);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar
            initialLokasi={lokasi}
            initialPenghuni={penghuni}
            initialPeriode={periode}
            onSearch={handleSearch}
            variant="page"
          />
        </div>
      </div>

      {/* Listing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Jelajahi Kamar{" "}
              <span className="text-pink-500">({filtered.length})</span>
            </h1>
            {(lokasi || penghuni || periode) && (
              <p className="text-sm text-gray-500 mt-1">
                Filter aktif:{" "}
                {[lokasi, penghuni, periode].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
          {(lokasi || penghuni || periode) && (
            <button
              onClick={() => {
                setLokasi("");
                setPenghuni("");
                setPeriode("");
              }}
              className="text-sm text-pink-500 hover:text-pink-600 font-medium border border-pink-200 px-4 py-1.5 rounded-full hover:bg-pink-50 transition-colors"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Cards */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((kamar) => (
              <KamarCard key={kamar.id} kamar={kamar} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Kamar Tidak Ditemukan
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Tidak ada kamar yang sesuai dengan filter yang dipilih.
            </p>
            <button
              onClick={() => {
                setLokasi("");
                setPenghuni("");
                setPeriode("");
              }}
              className="px-6 py-2.5 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors"
            >
              Lihat Semua Kamar
            </button>
          </div>
        )}
      </div>
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
