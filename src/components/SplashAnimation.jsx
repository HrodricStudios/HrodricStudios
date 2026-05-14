import { useEffect, useState, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const SplashAnimation = ({ onFadeOut }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);
  const playerRef = useRef(null);

  // Cuando la animación termina, activamos el fade‑out
  const handleComplete = () => {
    setStartFadeOut(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onFadeOut) onFadeOut();
    }, 800);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-800 ${
        startFadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Player
        ref={playerRef}
        src="/animations/intro.json"
        autoplay
        keepLastFrame
        onEvent={(event) => {
          if (event === 'complete') handleComplete();
        }}
        style={{ width: '100%', maxWidth: 600, height: 'auto' }}
      />
    </div>
  );
};

export default SplashAnimation;