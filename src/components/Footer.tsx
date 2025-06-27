import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/iamshriharshan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shri-harshan/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshanofficial05@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              Harshan
            </div>
            <p className="text-gray-400 text-sm leading-relaxed hover:text-gray-300 transition-colors duration-300">
              AI-Powered Full Stack Developer & Security Researcher passionate about building 
              secure, intelligent solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white hover:text-purple-300 transition-colors duration-300">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience', 'Achievements', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white hover:text-cyan-300 transition-colors duration-300">Connect</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">harshanofficial05@gmail.com</p>
              <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">+91 8754143611</p>
              <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">Erode, Tamil Nadu, India</p>
            </div>
            
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-500 transform hover:scale-125 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              <span>© {currentYear} Harshan. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;