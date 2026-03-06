"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const kontakInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telepon",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      href: "https://wa.me/6281234567890",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@dzawanikost.com",
      href: "mailto:info@dzawanikost.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Alamat",
      value: "Jl. Contoh No. 123, Kota Anda, Indonesia",
      href: "#",
    },
  ];

  const jamOperasional = [
    { hari: "Senin - Jumat", jam: "08.00 - 20.00 WIB" },
    { hari: "Sabtu", jam: "08.00 - 17.00 WIB" },
    { hari: "Minggu", jam: "09.00 - 15.00 WIB" },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: "#fce4ef", color: "#c0527a" }}
          >
            <Phone className="w-4 h-4" />
            Hubungi Kami
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Ada Pertanyaan?{" "}
            <span style={{ color: "#e879a0" }}>Kami Siap Membantu</span>
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
            menemukan kamar yang tepat dan menjawab semua pertanyaan Anda.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1 space-y-5">
              {/* Contact Cards */}
              {kontakInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "#fce4ef", color: "#e879a0" }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* Jam Operasional */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4" style={{ color: "#e879a0" }} />
                  <span className="text-sm font-bold text-gray-900">Jam Operasional</span>
                </div>
                <div className="space-y-2">
                  {jamOperasional.map((j) => (
                    <div key={j.hari} className="flex justify-between text-sm">
                      <span className="text-gray-600">{j.hari}</span>
                      <span className="font-medium text-gray-900">{j.jam}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/6281234567890?text=Halo, saya ingin bertanya tentang kamar kost DzawaniKost"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 shadow-sm"
                style={{ backgroundColor: "#e879a0" }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp Sekarang
              </a>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "#fce4ef" }}
                    >
                      <CheckCircle className="w-8 h-8" style={{ color: "#e879a0" }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Terima kasih telah menghubungi kami. Kami akan segera
                      merespons pesan Anda dalam waktu 1x24 jam.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ nama: "", email: "", telepon: "", pesan: "" });
                      }}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: "#e879a0" }}
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                      Kirim Pesan
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Nama Lengkap <span style={{ color: "#e879a0" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            required
                            placeholder="Masukkan nama Anda"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email <span style={{ color: "#e879a0" }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="email@contoh.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          name="telepon"
                          value={formData.telepon}
                          onChange={handleChange}
                          placeholder="+62 812-xxxx-xxxx"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Pesan <span style={{ color: "#e879a0" }}>*</span>
                        </label>
                        <textarea
                          name="pesan"
                          value={formData.pesan}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-70 shadow-sm"
                        style={{ backgroundColor: "#e879a0" }}
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Kirim Pesan
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
