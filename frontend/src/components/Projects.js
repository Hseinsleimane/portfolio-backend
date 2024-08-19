import React from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const Projects = ({ projectsData }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
<section className="bg-[var(--box-background)] text-[var(--text-color-heading)] py-20" id="projects">
  <div className="section-container">
    <motion.h2
      className="text-5xl font-bold text-center mb-12 text-[var(--text-color-heading)]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Projects
    </motion.h2>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto"
      columnClassName="bg-clip-padding"
    >
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[var(--box-background)] p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500 mb-4"
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
            <h3 className="text-xl font-semibold text-[var(--text-color-heading)]">{project.title}</h3>
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
    </Masonry>
  </div>
</section>
    );
  };
  
  export default Projects;