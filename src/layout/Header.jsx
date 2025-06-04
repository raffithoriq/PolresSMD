import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    {
      label: 'About',
      href: '/about',
      subLinks: [
        { label: 'Arti logo', href: '/about#arti-logo' },
        { label: 'Visi & Misi', href: '/about#visi-misi' },
        { label: 'Sejarah', href: '/about#sejarah' },
        { label: 'Struktur', href: '/about#struktur' },
      ],
    },
    {
      label: 'Informasi',
      href: '/',
      subLinks: [
        { label: 'Informasi Serta Merta', href: 'https://eppid.polri.go.id/informasi-publik/informasi-serta-merta', external: true },
        { label: 'Informasi Setiap Saat', href: 'https://eppid.polri.go.id/informasi-publik/informasi-setiap-saat', external: true },
        { label: 'Informasi Berkala', href: 'https://eppid.polri.go.id/informasi-publik/informasi-berkala', external: true },
        { label: 'Informasi Dikecualikan', href: 'https://eppid.polri.go.id/informasi-publik/informasi-dikecualikan', external: true },
        { label: 'E-PPID Polri', href: 'https://eppid.polri.go.id/', external: true },
        { label: 'UU dan Peraturan', href: 'https://lpse.polri.go.id/eproc4', external: true },
        { label: 'Informasi Lelang', href: 'https://lpse.polri.go.id/eproc4', external: true },
      ],
    },
    {
      label: 'gallery',
      href: '/gallery',
    },
    {
      label: 'Layanan',
      href: '/',
      subLinks: [
        { label: 'SPKT', href: '/spkt' },
        { label: 'SIM', href: '/sim' },
        { label: 'BPKB dan STNK', href: '/bpkb' },
        { label: 'SKCK', href: '/skck' },
        { label: 'SP2HP', href: '/sp2hp' },
        { label: 'Izin Keramaian', href: '/keramaian' },
        { label: 'Pengawalan Jalan', href: '/pengawalan' },
        { label: 'Pengamanan Objek Khusus', href: '/pengamanan' },
      ],
    },
    {
      label: 'Kontak',
      href: '/kontak',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-out ${isScrolled ? 'bg-[#ffbc24] bg-opacity-90 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-48 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="block w-[160px] h-auto">
          <Image
            src="/images/logo/logo.png"
            alt="Logo Polres Samarinda"
            width={40}
            height={40}
            className="hover:opacity-80 transition-opacity duration-300"
          />
        </Link>

        {/* Navigation */}
        <Navbar
          links={navLinks}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* Call Center Button */}
        <Link
          href="/kontak"
          className="hidden md:inline-block bg-stone-950 text-amber-50 px-6 py-2 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-md hover:shadow-lg"
        >
          CALL CENTER
        </Link>
      </div>
    </header>
  );
}
