"use client";

import { useState } from 'react';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { type: 'video', src: '/assets/videobanner.mp4' },
    { type: 'image', src: '/assets/banner-sosmed.png' },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="my-6"> 
      <div className="relative bg-black text-white h-[600px] flex items-center justify-center shadow-md overflow-hidden group w-full">
        
        {/* PANAH KIRI */}
        <button 
          onClick={prevSlide}
          className="absolute z-20 left-6 md:left-10 text-4xl font-bold text-gray-400 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all cursor-pointer outline-none"
        >
          &#10094;
        </button>
        
        {/* KONTEN TENGAH DENGAN ANIMASI FADE YANG SMOOTH */}
        <div className="relative w-full h-full z-10">
          {slides.map((slide, index) => (
            <div 
              key={index}
              // Di sinilah keajaibannya terjadi: transition-opacity duration-700
              className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              {slide.type === 'video' ? (
                <video 
                  src={slide.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="h-32 md:h-48 w-auto object-contain pointer-events-none"
                />
              ) : (
                <img 
                  src={slide.src} 
                  alt={`Banner ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              )}
            </div>
          ))}
        </div>

        {/* PANAH KANAN */}
        <button 
          onClick={nextSlide}
          className="absolute z-20 right-6 md:right-10 text-4xl font-bold text-gray-400 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all cursor-pointer outline-none"
        >
          &#10095;
        </button>
        
        {/* INDIKATOR TITIK (Dots) */}
        <div className="absolute bottom-4 flex gap-2 z-20">
          {slides.map((_, index) => (
            <div 
              key={index} 
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? 'bg-white w-6' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}