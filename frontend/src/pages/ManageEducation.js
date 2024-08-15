// src/pages/ManageEducation.js
import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { PortfolioContext } from '../context/PortfolioContext';

const ManageEducation = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  const [newEducation, setNewEducation] = useState('');
  const [editingEducation, setEditingEducation] = useState(null);
  const [updatedEducation, setUpdatedEducation] = useState('');

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axiosInstance.get('/education');
        setPortfolio((prevState) => ({
          ...prevState,
          education: response.data,
        }));
      } catch (error) {
        console.error('Error fetching education:', error);
      }
    };
    fetchEducation();
  }, [setPortfolio]);

  const handleAddEducation = async () => {
    try {
      const response = await axiosInstance.post('/education', { name: newEducation });
      setPortfolio((prevState) => ({
        ...prevState,
        education: [...prevState.education, response.data],
      }));
      setNewEducation('');
    } catch (error) {
      console.error('Error adding education:', error);
    }
  };

  const handleEditEducation = (education) => {
    setEditingEducation(education);
    setUpdatedEducation(education.name);
  };

  const handleUpdateEducation = async () => {
    try {
      const response = await axiosInstance.put(`/education/${editingEducation._id}`, { name: updatedEducation });
      setPortfolio((prevState) => ({
        ...prevState,
        education: prevState.education.map((edu) =>
          edu._id === editingEducation._id ? response.data : edu
        ),
      }));
      setEditingEducation(null);
      setUpdatedEducation('');
    } catch (error) {
      console.error('Error updating education:', error);
    }
  };

  const handleDeleteEducation = async (id) => {
    try {
      await axiosInstance.delete(`/education/${id}`);
      setPortfolio((prevState) => ({
        ...prevState,
        education: prevState.education.filter((edu) => edu._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting education:', error);
    }
  };

  return (
    <div>
      <h2>Manage Education</h2>
      <input
        type="text"
        value={newEducation}
        onChange={(e) => setNewEducation(e.target.value)}
        placeholder="Enter new education"
      />
      <button onClick={handleAddEducation}>Add Education</button>

      {editingEducation && (
        <div>
          <input
            type="text"
            value={updatedEducation}
            onChange={(e) => setUpdatedEducation(e.target.value)}
            placeholder="Update education"
          />
          <button onClick={handleUpdateEducation}>Update Education</button>
        </div>
      )}

      <ul>
        {portfolio.education.map((education) => (
          <li key={education._id}>
            {education.name}
            <button onClick={() => handleEditEducation(education)}>Edit</button>
            <button onClick={() => handleDeleteEducation(education._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageEducation;
