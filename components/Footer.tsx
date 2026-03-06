import Link from "next/link";
import { Home, Phone, Mail, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#e879a0" }}
              >
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Dzawani<span style={{ color: "#e879a0" }}>Kost</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Sewa kost fasilitas lengkap, full furnish, AC, kamar mandi dalam, dan lain-lain. Cocok untuk mahasiswa dan pekerja.
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#e879a0" }} />
              <span>Jl. Contoh No. 123, Kota Anda, Indonesia</span>
            </div>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+6281234567890"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#e879a0" }} />
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dzawanikost.com"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#e879a0" }} />
                  info@dzawanikost.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/dzawanikost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-4 h-4 flex-shrink-0" style={{ color: "#e879a0" }} />
                  @dzawanikost
                </a>
              </li>
            </ul>
          </div>

          {/* Telusuri */}
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">Telusuri</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/kamar", label: "Jelajahi Kamar" },
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 DzawaniKost. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
