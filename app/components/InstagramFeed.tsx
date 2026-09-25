"use client";

import { useState } from 'react';

// 1. Sub-komponen agar penggunaan useState tidak melanggar Rules of Hooks
function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div 
        className="w-full h-72 bg-gray-50 flex items-center justify-center relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={isHovered ? product.imageBack : product.imageFront} 
          alt={product.name} 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="p-4 text-center bg-white">
        <h3 className="font-bold text-sm tracking-wider text-black">{product.name}</h3>
        <p className="text-xs text-gray-600 mt-1">{product.price}</p>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  // 2. Data Produk Baris 1: T-SHIRT (Path gambar diperbarui)
  const tshirts = [
    { id: 1, name: "BUNNY", price: "Rp 0", imageFront: '/assets/TS_BUNNY_DST.png', imageBack: '/assets/TS_BUNNY_GRY.png' },
    { id: 2, name: "CLIGHTER", price: "Rp 0", imageFront: '/assets/TS_CLIGHTER.png', imageBack: '/assets/LS_CLIGHTER.png' },
    { id: 3, name: "NACH", price: "Rp 179.000", imageFront: '/assets/TS_BUNNY_DST.png', imageBack: '/assets/TS_BUNNY_GRY.png' },
    { id: 4, name: "BUNNY DST", price: "Rp 250.000", imageFront: '/assets/TS_BUNNY_DST.png', imageBack: '/assets/TS_BUNNY_GRY.png' },
  ];

  // 3. Data Produk Baris 2: JERSEY (Path gambar diperbarui)
  const jerseys = [
    { id: 5, name: "JERSEY 01", price: "Rp 299.000", imageFront: '/assets/TS_BUNNY_DST.png', imageBack: '/assets/TS_BUNNY_GRY.png' },
    { id: 6, name: "JERSEY 02", price: "Rp 199.000", imageFront: '/assets/TS_BUNNY_DST.png', imageBack: '/assets/TS_BUNNY_GRY.png' },
    { id: 7, name: "JERSEY 03", price: "Rp 329.000", imageFront: '/assets/TS_BUNNY_DST.png', imageBack: '/assets/TS_BUNNY_GRY.png' },
    { id: 8, name: "JERSEY 04", price: "Rp 279.000", imageFront: '/assets/TS_BUNNY_DST.png', imageBack: '/assets/TS_BUNNY_GRY.png' },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-8 py-12">
      
      {/* ---------------- BARIS PERTAMA: T-SHIRT ---------------- */}
      <div className="mb-14">
        {/* Judul Kategori */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase border-b-2 border-black pb-2 inline-block">
            T-SHIRT
          </h2>
        </div>

        {/* Grid 4 Kolom T-Shirt dengan gap-2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {tshirts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* ---------------- BARIS KEDUA: JERSEY ---------------- */}
      <div>
        {/* Judul Kategori */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase border-b-2 border-black pb-2 inline-block">
            JERSEY
          </h2>
        </div>

        {/* Grid 4 Kolom Jersey dengan gap-2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {jerseys.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
}