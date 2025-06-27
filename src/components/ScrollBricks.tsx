import React, { useEffect, useState } from 'react';

interface PuzzleBrick {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  opacity: number;
  animationDelay: number;
  speed: number;
  shape: 'square' | 'circle' | 'triangle' | 'hexagon';
  connectionType: 'knob' | 'slot' | 'flat';
}

const ScrollBricks: React.FC = () => {
  const [puzzleBricks, setPuzzleBricks] = useState<PuzzleBrick[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const generatePuzzleBricks = () => {
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

      const shapes: PuzzleBrick['shape'][] = ['square', 'circle', 'triangle', 'hexagon'];
      const connectionTypes: PuzzleBrick['connectionType'][] = ['knob', 'slot', 'flat'];

      const newBricks: PuzzleBrick[] = [];
      for (let i = 0; i < 60; i++) {
        newBricks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 600,
          size: 4 + Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          opacity: 0.1 + Math.random() * 0.3,
          animationDelay: Math.random() * 4,
          speed: 0.2 + Math.random() * 0.4,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          connectionType: connectionTypes[Math.floor(Math.random() * connectionTypes.length)]
        });
      }
      setPuzzleBricks(newBricks);
    };

    generatePuzzleBricks();
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const newScrollY = window.scrollY;
          setScrollY(newScrollY);
          
          // Trigger matching animation at certain scroll points
          const scrollProgress = newScrollY / (document.body.scrollHeight - window.innerHeight);
          setIsMatching(scrollProgress > 0.2 && scrollProgress < 0.8);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getShapeClasses = (shape: PuzzleBrick['shape'], connectionType: PuzzleBrick['connectionType']) => {
    let baseClasses = '';
    
    switch (shape) {
      case 'circle':
        baseClasses = 'rounded-full';
        break;
      case 'triangle':
        baseClasses = 'rounded-sm transform rotate-45';
        break;
      case 'hexagon':
        baseClasses = 'rounded-lg transform rotate-30';
        break;
      default:
        baseClasses = 'rounded-sm';
    }

    // Add connection indicators
    switch (connectionType) {
      case 'knob':
        baseClasses += ' border-2 border-white/20';
        break;
      case 'slot':
        baseClasses += ' border border-white/10 shadow-inner';
        break;
      default:
        baseClasses += ' border border-white/5';
    }

    return baseClasses;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {puzzleBricks.map((brick) => {
        const scrollOffset = scrollY * 0.15;
        const yPosition = (brick.y + scrollOffset * brick.speed) % (window.innerHeight + 200);
        const xOffset = Math.sin(scrollY * 0.002 + brick.id) * 15;
        const rotationOffset = scrollY * 0.05 + brick.rotation;
        const scaleOffset = 1 + Math.sin(scrollY * 0.002 + brick.id) * 0.2;
        
        // Matching animation
        const matchingScale = isMatching ? 1.2 + Math.sin(Date.now() * 0.005 + brick.id) * 0.1 : 1;
        const matchingOpacity = isMatching ? brick.opacity * 1.5 : brick.opacity;
        const matchingGlow = isMatching ? 'drop-shadow-lg' : '';

        return (
          <div
            key={brick.id}
            className={`absolute bg-gradient-to-br ${brick.color} ${getShapeClasses(brick.shape, brick.connectionType)} transition-all duration-1000 ease-out hover:scale-150 hover:opacity-80 cursor-pointer ${matchingGlow}`}
            style={{
              left: `${Math.max(0, Math.min(100, brick.x + xOffset))}%`,
              top: `${yPosition}px`,
              width: `${brick.size * scaleOffset * matchingScale}px`,
              height: `${brick.size * scaleOffset * matchingScale}px`,
              opacity: matchingOpacity,
              transform: `rotate(${rotationOffset}deg) scale(${scaleOffset * matchingScale})`,
              filter: `blur(0.2px) ${isMatching ? 'brightness(1.3) saturate(1.2)' : ''}`,
              willChange: 'transform, opacity',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        );
      })}
      
      {/* Connecting lines between puzzle pieces during matching */}
      {isMatching && (
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {puzzleBricks.slice(0, 10).map((brick, index) => {
            const nextBrick = puzzleBricks[(index + 1) % 10];
            return (
              <line
                key={`connection-${brick.id}`}
                x1={`${brick.x}%`}
                y1={`${(brick.y + scrollY * 0.15 * brick.speed) % (window.innerHeight + 200)}px`}
                x2={`${nextBrick.x}%`}
                y2={`${(nextBrick.y + scrollY * 0.15 * nextBrick.speed) % (window.innerHeight + 200)}px`}
                stroke="url(#puzzleGradient)"
                strokeWidth="1"
                className="animate-pulse"
              />
            );
          })}
          <defs>
            <linearGradient id="puzzleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default ScrollBricks;