import React from 'react';
import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center transition-colors duration-300';
  
  const variantStyles = {
    primary: 'bg-quinary hover:bg-quinary/90 text-primary',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white border border-white',
    outline: 'bg-transparent border-2 border-quinary rounded-full text-white hover:bg-quinary/10',
    text: 'bg-transparent text-white hover:text-quinary p-0'
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
} 