import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bricks, setBricks] = useState<Array<{ id: number; x: number; y: number; delay: number; color: string }>>([]);

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
    // Generate AI square puzzle pieces
    const generateBricks = () => {
      const brickArray = [];
      const colors = [
        'from-purple-500/20 to-purple-700/30',
        'from-cyan-500/20 to-cyan-700/30',
        'from-pink-500/20 to-pink-700/30',
        'from-blue-500/20 to-blue-700/30',
        'from-indigo-500/20 to-indigo-700/30',
        'from-violet-500/20 to-violet-700/30'
      ];

      for (let i = 0; i < 35; i++) {
        brickArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setBricks(brickArray);
    };

    generateBricks();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* AI Square Puzzle Animation Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>
        
        {/* Animated AI Squares */}
        {bricks.map((brick) => (
          <div
            key={brick.id}
            className={`absolute w-3 h-3 bg-gradient-to-br ${brick.color} rounded-sm opacity-40 animate-float transform transition-all duration-2000 ease-out`}
            style={{
              left: `${brick.x}%`,
              top: `${brick.y}%`,
              animationDelay: `${brick.delay}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.6 + Math.random() * 0.4})`,
            }}
          />
        ))}

        {/* Large floating square pieces */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded transform rotate-45 animate-float opacity-25"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-br from-cyan-500/30 to-pink-500/30 rounded transform -rotate-12 animate-float opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded transform rotate-12 animate-float opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded transform rotate-45 animate-float opacity-25" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl font-bold text-white animate-slide-up">
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Shri Harshan
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <div className="animate-slide-up-delay-1">
                  <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                    AI Developer & Full Stack Engineer
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed animate-slide-up-delay-2">
                  4th year student at NITK, passionate about AI and building intelligent solutions. 
                  Specializing in NLP, cybersecurity, and modern web technologies.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-3">
              <button 
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl transition-all duration-500 hover:border-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 hover:bg-purple-500/10 hover:scale-[1.02] hover:-translate-y-1">
                <span className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-slide-up-delay-4">
              {[
                { icon: Github, href: 'https://github.com/iamshriharshan', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:harshanofficial05@gmail.com', label: 'Email' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 hover:border-purple-500/50"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image with 3D Effects */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              className="relative transform transition-transform duration-1000 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
              }}
            >
              {/* Animated square pieces around profile */}
              <div className="absolute -inset-20">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-4 h-4 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded transform animate-float opacity-50`}
                    style={{
                      left: `${20 + Math.cos(i * 30 * Math.PI / 180) * 120}px`,
                      top: `${20 + Math.sin(i * 30 * Math.PI / 180) * 120}px`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + (i % 3)}s`,
                      transform: `rotate(${i * 30}deg)`
                    }}
                  />
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-xl opacity-30 scale-110 animate-pulse"></div>
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full p-1 transform hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden relative">
                  {/* Profile Image - Clean without grid overlay */}
                  <img 
                    src="/Image.jpg" 
                    alt="Shri Harshan - AI Developer & Full Stack Engineer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating AI elements */}
              <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce transform rotate-12">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce transform -rotate-12" style={{animationDelay: '1s'}}>
                <span className="text-white font-bold text-xs">NLP</span>
              </div>
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded animate-bounce transform rotate-45" style={{animationDelay: '0.5s'}}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs transform -rotate-45">ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;