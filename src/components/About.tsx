import React from 'react';
import { Code, Palette, Zap, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code, title: 'Full Stack Development', desc: 'MERN, Next.js, TypeScript' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Figma, Adobe Creative Suite' },
    { icon: Zap, title: 'Performance', desc: 'Optimization & Best Practices' },
    { icon: Users, title: 'Team Leadership', desc: 'Agile & Project Management' },
    { icon: Award, title: 'Quality Assurance', desc: 'Testing & Code Reviews' },
    { icon: Target, title: 'Problem Solving', desc: 'Analytical & Creative Thinking' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. My journey in tech 
                started with a curiosity for how things work and evolved into a career 
                dedicated to building exceptional user experiences.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in modern web technologies and love working on projects 
                that challenge me to learn and grow. When I'm not coding, you'll find 
                me exploring new technologies, contributing to open source, or sharing 
                knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-gray-400">Coffee Cups</div>
              </div>
            </div>
          </div>

          {/* 3D Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
                <p className="text-gray-300 mb-6">
                  "Great software is not just about clean code—it's about solving real problems 
                  and creating meaningful experiences that users love."
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">User-first approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Continuous learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">Clean, maintainable code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
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