"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav" style={{ borderBottomColor: isTop ? 'transparent' : 'rgba(255,255,255,0.06)' }}>
      <div className="nav-inner">
        <Link href="#" className="brand" aria-label="Conversion Copywriter home">
          <span className="brand-mark" />
          <span>Conversion Copywriter</span>
        </Link>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
