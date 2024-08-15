// src/pages/ManageExperience.js
import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { PortfolioContext } from '../context/PortfolioContext';

const ManageExperience = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  const [newExperience, setNewExperience] = useState('');
  const [editingExperience, setEditingExperience] = useState(null);
  const [updatedExperience, setUpdatedExperience] = useState('');

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axiosInstance.get('/experience');
        setPortfolio((prevState) => ({
          ...prevState,
          experience: response.data,
        }));
      } catch (error) {
        console.error('Error fetching experience:', error);
      }
    };
    fetchExperience();
  }, [setPortfolio]);

  const handleAddExperience = async () => {
    try {
      const response = await axiosInstance.post('/experience', { name: newExperience });
      setPortfolio((prevState) => ({
        ...prevState,
        experience: [...prevState.experience, response.data],
      }));
      setNewExperience('');
    } catch (error) {
      console.error('Error adding experience:', error);
    }
  };

  const handleEditExperience = (experience) => {
    setEditingExperience(experience);
    setUpdatedExperience(experience.name);
  };

  const handleUpdateExperience = async () => {
    try {
      const response = await axiosInstance.put(`/experience/${editingExperience._id}`, { name: updatedExperience });
      setPortfolio((prevState) => ({
        ...prevState,
        experience: prevState.experience.map((exp) =>
          exp._id === editingExperience._id ? response.data : exp
        ),
      }));
      setEditingExperience(null);
      setUpdatedExperience('');
    } catch (error) {
      console.error('Error updating experience:', error);
    }
  };

  const handleDeleteExperience = async (id) => {
    try {
      await axiosInstance.delete(`/experience/${id}`);
      setPortfolio((prevState) => ({
        ...prevState,
        experience: prevState.experience.filter((exp) => exp._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting experience:', error);
    }
  };

  return (
    <div>
      <h2>Manage Experience</h2>
      <input
        type="text"
        value={newExperience}
        onChange={(e) => setNewExperience(e.target.value)}
        placeholder="Enter new experience"
      />
      <button onClick={handleAddExperience}>Add Experience</button>

      {editingExperience && (
        <div>
          <input
            type="text"
            value={updatedExperience}
            onChange={(e) => setUpdatedExperience(e.target.value)}
            placeholder="Update experience"
          />
          <button onClick={handleUpdateExperience}>Update Experience</button>
        </div>
      )}

      <ul>
        {portfolio.experience.map((experience) => (
          <li key={experience._id}>
            {experience.name}
            <button onClick={() => handleEditExperience(experience)}>Edit</button>
            <button onClick={() => handleDeleteExperience(experience._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageExperience;
