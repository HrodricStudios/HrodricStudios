import { useState } from 'react';
import Logo from '@/components/Logo';
import NavIcons from '@/components/NavIcons';
import VideoBackground from '@/components/VideoBackground';
import SplashAnimation from '@/components/SplashAnimation';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
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
          <Hero />

          {/* =============== FRANJA DE LETRAS =============== */}
          <Partners />

          {/* =============== SERVICIOS =============== */}
          <Services />

          {/* =============== NOSOTROS =============== */}
          <section id="nosotros" className="py-24 px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
              Nosotros
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              {[0].map((i) => (
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