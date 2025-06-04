import React, { useState } from "react";
import Image from "next/image";

const galleryImages = [
  "/images/gallery/1000012109-1024x768.jpg",
  "/images/gallery/1000354204-853x1024.jpg",
  "/images/gallery/IMG-20250531-WA0222-1024x768.jpg",
  "/images/gallery/IMG-20250527-WA0020-1024x768.jpg",
  "/images/gallery/1000111181-1024x461.jpg",
  "/images/gallery/1000009841-1024x461.jpg",
  "/images/gallery/1000012109-1024x768.jpg",
  "/images/gallery/1000354204-853x1024.jpg",
  "/images/gallery/IMG-20250531-WA0222-1024x768.jpg",
  "/images/gallery/IMG-20250527-WA0020-1024x768.jpg",
  "/images/gallery/1000111181-1024x461.jpg",
  "/images/gallery/1000009841-1024x461.jpg",
  "/images/gallery/1000012109-1024x768.jpg",
  "/images/gallery/1000354204-853x1024.jpg",
  "/images/gallery/IMG-20250531-WA0222-1024x768.jpg",
  "/images/gallery/IMG-20250527-WA0020-1024x768.jpg",
  "/images/gallery/1000111181-1024x461.jpg",
  "/images/gallery/1000009841-1024x461.jpg",
  "/images/gallery/1000012109-1024x768.jpg",
  "/images/gallery/1000354204-853x1024.jpg",
  "/images/gallery/IMG-20250531-WA0222-1024x768.jpg",
  "/images/gallery/IMG-20250527-WA0020-1024x768.jpg",
  "/images/gallery/1000111181-1024x461.jpg",
  "/images/gallery/1000009841-1024x461.jpg",
  "/images/gallery/1000012109-1024x768.jpg",
  "/images/gallery/1000354204-853x1024.jpg",
  "/images/gallery/IMG-20250531-WA0222-1024x768.jpg",
  "/images/gallery/IMG-20250527-WA0020-1024x768.jpg",
  "/images/gallery/1000111181-1024x461.jpg",
  "/images/gallery/1000009841-1024x461.jpg",
  
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-white py-16" id="gallery">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Galeri Kegiatan
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              onClick={() => handleOpen(src)}
              className="overflow-hidden rounded-xl shadow-lg group relative cursor-pointer"
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

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="relative max-w-6xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
              onClick={handleClose}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Preview Gambar"
              width={1200}
              height={800}
              className="w-full max-h-[90vh] object-contain mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
