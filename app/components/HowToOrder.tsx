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
              <li>Pilih produk yang anda inginkan</li>
              <li>Sesuaikan ukuran produk dengan anda</li>
              <li>Anda bisa menambahkan jumlah sesuai dengan yang diinginkan</li>
              <li>Lanjutkan ke pembayaran melalui customer support</li>
            </ol>

            <p className="font-serif italic text-gray-800 text-sm tracking-wide">
              Nikmati layanan dari kami
            </p>
          </div>

          {/* Bagian Kanan: Logo LKI Merch (Tanpa Kotak/Background) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src="/assets/logo-lki-merch-hitam.png" 
              alt="LKI Merch Logo" 
              className="max-h-72 w-auto object-contain" 
            />
          </div>

        </div>

        {/* 4 Kotak Produk di Tengah */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-gray-200 h-44 rounded-xl shadow-inner flex items-center justify-center text-gray-500 text-sm font-medium">Foto Produk 1</div>
          <div className="bg-gray-200 h-44 rounded-xl shadow-inner flex items-center justify-center text-gray-500 text-sm font-medium">Foto Produk 2</div>
          <div className="bg-gray-200 h-44 rounded-xl shadow-inner flex items-center justify-center text-gray-500 text-sm font-medium">Foto Produk 3</div>
          <div className="bg-gray-200 h-44 rounded-xl shadow-inner flex items-center justify-center text-gray-500 text-sm font-medium">Foto Produk 4</div>
        </div>
      </main>

      {/* Komponen Services (Sudah termasuk footer hitam di dalamnya) */}
      {/* <Services /> */}

    </div>
  );
}