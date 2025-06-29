import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Brain, Shield, Cpu, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* Clean Premium Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/15 via-transparent to-pink-900/15"></div>
        
        {/* Minimal floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-breathe" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl animate-breathe" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Clean Content Section */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white animate-slide-up leading-tight">
                  <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-cyan-300 transition-all duration-[2000ms] cursor-default">
                    Shri Harshan
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <div className="animate-slide-up-delay-1">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light leading-relaxed cursor-default">
                    AI Developer & Full Stack Engineer
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-6 mx-auto lg:mx-0"></div>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed animate-slide-up-delay-2 mx-auto lg:mx-0 cursor-default">
                  4th year student at NITK, passionate about AI and building intelligent solutions. 
                  Specializing in NLP, cybersecurity, and modern web technologies.
                </p>
              </div>
            </div>

            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up-delay-3 justify-center lg:justify-start">
              <button 
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl btn-3d overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-all duration-[1200ms]" />
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl btn-3d relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5 transform group-hover:scale-110 transition-all duration-[1200ms]" />
                  <span>Download CV</span>
                </span>
              </button>
            </div>

            {/* Clean Social Links */}
            <div className="flex space-x-6 animate-slide-up-delay-4 justify-center lg:justify-start">
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
                    <Icon className="w-6 h-6 icon-hover relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Premium Profile Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              className="relative transform transition-all duration-[2000ms] ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`
              }}
            >
              {/* Clean glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20 scale-110 animate-glow-pulse"></div>
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full p-1 card-hover">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/Image.jpg" 
                    alt="Shri Harshan - AI Developer & Full Stack Engineer"
                    className="w-full h-full object-cover rounded-full transition-all duration-[1500ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-cyan-600/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                </div>
              </div>
              
              {/* Premium Square Tech Bubbles - Clean Design */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center animate-gentle-bounce shadow-xl shadow-purple-500/25 border border-purple-400/30 backdrop-blur-sm">
                <div className="text-center">
                  <Brain className="w-6 h-6 text-white mb-1 mx-auto" />
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center animate-gentle-bounce shadow-xl shadow-cyan-500/25 border border-cyan-400/30 backdrop-blur-sm" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <Cpu className="w-6 h-6 text-white mb-1 mx-auto" />
                  <span className="text-white font-bold text-xs">ML</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center animate-gentle-bounce shadow-xl shadow-indigo-500/25 border border-indigo-400/30 backdrop-blur-sm" style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <Code className="w-5 h-5 text-white mb-1 mx-auto" />
                  <span className="text-white font-bold text-xs">NLP</span>
                </div>
              </div>

              <div className="absolute top-1/4 -left-8 w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center animate-gentle-bounce shadow-xl shadow-emerald-500/25 border border-emerald-400/30 backdrop-blur-sm" style={{animationDelay: '1.5s'}}>
                <div className="text-center">
                  <Shield className="w-5 h-5 text-white mb-1 mx-auto" />
                  <span className="text-white font-bold text-xs">SEC</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center animate-gentle-bounce shadow-xl shadow-orange-500/25 border border-orange-400/30 backdrop-blur-sm" style={{animationDelay: '2s'}}>
                <div className="text-center">
                  <Zap className="w-4 h-4 text-white mb-1 mx-auto" />
                  <span className="text-white font-bold text-xs">DEV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce cursor-pointer" onClick={scrollToAbout}>
        <div className="p-2 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-gray-600/30">
          <ChevronDown className="w-6 h-6 text-gray-400 hover:text-white transition-all duration-[1200ms]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;