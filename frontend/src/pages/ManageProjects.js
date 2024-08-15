// src/pages/ManageProjects.js
import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { PortfolioContext } from '../context/PortfolioContext';

const ManageProjects = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  const [newProject, setNewProject] = useState('');
  const [editingProject, setEditingProject] = useState(null);
  const [updatedProject, setUpdatedProject] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get('/projects');
        setPortfolio((prevState) => ({
          ...prevState,
          projects: response.data,
        }));
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [setPortfolio]);

  const handleAddProject = async () => {
    try {
      const response = await axiosInstance.post('/projects', { name: newProject });
      setPortfolio((prevState) => ({
        ...prevState,
        projects: [...prevState.projects, response.data],
      }));
      setNewProject('');
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setUpdatedProject(project.name);
  };

  const handleUpdateProject = async () => {
    try {
      const response = await axiosInstance.put(`/projects/${editingProject._id}`, { name: updatedProject });
      setPortfolio((prevState) => ({
        ...prevState,
        projects: prevState.projects.map((proj) =>
          proj._id === editingProject._id ? response.data : proj
        ),
      }));
      setEditingProject(null);
      setUpdatedProject('');
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axiosInstance.delete(`/projects/${id}`);
      setPortfolio((prevState) => ({
        ...prevState,
        projects: prevState.projects.filter((proj) => proj._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div>
      <h2>Manage Projects</h2>
      <input
        type="text"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
        placeholder="Enter new project"
      />
      <button onClick={handleAddProject}>Add Project</button>

      {editingProject && (
        <div>
          <input
            type="text"
            value={updatedProject}
            onChange={(e) => setUpdatedProject(e.target.value)}
            placeholder="Update project"
          />
          <button onClick={handleUpdateProject}>Update Project</button>
        </div>
      )}

      <ul>
        {portfolio.projects.map((project) => (
          <li key={project._id}>
            {project.name}
            <button onClick={() => handleEditProject(project)}>Edit</button>
            <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProjects;
