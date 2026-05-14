'use client';

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 pb-10">
      {/* Contenedor principal con el estilo de Arkitek */}
      <div 
        className="max-w-7xl mx-auto rounded-[64px] px-6 md:px-16 py-16"
        style={{
          background: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 60%, rgb(26, 26, 26) 100%)',
          boxShadow: 'rgb(125, 125, 125) 0px -0.5px 1px 0px inset',
        }}
      >
        
        {/* Sección superior: 2 columnas (Izquierda y Derecha) */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          {/* Columna Izquierda: Ubicación + Contacto */}
          <div className="space-y-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">Ubicación</p>
              <p className="text-[#eeeeee] text-base leading-relaxed">
                Rosario, Argentina
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">Contacto</p>
              <div className="space-y-2 text-base">
                <a href="mailto:hrodricstudios@gmail.com" className="block text-[#eeeeee] hover:text-gray-300 transition">
                  hrodricstudios@gmail.com
                </a>
                <a href="tel:+5493413615056" className="block text-[#eeeeee] hover:text-gray-300 transition">
                  +54 9 341 361-5056
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Links + Redes */}
          <div className="flex gap-16">
            {/* Sub-columna Links (título a la izquierda, lista a la derecha) */}
            <div className="flex items-start gap-4">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 pt-1 w-14">Links</p>
              <div className="space-y-3">
                <a href="#servicios" className="block text-[#eeeeee] text-xl font-semibold hover:text-gray-300 transition">Servicios</a>
                <a href="#proyectos" className="block text-[#eeeeee] text-xl font-semibold hover:text-gray-300 transition">Proyectos</a>
                <a href="#nosotros" className="block text-[#eeeeee] text-xl font-semibold hover:text-gray-300 transition">Nosotros</a>
                <a href="#contacto" className="block text-[#eeeeee] text-xl font-semibold hover:text-gray-300 transition">Contacto</a>
              </div>
            </div>

            {/* Sub-columna Redes (título a la izquierda, lista a la derecha) */}
            <div className="flex items-start gap-4">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 pt-1 w-14">Redes</p>
              <div className="space-y-3">
                <a href="#" className="block text-[#eeeeee] text-xl font-semibold hover:text-gray-300 transition">Instagram</a>
                <a href="#" className="block text-[#eeeeee] text-xl font-semibold hover:text-gray-300 transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Franja negra generosa con "Hrodric Studios" en grande */}
        <div className="pt-16 pb-12 text-center bg-black -mx-6 md:-mx-16">
          <h2 className="text-7xl md:text-[8rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-500 leading-none">
            Hrodric Studios
          </h2>
        </div>

        {/* Sección inferior: Copyright + Botón Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hrodric Studios. All Rights Reserved
          </p>

          {/* Botón Back to Top con círculo estilo Arkitek */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#eeeeee] hover:text-white transition text-sm uppercase tracking-wider inline-flex items-center gap-4"
          >
            Back to Top
            <span className="w-8 h-8 rounded-full flex items-center justify-center"
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