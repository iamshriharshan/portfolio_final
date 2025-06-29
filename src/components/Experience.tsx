import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, TrendingUp, Shield, Search, MessageCircle, Palette } from 'lucide-react';

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      title: 'Security Researcher',
      company: 'Freelance',
      location: 'Remote',
      period: 'May 2021 – Present',
      description: 'Conducting comprehensive security assessments including penetration testing, vulnerability scanning, and code analysis to identify and mitigate security threats across various platforms.',
      achievements: [
        'Secured bounties from multiple organizations',
        'Conducted source code analysis to detect vulnerabilities',
        'Performed penetration testing on web applications',
        'Recognized in WHO Hall of Fame for security vulnerability reporting'
      ],
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Code Analysis', 'Security Research'],
      current: true,
      icon: Shield
    },
    {
      title: 'Summer Research Intern',
      company: 'SCaLar Lab NITK',
      location: 'Karnataka, India',
      period: 'April 2024 – July 2024',
      description: 'Enhanced search tool functionality under Prof Anand Kumar by implementing transformer-based search models, significantly improving accuracy and relevance of search results.',
      achievements: [
        'Implemented transformer-based search model',
        'Replaced keyword-based search with advanced AI techniques',
        'Significantly improved search accuracy and relevance',
        'Contributed to research publications'
      ],
      skills: ['Transformers', 'NLP', 'Python', 'Research', 'Machine Learning'],
      current: false,
      icon: Search
    },
    {
      title: 'ML Internship',
      company: 'Swasth Mind',
      location: 'Remote',
      period: 'June 2024 – July 2024',
      description: 'Worked on training chatbots from scratch, including data processing, fine-tuning, and database integration for efficient data storage and retrieval.',
      achievements: [
        'Trained chatbot models from scratch',
        'Implemented data processing pipelines',
        'Integrated PostgreSQL for data management',
        'Enabled seamless chatbot interactions'
      ],
      skills: ['Machine Learning', 'NLP', 'PostgreSQL', 'Python', 'Data Processing'],
      current: false,
      icon: MessageCircle
    },
    {
      title: 'Graphic Designer & Video Editor',
      company: 'Youth India Foundation',
      location: 'Remote',
      period: '2022 – 2023',
      description: 'Created visual content and edited videos for social media campaigns and organizational events, contributing to the foundation\'s digital presence and outreach efforts.',
      achievements: [
        'Designed graphics for social media campaigns',
        'Edited promotional videos for events',
        'Enhanced organization\'s digital presence',
        'Collaborated with marketing team on creative projects'
      ],
      skills: ['Graphic Design', 'Video Editing', 'Adobe Creative Suite', 'Social Media'],
      current: false,
      icon: Palette
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
            }, index * 300);
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
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-cyan-500/8 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl animate-breathe" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-pink-500/6 to-indigo-500/6 rounded-full blur-3xl animate-breathe" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 card-hover cursor-default">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-cyan-300 transition-all duration-[1500ms]">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
            A timeline of my professional growth in AI, security research, and technology innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6 animate-pulse hover:w-32 hover:h-2 transition-all duration-[1500ms]"></div>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/20"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isVisible = visibleItems.includes(index);
              
              return (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  data-index={index}
                  className={`relative flex items-center transition-all duration-[2000ms] ease-out ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0 scale-100' 
                      : 'opacity-0 transform translate-y-16 scale-95'
                  }`}
                >
                  {/* Enhanced Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center card-hover ${
                      exp.current 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 border-white shadow-xl shadow-purple-500/50 animate-pulse' 
                        : 'bg-gray-800 border-gray-600 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20'
                    }`}>
                      <Icon className="w-6 h-6 text-white icon-hover" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 card-hover overflow-hidden">
                      {/* Enhanced hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 to-cyan-600/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                      
                      <div className="relative z-10">
                        {/* Enhanced Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-all duration-[1200ms] cursor-default">
                            {exp.title}
                          </h3>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400 mb-3">
                            <div className="font-semibold text-gray-300 text-lg group-hover:text-cyan-300 transition-all duration-[1200ms] cursor-default">{exp.company}</div>
                            {exp.current && (
                              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs px-3 py-1 rounded-full w-fit animate-pulse hover:scale-110 transition-all duration-[1200ms] cursor-pointer">
                                Current Position
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                            <div className="flex items-center space-x-2 group-hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
                              <Calendar className="w-4 h-4 group-hover:scale-110 transition-all duration-[1200ms]" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2 group-hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
                              <MapPin className="w-4 h-4 group-hover:scale-110 transition-all duration-[1200ms]" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-100 transition-all duration-[1200ms] cursor-default">
                          {exp.description}
                        </p>

                        {/* Enhanced Achievements */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center space-x-2 group-hover:text-purple-300 transition-all duration-[1200ms] cursor-default">
                            <Award className="w-4 h-4" />
                            <span>Key Achievements:</span>
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-3 text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-[1200ms] hover:translate-x-2 transition-transform duration-[1200ms] cursor-default">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0 hover:scale-150 transition-all duration-[1200ms]"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Enhanced Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-gray-700/50 text-gray-300 text-xs px-3 py-2 rounded-full border border-gray-600/50 hover:border-purple-500/50 hover:text-purple-300 hover:scale-110 hover:-translate-y-1 hover:bg-purple-500/10 transition-all duration-[1200ms] cursor-pointer"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-400 mb-8 hover:text-gray-200 transition-all duration-[1200ms] cursor-default">
            Interested in working together? Let's create something amazing!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl btn-3d overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Get In Touch</span>
              <TrendingUp className="w-5 h-5 icon-hover" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;