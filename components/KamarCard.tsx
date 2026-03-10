"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Kamar, formatHarga } from "@/lib/data";

interface KamarCardProps {
  kamar: Kamar;
}

export default function KamarCard({ kamar }: KamarCardProps) {
  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === 0 ? kamar.gambarList.length - 1 : prev - 1));
  };

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === kamar.gambarList.length - 1 ? 0 : prev + 1));
  };

  const fasilitasDisplay = kamar.fasilitas.slice(0, 2);
  const hasMore = kamar.fasilitas.length > 2;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image Slider - All images preloaded, only active one visible */}
      <div className="relative h-52 bg-gray-100 overflow-hidden group">
        {kamar.gambarList.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${kamar.nama} - foto ${i + 1}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-150 ${
              i === currentImg ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={i === 0}
          />
        ))}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            kamar.penghuni === "Putri"
              ? "bg-pink-500 text-white"
              : kamar.penghuni === "Putra"
              ? "bg-blue-500 text-white"
              : "bg-purple-500 text-white"
          }`}>
            {kamar.penghuni}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            kamar.tersedia > 0
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-red-100 text-red-600 border border-red-200"
          }`}>
            {kamar.tersedia > 0 ? `${kamar.tersedia} kamar tersedia` : "Penuh"}
          </span>
        </div>

        {/* Navigation arrows */}
        {kamar.gambarList.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow z-20"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow z-20"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </>
        )}

        {/* Dots */}
        {kamar.gambarList.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
            {kamar.gambarList.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrentImg(i); }}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentImg ? "bg-white w-4" : "bg-white/60 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <Link href={`/kamar/${kamar.slug}`}>
          <h3 className="font-bold text-gray-900 text-base hover:text-pink-500 transition-colors mb-1">
            {kamar.nama}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{kamar.alamat}</span>
        </div>

        {/* Fasilitas */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {fasilitasDisplay.map((f) => (
            <span key={f} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
              {f}
            </span>
          ))}
          {hasMore && (
            <span className="text-xs text-gray-400">...</span>
          )}
        </div>

        {/* Harga + CTA */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Harga mulai</p>
            <span className="inline-block px-3 py-1 bg-pink-500 text-white text-sm font-bold rounded-full">
              {formatHarga(kamar.harga)}
            </span>
          </div>
          <Link
            href={`/kamar/${kamar.slug}`}
            className="flex items-center gap-1 px-4 py-2 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm font-semibold rounded-full transition-colors"
          >
            Lihat Detail ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
