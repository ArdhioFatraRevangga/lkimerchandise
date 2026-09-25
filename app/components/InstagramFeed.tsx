"use client";

import { useState, useEffect } from 'react';

// Sub-komponen dikembalikan ke mode normal (Front & Back flip)
function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const [autoFlip, setAutoFlip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkMobile(); 
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isMobile) {
      interval = setInterval(() => {
        setAutoFlip((prev) => !prev);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMobile]);

  const showBackImage = isMobile ? autoFlip : isHovered;

  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div 
        className="w-full h-72 bg-gray-50 flex items-center justify-center relative overflow-hidden cursor-pointer"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <img 
          src={showBackImage ? product.imageBack : product.imageFront} 
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
  // Data Produk Baris 1: T-SHIRT (Kotak ke-3 dikembalikan normal)
  const tshirts = [
    { id: 1, name: "BUNNY", price: "Rp 0", imageFront: '/assets/TS_BUNNY_DST.png', imageBack: '/assets/TS_BUNNY_GRY.png' },
    { id: 2, name: "CLIGHTER", price: "Rp 0", imageFront: '/assets/TS_CLIGHTER.png', imageBack: '/assets/LS_CLIGHTER.png' },
    { id: 3, name: "GUND", price: "Rp 0", imageFront: '/assets/LS-GUND-BLCK.png', imageBack: '/assets/LS-GUND-WHT.png' }, // <- Ubah path gambar ini nanti sesuai desain GUND
    { id: 4, name: "MUSC", price: "Rp 0", imageFront: '/assets/TS-MUSC.png', imageBack: '/assets/LS-MUSC.png' },
  ];

  // Data Produk Baris 2: JERSEY
  const jerseys = [
    { id: 5, name: "JERSEY LEGACY", price: "Rp 0", imageFront: '/assets/JS-LEGACY.png', imageBack: '/assets/model-LEGACY.png' },
    { id: 6, name: "JERSEY CLIGHTER", price: "Rp 0", imageFront: '/assets/JS-CLIGHTER.png', imageBack: '/assets/model-js-CLIGHTER.png' },
    { id: 7, name: "JERSEY DEER", price: "Rp 0", imageFront: '/assets/JS-DEER.png', imageBack: '/assets/model-js-DEER.png' },
    { id: 8, name: "JERSEY SHIELD", price: "Rp 0", imageFront: '/assets/JS-SHIELD.png', imageBack: '/assets/model-js-SHIELD.png' },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-8 py-12">
      
      {/* ---------------- BARIS PERTAMA: T-SHIRT ---------------- */}
      <div className="mb-14">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase border-b-2 border-black pb-2 inline-block">
            T-SHIRT
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {tshirts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* ---------------- BARIS KEDUA: JERSEY ---------------- */}
      <div>
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase border-b-2 border-black pb-2 inline-block">
            JERSEY
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {jerseys.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
}