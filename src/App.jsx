import { useState } from 'react';
import Logo from '@/components/Logo';
import NavIcons from '@/components/NavIcons';
import VideoBackground from '@/components/VideoBackground';
import SplashAnimation from '@/components/SplashAnimation';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';

export default function App() {
  const [stage, setStage] = useState(() =>
    sessionStorage.getItem('introSeen') ? 'content' : 'animation'
  );

  const handleFadeOut = () => {
    sessionStorage.setItem('introSeen', 'true');
    setStage('content');
  };

  return (
    <>
      <VideoBackground />
      <Logo visible={stage === 'content'} />
      <NavIcons visible={stage === 'content'} />

      {stage === 'animation' && (
        <SplashAnimation onFadeOut={handleFadeOut} />
      )}

      {stage === 'content' && (
        <main className="min-h-screen pt-24">
          {/* =============== HERO =============== */}
          <section className="flex flex-col lg:flex-row items-start justify-center min-h-screen px-6 md:px-8 gap-0">
            {/* Columna izquierda: texto */}
            <div className="w-full lg:w-1/2 flex justify-end lg:pr-6 pt-12 lg:pt-24">
              <div className="max-w-[500px]">
                <h1
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none fade-in-up font-futuristic tracking-tight"
                style={{ animationDelay: '400ms' }}
              >
                Digitaliza tu visión
              </h1>
                <p
                  className="text-2xl md:text-3xl text-gray-400 mt-6 fade-in-up"
                  style={{ animationDelay: '200ms' }}
                >
                  Ideas que se mueven, rápido.
                </p>
              </div>
            </div>

            {/* Columna derecha: Formulario con toggle */}
            <div className="w-full lg:w-1/2 flex justify-start lg:pl-4 lg:pt-20 fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="w-full max-w-[460px] bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </section>

          {/* =============== FRANJA DE LETRAS =============== */}
          <Partners />

          {/* =============== SERVICIOS =============== */}
          <Services />

          {/* =============== PROYECTOS =============== */}
          <Projects />

          {/* =============== NOSOTROS =============== */}
          <section id="nosotros" className="py-24 px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
              Nosotros
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative w-56 h-56 md:w-64 md:h-64 transition-transform duration-500 ease-out group-hover:scale-[1.12]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/images/us.png"
                        alt="Participante"
                        className="w-[75%] h-[75%] object-cover rounded-full"
                        style={{ filter: 'grayscale(0%)' }}
                      />
                    </div>
                    <img
                      src="/images/shield.webp"
                      alt="Escudo"
                      className="absolute inset-0 w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(192,192,192,0.7)]"
                    />
                  </div>
                  <p className="mt-4 text-gray-400 text-sm uppercase tracking-wider">
                    Lorem ipsum dolor
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* =============== FOOTER =============== */}
          <Footer />
        </main>
      )}
    </>
  );
}