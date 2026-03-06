"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { daftarArtikel, kategoriArtikel } from "@/lib/data";
import { Calendar, User, ChevronRight, Search } from "lucide-react";

const ARTIKEL_PER_PAGE = 9;

export default function BlogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [halaman, setHalaman] = useState(1);
  const [keyword, setKeyword] = useState("");

  const artikelFiltered = daftarArtikel.filter((a) => {
    const cocokKategori = kategoriAktif === "Semua" || a.kategori === kategoriAktif;
    const cocokKeyword =
      keyword === "" ||
      a.judul.toLowerCase().includes(keyword.toLowerCase()) ||
      a.ringkasan.toLowerCase().includes(keyword.toLowerCase());
    return cocokKategori && cocokKeyword;
  });

  const totalHalaman = Math.ceil(artikelFiltered.length / ARTIKEL_PER_PAGE);
  const artikelHalaman = artikelFiltered.slice(
    (halaman - 1) * ARTIKEL_PER_PAGE,
    halaman * ARTIKEL_PER_PAGE
  );

  const handleKategori = (k: string) => {
    setKategoriAktif(k);
    setHalaman(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setHalaman(1);
  };

  const formatTanggal = (tanggal: string) => {
    return new Date(tanggal).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-50 to-white pt-32 pb-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
                Blog & Artikel
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Tips & Informasi <span className="text-pink-500">Seputar Kost</span>
              </h1>
              <p className="text-gray-500 max-w-xl mx-auto">
                Temukan tips ngekost, info wisata Jogja, panduan keuangan mahasiswa, dan banyak artikel bermanfaat lainnya.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={keyword}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
              />
            </div>
          </div>
        </section>

        {/* Filter Kategori */}
        <section className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
              {kategoriArtikel.map((k) => (
                <button
                  key={k}
                  onClick={() => handleKategori(k)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    kategoriAktif === k
                      ? "bg-pink-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Artikel Grid */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          {artikelHalaman.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Tidak ada artikel yang ditemukan.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-400 mb-6">
                Menampilkan {artikelFiltered.length} artikel
                {kategoriAktif !== "Semua" ? ` dalam kategori "${kategoriAktif}"` : ""}
                {keyword ? ` untuk "${keyword}"` : ""}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artikelHalaman.map((artikel) => (
                  <Link
                    key={artikel.id}
                    href={`/blog/${artikel.slug}`}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={artikel.gambar}
                        alt={artikel.judul}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {artikel.kategori}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-pink-500 transition-colors line-clamp-2">
                        {artikel.judul}
                      </h2>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                        {artikel.ringkasan}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{artikel.penulis}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatTanggal(artikel.tanggal)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalHalaman > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                  <button
                    onClick={() => setHalaman((h) => Math.max(1, h - 1))}
                    disabled={halaman === 1}
                    className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-pink-400 hover:text-pink-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    Sebelumnya
                  </button>
                  {Array.from({ length: totalHalaman }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setHalaman(p)}
                      className={`w-9 h-9 rounded-full text-sm font-medium transition-all ${
                        halaman === p
                          ? "bg-pink-500 text-white shadow"
                          : "border border-gray-200 text-gray-600 hover:border-pink-400 hover:text-pink-500"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setHalaman((h) => Math.min(totalHalaman, h + 1))}
                    disabled={halaman === totalHalaman}
                    className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-pink-400 hover:text-pink-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    Berikutnya
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        {/* CTA */}
        <section className="bg-pink-500 py-12 mx-4 mb-10 rounded-3xl max-w-6xl lg:mx-auto">
          <div className="text-center px-4">
            <h2 className="text-2xl font-bold text-white mb-2">Siap Pindah ke Kost Impian?</h2>
            <p className="text-pink-100 mb-6">Temukan kamar kost terbaik di DzawaniKost sekarang.</p>
            <Link
              href="/kamar"
              className="inline-flex items-center gap-2 bg-white text-pink-500 font-semibold px-6 py-3 rounded-full hover:bg-pink-50 transition"
            >
              Jelajahi Kamar <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
