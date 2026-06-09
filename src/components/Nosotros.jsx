import { useEffect, useState } from 'react';

export default function Nosotros() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="nosotros" className="py-24 px-6 md:px-12">
      {/* Contenedor principal (mismo estilo que Servicios) */}
      <div
        className="mx-auto max-w-[1100px] rounded-[64px] relative overflow-hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%)',
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.03)',
        }}
      >
        {/* Iluminación desde arriba */}
        <div
          className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 30%, transparent 100%)',
          }}
        />

        <div className="relative px-6 md:px-12 py-12">
          {/* Título + frase */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-2">
            <h2
              className="relative group inline-block cursor-default"
              style={{
                fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                fontWeight: 500,
                fontSize: '64px',
                lineHeight: '1.1',
                color: '#ffffff',
                letterSpacing: '-0.05em',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Nosotros
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
            </h2>
            <p
              style={{
                fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'rgb(153, 153, 153)',
                maxWidth: '400px',
              }}
            >
              Un equipo que combina diseño, código y estrategia para llevar tu presencia digital al siguiente nivel.
            </p>
          </div>

          {/* Dos bloques rectangulares verticales con fotos reducidas un 25% */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Bloque 1 */}
            <div className="flex-1 rounded-3xl border border-gray-400/20 bg-black/40 backdrop-blur-sm overflow-hidden group fade-in-up">
              <div className="aspect-[4/5] relative overflow-hidden mx-auto" style={{ maxWidth: '75%' }}>
                <img
                  src="/images/us.png"
                  alt="Guido"
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              <div className="p-6">
                <h3
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '1.3',
                    color: '#ffffff',
                    letterSpacing: '-0.05em',
                    textRendering: 'optimizeLegibility',
                    WebkitFontSmoothing: 'antialiased',
                  }}
                >
                  Guido
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: 'rgb(200,200,200)',
                  }}
                >
                  Founder & CEO
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: 'rgb(150,150,150)',
                  }}
                >
                  Desarrollador frontend y diseño de experiencias digitales. Convierte ideas en código robusto y minimalista.
                </p>
              </div>
            </div>

            {/* Bloque 2 */}
            <div className="flex-1 rounded-3xl border border-gray-400/20 bg-black/40 backdrop-blur-sm overflow-hidden group fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="aspect-[4/5] relative overflow-hidden mx-auto" style={{ maxWidth: '75%' }}>
                <img
                  src="/images/us2.png"
                  alt="Equipo"
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              <div className="p-6">
                <h3
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '1.3',
                    color: '#ffffff',
                    letterSpacing: '-0.05em',
                    textRendering: 'optimizeLegibility',
                    WebkitFontSmoothing: 'antialiased',
                  }}
                >
                  CTO & Desarrollador
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: 'rgb(200,200,200)',
                  }}
                >
                  Diseñador de interface y experiencia de usuario UX/UI
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: 'rgb(150,150,150)',
                  }}
                >
                  Crea interfaces intuitivas y atractivas, cuidando cada detalle visual para que el usuario disfrute la experiencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}