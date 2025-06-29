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

      for (let i = 0; i < 60; i++) {
        brickArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 6 + Math.random() * 20,
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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-breathe" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-breathe" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Puzzle Pieces with enhanced animations */}
        {puzzleBricks.map((brick) => (
          <div
            key={brick.id}
            className={`absolute bg-gradient-to-br ${brick.color} rounded-lg opacity-40 animate-puzzle-float transform transition-all duration-[3000ms] ease-out hover:scale-150 hover:opacity-70 cursor-pointer hover:rotate-45`}
            style={{
              left: `${brick.x}%`,
              top: `${brick.y}%`,
              width: `${brick.size}px`,
              height: `${brick.size}px`,
              animationDelay: `${brick.delay}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              transform: `rotate(${brick.rotation}deg) scale(${0.7 + Math.random() * 0.6})`,
              filter: 'blur(0.3px)',
            }}
          />
        ))}

        {/* Enhanced connecting puzzle pieces */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-xl transform rotate-45 animate-float opacity-60 hover:opacity-80 hover:scale-125 transition-all duration-[1500ms] cursor-pointer"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded-xl transform -rotate-12 animate-float opacity-50 hover:opacity-70 hover:scale-125 transition-all duration-[1500ms] cursor-pointer" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-xl transform rotate-12 animate-float opacity-40 hover:opacity-60 hover:scale-125 transition-all duration-[1500ms] cursor-pointer" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-xl transform rotate-45 animate-float opacity-55 hover:opacity-75 hover:scale-125 transition-all duration-[1500ms] cursor-pointer" style={{animationDelay: '0.5s'}}></div>
        
        {/* Enhanced interlocking puzzle connections */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-cyan-500/15 rounded-xl animate-spin-slow hover:scale-110 transition-all duration-[2000ms]"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-cyan-500/15 to-pink-500/15 rounded-xl animate-reverse-spin hover:scale-110 transition-all duration-[2000ms]"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-pink-500/15 to-purple-500/15 rounded-xl animate-spin-slow hover:scale-110 transition-all duration-[2000ms]" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Floating tech icons */}
        <div className="absolute top-20 right-20 opacity-20 hover:opacity-40 transition-all duration-[1500ms] hover:scale-125 cursor-pointer">
          <Sparkles className="w-8 h-8 text-purple-400 animate-gentle-bounce" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20 hover:opacity-40 transition-all duration-[1500ms] hover:scale-125 cursor-pointer">
          <Zap className="w-6 h-6 text-cyan-400 animate-gentle-bounce" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute top-1/3 left-10 opacity-20 hover:opacity-40 transition-all duration-[1500ms] hover:scale-125 cursor-pointer">
          <Code className="w-7 h-7 text-pink-400 animate-gentle-bounce" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute bottom-1/3 right-10 opacity-20 hover:opacity-40 transition-all duration-[1500ms] hover:scale-125 cursor-pointer">
          <Brain className="w-9 h-9 text-indigo-400 animate-gentle-bounce" style={{animationDelay: '0.5s'}} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Enhanced Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white animate-slide-up hover:scale-105 transition-all duration-[1500ms] cursor-default">
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-cyan-300 transition-all duration-[2000ms]">
                    Shri Harshan
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <div className="animate-slide-up-delay-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light hover:text-gray-100 transition-all duration-[1200ms] cursor-default">
                    AI Developer & Full Stack Engineer
                  </h2>
                  <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 animate-pulse mx-auto lg:mx-0 hover:w-32 hover:h-2 transition-all duration-[1500ms]"></div>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed animate-slide-up-delay-2 mx-auto lg:mx-0 hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
                  4th year student at NITK, passionate about AI and building intelligent solutions. 
                  Specializing in NLP, cybersecurity, and modern web technologies.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-3 justify-center lg:justify-start">
              <button 
                onClick={scrollToProjects}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl btn-3d overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 group-hover:scale-110 transition-all duration-[1200ms]" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
              </button>
              
              <button className="group px-6 md:px-8 py-3 md:py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl btn-3d relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-[1200ms]" />
                  <span>Download CV</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
              </button>
            </div>

            {/* Enhanced Social Links */}
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
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Enhanced Profile Image with 3D Effects */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div 
              className="relative transform transition-all duration-[2000ms] ease-out hover:scale-110"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`
              }}
            >
              {/* Enhanced animated puzzle pieces around profile */}
              <div className="absolute -inset-16 md:-inset-20">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-4 md:w-6 h-4 md:h-6 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-lg transform animate-float opacity-50 hover:opacity-80 hover:scale-150 transition-all duration-[1500ms] cursor-pointer`}
                    style={{
                      left: `${30 + Math.cos(i * 18 * Math.PI / 180) * (window.innerWidth < 768 ? 110 : 150)}px`,
                      top: `${30 + Math.sin(i * 18 * Math.PI / 180) * (window.innerWidth < 768 ? 110 : 150)}px`,
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: `${6 + (i % 4)}s`,
                      transform: `rotate(${i * 18}deg) scale(${0.7 + (i % 4) * 0.1})`
                    }}
                  />
                ))}
              </div>

              {/* Enhanced multi-layer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30 scale-110 animate-glow-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-2xl opacity-20 scale-105 animate-glow-pulse" style={{animationDelay: '2s'}}></div>
              
              {/* Enhanced main profile container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full p-1 card-hover">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden relative">
                  {/* Profile Image */}
                  <img 
                    src="/Image.jpg" 
                    alt="Shri Harshan - AI Developer & Full Stack Engineer"
                    className="w-full h-full object-cover rounded-full transition-all duration-[1500ms] hover:scale-110 hover:brightness-110"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-cyan-600/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                </div>
              </div>
              
              {/* Enhanced floating AI elements */}
              <div className="absolute -top-6 md:-top-8 -right-6 md:-right-8 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-gentle-bounce card-hover cursor-pointer">
                <span className="text-white font-bold text-sm md:text-base">AI</span>
              </div>
              <div className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 w-10 md:w-14 h-10 md:h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-gentle-bounce card-hover cursor-pointer" style={{animationDelay: '1s'}}>
                <span className="text-white font-bold text-xs md:text-sm">NLP</span>
              </div>
              <div className="absolute top-1/2 -right-8 md:-right-12 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg animate-gentle-bounce card-hover cursor-pointer" style={{animationDelay: '0.5s'}}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm">ML</span>
                </div>
              </div>
              <div className="absolute top-1/4 -left-8 md:-left-10 w-9 md:w-11 h-9 md:h-11 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg animate-gentle-bounce card-hover cursor-pointer" style={{animationDelay: '1.5s'}}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce cursor-pointer card-hover" onClick={scrollToAbout}>
        <div className="relative p-2">
          <ChevronDown className="w-6 md:w-8 h-6 md:h-8 text-gray-400 hover:text-white transition-all duration-[1200ms]" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 hover:opacity-30 transition-opacity duration-[1500ms] blur-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;