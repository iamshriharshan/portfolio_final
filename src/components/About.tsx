import React from 'react';
import { Code, Palette, Zap, Users, Award, Target, Brain, Shield } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Brain, title: 'AI Development (NLP)', desc: 'Natural Language Processing & Machine Learning' },
    { icon: Users, title: 'Performance Team Leadership', desc: 'Agile & Project Management' },
    { icon: Palette, title: 'Graphic Designing', desc: 'Visual Design & Creative Solutions' },
    { icon: Code, title: 'Web Development', desc: 'Full Stack & Modern Frameworks' },
    { icon: Award, title: 'Quality Assurance', desc: 'Testing & Code Reviews' },
    { icon: Shield, title: 'Cyber Security', desc: 'Security Research & Penetration Testing' },
    { icon: Target, title: 'Problem Solving', desc: 'Analytical & Creative Thinking' },
    { icon: Zap, title: 'Performance Optimization', desc: 'System Efficiency & Best Practices' }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-700">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg md:text-xl leading-relaxed hover:text-gray-200 transition-colors duration-700">
                I'm Shri Harshan, a passionate 4th year student at the National Institute of Technology Karnataka (NITK), 
                fully immersed in the world of Artificial Intelligence. My journey combines cutting-edge AI development 
                with practical applications in NLP, cybersecurity, and modern web technologies.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed hover:text-gray-200 transition-colors duration-700">
                I specialize in Natural Language Processing, team leadership, and creating intelligent solutions 
                that bridge the gap between complex AI concepts and real-world applications. From building 
                sophisticated NLP models to leading performance teams, I love tackling challenges that push 
                the boundaries of what's possible with AI.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8">
              <div className="text-center group hover:scale-110 transition-all duration-700 cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-500">5+</div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-700 cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-500">4</div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 text-sm md:text-base">Years at NITK</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-700 cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-500">5+</div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 text-sm md:text-base">Security Bounties</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-700 cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-500">∞</div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 text-sm md:text-base">Learning Hours</div>
              </div>
            </div>
          </div>

          {/* 3D Card */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-8 transform hover:scale-105 hover:-translate-y-6 transition-all duration-800 hover:shadow-2xl hover:shadow-purple-500/25 card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-800"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 hover:text-purple-300 transition-colors duration-500">My Philosophy</h3>
                <p className="text-gray-300 mb-6 hover:text-gray-200 transition-colors duration-500 text-sm md:text-base leading-relaxed">
                  "AI should be intelligent, accessible, and secure. I believe in building solutions that not only 
                  solve complex problems but also empower users and enhance their capabilities through thoughtful design."
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-500 text-sm md:text-base">AI-first development approach</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-500 text-sm md:text-base">Security-conscious solutions</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-500 text-sm md:text-base">Continuous learning mindset</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 md:p-6 transform hover:scale-105 hover:-translate-y-4 transition-all duration-800 hover:shadow-xl hover:shadow-purple-500/25 card-hover"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
                
                <div className="relative z-10">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-600">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-500">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;