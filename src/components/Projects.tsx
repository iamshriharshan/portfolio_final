import React from 'react';
import { Github, Search, Terminal, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Search in Video Extension',
      description: 'A browser extension that allows users to search for specific topics within lengthy videos, making content discovery effortless and significantly improving the viewing experience.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['JavaScript', 'Chrome Extension API', 'Video Processing', 'Search Algorithms'],
      githubUrl: 'https://github.com/iamshriharshan/Search_In_video_plugin',
      featured: true,
      icon: Search
    },
    {
      title: 'Smart Terminal',
      description: 'An intelligent terminal interface that enables natural language communication, allowing users to interact with their system using conversational commands instead of traditional CLI syntax.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Natural Language Processing', 'Terminal Interface', 'AI Integration'],
      githubUrl: 'https://github.com/iamshriharshan/Smart-Terminal',
      featured: true,
      icon: Terminal
    },
    {
      title: 'People Recommendation System',
      description: 'An ML-powered system using BERT embeddings to recommend like-minded individuals based on semantic profile similarity, processing both structured and unstructured data.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Flask', 'BERT', 'TensorFlow', 'Keras', 'Machine Learning'],
      githubUrl: '#',
      featured: true,
      icon: Users
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my innovative solutions combining AI, security, and modern web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600/50 hover:border-purple-500/50 hover:text-purple-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="flex">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                    >
                      <Github className="w-4 h-4 transform group-hover/btn:scale-110 transition-transform" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;