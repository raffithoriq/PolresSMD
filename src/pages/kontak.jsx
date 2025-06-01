import React from 'react';
import Layout from '@/layout/Layout';
import ContactSection from '@/sections/kontak/ContactSection';
import MapSection from '@/sections/kontak/MapSection';
import ContactFormSection from '@/sections/kontak/ContactFormSection';

export default function Home() {
  return (
    <Layout title="kontak">
      <ContactSection />
      <MapSection />
      <ContactFormSection />
    </Layout>
  );
}
