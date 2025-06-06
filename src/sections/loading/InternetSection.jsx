// pages/no-internet.tsx (Next.js dengan Tailwind CSS)
import Head from 'next/head';

export default function NoInternet() {
  return (
    <>
      <Head>
        <title>No Internet</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-[#333] font-[Arial,sans-serif]">
        {/* Dinosaurus */}
        <img src="/images/icons/Sticker_offlinedino.webp" alt="No Internet" className="w-32 mb-2" />


        {/* Title */}
        <h1 className="text-[24px] font-normal mb-2">No internet</h1>

        {/* Try section */}
        <div className="text-left text-[13px] leading-5 mb-2">
          <p className="mb-1">Try:</p>
          <ul className="list-disc pl-5">
            <li>Checking the network cables, modem, and router</li>
            <li>Reconnecting to Wi-Fi</li>
            <li>
              <a href="#" className="text-[#1a73e8] underline">
                Running Windows Network Diagnostics
              </a>
            </li>
          </ul>
        </div>

        {/* Error code */}
        <p className="text-[12px] text-gray-500 mt-2">ERR_INTERNET_DISCONNECTED</p>
      </div>
    </>
  );
}
