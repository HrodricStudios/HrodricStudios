import { useState } from 'react';
import Logo from '@/components/Logo';
import NavIcons from '@/components/NavIcons';
import VideoBackground from '@/components/VideoBackground';
import SplashAnimation from '@/components/SplashAnimation';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Nosotros from '@/components/Nosotros';
import Contact from '@/components/Contact';
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
          <div className="fade-in-up" style={{ animationDelay: '800ms' }}>
            <Partners />
          </div>

          {/* =============== SERVICIOS =============== */}
          <Services />

          {/* =============== NOSOTROS =============== */}
          <Nosotros />

          <div className="fade-in-up" style={{ animationDelay: '1200ms' }}>
            <Contact />
          </div>

          {/* =============== FOOTER =============== */}
          <Footer />
        </main>
      )}
    </>
  );
}