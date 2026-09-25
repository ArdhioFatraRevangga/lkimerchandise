"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const getLinkStyle = (path: string) => 
    pathname === path 
      ? "text-black font-semibold underline decoration-2 underline-offset-4" 
      : "text-gray-600 hover:text-gray-400 transition-colors";

  return (
    // 1. Tambahkan sticky, top-0, z-50, dan w-full di div pembungkus utama
    <div className="sticky top-0 z-50 w-full shadow-sm">
      
      {/* TopBar Hitam */}
      <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/logo-lkimerch-putih.png" alt="LKI Merch Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Ikon Medsos dengan Link Aktif */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="https://www.instagram.com/lkimerch?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/ig.png" alt="Instagram" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://wa.me/628133300078" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/wa.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://shopee.co.id/toko_kamu" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/shoope_putih.png" alt="Shopee" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://www.tiktok.com/@lki.merch?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/tiktok_putih.png" alt="TikTok" className="w-5 h-5 object-contain" />
          </a>
        </div>
      </header>

      {/* Navigation Bar Putih */}
      {/* 2. Tambahkan bg-white di sini agar background tidak transparan saat di-scroll */}
      <nav className="bg-white border-b border-gray-200 py-3 px-8 flex justify-end gap-8 text-sm tracking-wide font-medium">
        <Link href="/" className={getLinkStyle("/")}>Home</Link>
        <Link href="/about" className={getLinkStyle("/about")}>About</Link>
        <Link href="/contact" className={getLinkStyle("/contact")}>Contact Us</Link>
      </nav>
      
    </div>
  );
}