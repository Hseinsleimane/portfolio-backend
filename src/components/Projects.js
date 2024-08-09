import React from 'react';

const Project = ({ projects }) => {
  return (
    <div className="projects-section p-6">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="project-item bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-lg text-gray-700 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
