import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div
          className="text-8xl font-extrabold mb-4"
          style={{ color: "#e879a0" }}
        >
          404
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak ditemukan. Mungkin halaman telah
          dipindahkan atau URL yang Anda masukkan salah.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#e879a0" }}
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/kamar"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Lihat Kamar
          </Link>
        </div>
      </div>
    </div>
  );
}
