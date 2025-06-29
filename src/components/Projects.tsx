import React from 'react';
import { Github, Search, Terminal, Users, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Search in Video Extension',
      description: 'A browser extension that allows users to search for specific topics within lengthy videos, making content discovery effortless and significantly improving the viewing experience.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['JavaScript', 'Chrome Extension API', 'Video Processing', 'Search Algorithms'],
      githubUrl: 'https://github.com/iamshriharshan/Search_In_video_plugin',
      featured: true,
      icon: Search
    },
    {
      title: 'Smart Terminal',
      description: 'An intelligent terminal interface that enables natural language communication, allowing users to interact with their system using conversational commands instead of traditional CLI syntax.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Natural Language Processing', 'Terminal Interface', 'AI Integration'],
      githubUrl: 'https://github.com/iamshriharshan/Smart-Terminal',
      featured: true,
      icon: Terminal
    },
    {
      title: 'People Recommendation System',
      description: 'An ML-powered system using BERT embeddings to recommend like-minded individuals based on semantic profile similarity, processing both structured and unstructured data.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Flask', 'BERT', 'TensorFlow', 'Keras', 'Machine Learning'],
      githubUrl: 'https://github.com/iamshriharshan',
      featured: true,
      icon: Users
    },
    {
      title: 'AI Chatbot Platform',
      description: 'A sophisticated chatbot platform with natural language understanding, context awareness, and multi-domain knowledge integration for enhanced user interactions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'NLP', 'Deep Learning', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/iamshriharshan',
      featured: false,
      icon: Terminal
    },
    {
      title: 'Security Vulnerability Scanner',
      description: 'An automated security scanning tool that identifies vulnerabilities in web applications, with detailed reporting and remediation suggestions.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Security Testing', 'Web Scraping', 'Automation'],
      githubUrl: 'https://github.com/iamshriharshan',
      featured: false,
      icon: Search
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-700">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto hover:text-gray-300 transition-colors duration-500">
            A showcase of my innovative solutions combining AI, security, and modern web technologies.
          </p>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-6 transition-all duration-800 hover:shadow-2xl hover:shadow-purple-500/25 card-hover"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Project image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-600"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-600">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700/50 text-gray-300 text-xs px-2 md:px-3 py-1 rounded-full border border-gray-600/50 hover:border-purple-500/50 hover:text-purple-300 hover:scale-110 transition-all duration-500 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-600 flex items-center justify-center space-x-2 group/btn hover:scale-105 hover:-translate-y-2"
                    >
                      <Github className="w-4 h-4 transform group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-500" />
                      <span>Code</span>
                    </a>
                    <button className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-600 hover:scale-105 hover:-translate-y-2 group/demo">
                      <ExternalLink className="w-4 h-4 transform group-hover/demo:scale-125 transition-transform duration-500" />
                    </button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-800 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/iamshriharshan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-800 transform hover:scale-105 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;