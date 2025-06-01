import React from 'react';
import Layout from '@/layout/Layout';
import HeroSection from '@/sections/index/HeroSection';
import VisiMisiSection from '@/sections/index/VisiMisiSection';
import MediaSosialKamiSection from '@/sections/index/MediaSosialKamiSection';
import LayananSection from '@/sections/index/LayananSection'; 
import GaleriSection from '@/sections/index/GaleriSection';
import BeritaSection from '@/sections/index/BeritaSection';


export default function Home() {
  return (
    <Layout title="Home">
      <HeroSection />
      <VisiMisiSection />
      <MediaSosialKamiSection />
      <LayananSection />
      <GaleriSection />
      <BeritaSection />
    </Layout>
  );
}
