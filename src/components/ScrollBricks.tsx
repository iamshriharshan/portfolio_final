import React, { useEffect, useState } from 'react';

interface Brick {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  opacity: number;
  animationDelay: number;
  speed: number;
}

const ScrollBricks: React.FC = () => {
  const [bricks, setBricks] = useState<Brick[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const generateBricks = () => {
      const colors = [
        'from-purple-500/15 to-purple-700/20',
        'from-cyan-500/15 to-cyan-700/20',
        'from-pink-500/15 to-pink-700/20',
        'from-blue-500/15 to-blue-700/20',
        'from-indigo-500/15 to-indigo-700/20',
        'from-violet-500/15 to-violet-700/20',
        'from-emerald-500/15 to-emerald-700/20',
        'from-orange-500/15 to-orange-700/20'
      ];

      const newBricks: Brick[] = [];
      for (let i = 0; i < 40; i++) { // Reduced number of bricks
        newBricks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 500,
          size: 2 + Math.random() * 4, // Smaller sizes
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          opacity: 0.05 + Math.random() * 0.15, // Lower opacity
          animationDelay: Math.random() * 3,
          speed: 0.1 + Math.random() * 0.2 // Much slower speed
        });
      }
      setBricks(newBricks);
    };

    generateBricks();
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bricks.map((brick) => {
        const scrollOffset = scrollY * 0.1; // Much slower scroll effect
        const yPosition = (brick.y + scrollOffset * brick.speed) % (window.innerHeight + 100);
        const xOffset = Math.sin(scrollY * 0.001 + brick.id) * 8; // Slower and smaller movement
        const rotationOffset = scrollY * 0.02 + brick.rotation; // Slower rotation
        const scaleOffset = 1 + Math.sin(scrollY * 0.001 + brick.id) * 0.1; // Subtle scaling

        return (
          <div
            key={brick.id}
            className={`absolute bg-gradient-to-br ${brick.color} rounded-sm transition-all duration-1000 ease-out`}
            style={{
              left: `${Math.max(0, Math.min(100, brick.x + xOffset))}%`,
              top: `${yPosition}px`,
              width: `${brick.size}px`,
              height: `${brick.size}px`,
              opacity: brick.opacity,
              transform: `rotate(${rotationOffset}deg) scale(${scaleOffset})`,
              filter: 'blur(0.3px)',
              willChange: 'transform, opacity'
            }}
          />
        );
      })}
    </div>
  );
};

export default ScrollBricks;