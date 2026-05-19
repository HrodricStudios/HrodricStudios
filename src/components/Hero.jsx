import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ciclo de iluminación secuencial
  useEffect(() => {
    if (!mounted) return;

    const items = ['Landing Pages', 'Desarrollo Web', 'Consultoría'];

    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, 1500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section className="flex flex-col lg:flex-row items-start justify-center min-h-screen px-6 md:px-8 gap-0 pt-24 lg:pt-32">
      {/* Columna izquierda: Frase principal + Sección Servicios debajo */}
      <div className="w-full lg:w-1/2 flex justify-end lg:pr-6 pt-8 lg:pt-24">
        <div className="max-w-[500px]">
          <h1
            className="fade-in-up"
            style={{
              fontFamily: 'Geist, "Geist Placeholder", sans-serif',
              fontWeight: 400,
              fontSize: '70px',
              lineHeight: '76px',
              color: '#ffffff',
              animationDelay: '200ms',
              letterSpacing: '-0.05em',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            Desarrollo con actitud
          </h1>

          {/* Sección Servicios */}
          <div className="mt-36">
            <h3
              style={{
                fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgb(238, 238, 238)',
              }}
            >
              Servicios
            </h3>

            <div className="h-px bg-gray-700 my-3 w-48" />

            <ul className="space-y-2">
              {['Landing Pages', 'Desarrollo Web', 'Consultoría'].map((item, i) => (
                <ServiceItem key={i} index={i} text={item} active={i === activeIndex} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Columna derecha: Frase secundaria, línea, encontranos y botón */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start lg:pl-4 lg:pt-28 fade-in-up" style={{ animationDelay: '400ms' }}>
        <p
          style={{
            fontFamily: 'Inter, "Inter Placeholder", sans-serif',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '24px',
            letterSpacing: '-0.02em', // Un toque sutil de compresión
            color: '#ffffff', // El texto base ahora es blanco brillante
            whiteSpace: 'pre-line',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          Hrodric Studios diseña Landing Pages,{'\n'}
          desarrolla sitios web a medida y propone{'\n'}
          Soluciones IT para 
          <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}> impulsar tus conversiones</span>
        </p>

        {/* Línea gris más corta */}
        <div className="h-px bg-gray-600 my-4 w-4/5 mr-auto" />

        {/* Encontranos En + Botón LinkedIn */}
        <div className="w-4/5 mr-auto flex items-center justify-between">
          <span
            className="relative group cursor-pointer"
            style={{
              fontFamily: 'Geist, "Geist Placeholder", sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '28px',
              color: 'rgb(238, 238, 238)',
            }}
          >
            Encontranos En
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full" />
          </span>

          {/* Botón LinkedIn */}
          <a
            href="#"
            className="relative w-10 h-10 rounded-full bg-black hover:bg-white transition-colors duration-300 flex items-center justify-center overflow-hidden group"
            style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-white/20 pointer-events-none" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300 relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* Componente para cada item de servicio con guion ancho y transición rápida */
function ServiceItem({ index, text, active }) {
  return (
    <li className="flex items-center gap-6">
      <span
        className="w-4 h-1 transition-all duration-[250ms]"
        style={{
          backgroundColor: active ? '#ffffff' : 'rgba(0,0,0,0.4)',
          boxShadow: active ? '0 0 6px rgba(255,255,255,0.4)' : 'none',
        }}
      />
      <span
        style={{
          fontFamily: 'Inter, "Inter Placeholder", sans-serif',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          color: 'rgb(150, 150, 150)',
        }}
      >
        {text}
      </span>
    </li>
  );
}