import React from 'react';
import Layout from '@/layout/Layout';
import PengawalanSection from '@/sections/layanan/PengawalanSection';



export default function Home() {
    return (
        <Layout title="Pengawalan Jalan">
            <PengawalanSection />
        </Layout>
    );
}
