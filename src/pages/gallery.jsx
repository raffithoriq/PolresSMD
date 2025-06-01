import React from 'react';
import Layout from '@/layout/Layout';
import GallerySection from '@/sections/gallery/GallerySection';

export default function Home() {
  return (
    <Layout title="gallery">
      <GallerySection />
    </Layout>
  );
}
