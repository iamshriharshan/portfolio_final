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
        'from-purple-500 to-purple-700',
        'from-cyan-500 to-cyan-700',
        'from-pink-500 to-pink-700',
        'from-blue-500 to-blue-700',
        'from-indigo-500 to-indigo-700',
        'from-violet-500 to-violet-700',
        'from-emerald-500 to-emerald-700',
        'from-orange-500 to-orange-700'
      ];

      const newBricks: Brick[] = [];
      for (let i = 0; i < 80; i++) {
        newBricks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 500, // Spread across viewport height
          size: 4 + Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          opacity: 0.1 + Math.random() * 0.4,
          animationDelay: Math.random() * 2
        });
      }
      setBricks(newBricks);
    };

    generateBricks();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bricks.map((brick) => {
        const scrollOffset = scrollY * 0.5;
        const yPosition = (brick.y + scrollOffset * (0.5 + Math.sin(brick.id) * 0.3)) % window.innerHeight;
        const xOffset = Math.sin(scrollY * 0.01 + brick.id) * 20;
        const rotationOffset = scrollY * 0.1 + brick.rotation;
        const scaleOffset = 1 + Math.sin(scrollY * 0.005 + brick.id) * 0.3;

        return (
          <div
            key={brick.id}
            className={`absolute bg-gradient-to-br ${brick.color} rounded-sm transition-all duration-1000 ease-out animate-pulse`}
            style={{
              left: `${brick.x + xOffset}%`,
              top: `${yPosition}px`,
              width: `${brick.size}px`,
              height: `${brick.size}px`,
              opacity: brick.opacity,
              transform: `rotate(${rotationOffset}deg) scale(${scaleOffset})`,
              animationDelay: `${brick.animationDelay}s`,
              filter: 'blur(0.5px)'
            }}
          />
        );
      })}
    </div>
  );
};

export default ScrollBricks;