import { useState, useEffect } from 'react';
import Logo from '@/components/Logo';          // Vite resolverá Logo.jsx sin necesidad de extensión
import NavIcons from '@/components/NavIcons';
import VideoBackground from '@/components/VideoBackground';
import SplashAnimation from '@/components/SplashAnimation';
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
          <section className="bg-black py-10 overflow-hidden">
            <style>{`
              @keyframes marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 50s linear infinite;
              }
              .spacer {
                width: 15vw;
              }
            `}</style>

            <div className="flex gap-32 w-max animate-marquee">
              {/* Grupo original */}
              <div className="flex gap-32">
                {[
                  { src: '/images/partners/mercury.webp', alt: 'Mercury', link: 'https://mercury-market.vercel.app' },
                  { src: '/images/partners/h.png', alt: 'H', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/r.png', alt: 'r', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/o.png', alt: 'o', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/d.png', alt: 'd', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/r.png', alt: 'r', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/i.png', alt: 'i', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/c.png', alt: 'c', link: 'https://hrodricstudios.vercel.app' },
                ].map((letter, index) => (
                  <a
                    key={index}
                    href={letter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <img
                      src={letter.src}
                      alt={letter.alt}
                      className="h-12 w-auto object-contain transition-all duration-300 cursor-pointer"
                      style={{ filter: 'grayscale(100%) brightness(1.8) contrast(1.3)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%) brightness(1) contrast(1)';
                        e.currentTarget.style.transform = 'scale(1.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%) brightness(1.8) contrast(1.3)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </a>
                ))}
                <div className="spacer" />
              </div>

              {/* Grupo duplicado */}
              <div className="flex gap-32">
                {[
                  { src: '/images/partners/mercury.webp', alt: 'Mercury', link: 'https://mercury-market.vercel.app' },
                  { src: '/images/partners/h.png', alt: 'H', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/r.png', alt: 'r', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/o.png', alt: 'o', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/d.png', alt: 'd', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/r.png', alt: 'r', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/i.png', alt: 'i', link: 'https://hrodricstudios.vercel.app' },
                  { src: '/images/partners/c.png', alt: 'c', link: 'https://hrodricstudios.vercel.app' },
                ].map((letter, index) => (
                  <a
                    key={`dup-${index}`}
                    href={letter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <img
                      src={letter.src}
                      alt={letter.alt}
                      className="h-12 w-auto object-contain transition-all duration-300 cursor-pointer"
                      style={{ filter: 'grayscale(100%) brightness(1.8) contrast(1.3)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%) brightness(1) contrast(1)';
                        e.currentTarget.style.transform = 'scale(1.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%) brightness(1.8) contrast(1.3)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </a>
                ))}
                <div className="spacer" />
              </div>
            </div>
          </section>

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