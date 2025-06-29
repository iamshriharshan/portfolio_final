import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles, Zap, Code, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [puzzleBricks, setPuzzleBricks] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    delay: number; 
    color: string;
    size: number;
    rotation: number;
    speed: number;
  }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const generatePuzzleBricks = () => {
      const brickArray = [];
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

      for (let i = 0; i < 40; i++) {
        brickArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 4 + Math.random() * 12,
          rotation: Math.random() * 360,
          speed: 0.5 + Math.random() * 1.5
        });
      }
      setPuzzleBricks(brickArray);
    };

    generatePuzzleBricks();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-breathe" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-indigo-500/6 to-purple-500/6 rounded-full blur-3xl animate-breathe" style={{animationDelay: '2s'}}></div>
        
        {/* Premium Floating Puzzle Pieces */}
        {puzzleBricks.map((brick) => (
          <div
            key={brick.id}
            className={`absolute bg-gradient-to-br ${brick.color} rounded-lg opacity-30 animate-gentle-bounce transform transition-all duration-[1200ms] ease-out hover:scale-125 hover:opacity-60 cursor-pointer`}
            style={{
              left: `${brick.x}%`,
              top: `${brick.y}%`,
              width: `${brick.size}px`,
              height: `${brick.size}px`,
              animationDelay: `${brick.delay}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              transform: `rotate(${brick.rotation}deg) scale(${0.8 + Math.random() * 0.4})`,
              filter: 'blur(0.2px)',
            }}
          />
        ))}

        {/* Premium connecting puzzle pieces */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-lg transform rotate-45 animate-gentle-bounce opacity-50 hover:opacity-70 hover:scale-125 transition-all duration-[1200ms] cursor-pointer"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-cyan-500/40 to-pink-500/40 rounded-lg transform -rotate-12 animate-gentle-bounce opacity-40 hover:opacity-60 hover:scale-125 transition-all duration-[1200ms] cursor-pointer" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-gradient-to-br from-pink-500/40 to-purple-500/40 rounded-lg transform rotate-12 animate-gentle-bounce opacity-35 hover:opacity-55 hover:scale-125 transition-all duration-[1200ms] cursor-pointer" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-7 h-7 bg-gradient-to-br from-indigo-500/40 to-cyan-500/40 rounded-lg transform rotate-45 animate-gentle-bounce opacity-45 hover:opacity-65 hover:scale-125 transition-all duration-[1200ms] cursor-pointer" style={{animationDelay: '0.5s'}}></div>

        {/* Premium floating tech icons */}
        <div className="absolute top-20 right-20 opacity-15 hover:opacity-30 transition-all duration-[1200ms] hover:scale-110 cursor-pointer">
          <Sparkles className="w-6 h-6 text-purple-400 animate-gentle-bounce" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-15 hover:opacity-30 transition-all duration-[1200ms] hover:scale-110 cursor-pointer">
          <Zap className="w-5 h-5 text-cyan-400 animate-gentle-bounce" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute top-1/3 left-10 opacity-15 hover:opacity-30 transition-all duration-[1200ms] hover:scale-110 cursor-pointer">
          <Code className="w-5 h-5 text-pink-400 animate-gentle-bounce" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute bottom-1/3 right-10 opacity-15 hover:opacity-30 transition-all duration-[1200ms] hover:scale-110 cursor-pointer">
          <Brain className="w-6 h-6 text-indigo-400 animate-gentle-bounce" style={{animationDelay: '0.5s'}} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Premium Content - Left Side */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white animate-slide-up hover:scale-105 transition-all duration-[1200ms] cursor-default">
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-cyan-300 transition-all duration-[1500ms]">
                    Shri Harshan
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <div className="animate-slide-up-delay-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light hover:text-gray-100 transition-all duration-[1200ms] cursor-default">
                    AI Developer & Full Stack Engineer
                  </h2>
                  <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 mx-auto lg:mx-0 hover:w-28 hover:h-1.5 transition-all duration-[1200ms]"></div>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed animate-slide-up-delay-2 mx-auto lg:mx-0 hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
                  4th year student at NITK, passionate about AI and building intelligent solutions. 
                  Specializing in NLP, cybersecurity, and modern web technologies.
                </p>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-3 justify-center lg:justify-start">
              <button 
                onClick={scrollToProjects}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl btn-3d overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 group-hover:scale-110 transition-all duration-[1200ms]" />
                </span>
              </button>
              
              <button className="group px-6 md:px-8 py-3 md:py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl btn-3d relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-[1200ms]" />
                  <span>Download CV</span>
                </span>
              </button>
            </div>

            {/* Premium Social Links */}
            <div className="flex space-x-4 md:space-x-6 animate-slide-up-delay-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/iamshriharshan', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shri-harshan/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:harshanofficial05@gmail.com', label: 'Email' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 card-hover overflow-hidden"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 md:w-6 h-5 md:h-6 icon-hover relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Premium Profile Image with Tech Bubbles - Right Side */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div 
              className="relative transform transition-all duration-[1500ms] ease-out hover:scale-105"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 1.5}deg) rotateX(${-mousePosition.y * 1.5}deg)`
              }}
            >
              {/* Premium animated puzzle pieces around profile */}
              <div className="absolute -inset-20 md:-inset-24">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-3 md:w-4 h-3 md:h-4 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-md transform animate-gentle-bounce opacity-40 hover:opacity-70 hover:scale-125 transition-all duration-[1200ms] cursor-pointer`}
                    style={{
                      left: `${50 + Math.cos(i * 22.5 * Math.PI / 180) * (window.innerWidth < 768 ? 120 : 150)}%`,
                      top: `${50 + Math.sin(i * 22.5 * Math.PI / 180) * (window.innerWidth < 768 ? 120 : 150)}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${4 + (i % 3)}s`,
                      transform: `rotate(${i * 22.5}deg) scale(${0.8 + (i % 3) * 0.1})`
                    }}
                  />
                ))}
              </div>

              {/* Premium multi-layer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-20 scale-105 animate-glow-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-xl opacity-15 scale-102 animate-glow-pulse" style={{animationDelay: '2s'}}></div>
              
              {/* Premium main profile container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full p-1 card-hover">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden relative">
                  {/* Profile Image */}
                  <img 
                    src="/Image.jpg" 
                    alt="Shri Harshan - AI Developer & Full Stack Engineer"
                    className="w-full h-full object-cover rounded-full transition-all duration-[1200ms] hover:scale-105 hover:brightness-110"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-cyan-600/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-[1200ms]"></div>
                </div>
              </div>
              
              {/* Premium floating Tech Bubbles - Positioned around image with proper alignment */}
              {/* AI - Top Center */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center animate-gentle-bounce card-hover cursor-pointer shadow-lg shadow-purple-500/30 border border-purple-400/20">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              
              {/* 3D - Top Right */}
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center animate-gentle-bounce card-hover cursor-pointer shadow-lg shadow-pink-500/30 border border-pink-400/20" style={{animationDelay: '0.5s'}}>
                <span className="text-white font-bold text-xs">3D</span>
              </div>
              
              {/* DEV - Right Center */}
              <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-13 h-13 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center animate-gentle-bounce card-hover cursor-pointer shadow-lg shadow-orange-500/30 border border-orange-400/20" style={{animationDelay: '1s'}}>
                <span className="text-white font-bold text-xs">DEV</span>
              </div>
              
              {/* SEC - Bottom Right */}
              <div className="absolute -bottom-4 -right-6 w-11 h-11 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center animate-gentle-bounce card-hover cursor-pointer shadow-lg shadow-emerald-500/30 border border-emerald-400/20" style={{animationDelay: '1.5s'}}>
                <span className="text-white font-bold text-xs">SEC</span>
              </div>
              
              {/* ML - Bottom Center */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center animate-gentle-bounce card-hover cursor-pointer shadow-lg shadow-cyan-500/30 border border-cyan-400/20" style={{animationDelay: '2s'}}>
                <span className="text-white font-bold text-xs">ML</span>
              </div>
              
              {/* NLP - Left Center */}
              <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center animate-gentle-bounce card-hover cursor-pointer shadow-lg shadow-indigo-500/30 border border-indigo-400/20" style={{animationDelay: '2.5s'}}>
                <span className="text-white font-bold text-xs">NLP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Premium Scroll Indicator - Just Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce cursor-pointer" onClick={scrollToAbout}>
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white hover:scale-125 transition-all duration-[1200ms]" />
      </div>
    </section>
  );
};

export default Hero;