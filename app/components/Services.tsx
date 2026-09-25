"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Services() {
  // Ambil informasi path URL saat ini
  const pathname = usePathname();

  return (
    <section className="px-8 my-12">
      {/* Judul dengan garis hiasan */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-1 border-t border-gray-400"></div>
        <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold">Layanan Kami</span>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Tombol Aksi Kiri */}
        <div className="flex flex-col gap-3 w-full md:w-1/3">
          
          {/* Logika: Tampilkan tombol "How to order" JIKA BUKAN di halaman /how-to-order */}
          {pathname !== '/how-to-order' && (
            <Link 
              href="/how-to-order" 
              className="bg-black text-white py-3 px-6 rounded-lg font-jaini text-2xl tracking-wide hover:bg-gray-800 transition text-center shadow block"
            >
              How to order?
            </Link>
          )}

          {/* Tombol Konfirmasi Pembayaran (Tetap muncul di semua halaman) */}
          {/* <a 
            href="https://wa.me/628133300078?text=Halo%20Admin,%20saya%20ingin%20melakukan%20konfirmasi%20pembayaran" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white py-3 px-6 rounded-lg font-jaini text-2xl tracking-wide hover:bg-gray-800 transition text-center shadow w-full block"
          >
            Konfirmasi Pembayaran
          </a> */}
        </div>

        {/* Logo & Sosmed Kanan */}
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <img src="/assets/legacy-hitam.png" alt="Legacy Keeps Inspiring" className="h-16 w-auto object-contain mb-2" />
          <p className="text-xl tracking-widest text-gray-800 mb-4 font-jacques">Find Us</p>
          <div className="flex gap-4 items-center">
            <a href="https://www.instagram.com/lkimerch?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <img src="/assets/ig-hitam.png" alt="Instagram" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://wa.me/628133300078" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <img src="/assets/wa-hitam.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://shopee.co.id/toko_kamu" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <img src="/assets/shoope.png" alt="Shopee" className="w-6 h-6 object-contain" />
            </a>
            <a href="https://www.tiktok.com/@lki.merch?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <img src="/assets/tiktok.png" alt="Tiktok" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}