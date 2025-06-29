import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Clock, Mail, Trophy } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Clock },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200;
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          setActiveSection(sectionId);
        }
      };

      requestAnimationFrame(animation);
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Premium SH Logo */}
            <div className="flex-shrink-0">
              <div className="relative group cursor-pointer">
                {/* Main logo container */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-xl flex items-center justify-center card-hover shadow-lg shadow-purple-500/30 border border-purple-400/20 relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-pink-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] rounded-xl"></div>
                  
                  {/* SH Text */}
                  <span className="relative z-10 text-white font-bold text-lg md:text-xl tracking-tight group-hover:scale-110 transition-all duration-[1200ms]">
                    SH
                  </span>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-[1200ms] -z-10"></div>
                </div>
                
                {/* Floating particles around logo */}
                <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]">
                  <div className="absolute top-0 left-0 w-1 h-1 bg-purple-400 rounded-full animate-gentle-bounce"></div>
                  <div className="absolute top-0 right-0 w-1 h-1 bg-cyan-400 rounded-full animate-gentle-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-pink-400 rounded-full animate-gentle-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-indigo-400 rounded-full animate-gentle-bounce" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-1 lg:space-x-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-button group relative px-3 lg:px-4 py-2 lg:py-3 rounded-xl transition-all duration-600 ease-out transform hover:scale-105 hover:-translate-y-1 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 scale-105 -translate-y-1'
                          : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-hover" />
                        <span className="font-medium text-sm lg:text-base">{item.label}</span>
                      </div>
                      
                      {/* Animated underline */}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 ${
                        activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-700 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-gray-900/98 backdrop-blur-xl border-t border-white/10`}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-600 ease-out flex items-center space-x-3 transform hover:scale-102 hover:-translate-y-1 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 scale-102 -translate-y-1'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <Icon className="w-5 h-5 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 icon-hover" />
                  <span className="font-medium text-base">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;