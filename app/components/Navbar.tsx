"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkStyle = (path: string) => 
    pathname === path 
      ? "text-black font-semibold underline decoration-2 underline-offset-4 block md:inline-block" 
      : "text-gray-600 hover:text-gray-400 transition-colors block md:inline-block";

  return (
    <div className="sticky top-0 z-50 w-full shadow-sm">
      
      {/* TopBar Hitam */}
      <header className="bg-black text-white px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/logo-lkimerch-putih.png" alt="LKI Merch Logo" className="h-6 md:h-8 w-auto object-contain" />
        </div>

        {/* Ikon Medsos dengan Link Aktif */}
        <div className="flex items-center gap-3 md:gap-4 text-sm font-medium">
          <a href="https://www.instagram.com/lkimerch?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/ig.png" alt="Instagram" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
          </a>
          <a href="https://wa.me/628133300078" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/wa.png" alt="WhatsApp" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
          </a>
          <a href="https://shopee.co.id/toko_kamu" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/shoope_putih.png" alt="Shopee" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
          </a>
          <a href="https://www.tiktok.com/@lki.merch?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <img src="/assets/tiktok_putih.png" alt="TikTok" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
          </a>
        </div>
      </header>

    {/* Navigation Bar Putih */}
      {/* Ubah bg-white menjadi bg-white/80 backdrop-blur-md */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-gray-400 py-3 px-6 md:px-8 flex justify-end items-center text-sm tracking-wide font-medium relative">
        
        {/* Tombol Menu Hamburger */}
        <button 
          className="md:hidden p-2 -mr-2 text-gray-400 hover:text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

    {/* Menu Teks */}
        {/* Ubah w-full menjadi w-auto, dan left-0 menjadi right-0 */}
        <div className={`md:flex items-end md:items-center gap-4 md:gap-8 w-auto absolute md:static top-full right-0 bg-white/90 backdrop-blur-sm md:bg-transparent shadow-md md:shadow-none py-4 px-6 md:p-0 flex-col md:flex-row transition-all duration-300 rounded-bl-lg md:rounded-none ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyle("/")}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyle("/about")}>About</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={getLinkStyle("/contact")}>Contact Us</Link>
        </div>

      </nav>
      
    </div>
  );
}