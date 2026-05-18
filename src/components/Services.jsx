import { useEffect, useState } from 'react';

const serviceItems = [
  {
    name: 'Landing Pages',
    description: 'Sitios de una sola página, ultrarrápidos y optimizados para convertir visitas en clientes.',
  },
  {
    name: 'Webs Institucionales',
    description: 'Sitios corporativos o portfolios profesionales con diseño personalizado y alto rendimiento.',
  },
  {
    name: 'Optimización',
    description: 'Mejora de velocidad, Core Web Vitals y SEO técnico para que tu web actual vuele.',
  },
];

export default function Services() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="servicios" className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Contenedor principal con flex row: tarjetas a la izquierda, astronauta a la derecha */}
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 fade-in-up font-futuristic">
        Servicios
      </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Columna izquierda: Tarjetas (ocupan ~60% del ancho) */}
          <div className="lg:w-3/5 space-y-6">
            {serviceItems.map((service, index) => (
              <div
                key={index}
                className="group relative fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Tarjeta con fondo semitransparente para ver el video */}
                <div
  className="relative w-full rounded-md border-2 border-[#555555] bg-[#16161d] transition-transform duration-500 ease-out group"
  style={{
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateZ(10px) rotateX(10deg) rotateY(5deg)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg)';
  }}
>
  <div className="p-4 flex flex-col">
    {/* Número y título */}
    <div className="flex items-center gap-4 mb-2">
      <span className="text-3xl font-bold text-gray-400">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="w-6 h-px bg-gray-600" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-gray-200 transition-colors duration-300">
      {service.name}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      {service.description}
    </p>
    {/* Línea que se desvanece hacia la derecha */}
    <div className="h-px bg-gradient-to-r from-[#555555] to-transparent mt-3 w-full" />
  </div>
</div>
              </div>
            ))}
          </div>

          {/* Columna derecha: Astronauta flotando */}
          <div className="lg:w-2/5 flex justify-center items-start">
            <div className="relative w-160 h-192 animate-[float_6s_ease-in-out_infinite]">
              <img
                src="/images/astro.png"
                alt="Astronauta flotando"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(192,192,192,0.3)]"
              />
            </div>
          </div>
        </div>

        {/* Horizonte plateado al final de la sección (sin fondo opaco) */}
        <div className="relative mt-24 h-48 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#c0c0c0]/10 via-[#c0c0c0]/5 to-transparent" />
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-32"
          >
            <path
              d="M0,60 C200,10 400,100 600,50 C800,0 1000,80 1200,40 L1200,120 L0,120 Z"
              fill="none"
              stroke="rgba(192,192,192,0.15)"
              strokeWidth="1"
            />
            <path
              d="M0,80 C300,40 500,100 800,70 C1000,50 1100,80 1200,60 L1200,120 L0,120 Z"
              fill="none"
              stroke="rgba(192,192,192,0.08)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Animación de flotación para el astronauta */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}