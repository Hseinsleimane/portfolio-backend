// src/pages/ManageSkills.js
import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import { PortfolioContext } from '../context/PortfolioContext';

const ManageSkills = () => {
  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  const [newSkill, setNewSkill] = useState('');
  const [editingSkill, setEditingSkill] = useState(null);
  const [updatedSkill, setUpdatedSkill] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axiosInstance.get('/skills');
        setPortfolio((prevState) => ({
          ...prevState,
          skills: response.data,
        }));
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    fetchSkills();
  }, [setPortfolio]);

  const handleAddSkill = async () => {
    try {
      const response = await axiosInstance.post('/skills', { name: newSkill });
      setPortfolio((prevState) => ({
        ...prevState,
        skills: [...prevState.skills, response.data],
      }));
      setNewSkill('');
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  const handleEditSkill = (skill) => {
    setEditingSkill(skill);
    setUpdatedSkill(skill.name);
  };

  const handleUpdateSkill = async () => {
    try {
      const response = await axiosInstance.put(`/skills/${editingSkill._id}`, { name: updatedSkill });
      setPortfolio((prevState) => ({
        ...prevState,
        skills: prevState.skills.map((skill) =>
          skill._id === editingSkill._id ? response.data : skill
        ),
      }));
      setEditingSkill(null);
      setUpdatedSkill('');
    } catch (error) {
      console.error('Error updating skill:', error);
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      await axiosInstance.delete(`/skills/${id}`);
      setPortfolio((prevState) => ({
        ...prevState,
        skills: prevState.skills.filter((skill) => skill._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div>
      <h2>Manage Skills</h2>
      <input
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Enter a new skill"
      />
      <button onClick={handleAddSkill}>Add Skill</button>

      {editingSkill && (
        <div>
          <input
            type="text"
            value={updatedSkill}
            onChange={(e) => setUpdatedSkill(e.target.value)}
            placeholder="Update skill"
          />
          <button onClick={handleUpdateSkill}>Update Skill</button>
        </div>
      )}

      <ul>
        {portfolio.skills.map((skill) => (
          <li key={skill._id}>
            {skill.name}
            <button onClick={() => handleEditSkill(skill)}>Edit</button>
            <button onClick={() => handleDeleteSkill(skill._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageSkills;
