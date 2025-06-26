import React from 'react';
import { Calendar, MapPin, Award, TrendingUp, Shield, Search, MessageCircle, Palette } from 'lucide-react';

const Experience: React.FC = () => {
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

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional growth in AI, security research, and technology innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                      exp.current 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 border-white shadow-lg shadow-purple-500/50' 
                        : 'bg-gray-800 border-gray-600'
                    }`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                            {exp.title}
                          </h3>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400 mb-2">
                            <div className="font-semibold text-gray-300">{exp.company}</div>
                            {exp.current && (
                              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs px-2 py-1 rounded-full w-fit">
                                Current
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600/50 hover:border-purple-500/50 hover:text-purple-300 transition-colors"
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

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;