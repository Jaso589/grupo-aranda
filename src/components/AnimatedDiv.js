'use client'
import React, { useRef, useEffect, useState } from 'react';

const AnimDiv = ({children}) => {
  const animDivRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    });

    observer.observe(animDivRef.current);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={animDivRef}
      className={`animated-div ${isAnimating ? 'animate' : 'no-animate'} ${
        isScrolledDown ? 'scrolled-down' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default AnimDiv;