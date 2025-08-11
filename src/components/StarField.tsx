import React, { useEffect, useRef } from 'react';

const STAR_COUNT = 300;
const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<(HTMLDivElement | null)[]>([]);
  // Generate stars only once
  const stars = React.useMemo(() => Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    size: Math.random() * 2.5 + 0.5,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 3,
    animationDuration: Math.random() * 3 + 2
  })), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      starsRef.current.forEach((star, idx) => {
        if (star) {
          // Parallax: farther stars move less
          const depth = (idx % 20) / 20 + 0.2;
          star.style.transform = `translate(${x * 20 * depth}px, ${y * 20 * depth}px)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star, i) => (
        <div
          key={star.id}
          ref={el => starsRef.current[i] = el}
          className="absolute bg-white rounded-full opacity-70 animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`
          }}
        />
      ))}
    </div>
  );
};

export default StarField;