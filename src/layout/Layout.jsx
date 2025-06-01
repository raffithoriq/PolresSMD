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
        <meta name="description" content="Partner with Rivolta to shape your digital future. We provide innovative solutions and strategic expertise for your digital transformation." />
        <meta name="author" content="Rivolta" />
        <link rel="canonical" href="/" />
        <meta property="og:site_name" content="Rivolta" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site" content="/" />
        <meta property="og:title" content="Your Goals, Our Expertise - Digital Solutions" />
        <meta property="og:description" content="Partner with us to shape your digital future. With innovative solutions and strategic expertise, we'll guide your smooth transition into the digital age." />
        <meta property="og:image" content="/images/logo/rivolta_logo.svg" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="article" />
        <link rel="shortcut icon" href="/images/logo/rivolta_logo.svg" type="image/x-icon" />
        <link rel="icon" href="/images/logo/rivolta_logo.svg" type="image/x-icon" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
} 