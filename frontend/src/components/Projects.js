import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      title: 'Project One',
      description: 'A project description for Project One. This could include details about the technologies used and the overall purpose of the project.',
      technologies: 'React, Node.js',
      github: 'https://github.com/Hseinsleimane/portfolio-backend/tree/wfrontend',
      
    },
    {
      title: 'Project Two',
      description: 'A project description for Project Two. Here you can describe the project and highlight its features and technologies used.',
      technologies: 'Vue, Express',
      github: 'https://github.com/yourusername/project-two',
    },
  ];

  return (
    <div className="p-6 bg-gray-900 min-h-screen" id="projects">
      <motion.h2
        className="text-3xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <br/>
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="flex items-center justify-between mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              
            </motion.div>

            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <p className="text-gray-300">Technologies: {project.technologies}</p>
              <p className="text-gray-300">GitHub: <a href={project.github} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">View Repo</a></p>
              
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
