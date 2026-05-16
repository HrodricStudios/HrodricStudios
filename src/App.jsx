import { useState } from 'react';
import Logo from '@/components/Logo';
import NavIcons from '@/components/NavIcons';
import VideoBackground from '@/components/VideoBackground';
import SplashAnimation from '@/components/SplashAnimation';
import Services from '@/components/Services';
import Partners from '@/components/Partners'; // <--- 1. Importamos tu nuevo componente
import Footer from '@/components/Footer';

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
          <section className="flex flex-col justify-center min-h-[calc(100vh-6rem)] px-6 md:pl-[18%] md:pr-0">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none md:whitespace-nowrap">
                <span className="text-white">We deliver.</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-500">
                  Fast.
                </span>
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-gray-300">
                Robustez y velocidad. Código sólido que llega antes y rinde siempre.
              </p>

              <a
                href="https://hrodricstudio.vercel.app"
                className="mt-12 inline-block text-white text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
              >
                CONECTEMOS
              </a>
            </div>
          </section>

          {/* =============== FRANJA DE LETRAS =============== */}
          <Partners /> {/* <--- 2. Reemplazo completo de la sección vieja */}

          {/* =============== SERVICIOS =============== */}
          <Services />

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