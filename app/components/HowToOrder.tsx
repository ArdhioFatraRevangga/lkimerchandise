import Services from './Services';

export default function HowToOrder() {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col justify-between">
      
      <main className="max-w-6xl mx-auto px-8 py-16 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Bagian Kiri: Teks Panduan */}
          <div className="w-full md:w-1/2">
            <h1 
              style={{ fontFamily: "'New Rocker', serif" }} 
              className="text-3xl md:text-5xl font-bold text-black leading-tight mb-8"
            >
              How To Order <br /> And Pay ?
            </h1>

            <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm md:text-base leading-relaxed mb-8">
              <li>Lihat produk yang anda inginkan</li>
              <li>Hubungi Customer Support kami untuk melanjutkan pemesanan</li>
              <li>Anda bisa menambahkan jumlah sesuai dengan yang diinginkan</li>
              <li>Sesuaikan ukuran produk dengan anda</li>
              <li>Lanjutkan ke pembayaran melalui customer support</li>
            </ol>

            <p className="font-serif italic text-gray-800 text-sm tracking-wide">
              Nikmati layanan dari kami :)
            </p>
          </div>

          {/* Bagian Kanan: Logo LKI Merch */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src="/assets/logo-lki-merch-hitam.png" 
              alt="LKI Merch Logo" 
              className="max-h-72 w-auto object-contain" 
            />
          </div>

        </div>

        {/* 4 Kotak Gambar di Tengah (Sudah dikembalikan dan diisi gambar) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20">
          <div className="h-40 md:h-56 rounded-xl overflow-hidden shadow flex items-center justify-center bg-gray-50">
            <img src="/assets/PROFIL-SOSMED-ALL.png" alt="Profil Sosmed" className="w-full h-full object-cover" />
          </div>
          <div className="h-40 md:h-56 rounded-xl overflow-hidden shadow flex items-center justify-center bg-white p-4">
            <img src="/assets/legacy-hitam.png" alt="Legacy Hitam" className="w-full h-full object-contain" />
          </div>
          <div className="h-40 md:h-56 rounded-xl overflow-hidden shadow flex items-center justify-center bg-white p-4">
            <img src="/assets/keep-Inspiring.png" alt="Keep Inspiring" className="w-full h-full object-contain" />
          </div>
          <div className="h-40 md:h-56 rounded-xl overflow-hidden shadow flex items-center justify-center bg-gray-50">
            <img src="/assets/banner-sosmed.png" alt="Banner Sosmed" className="w-full h-full object-cover" />
          </div>
        </div>
      </main>

      {/* Memanggil Services dan menyembunyikan tombol "How to order" */}
      {/* <Services hideOrderButton={true} /> */}

    </div>
  );
}