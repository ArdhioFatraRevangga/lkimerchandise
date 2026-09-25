export default function Contact() {
  return (
    <section className="w-full py-8">
      
      {/* Banner Hitam Judul "Kontak Kami" */}
      <div className="bg-black text-white text-center py-3 mb-12 text-sm md:text-base tracking-widest font-medium">
        Kontak Kami
      </div>

      {/* Container Utama Menu Kontak */}
      <div className="max-w-2xl mx-auto px-6 flex flex-col gap-10 text-center">
        
        {/* 1. Customer Service */}
        <div className="flex flex-col items-center">
          <div className="bg-black text-white px-8 py-2.5 rounded-lg font-medium text-sm md:text-base tracking-wide w-full max-w-md shadow">
            Customer Service
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-md leading-relaxed">
            Customer Support kami terkait pertanyaan atau informasi mengenai produk dan penjualan, (Order / pemesanan, Produk, dll)
          </p>
          <a 
            href="https://wa.me/628133300078" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-start gap-4 bg-black text-white text-xs md:text-sm px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow w-full max-w-md"
          >
            {/* Hapus 'filter invert' jika gambar aslinya sudah berwarna terang/putih */}
            <img src="/assets/wa.png" alt="WhatsApp" className="w-6 h-6 object-contain flex-shrink-0" />
            <span style={{ fontFamily: "'Jacques Francois Shadow', serif" }} className="tracking-wide text-sm md:text-base flex-grow text-center">
              HUBUNGI CUSTOMER SUPPORT KAMI
            </span>
          </a>
        </div>

        {/* 2. Admin */}
        <div className="flex flex-col items-center">
          <div className="bg-black text-white px-8 py-2.5 rounded-lg font-medium text-sm md:text-base tracking-wide w-full max-w-md shadow">
            Admin
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-md leading-relaxed">
            Admin khusus untuk kalian yang ingin memberikan kritik, saran dan berbagai macam masukan, supaya kami agar menjadi lebih baik. (siap melayani kalian 24/7)
          </p>
          <a 
            href="https://wa.me/628133300078" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-start gap-4 bg-black text-white text-xs md:text-sm px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow w-full max-w-md"
          >
            <img src="/assets/wa.png" alt="WhatsApp" className="w-6 h-6 object-contain flex-shrink-0" />
            <span style={{ fontFamily: "'Jacques Francois Shadow', serif" }} className="tracking-wide text-sm md:text-base flex-grow text-center">
              HUBUNGI CUSTOMER SUPPORT KAMI
            </span>
          </a>
        </div>

        {/* 3. Email LKIMerchandise */}
        <div className="flex flex-col items-center">
          <div className="bg-black text-white px-8 py-2.5 rounded-lg font-medium text-sm md:text-base tracking-wide w-full max-w-md shadow">
            Email LKIMerchandise
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-md leading-relaxed">
            Kirimkan email kalian untuk penawaran kerja sama, Sponsorship dll.
          </p>
          <a 
            href="mailto:lkimerch22@gmail.com"
            className="mt-3 inline-flex items-center justify-start gap-4 bg-black text-white text-xs md:text-sm px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow w-full max-w-md"
          >
            <span className="text-lg flex-shrink-0 w-6 text-center">✉</span>
            <span style={{ fontFamily: "'Jacques Francois Shadow', serif" }} className="tracking-wide text-sm md:text-base flex-grow text-center">
              EMAIL LKIMERCHANDISE
            </span>
          </a>
        </div>

      </div>

      {/* 4 Kotak Abu-abu Estetik di Bawah */}
      <div className="max-w-5xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-200 h-36 rounded-xl shadow-inner animate-pulse"></div>
        <div className="bg-gray-200 h-36 rounded-xl shadow-inner animate-pulse"></div>
        <div className="bg-gray-200 h-36 rounded-xl shadow-inner animate-pulse"></div>
        <div className="bg-gray-200 h-36 rounded-xl shadow-inner animate-pulse"></div>
      </div>

    </section>
  );
}