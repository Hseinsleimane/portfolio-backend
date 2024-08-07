import React, { useState } from 'react';
import axios from '../api/axios';

const UserInfo = () => {
  const [info, setInfo] = useState({
    certificates: '',
    experience: '',
    education: '',
    skills: '',
    projects: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user-info', info);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded">
        <h2 className="text-2xl mb-4">User Information</h2>

        {/* Certificates */}
        <div className="mb-4">
          <label className="block mb-1">Certificates</label>
          <textarea
            name="certificates"
            className="w-full p-2 border"
            value={info.certificates}
            onChange={handleChange}
          />
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="block mb-1">Experience</label>
          <textarea
            name="experience"
            className="w-full p-2 border"
            value={info.experience}
            onChange={handleChange}
          />
        </div>

        {/* Education */}
        <div className="mb-4">
          <label className="block mb-1">Education</label>
          <textarea
            name="education"
            className="w-full p-2 border"
            value={info.education}
            onChange={handleChange}
          />
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label className="block mb-1">Skills</label>
          <textarea
            name="skills"
            className="w-full p-2 border"
            value={info.skills}
            onChange={handleChange}
          />
        </div>

        {/* Projects */}
        <div className="mb-4">
          <label className="block mb-1">Projects</label>
          <textarea
            name="projects"
            className="w-full p-2 border"
            value={info.projects}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
