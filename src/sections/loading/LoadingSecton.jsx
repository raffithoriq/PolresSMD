import React from 'react';

const LoadingSecton = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-yellow-500 border-b-yellow-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <p className="mt-4 text-black text-lg font-semibold">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingSecton;
