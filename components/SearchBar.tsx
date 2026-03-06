"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import { lokasiList } from "@/lib/data";

interface SearchBarProps {
  initialLokasi?: string;
  initialPenghuni?: string;
  initialPeriode?: string;
  onSearch?: (lokasi: string, penghuni: string, periode: string) => void;
  variant?: "hero" | "page";
}

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
  placeholder: string;
}

function Dropdown({ label, value, options, onChange, placeholder }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1 min-w-0" ref={ref}>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 px-1">
        {label}
      </p>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-colors"
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="max-h-52 overflow-y-auto">
            <button
              type="button"
              onClick={() => { onChange(""); setOpen(false); }}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-500 hover:bg-pink-50 transition-colors border-b border-gray-100"
            >
              {placeholder}
            </button>
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-pink-50 transition-colors ${
                  value === opt ? "text-pink-600 font-semibold bg-pink-50" : "text-gray-700"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchBar({
  initialLokasi = "",
  initialPenghuni = "",
  initialPeriode = "",
  onSearch,
  variant = "hero",
}: SearchBarProps) {
  const [lokasi, setLokasi] = useState(initialLokasi);
  const [penghuni, setPenghuni] = useState(initialPenghuni);
  const [periode, setPeriode] = useState(initialPeriode);
  const router = useRouter();

  const handleCari = () => {
    if (onSearch) {
      onSearch(lokasi, penghuni, periode);
    } else {
      const params = new URLSearchParams();
      if (lokasi) params.set("lokasi", lokasi);
      if (penghuni) params.set("penghuni", penghuni);
      if (periode) params.set("periode", periode);
      router.push(`/kamar?${params.toString()}`);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-gray-100 ${
        variant === "hero" ? "p-6" : "p-5"
      }`}
    >
      <div className="flex flex-col md:flex-row items-end gap-4">
        <Dropdown
          label="Lokasi"
          value={lokasi}
          options={lokasiList}
          onChange={setLokasi}
          placeholder="Pilih Lokasi"
        />

        <div className="hidden md:block w-px h-12 bg-gray-200 self-end mb-1" />

        <Dropdown
          label="Penghuni"
          value={penghuni}
          options={["Putra", "Putri"]}
          onChange={setPenghuni}
          placeholder="Pilih Penghuni"
        />

        <div className="hidden md:block w-px h-12 bg-gray-200 self-end mb-1" />

        <Dropdown
          label="Periode Sewa"
          value={periode}
          options={["1 Bulan", "3 Bulan", "6 Bulan"]}
          onChange={setPeriode}
          placeholder="Pilih Periode Sewa"
        />

        <button
          type="button"
          onClick={handleCari}
          className="flex items-center gap-2 px-8 py-3.5 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition-colors whitespace-nowrap shadow-md shadow-pink-200 flex-shrink-0"
        >
          <Search className="w-4 h-4" />
          Cari Kamar
        </button>
      </div>
    </div>
  );
}
