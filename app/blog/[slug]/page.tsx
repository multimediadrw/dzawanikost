import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { daftarArtikel } from "@/lib/data";
import { Calendar, User, ChevronLeft, Tag, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return daftarArtikel.map((a) => ({ slug: a.slug }));
}

export default async function DetailArtikelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artikel = daftarArtikel.find((a) => a.slug === slug);
  if (!artikel) notFound();

  const artikelTerkait = daftarArtikel
    .filter((a) => a.id !== artikel.id && a.kategori === artikel.kategori)
    .slice(0, 3);

  const artikelLainnya =
    artikelTerkait.length < 3
      ? [
          ...artikelTerkait,
          ...daftarArtikel
            .filter((a) => a.id !== artikel.id && a.kategori !== artikel.kategori)
            .slice(0, 3 - artikelTerkait.length),
        ]
      : artikelTerkait;

  const formatTanggal = (tanggal: string) =>
    new Date(tanggal).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  // Generate konten artikel dari ringkasan (expanded)
  const kontenArtikel = generateKonten(artikel.judul, artikel.ringkasan, artikel.kategori);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Image */}
        <div className="relative w-full h-72 md:h-96 mt-20">
          <Image
            src={artikel.gambar}
            alt={artikel.judul}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
            <span className="inline-block bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {artikel.kategori}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {artikel.judul}
            </h1>
          </div>
        </div>

        {/* Konten */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
            <Link href="/blog" className="flex items-center gap-1 text-pink-500 hover:underline font-medium">
              <ChevronLeft className="w-4 h-4" /> Kembali ke Blog
            </Link>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {artikel.penulis}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {formatTanggal(artikel.tanggal)}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="w-4 h-4" /> {artikel.kategori}
            </span>
          </div>

          {/* Isi Artikel */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: kontenArtikel }}
          />

          {/* CTA WhatsApp */}
          <div className="mt-10 bg-pink-50 border border-pink-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Tertarik Ngekost di Dzawani?</h3>
              <p className="text-gray-500 text-sm">Hubungi kami sekarang dan dapatkan info kamar terbaru.</p>
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo%20DzawaniKost%2C%20saya%20ingin%20info%20kamar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-600 transition flex items-center gap-2"
            >
              Hubungi via WhatsApp <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Artikel Terkait */}
        {artikelLainnya.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {artikelLainnya.map((a) => (
                <Link
                  key={a.id}
                  href={`/blog/${a.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={a.gambar}
                      alt={a.judul}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-pink-500 font-medium">{a.kategori}</span>
                    <h3 className="font-semibold text-gray-900 text-sm mt-1 line-clamp-2 group-hover:text-pink-500 transition-colors">
                      {a.judul}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">{formatTanggal(a.tanggal)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function generateKonten(judul: string, ringkasan: string, kategori: string): string {
  const intro = `<p class="text-lg font-medium text-gray-800 mb-6 leading-relaxed">${ringkasan}</p>`;

  const kontenByKategori: Record<string, string> = {
    "Tips Kost": `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mengapa Ini Penting untuk Anak Kost?</h2>
      <p class="mb-4">Kehidupan ngekost memang penuh tantangan, terutama bagi mereka yang baru pertama kali merantau. Mulai dari mengatur keuangan, menjaga kebersihan kamar, hingga membangun rutinitas yang sehat — semua perlu dipelajari secara bertahap.</p>
      <p class="mb-4">Banyak anak kost yang merasa kewalahan di awal karena tidak terbiasa hidup mandiri. Namun dengan tips yang tepat, kehidupan ngekost bisa menjadi pengalaman yang sangat berharga dan menyenangkan.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips Praktis yang Bisa Langsung Diterapkan</h2>
      <p class="mb-4">Pertama, buatlah jadwal harian yang teratur. Dengan jadwal yang jelas, kamu bisa mengatur waktu antara kuliah/kerja, istirahat, dan kegiatan sosial dengan lebih baik.</p>
      <p class="mb-4">Kedua, jaga kebersihan kamar secara rutin. Kamar yang bersih tidak hanya nyaman untuk ditinggali, tetapi juga berdampak positif pada kesehatan mental dan produktivitas.</p>
      <p class="mb-4">Ketiga, bangun hubungan baik dengan sesama penghuni kost. Lingkungan sosial yang positif akan membuat kehidupan ngekost jauh lebih menyenangkan.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesimpulan</h2>
      <p class="mb-4">Kehidupan ngekost yang nyaman dan produktif bisa diraih dengan kebiasaan-kebiasaan sederhana yang konsisten. Mulailah dari hal-hal kecil dan tingkatkan secara bertahap. Ingat, kost yang baik adalah investasi untuk kenyamanan dan produktivitasmu sehari-hari.</p>
    `,
    "Wisata Jogja": `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Yogyakarta, Kota yang Selalu Memikat</h2>
      <p class="mb-4">Yogyakarta atau yang akrab disapa Jogja adalah salah satu kota paling istimewa di Indonesia. Dengan perpaduan budaya Jawa yang kental, destinasi wisata yang beragam, dan kuliner yang menggugah selera, Jogja selalu berhasil memikat hati siapa saja yang berkunjung.</p>
      <p class="mb-4">Bagi mahasiswa dan anak kost yang tinggal di Jogja, ada banyak sekali tempat menarik yang bisa dikunjungi di waktu luang. Dari wisata alam, budaya, hingga kuliner — semuanya tersedia dengan harga yang sangat terjangkau.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Destinasi Wajib di Jogja</h2>
      <p class="mb-4">Malioboro adalah ikon Jogja yang tidak boleh dilewatkan. Jalan legendaris ini menawarkan pengalaman berbelanja oleh-oleh, menikmati kuliner kaki lima, dan merasakan atmosfer kota yang unik.</p>
      <p class="mb-4">Candi Prambanan dan Borobudur adalah warisan budaya dunia yang wajib dikunjungi. Keindahan arsitektur dan nilai sejarahnya membuat kedua tempat ini selalu ramai dikunjungi wisatawan dari seluruh dunia.</p>
      <p class="mb-4">Pantai Parangtritis, Pantai Indrayanti, dan berbagai pantai di Gunungkidul menawarkan keindahan alam yang memukau dengan harga tiket masuk yang sangat terjangkau.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips Wisata Hemat di Jogja</h2>
      <p class="mb-4">Gunakan transportasi umum atau sewa motor untuk menghemat biaya perjalanan. Jogja memiliki Trans Jogja yang terjangkau dan bisa menjangkau banyak destinasi wisata populer.</p>
      <p class="mb-4">Kunjungi tempat wisata di hari kerja untuk menghindari keramaian dan mendapatkan pengalaman yang lebih tenang. Selain itu, beberapa tempat wisata menawarkan harga tiket yang lebih murah di hari kerja.</p>
    `,
    "Tips Mahasiswa": `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tantangan Menjadi Mahasiswa Rantau</h2>
      <p class="mb-4">Menjadi mahasiswa rantau adalah pengalaman yang penuh dengan pelajaran berharga. Jauh dari keluarga dan harus mandiri dalam segala hal — mulai dari mengurus kebutuhan sehari-hari hingga mengatur keuangan — adalah tantangan yang harus dihadapi.</p>
      <p class="mb-4">Namun di balik tantangan tersebut, ada banyak manfaat yang bisa dipetik. Mahasiswa rantau cenderung lebih mandiri, adaptif, dan memiliki kemampuan problem-solving yang lebih baik dibandingkan rekan-rekan mereka yang tinggal bersama orang tua.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategi Sukses Kuliah Sambil Ngekost</h2>
      <p class="mb-4">Pertama, kelola waktu dengan bijak. Buat jadwal yang mencakup waktu belajar, istirahat, dan kegiatan sosial. Hindari begadang yang tidak produktif karena akan berdampak negatif pada kesehatan dan prestasi akademik.</p>
      <p class="mb-4">Kedua, bangun jaringan pertemanan yang positif. Bergabunglah dengan organisasi kampus atau komunitas yang sesuai dengan minat dan bakatmu. Jaringan pertemanan yang baik akan sangat berguna tidak hanya selama kuliah, tetapi juga setelah lulus.</p>
      <p class="mb-4">Ketiga, jangan ragu untuk meminta bantuan. Jika mengalami kesulitan dalam studi atau kehidupan sehari-hari, jangan sungkan untuk meminta bantuan dari dosen, teman, atau konselor kampus.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesimpulan</h2>
      <p class="mb-4">Masa kuliah adalah investasi terbaik untuk masa depanmu. Manfaatkan setiap kesempatan untuk belajar, berkembang, dan membangun fondasi yang kuat untuk karir dan kehidupanmu ke depan.</p>
    `,
    "Keuangan": `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Pentingnya Literasi Keuangan bagi Mahasiswa</h2>
      <p class="mb-4">Kemampuan mengelola keuangan adalah salah satu life skill terpenting yang perlu dikuasai sejak dini. Sayangnya, banyak mahasiswa yang belum mendapatkan pendidikan keuangan yang memadai, sehingga sering mengalami masalah finansial selama masa kuliah.</p>
      <p class="mb-4">Dengan memahami prinsip-prinsip dasar pengelolaan keuangan, mahasiswa bisa hidup lebih tenang, terhindar dari hutang yang tidak perlu, dan bahkan mulai membangun tabungan sejak dini.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Prinsip Dasar Mengelola Keuangan</h2>
      <p class="mb-4">Pertama, catat semua pemasukan dan pengeluaran. Dengan mencatat keuangan secara rutin, kamu bisa mengetahui ke mana uangmu pergi dan mengidentifikasi area yang bisa dihemat.</p>
      <p class="mb-4">Kedua, terapkan prinsip 50-30-20. Alokasikan 50% untuk kebutuhan pokok (makan, kost, transportasi), 30% untuk keinginan (hiburan, jajan), dan 20% untuk tabungan dan investasi.</p>
      <p class="mb-4">Ketiga, hindari hutang konsumtif. Jangan berhutang untuk membeli barang-barang yang tidak produktif. Jika ingin membeli sesuatu, tabung terlebih dahulu sampai cukup.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips Hemat untuk Anak Kost</h2>
      <p class="mb-4">Masak sendiri sesekali untuk menghemat biaya makan. Belanja bahan makanan di pasar tradisional yang harganya lebih terjangkau dibandingkan supermarket.</p>
      <p class="mb-4">Manfaatkan promo dan diskon yang tersedia. Banyak aplikasi dan platform digital yang menawarkan promo menarik untuk mahasiswa — manfaatkan dengan bijak.</p>
    `,
    "Kesehatan": `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesehatan adalah Investasi Terbaik</h2>
      <p class="mb-4">Di tengah kesibukan kuliah dan kehidupan ngekost, menjaga kesehatan sering kali menjadi hal yang terabaikan. Padahal, kesehatan yang baik adalah fondasi dari produktivitas dan kebahagiaan.</p>
      <p class="mb-4">Banyak mahasiswa yang baru menyadari pentingnya kesehatan setelah jatuh sakit. Oleh karena itu, penting untuk membangun kebiasaan hidup sehat sejak dini, sebelum masalah kesehatan muncul.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kebiasaan Sehat untuk Anak Kost</h2>
      <p class="mb-4">Pertama, jaga pola makan yang seimbang. Konsumsi makanan bergizi yang mencakup karbohidrat, protein, lemak sehat, vitamin, dan mineral. Hindari terlalu sering mengonsumsi makanan cepat saji atau junk food.</p>
      <p class="mb-4">Kedua, tidur yang cukup. Dewasa muda membutuhkan 7-9 jam tidur per malam. Kurang tidur tidak hanya berdampak pada kesehatan fisik, tetapi juga mempengaruhi kemampuan kognitif dan mood.</p>
      <p class="mb-4">Ketiga, olahraga secara teratur. Tidak perlu ke gym yang mahal — olahraga ringan seperti jogging, senam, atau yoga bisa dilakukan di kamar kost atau area sekitar kost.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Kesehatan Mental Tidak Kalah Penting</h2>
      <p class="mb-4">Selain kesehatan fisik, kesehatan mental juga perlu diperhatikan. Stres akademik, homesick, dan tekanan sosial adalah hal-hal yang sering dialami mahasiswa rantau.</p>
      <p class="mb-4">Jangan ragu untuk berbicara dengan orang yang dipercaya ketika merasa overwhelmed. Mencari bantuan profesional seperti konselor atau psikolog bukanlah tanda kelemahan, melainkan bentuk kepedulian terhadap diri sendiri.</p>
    `,
    "Karir & Bisnis": `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mempersiapkan Karir Sejak Bangku Kuliah</h2>
      <p class="mb-4">Masa kuliah bukan hanya tentang belajar teori di kelas. Ini adalah waktu yang tepat untuk mulai mempersiapkan diri menghadapi dunia kerja yang semakin kompetitif.</p>
      <p class="mb-4">Mahasiswa yang aktif membangun skill, pengalaman, dan jaringan sejak kuliah akan memiliki keunggulan kompetitif yang signifikan saat memasuki dunia kerja.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Langkah-langkah Membangun Karir</h2>
      <p class="mb-4">Pertama, kenali minat dan bakatmu. Pilih bidang yang benar-benar kamu minati dan kuasai secara mendalam. Spesialisasi dalam satu bidang lebih baik daripada mengetahui sedikit tentang banyak hal.</p>
      <p class="mb-4">Kedua, bangun portofolio sejak dini. Ikuti proyek, lomba, atau kegiatan yang bisa menghasilkan karya nyata yang bisa ditampilkan kepada calon employer.</p>
      <p class="mb-4">Ketiga, aktif networking. Hadiri seminar, workshop, dan event industri yang relevan. Bangun koneksi dengan profesional di bidangmu melalui LinkedIn dan platform profesional lainnya.</p>
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Peluang Bisnis untuk Mahasiswa</h2>
      <p class="mb-4">Era digital membuka banyak peluang bisnis yang bisa dijalankan dengan modal minimal. Dari freelancing, content creation, dropshipping, hingga jasa les privat — semua bisa dimulai dari kamar kost.</p>
      <p class="mb-4">Yang terpenting adalah mulai dari yang kecil, konsisten, dan terus belajar dari pengalaman. Banyak pengusaha sukses yang memulai bisnis mereka dari kamar kost saat masih mahasiswa.</p>
    `,
  };

  const kontenDefault = `
    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Informasi Lengkap</h2>
    <p class="mb-4">Artikel ini membahas topik yang sangat relevan bagi anak kost dan mahasiswa. Dengan memahami informasi ini, kamu bisa membuat keputusan yang lebih baik dalam kehidupan sehari-hari.</p>
    <p class="mb-4">DzawaniKost selalu berkomitmen untuk memberikan informasi yang bermanfaat dan terpercaya bagi para penghuninya. Kami percaya bahwa penghuni yang terinformasi dengan baik akan memiliki kualitas hidup yang lebih baik.</p>
    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mengapa Memilih DzawaniKost?</h2>
    <p class="mb-4">DzawaniKost hadir sebagai solusi hunian terbaik untuk mahasiswa dan karyawan di Yogyakarta dan sekitarnya. Dengan fasilitas lengkap, keamanan 24 jam, dan harga yang terjangkau, DzawaniKost menjadi pilihan utama bagi mereka yang menginginkan kenyamanan maksimal.</p>
    <p class="mb-4">Kami memiliki berbagai pilihan kamar dari standar hingga premium, tersebar di lokasi-lokasi strategis yang dekat dengan kampus, pusat perbelanjaan, dan fasilitas umum lainnya.</p>
  `;

  const kontenTambahan = kontenByKategori[kategori] || kontenDefault;

  return intro + kontenTambahan;
}
