'use client';
import { useEffect, useState } from 'react';

export default function Logo({ visible }) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (visible) {
      // Pequeño retraso para que la animación de entrada se vea
      const timer = setTimeout(() => setShow(true), 50);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-50 p-4 md:p-6 transition-all duration-1000 ease-out ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
      }`}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-2 md:gap-3"
      >
        <img
          src="/images/logo-icon.png"
          alt="Logo Hrodric Studios"
          className="h-7 md:h-10 w-auto"
        />
        <img
          src="/images/logo-text.png"
          alt="Hrodric Studios"
          className="h-5 md:h-8 w-auto"
        />
      </a>
    </div>
  );
}