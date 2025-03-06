"use client";

import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

export default function useScrollReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 200,
        distance: '20px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        origin: 'bottom'
      });
    }
  }, []);

  return sectionRef;
}