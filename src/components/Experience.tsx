import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading a team of 5 developers in building scalable web applications. Implemented microservices architecture resulting in 40% performance improvement.',
      achievements: [
        'Led migration to React 18 and Next.js 13',
        'Reduced bundle size by 35% through optimization',
        'Mentored junior developers and established code review processes'
      ],
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      current: true
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Built 15+ responsive web applications',
        'Improved application performance by 50%',
        'Implemented automated testing reducing bugs by 60%'
      ],
      skills: ['React', 'Vue.js', 'Python', 'PostgreSQL', 'MongoDB'],
      current: false
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Focused on creating exceptional user experiences for a fast-growing startup. Built responsive interfaces and implemented modern design systems.',
      achievements: [
        'Designed and implemented component library',
        'Increased user engagement by 25%',
        'Collaborated with UX team on design system'
      ],
      skills: ['React', 'Sass', 'JavaScript', 'Figma', 'Git'],
      current: false
    },
    {
      title: 'Junior Web Developer',
      company: 'WebDev Agency',
      location: 'Remote',
      period: '2018 - 2019',
      description: 'Started my professional journey building websites for small businesses. Gained experience in various technologies and client communication.',
      achievements: [
        'Delivered 20+ client websites',
        'Learned full development lifecycle',
        'Built strong foundation in web technologies'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of my professional growth and the exciting projects I've been part of.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                    {exp.current ? (
                      <TrendingUp className="w-4 h-4 text-white" />
                    ) : (
                      <Award className="w-4 h-4 text-gray-400" />
                    )}
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
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;