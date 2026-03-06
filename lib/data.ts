export interface Kamar {
  id: number;
  slug: string;
  nama: string;
  tipe: string;
  penghuni: "Putra" | "Putri" | "Campur";
  lokasi: string;
  alamat: string;
  harga: number;
  harga3Bulan: number;
  harga6Bulan: number;
  luas: string;
  tersedia: number;
  deskripsi: string;
  fasilitas: string[];
  peraturan: string[];
  gambar: string;
  gambarList: string[];
}

export const kamarList: Kamar[] = [
  {
    id: 1,
    slug: "kamar-deluxe-a",
    nama: "Kamar Deluxe A",
    tipe: "Deluxe",
    penghuni: "Putri",
    lokasi: "Yogyakarta",
    alamat: "Jl. Rajawali Raya No.86, Condongcatur, Sleman, DIY",
    harga: 1200000,
    harga3Bulan: 3400000,
    harga6Bulan: 6500000,
    luas: "4x4",
    tersedia: 5,
    deskripsi:
      "Kamar deluxe yang nyaman dengan pencahayaan alami yang baik. Dilengkapi dengan AC, kasur spring bed, dan kamar mandi dalam. Cocok untuk mahasiswi atau pekerja perempuan yang menginginkan kenyamanan maksimal.",
    fasilitas: ["AC", "Kasur Spring Bed", "Kamar Mandi Dalam", "Lemari Pakaian", "Meja Belajar", "WiFi", "Listrik", "Air"],
    peraturan: [
      "Dilarang membawa tamu lawan jenis ke dalam kamar.",
      "Dilarang merokok di dalam kamar.",
      "Pembayaran kost wajib dilakukan tepat waktu.",
      "Dilarang memasak di dalam kamar.",
      "Dilarang membawa atau memelihara hewan peliharaan.",
      "Jam bertamu maksimal sampai pukul 22.00 WIB.",
      "Jaga kebersihan dan ketertiban bersama.",
      "Kerusakan fasilitas menjadi tanggung jawab penghuni.",
    ],
    gambar: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
  {
    id: 2,
    slug: "kamar-deluxe-b",
    nama: "Kamar Deluxe B",
    tipe: "Deluxe",
    penghuni: "Putra",
    lokasi: "Yogyakarta",
    alamat: "Jl. Rajawali Raya No.86, Condongcatur, Sleman, DIY",
    harga: 1200000,
    harga3Bulan: 3400000,
    harga6Bulan: 6500000,
    luas: "4x4",
    tersedia: 3,
    deskripsi:
      "Kamar deluxe dengan suasana yang tenang dan nyaman. Dilengkapi dengan semua fasilitas standar untuk kehidupan sehari-hari yang praktis. Cocok untuk mahasiswa atau pekerja laki-laki.",
    fasilitas: ["AC", "Kasur Spring Bed", "Kamar Mandi Dalam", "Lemari Pakaian", "Meja Belajar", "WiFi", "Listrik", "Air"],
    peraturan: [
      "Dilarang membawa tamu lawan jenis ke dalam kamar.",
      "Dilarang merokok di dalam kamar.",
      "Pembayaran kost wajib dilakukan tepat waktu.",
      "Dilarang memasak di dalam kamar.",
      "Dilarang membawa atau memelihara hewan peliharaan.",
      "Jam bertamu maksimal sampai pukul 22.00 WIB.",
      "Jaga kebersihan dan ketertiban bersama.",
      "Kerusakan fasilitas menjadi tanggung jawab penghuni.",
    ],
    gambar: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
  {
    id: 3,
    slug: "kamar-superior-a",
    nama: "Kamar Superior A",
    tipe: "Superior",
    penghuni: "Putri",
    lokasi: "Yogyakarta",
    alamat: "Jl. Rajawali Raya No.86, Condongcatur, Sleman, DIY",
    harga: 1500000,
    harga3Bulan: 4300000,
    harga6Bulan: 8200000,
    luas: "4x5",
    tersedia: 4,
    deskripsi:
      "Kamar superior yang lebih luas dengan view yang menyenangkan. Dilengkapi dengan fasilitas premium termasuk TV dan kulkas mini untuk kenyamanan ekstra.",
    fasilitas: ["AC", "Kasur Spring Bed", "Kamar Mandi Dalam", "Lemari Pakaian", "Meja Belajar", "WiFi", "Listrik", "Air", "TV", "Kulkas Mini"],
    peraturan: [
      "Dilarang membawa tamu lawan jenis ke dalam kamar.",
      "Dilarang merokok di dalam kamar.",
      "Pembayaran kost wajib dilakukan tepat waktu.",
      "Dilarang memasak di dalam kamar.",
      "Dilarang membawa atau memelihara hewan peliharaan.",
      "Jam bertamu maksimal sampai pukul 22.00 WIB.",
      "Jaga kebersihan dan ketertiban bersama.",
      "Kerusakan fasilitas menjadi tanggung jawab penghuni.",
    ],
    gambar: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
  },
  {
    id: 4,
    slug: "kamar-superior-b",
    nama: "Kamar Superior B",
    tipe: "Superior",
    penghuni: "Putra",
    lokasi: "Sleman",
    alamat: "Jl. Kaliurang KM 14, Sleman, DIY",
    harga: 1500000,
    harga3Bulan: 4300000,
    harga6Bulan: 8200000,
    luas: "4x5",
    tersedia: 2,
    deskripsi:
      "Kamar superior dengan desain modern dan elegan. Ruangan yang luas memberi kenyamanan lebih untuk beristirahat dan bekerja.",
    fasilitas: ["AC", "Kasur Spring Bed", "Kamar Mandi Dalam", "Lemari Pakaian", "Meja Belajar", "WiFi", "Listrik", "Air", "TV", "Kulkas Mini"],
    peraturan: [
      "Dilarang membawa tamu lawan jenis ke dalam kamar.",
      "Dilarang merokok di dalam kamar.",
      "Pembayaran kost wajib dilakukan tepat waktu.",
      "Dilarang memasak di dalam kamar.",
      "Dilarang membawa atau memelihara hewan peliharaan.",
      "Jam bertamu maksimal sampai pukul 22.00 WIB.",
      "Jaga kebersihan dan ketertiban bersama.",
      "Kerusakan fasilitas menjadi tanggung jawab penghuni.",
    ],
    gambar: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
  {
    id: 5,
    slug: "kamar-premium",
    nama: "Kamar Premium",
    tipe: "Premium",
    penghuni: "Putri",
    lokasi: "Sleman",
    alamat: "Jl. Kaliurang KM 14, Sleman, DIY",
    harga: 2000000,
    harga3Bulan: 5700000,
    harga6Bulan: 10800000,
    luas: "5x5",
    tersedia: 1,
    deskripsi:
      "Kamar premium terluas dengan fasilitas lengkap dan mewah. Ideal untuk profesional yang menginginkan hunian berkualitas tinggi dengan semua kemudahan.",
    fasilitas: ["AC", "Kasur Spring Bed King", "Kamar Mandi Dalam", "Bathtub", "Lemari Pakaian", "Meja Kerja", "WiFi", "Listrik", "Air", "TV 32\"", "Kulkas", "Sofa", "Balkon"],
    peraturan: [
      "Dilarang membawa tamu lawan jenis ke dalam kamar.",
      "Dilarang merokok di dalam kamar.",
      "Pembayaran kost wajib dilakukan tepat waktu.",
      "Dilarang memasak di dalam kamar.",
      "Dilarang membawa atau memelihara hewan peliharaan.",
      "Jam bertamu maksimal sampai pukul 22.00 WIB.",
      "Jaga kebersihan dan ketertiban bersama.",
      "Kerusakan fasilitas menjadi tanggung jawab penghuni.",
    ],
    gambar: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
  },
  {
    id: 6,
    slug: "kamar-standard",
    nama: "Kamar Standard",
    tipe: "Standard",
    penghuni: "Putra",
    lokasi: "Bantul",
    alamat: "Jl. Parangtritis KM 5, Bantul, DIY",
    harga: 800000,
    harga3Bulan: 2200000,
    harga6Bulan: 4200000,
    luas: "3x4",
    tersedia: 6,
    deskripsi:
      "Kamar standard yang bersih dan nyaman dengan harga terjangkau. Cocok untuk mahasiswa dengan budget terbatas namun tetap menginginkan kenyamanan.",
    fasilitas: ["Kipas Angin", "Kasur", "Kamar Mandi Luar", "Lemari Pakaian", "Meja Belajar", "WiFi", "Listrik", "Air"],
    peraturan: [
      "Dilarang membawa tamu lawan jenis ke dalam kamar.",
      "Dilarang merokok di dalam kamar.",
      "Pembayaran kost wajib dilakukan tepat waktu.",
      "Dilarang memasak di dalam kamar.",
      "Dilarang membawa atau memelihara hewan peliharaan.",
      "Jam bertamu maksimal sampai pukul 22.00 WIB.",
      "Jaga kebersihan dan ketertiban bersama.",
      "Kerusakan fasilitas menjadi tanggung jawab penghuni.",
    ],
    gambar: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    gambarList: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    ],
  },
];

export const lokasiList = ["Yogyakarta", "Sleman", "Bantul"];

export const fasilitasUmum = [
  { icon: "wifi", label: "WiFi Gratis", deskripsi: "Internet cepat 24 jam" },
  { icon: "parking", label: "Parkir Luas", deskripsi: "Motor & mobil" },
  { icon: "security", label: "Keamanan 24 Jam", deskripsi: "CCTV & satpam" },
  { icon: "laundry", label: "Laundry", deskripsi: "Layanan cuci kiloan" },
  { icon: "kitchen", label: "Dapur Bersama", deskripsi: "Lengkap & bersih" },
  { icon: "mosque", label: "Mushola", deskripsi: "Fasilitas ibadah" },
];

export const formatHarga = (harga: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(harga);
};
