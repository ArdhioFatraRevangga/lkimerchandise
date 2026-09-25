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

      {/* 4 Kotak Gambar (Disamakan dengan How To Order) */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
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
        {/* <div className="h-40 md:h-56 rounded-xl overflow-hidden shadow flex items-center justify-center bg-white p-4">
          <img src="/assets/legacy-hitam.png" alt="Legacy Hitam" className="w-full h-full object-contain" />
        </div>
        <div className="h-40 md:h-56 rounded-xl overflow-hidden shadow flex items-center justify-center bg-white p-4">
          <img src="/assets/keep Inspiring.png" alt="Keep Inspiring" className="w-full h-full object-contain" />
        </div> */}
      </div>

    </section>
  );
}