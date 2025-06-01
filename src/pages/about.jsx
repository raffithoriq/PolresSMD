import React from 'react';
import Layout from '@/layout/Layout';
import LambangSection from '@/sections/about/LambangSection';
import VisiMisiSection from '@/sections/about/VisiMisiSection';
import SejarahSection from '@/sections/about/SejarahSection';
import StrukturSection from '@/sections/about/StrukturSection';



export default function Home() {
  return (
    <Layout title="About">
      <LambangSection />
      <VisiMisiSection />
      <SejarahSection />
      <StrukturSection />
    </Layout>
  );
}
