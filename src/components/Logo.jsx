'use client';
import { useEffect, useState } from 'react';

export default function Logo({ visible }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-40 p-6 transition-all duration-1000 ease-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
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
          className="hidden sm:block h-5 md:h-8 w-auto"
        />
      </a>
    </div>
  );
}