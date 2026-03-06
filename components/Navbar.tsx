"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/kamar", label: "Jelajahi Kamar" },
    { href: "/tentang", label: "Tentang Kami" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#e879a0" }}
            >
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Dzawani<span style={{ color: "#e879a0" }}>Kost</span>
            </span>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHighlight = link.href === "/kamar";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "text-white"
                      : isHighlight
                      ? "border-2 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: "#e879a0" }
                      : isHighlight
                      ? { borderColor: "#e879a0", color: "#e879a0" }
                      : {}
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/kontak"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 shadow-sm"
              style={{ backgroundColor: "#e879a0" }}
            >
              <span>👤</span>
              <span>Hubungi Kami</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  isActive ? "text-white" : "text-gray-700 hover:bg-gray-50"
                }`}
                style={isActive ? { backgroundColor: "#e879a0" } : {}}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontak"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2.5 rounded-full text-sm font-semibold text-white text-center mt-2"
            style={{ backgroundColor: "#e879a0" }}
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
