import React, { useEffect, useRef } from 'react';
import './IntroAnimations.css';

const IntroAnimations = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const glitchRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const glitch = glitchRef.current;

    // Mouse movement parallax for 3D effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      if (text) {
        text.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    // Glitch text animation interval
    const glitchInterval = setInterval(() => {
      if (glitch) {
        const originalText = "INTERO";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let glitched = "";
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.7) {
            glitched += chars[Math.floor(Math.random() * chars.length)];
          } else {
            glitched += originalText[i];
          }
        }
        glitch.textContent = glitched;
        setTimeout(() => {
          glitch.textContent = originalText;
        }, 150);
      }
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="intro-container" ref={containerRef}>
      {/* Animated gradient background with floating particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${Math.random() * 5}s`,
            '--size': `${Math.random() * 8 + 4}px`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--duration': `${Math.random() * 10 + 10}s`,
          }} />
        ))}
      </div>

      {/* Main content */}
      <div className="content-wrapper">
        <div className="glow-ring"></div>
        <div className="glow-ring-2"></div>

        <div className="text-wrapper" ref={textRef}>
          <h1 className="main-title">
            <span className="title-line">Welcome to</span>
            <span className="title-main" ref={glitchRef}>INTERO</span>
            <span className="title-line">Creative Studio</span>
          </h1>
        </div>

        <div className="subtitle-wrapper">
          <p className="subtitle">✦ Digital Experiences ✦</p>
          <div className="underline-animation"></div>
        </div>

        <div className="cta-wrapper">
          <button className="cta-button" onClick={() => alert('Explore clicked!')}>
            <span>Explore</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="corner-bracket top-left"></div>
        <div className="corner-bracket top-right"></div>
        <div className="corner-bracket bottom-left"></div>
        <div className="corner-bracket bottom-right"></div>

        {/* Scanning line effect */}
        <div className="scan-line"></div>
      </div>
    </div>
  );
};

export default IntroAnimations;