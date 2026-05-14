'use client';
import { useEffect, useState } from 'react';

export default function Logo({ visible }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-40 p-3 md:p-6 transition-all duration-1000 ease-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-20 opacity-0'
      }`}
    >
      <a href="/" className="flex items-center gap-2 md:gap-3">
        {/* Isotipo (siempre visible, más chico en mobile) */}
        <img
          src="/images/logo-icon.png"
          alt="Logo Hrodric Studios"
          className="h-7 md:h-10 w-auto"
        />
        {/* Texto (oculto en mobile, visible desde sm hacia arriba) */}
        <img
          src="/images/logo-text.png"
          alt="Hrodric Studios"
          className="hidden sm:block h-5 md:h-8 w-auto"
        />
      </a>
    </div>
  );
}