'use client';
import { useState, useEffect } from 'react';

const icons = [
  { name: 'Servicios', src: '/images/icons/wheel.png', link: '#servicios' },
  { name: 'Proyectos', src: '/images/icons/flag.png', link: '#proyectos' },
  { name: 'Nosotros', src: '/images/icons/helm.png', link: '#nosotros' },
];

export default function NavIcons({ visible }) {
  const [expanded, setExpanded] = useState(null);
  const [animReady, setAnimReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setAnimReady(true), 50);
      return () => clearTimeout(t);
    } else {
      setAnimReady(false);
      setExpanded(null);
    }
  }, [visible]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = (index) => {
    if (isMobile) return;
    setExpanded(index);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setExpanded(null);
  };

  if (!visible) return null;

  const SHIFT = 100;

  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-40 p-6 transition-all duration-1000 ease-out ${
        animReady ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
      }`}
    >
      <div className="flex items-center gap-4">
        {icons.map((icon, i) => {
          const isActive = expanded === i;

          let translateX = 0;
          if (expanded !== null && expanded !== i) {
            if (expanded === 0) {
              translateX = SHIFT;
            } else if (expanded === 1) {
              if (i === 2) translateX = SHIFT;
            }
          }

          return (
            <a
              key={i}
              href={icon.link}
              className="relative flex items-center transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${translateX}px)` }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-white border-white'
                    : 'bg-black border-gray-600'
                }`}
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-7 h-7 object-contain transition-all duration-300"
                  style={{
                    filter: isActive ? 'none' : 'invert(1) brightness(100%)',
                  }}
                />
              </span>

              {isActive && !isMobile && (
                <span
                  className="absolute top-0 left-1/2 h-12 flex items-center bg-white text-black font-semibold rounded-r-full shadow-lg whitespace-nowrap transition-all duration-500 ease-out"
                  style={{
                    zIndex: -1,
                    paddingLeft: '30px',
                    paddingRight: '20px',
                    marginLeft: '-2px',
                  }}
                >
                  {icon.name}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}