'use client';
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[calc(110vh)] flex items-center justify-center">
      <img
        src="/images/Background/header.png"
        alt="Background Header"
        className="absolute  left-0 w-full h-[780px] object-cover z-0 pointer-events-none"
      />

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 pt-6 pb-16">
        <h1 className="text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-10 mt-[-6rem]">
          <span className="block mb-2">Polresta Samarinda</span>
        </h1>

        <p className="mt-[-1rem] text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto">
          MELINDUNGI
          MENGAYOMI DAN
          MELAYANI MASYARAKAT
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
