import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'Rivolta' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content="Website resmi Polresta Samarinda. Informasi pelayanan publik, berita kepolisian, serta layanan pengaduan dan informasi hukum untuk masyarakat Samarinda." />
        <meta name="author" content="Polresta Samarinda" />
        <link rel="canonical" href="/" />
        <meta property="og:site_name" content="Polresta Samarinda" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site" content="/" />
        <meta property="og:title" content="Polresta Samarinda - Melindungi, Mengayomi, dan Melayani Masyarakat" />
        <meta property="og:description" content="Akses layanan dan informasi kepolisian Polresta Samarinda. Dapatkan berita, informasi hukum, serta kemudahan pelayanan publik." />
        <meta property="og:image" content="/images/logo/logo1.png" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="article" />
        <link rel="shortcut icon" href="/images/logo/logo1.png" type="image/x-icon" />
        <link rel="icon" href="/images/logo/logo1.png" type="image/x-icon" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
} 