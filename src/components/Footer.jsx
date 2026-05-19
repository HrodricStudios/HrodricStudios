'use client';

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 pb-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto rounded-3xl border border-gray-800/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)] bg-black px-6 md:px-12 py-16">
        
        {/* Grid de 5 columnas (sin cambios de posición) */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_1fr_auto_1fr] gap-6 md:gap-10 mb-12">
          
          {/* Columna 1: Ubicación + Contacto */}
          <div className="space-y-10">
            <div>
              <p className="uppercase tracking-[0.2em] mb-2"
                style={{
                  fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(153, 153, 153)',
                }}
              >
                Ubicación
              </p>
              <p style={{
                  fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',           // ← antes 27px
                  lineHeight: '24px',         // ← antes 36px
                  color: 'rgb(238, 238, 238)',
                }}
              >
                Rosario, Argentina
              </p>
            </div>
            <div>
              <p className="uppercase tracking-[0.2em] mb-2"
                style={{
                  fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(153, 153, 153)',
                }}
              >
                Contacto
              </p>
              <div style={{
                  fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',           // ← antes 27px
                  lineHeight: '24px',         // ← antes 36px
                  color: 'rgb(238, 238, 238)',
                }}
              >
                <a href="mailto:hrodricstudios@gmail.com" className="block hover:text-gray-300 transition break-words">
                  hrodricstudios@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Título Links */}
          <div>
            <p className="uppercase tracking-[0.2em]"
              style={{
                fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgb(153, 153, 153)',
              }}
            >
              Links
            </p>
          </div>

          {/* Columna 3: Lista de links (con más separación) */}
          <div>
            <div className="space-y-[30px]">   {/* ← 2.5 × 4px = 10px */}
              {[
                { name: 'Servicios', href: '#servicios' },
                { name: 'Proyectos', href: '#proyectos' },
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group block w-fit"
                  style={{
                    fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                    fontWeight: 500,
                    fontSize: '27px',
                    lineHeight: '36px',
                    color: 'rgb(238, 238, 238)',
                  }}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 4: Título Redes */}
          <div>
            <p className="uppercase tracking-[0.2em]"
              style={{
                fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgb(153, 153, 153)',
              }}
            >
              Redes
            </p>
          </div>

          {/* Columna 5: Lista de redes (con más separación) */}
          <div>
            <div className="space-y-[30px]">   {/* ← 2.5 × 4px = 10px */}
              {[
                { name: 'Instagram', href: '#' },
                { name: 'LinkedIn', href: '#' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group block w-fit"
                  style={{
                    fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                    fontWeight: 500,
                    fontSize: '27px',
                    lineHeight: '36px',
                    color: 'rgb(238, 238, 238)',
                  }}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Nombre del estudio */}
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-500 text-center mb-10">
          Hrodric Studios
        </h2>

        {/* Fila inferior: copyright + botón subir */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-center sm:text-left"
            style={{
              fontFamily: 'Geist, "Geist Placeholder", sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'rgb(153, 153, 153)',
            }}
          >
            © {new Date().getFullYear()} Hrodric Studios. Todos los derechos reservados.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white transition text-sm uppercase tracking-wider flex items-center gap-2"
          >
            Subir
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, rgb(69, 69, 69) 0%, rgb(0, 0, 0) 100%)',
                boxShadow: 'inset 1.5px 1.5px 2px 0px rgba(255, 255, 255, 0.15)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}