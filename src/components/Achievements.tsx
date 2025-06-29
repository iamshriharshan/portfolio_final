import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Star, Code, Shield, GitBranch } from 'lucide-react';

const Achievements: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 180);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-500/4 to-orange-500/4 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/4 to-cyan-500/4 rounded-full blur-3xl animate-breathe" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl animate-breathe" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 hover:scale-105 transition-all duration-[1200ms] cursor-default">
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent hover:from-yellow-300 hover:to-orange-300 transition-all duration-[1200ms]">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
            Recognition and milestones that mark my journey in technology, security research, and open-source contribution.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6 hover:w-32 hover:h-2 transition-all duration-[1200ms]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                data-index={index}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 card-hover overflow-hidden transition-all duration-[1500ms] ease-out ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 transform translate-y-12 scale-95'
                }`}
              >
                {/* Enhanced hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/8 to-orange-600/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]"></div>
                
                <div className="relative z-10">
                  {/* Enhanced Icon and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center card-hover`}>
                      <Icon className="w-7 h-7 text-white icon-hover" />
                    </div>
                    <span className="text-sm font-semibold text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full hover:bg-gray-600/50 hover:text-gray-200 hover:scale-105 transition-all duration-[1200ms] cursor-pointer">
                      {achievement.year}
                    </span>
                  </div>
                  
                  {/* Enhanced Category */}
                  <div className="mb-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white hover:scale-110 transition-all duration-[1200ms] cursor-pointer`}>
                      {achievement.category}
                    </span>
                  </div>
                  
                  {/* Enhanced Title */}
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-yellow-300 hover:scale-105 transition-all duration-[1200ms] cursor-default">
                    {achievement.title}
                  </h3>
                  
                  {/* Enhanced Description */}
                  <p className="text-gray-400 text-sm leading-relaxed hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
                    {achievement.description}
                  </p>
                  
                  {/* Enhanced achievement badge */}
                  <div className="mt-4 flex items-center space-x-2 group/badge hover:translate-x-2 transition-all duration-[1200ms] cursor-pointer">
                    <Star className="w-4 h-4 text-yellow-400 group-hover/badge:scale-125 group-hover/badge:rotate-12 transition-all duration-[1200ms]" />
                    <span className="text-xs text-yellow-400 font-medium group-hover/badge:text-yellow-300 transition-all duration-[1200ms]">Achievement Unlocked</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced stats section - TEXT ONLY POPPING */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2 hover:text-yellow-400 hover:scale-110 transition-all duration-[1200ms] cursor-default">5+</div>
            <div className="text-gray-400 text-sm hover:text-gray-200 transition-all duration-[1200ms] cursor-default">Major Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2 hover:text-orange-400 hover:scale-110 transition-all duration-[1200ms] cursor-default">2</div>
            <div className="text-gray-400 text-sm hover:text-gray-200 transition-all duration-[1200ms] cursor-default">Hackathon Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2 hover:text-green-400 hover:scale-110 transition-all duration-[1200ms] cursor-default">2</div>
            <div className="text-gray-400 text-sm hover:text-gray-200 transition-all duration-[1200ms] cursor-default">Hacktoberfest</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2 hover:text-red-400 hover:scale-110 transition-all duration-[1200ms] cursor-default">1</div>
            <div className="text-gray-400 text-sm hover:text-gray-200 transition-all duration-[1200ms] cursor-default">Hall of Fame</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;