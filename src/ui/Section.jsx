import React from 'react';
import Container from './Container';

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  containerClassName = '', 
  ...props 
}) {
  const bgColors = {
    'white': 'bg-white',
    'light': 'bg-gray-50',
    'dark': 'bg-gray-800',
    'primary': 'bg-primary',
    'secondary': 'bg-secondary',
    'tertiary': 'bg-tertiary'
  };
  
  return (
    <section className={`py-16 ${bgColors[background]} ${className}`} {...props}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
} 