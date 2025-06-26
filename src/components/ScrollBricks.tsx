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
}

const ScrollBricks: React.FC = () => {
  const [bricks, setBricks] = useState<Brick[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const generateBricks = () => {
      const colors = [
        'from-purple-500/20 to-purple-700/30',
        'from-cyan-500/20 to-cyan-700/30',
        'from-pink-500/20 to-pink-700/30',
        'from-blue-500/20 to-blue-700/30',
        'from-indigo-500/20 to-indigo-700/30',
        'from-violet-500/20 to-violet-700/30',
        'from-emerald-500/20 to-emerald-700/30',
        'from-orange-500/20 to-orange-700/30'
      ];

      const newBricks: Brick[] = [];
      for (let i = 0; i < 60; i++) {
        newBricks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 500,
          size: 3 + Math.random() * 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          opacity: 0.1 + Math.random() * 0.3,
          animationDelay: Math.random() * 2
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
        const scrollOffset = scrollY * 0.3;
        const yPosition = (brick.y + scrollOffset * (0.3 + Math.sin(brick.id) * 0.2)) % (window.innerHeight + 100);
        const xOffset = Math.sin(scrollY * 0.005 + brick.id) * 15;
        const rotationOffset = scrollY * 0.05 + brick.rotation;
        const scaleOffset = 1 + Math.sin(scrollY * 0.003 + brick.id) * 0.2;

        return (
          <div
            key={brick.id}
            className={`absolute bg-gradient-to-br ${brick.color} rounded-sm transition-all duration-500 ease-out`}
            style={{
              left: `${Math.max(0, Math.min(100, brick.x + xOffset))}%`,
              top: `${yPosition}px`,
              width: `${brick.size}px`,
              height: `${brick.size}px`,
              opacity: brick.opacity,
              transform: `rotate(${rotationOffset}deg) scale(${scaleOffset})`,
              filter: 'blur(0.5px)',
              willChange: 'transform, opacity'
            }}
          />
        );
      })}
    </div>
  );
};

export default ScrollBricks;