import React from 'react';
import Layout from '@/layout/Layout';
import LambangSection from '@/sections/about/LambangSection';
import VisiMisiSection from '@/sections/about/VisiMisiSection';
import SejarahSection from '@/sections/about/SejarahSection';
import StrukturSection from '@/sections/about/StrukturSection';



export default function Home() {
  return (
    <Layout title="About">
      <section id="arti-logo"><LambangSection /></section>
      <section id="visi-misi"><VisiMisiSection /></section>
      <section id="sejarah"><SejarahSection /></section>
      <section id="struktur"><StrukturSection /></section>
    </Layout>
  );
}
