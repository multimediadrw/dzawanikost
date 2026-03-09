import Link from "next/link";
import { Home, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const WA_NUMBER = "628112833993";
const WA_TEXT = "Halo, saya ingin bertanya tentang DzawaniKost";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

// TikTok icon (custom SVG karena lucide tidak punya)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z"/>
    </svg>
  );
}

// YouTube icon
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

// Instagram icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-pink-500">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Dzawani<span className="text-pink-400">Kost</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Kost & Guest House premium dengan fasilitas lengkap. Tersedia di Yogyakarta, Malang, Bandung, Jakarta, dan Bali.
            </p>

            {/* Sosial Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/dzawanikost"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-800 hover:bg-pink-500 transition-colors group"
                title="Instagram @dzawanikost"
              >
                <InstagramIcon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@dzawanikost"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors group"
                title="TikTok @dzawanikost"
              >
                <TikTokIcon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/@dzawanikost"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-800 hover:bg-red-600 transition-colors group"
                title="YouTube @dzawanikost"
              >
                <YouTubeIcon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-800 hover:bg-green-600 transition-colors group"
                title="WhatsApp DzawaniKost"
              >
                <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Ikuti Kami */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Ikuti Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/dzawanikost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-pink-400 transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-800 group-hover:bg-pink-500/20 transition-colors">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <p className="font-medium text-gray-300 group-hover:text-pink-400 transition-colors">Instagram</p>
                    <p className="text-xs text-gray-500">@dzawanikost</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@dzawanikost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition-colors">
                    <TikTokIcon className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <p className="font-medium text-gray-300 group-hover:text-white transition-colors">TikTok</p>
                    <p className="text-xs text-gray-500">@dzawanikost</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@dzawanikost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-red-400 transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-800 group-hover:bg-red-600/20 transition-colors">
                    <YouTubeIcon className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <p className="font-medium text-gray-300 group-hover:text-red-400 transition-colors">YouTube</p>
                    <p className="text-xs text-gray-500">Dzawani Kost & Guest House</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+628112833993`}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-pink-400 transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-800 group-hover:bg-pink-500/20 transition-colors flex-shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>+62 811-2833-993</span>
                </a>
              </li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-800 group-hover:bg-green-600/20 transition-colors flex-shrink-0">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </span>
                  <span>WhatsApp Kami</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dzawanikost.com"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-pink-400 transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-800 group-hover:bg-pink-500/20 transition-colors flex-shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span>info@dzawanikost.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-800 flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  <span>Yogyakarta · Malang · Bandung · Jakarta · Bali</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Telusuri */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Telusuri</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/kamar", label: "Jelajahi Kamar" },
                { href: "/kamar?lokasi=Yogyakarta", label: "Kost Yogyakarta" },
                { href: "/kamar?lokasi=Malang", label: "Kost Malang" },
                { href: "/kamar?lokasi=Bandung", label: "Kost Bandung" },
                { href: "/kamar?lokasi=Bali", label: "Villa Bali" },
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            &copy; 2025 DzawaniKost. All Rights Reserved.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
