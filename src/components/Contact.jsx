import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section id="contactanos" className="py-24 px-6 md:px-12">
      <div className="flex flex-col lg:flex-row justify-center gap-8 items-start max-w-6xl mx-auto">
        {/* Columna izquierda: contenedor decorativo con luz inferior */}
        <div
          className="w-full lg:w-[460px] rounded-[64px] relative overflow-hidden bg-black"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.03)',
          }}
        >
          {/* Iluminación desde abajo */}
          <div
            className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 30%, transparent 100%)',
            }}
          />
          <div className="p-10 min-h-[400px] flex flex-col justify-end items-start">
            <h2
              style={{
                fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                fontWeight: 600,
                fontSize: '64px',
                lineHeight: '72px',
                color: '#ffffff',
                letterSpacing: '-0.05em',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Hablemos de tu próximo proyecto
            </h2>
          </div>
        </div>

        {/* Columna derecha: el formulario */}
        <div className="w-full lg:w-[460px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}