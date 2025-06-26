import React from 'react';
import { Trophy, Award, Star, Code, Shield, GitBranch } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'WHO Hall of Fame',
      description: 'Recognized by the World Health Organization for reporting critical security vulnerabilities, contributing to global cybersecurity efforts.',
      icon: Shield,
      category: 'Security Research',
      year: '2024',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Image Classification Hackathon Winner',
      description: 'Won the "Impulse" hackathon for developing an innovative image classification solution using advanced machine learning techniques.',
      icon: Trophy,
      category: 'Machine Learning',
      year: '2024',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'NLP Hackathon Champion',
      description: 'Secured first place in a Natural Language Processing hackathon by creating a cutting-edge text analysis and processing system.',
      icon: Award,
      category: 'Natural Language Processing',
      year: '2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Hacktoberfest 2024',
      description: 'Successfully completed Hacktoberfest 2024 by contributing to multiple open-source projects and helping the developer community.',
      icon: GitBranch,
      category: 'Open Source',
      year: '2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Hacktoberfest 2023',
      description: 'Completed Hacktoberfest 2023 with meaningful contributions to various open-source repositories and collaborative projects.',
      icon: Code,
      category: 'Open Source',
      year: '2023',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition and milestones that mark my journey in technology, security research, and open-source contribution.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  
                  {/* Category */}
                  <div className="mb-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                      {achievement.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {achievement.description}
                  </p>
                  
                  {/* Achievement badge */}
                  <div className="mt-4 flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-yellow-400 font-medium">Achievement Unlocked</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-400 text-sm">Major Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-gray-400 text-sm">Hackathon Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-gray-400 text-sm">Hacktoberfest</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-gray-400 text-sm">Hall of Fame</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;