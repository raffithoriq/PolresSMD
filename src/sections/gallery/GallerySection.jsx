import React from "react";
import Image from "next/image";

const galleryImages = [
  "/images/gallery/img1.jpg",
  "/images/gallery/img2.jpg",
  "/images/gallery/img3.jpg",
  "/images/gallery/img4.jpg",
  "/images/gallery/img5.jpg",
  "/images/gallery/img6.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-white py-16" id="gallery">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Galeri Kegiatan</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group relative"
            >
              <Image
                src={src}
                alt={`Galeri ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-lg">
                Lihat Gambar
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
