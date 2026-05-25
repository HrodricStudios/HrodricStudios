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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
    <>
      {/* Estilos del botón (píldora, sin cambios) */}
      <style>{`
        .button2 {
          display: inline-block;
          transition: all 0.2s ease-in;
          position: relative;
          overflow: hidden;
          z-index: 1;
          color: #ff3737;
          padding: 0.7em 1.7em;
          cursor: pointer;
          font-size: 18px;
          border-radius: 50px;
          background: #e8e8e8;
          border: 1px solid #ff3737;
          box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
          text-decoration: none;
          font-family: 'Inter', 'Inter Placeholder', sans-serif;
          font-weight: 600;
          white-space: nowrap;
        }

        .button2:active {
          color: #666;
          box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
        }

        .button2:before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%) scaleY(1) scaleX(1.25);
          top: 100%;
          width: 140%;
          height: 180%;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          display: block;
          transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
          z-index: -1;
        }

        .button2:after {
          content: "";
          position: absolute;
          left: 55%;
          transform: translateX(-50%) scaleY(1) scaleX(1.45);
          top: 180%;
          width: 160%;
          height: 190%;
          background-color: #009087;
          border-radius: 50%;
          display: block;
          transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
          z-index: -1;
        }

        .button2:hover {
          color: #ffffff;
          border: 1px solid #ffffff;
        }

        .button2:hover:before {
          top: -35%;
          background-color: #ffffff;
          transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }

        .button2:hover:after {
          top: -45%;
          background-color: #ff3737;
          transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }
      `}</style>

      <div
        className={`fixed top-0 left-0 right-0 z-40 p-6 transition-all duration-1000 ease-out ${
          animReady ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        {/* Desktop: Iconos centrados + botón */}
        <div className="hidden md:block relative">
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              {icons.map((icon, i) => {
                const isActive = expanded === i;
                let translateX = 0;
                if (expanded !== null && expanded !== i) {
                  if (expanded === 0) translateX = SHIFT;
                  else if (expanded === 1 && i === 2) translateX = SHIFT;
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
                        isActive ? 'bg-white border-white' : 'bg-black border-gray-600'
                      }`}
                    >
                      <img
                        src={icon.src}
                        alt={icon.name}
                        className="w-7 h-7 object-contain transition-all duration-300"
                        style={{ filter: isActive ? 'none' : 'invert(1) brightness(100%)' }}
                      />
                    </span>
                    {isActive && (
                      <span
                        className="absolute top-0 left-1/2 h-12 flex items-center text-black font-semibold rounded-r-full shadow-lg whitespace-nowrap transition-all duration-500 ease-out"
                        style={{
                          zIndex: -1,
                          paddingLeft: '30px',
                          paddingRight: '20px',
                          marginLeft: '-2px',
                          fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                          fontWeight: 600,
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: 'rgb(0, 0, 0)',
                          backgroundColor: '#ffffff',
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
          {/* Botón rojo en su posición original */}
          <div className="absolute right-[151px] top-1/2 -translate-y-1/2">
            <a href="#contactanos" className="button2">
              Contactanos
            </a>
          </div>
        </div>

        {/* Mobile: ícono hamburguesa + menú desplegable */}
        <div className="flex md:hidden justify-end">
          <MobileMenu />
        </div>
      </div>
    </>
  );
}

/* Componente para el menú hamburguesa en mobile */
function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-black border-2 border-gray-600 rounded-full z-50"
      >
        <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
      </button>

      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-black border border-gray-700 rounded-2xl shadow-2xl py-4 px-6 flex flex-col gap-4 z-40">
          {icons.map((icon, i) => (
            <a
              key={i}
              href={icon.link}
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src={icon.src}
                alt={icon.name}
                className="w-5 h-5 object-contain"
                style={{ filter: 'invert(1) brightness(100%)' }}
              />
              <span
                style={{
                  fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                {icon.name}
              </span>
            </a>
          ))}
          <a
            href="#contactanos"
            className="button2 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contactanos
          </a>
        </div>
      )}
    </>
  );
}