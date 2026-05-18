import { useState } from 'react';

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
  { src: '/images/partners/mercury.webp', alt: 'Mercury', link: 'https://mercury-market.vercel.app' },
  { src: '/images/partners/casaryn.png', alt: 'Casaryn', link: 'https://casaryn.vercel.app' },
  { src: '/images/partners/h.png', alt: 'H', link: 'https://hrodricstudios.hrodricstudios.workers.dev/' },
  { src: '/images/partners/r.png', alt: 'r', link: 'https://hrodricstudios.hrodricstudios.workers.dev/' },
  { src: '/images/partners/o.png', alt: 'o', link: 'https://hrodricstudios.hrodricstudios.workers.dev/' },
  { src: '/images/partners/d.png', alt: 'd', link: 'https://hrodricstudios.hrodricstudios.workers.dev/' },
  { src: '/images/partners/r.png', alt: 'r', link: 'https://hrodricstudios.hrodricstudios.workers.dev/' },
  { src: '/images/partners/i.png', alt: 'i', link: 'https://hrodricstudios.hrodricstudios.workers.dev/' },
  { src: '/images/partners/c.png', alt: 'c', link: 'https://hrodricstudios.hrodricstudios.workers.dev/' },
  ];

  return (
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
        .partner-icon {
          filter: grayscale(100%) brightness(1.8) contrast(1.3);
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .partner-link:hover .partner-icon {
          filter: grayscale(0%) brightness(1) contrast(1);
          transform: scale(1.25);
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className={`flex gap-32 w-max animate-marquee ${isPaused ? 'paused' : ''}`}>
        {/* Grupo original */}
        <div className="flex gap-32">
          {partners.map((letter, index) => (
            <a
              key={`original-${index}`}
              href={letter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 partner-link"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img
                src={letter.src}
                alt={letter.alt}
                className="h-12 w-auto object-contain partner-icon"
              />
            </a>
          ))}
        </div>

        {/* Grupo duplicado */}
        <div className="flex gap-32">
          {partners.map((letter, index) => (
            <a
              key={`duplicado-${index}`}
              href={letter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 partner-link"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img
                src={letter.src}
                alt={letter.alt}
                className="h-12 w-auto object-contain partner-icon"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}