import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const LoadingSecton = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/nointernet'); 
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-yellow-500 border-b-yellow-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-black text-lg font-semibold">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingSecton;
