import React from 'react';
import Image from 'next/image';

const Logo = ({ className }) => {
  return (
    <div className={`flex items-center drop-shadow-md ${className || ''}`}>
      <Image 
        src="" 
        alt="Rivolta Logo" 
        width={50} 
        height={50}
        priority
        className="h-full w-auto filter drop-shadow"
      />
    </div>
  );
};

export default Logo; 