'use client';
import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;   // velocidad al 30%
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[-5] pointer-events-none">
      {/* Video con mezcla screen (negro puro invisible, solo se ven los brillos) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'grayscale(100%) contrast(2.5) brightness(1.3)',
          mixBlendMode: 'screen',
          opacity: 0.4,
        }}
      >
        <source src="/animations/background.mp4" type="video/mp4" />
      </video>

      {/* Capa plateada estática muy sutil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(220,220,240,0.1) 0%, transparent 70%)',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}