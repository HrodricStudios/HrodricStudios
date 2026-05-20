import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const categories = [
  {
    name: 'Landing Pages',
    description: 'Sitios de una sola página, ultrarrápidos y optimizados para convertir.',
    video: '/animations/landing.mp4',
  },
  {
    name: 'Desarrollo Web',
    description: 'Sitios a medida, robustos y con rendimiento excepcional.',
    video: '/animations/fingerprint.json',
  },
  {
    name: 'Consultoría',
    description: 'Asesoramiento técnico y estrategia digital para tu proyecto.',
    video: '/animations/consultoria.mp4',
  },
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="servicios" className="py-24 px-6 md:px-12">
      {/* Contenedor principal con borde que se difumina */}
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
          {/* Título + frase poética */}
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
              Servicios
              <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
            </h2>
            <p
              style={{
                fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5',
                color: 'rgb(153, 153, 153)',
              }}
            >
              Código que respira, diseño que convierte.
            </p>
          </div>

          {/* Dos columnas simétricas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Columna izquierda: dos cuadrados perfectos */}
            <div className="flex flex-col gap-6">
              {/* Categoría 1: Landing Pages – video al 75% */}
              <div className="aspect-square rounded-3xl border border-gray-400/20 bg-black overflow-hidden flex flex-col group fade-in-up">
                <div className="w-full h-[75%] p-5 pb-0 relative">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain transition-all duration-700 grayscale group-hover:grayscale-0"
                    >
                      <source src={categories[0].video} type="video/mp4" />
                    </video>
                    {/* Viñeta de desvanecimiento hacia los bordes */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center px-5 pb-5">
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
                    {categories[0].name}
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
                    {categories[0].description}
                  </p>
                </div>
              </div>

              {/* Categoría 2: Desarrollo Web – Lottie al 85% */}
              <div className="aspect-square rounded-3xl border border-gray-400/20 bg-black overflow-hidden flex flex-col group fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="w-full h-[85%] p-5 pb-0">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <Player
                      src={categories[1].video}
                      autoplay
                      loop
                      className="w-full h-full object-contain transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center px-5 pb-5">
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
                    {categories[1].name}
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
                    {categories[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Columna derecha: rectángulo al 65% de la altura de la izquierda */}
            <div className="flex flex-col justify-start">
              <div
                className="relative w-full rounded-3xl border border-gray-400/20 bg-black/40 backdrop-blur-sm overflow-hidden group fade-in-up"
                style={{
                  animationDelay: '200ms',
                  // Altura = 65% de (2 * ancho de columna + 24px)
                  paddingTop: 'calc( (2 * 100% + 24px) * 0.65 )',
                }}
              >
                <div className="absolute inset-0 flex flex-col">
                  <div className="w-full h-[70%] p-5 pb-0">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain transition-all duration-700 grayscale group-hover:grayscale-0"
                      >
                        <source src={categories[2].video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-5 pb-5">
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
                      {categories[2].name}
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
                      {categories[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}