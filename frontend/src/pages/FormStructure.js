import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const FormStructure = ({ formData, handleChange, handleHeroChange, handleSocialLinkChange, selectedSkills, handleSkillToggle, handleSkillLevelChange, handleSubmit, handleExperienceChange, addExperience, newExperience, handleEducationChange, addEducation, newEducation, handleCertificateChange, addCertificate, newCertificate }) => {

  const skillOptions = [
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center" id="firstpage">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Enter Your Information</h2>
      
        {/* General Info */}
        <label className="block mb-4">
          <span className="block text-sm font-medium">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium">Phone</span>
          <input
            type="phone"
            name="phone"
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
            required
          />
        </label>

        {/* Hero Section */}
        <h3 className="text-2xl font-bold mb-4">Hero Section</h3>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Greeting</span>
          <input
            type="text"
            name="greeting"
            value={formData.hero.greeting}
            onChange={handleHeroChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Title</span>
          <input
            type="text"
            name="title"
            value={formData.hero.title}
            onChange={handleHeroChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Description</span>
          <input
            type="text"
            name="description"
            value={formData.hero.description}
            onChange={handleHeroChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Hero Image URL</span>
          <input
            type="text"
            name="image"
            value={formData.hero.image}
            onChange={handleHeroChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <h4 className="text-xl font-bold mb-4">Social Links</h4>
        <label className="block mb-4">
          <span className="block text-sm font-medium">Twitter URL</span>
          <input
            type="text"
            name="twitter"
            value={formData.hero.socialLinks.twitter}
            onChange={handleSocialLinkChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Linkedin URL</span>
          <input
            type="text"
            name="youtube"
            value={formData.hero.socialLinks.youtube}
            onChange={handleSocialLinkChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Facebook URL</span>
          <input
            type="text"
            name="facebook"
            value={formData.hero.socialLinks.facebook}
            onChange={handleSocialLinkChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        {/* About Section */}
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <label className="block mb-4">
          <span className="block text-sm font-medium">About Me</span>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <h3 className="text-2xl font-bold mb-4">Select Your Skills</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {skillOptions.map((skill, index) => (
            <div key={index}>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  value={skill.name}
                  checked={selectedSkills.some((s) => s.name === skill.name)}
                  onChange={() => handleSkillToggle(skill)}
                  className="form-checkbox"
                />
                <span>{skill.icon} {skill.name}</span>
              </label>
              {selectedSkills.some((s) => s.name === skill.name) && (
                <select
                  value={
                    selectedSkills.find((s) => s.name === skill.name)?.level ||
                    'Beginner'
                  }
                  onChange={(e) => handleSkillLevelChange(skill, e.target.value)}
                  className="mt-2 block w-full bg-gray-700 border-gray-600 rounded p-2"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              )}
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <h3 className="text-2xl font-bold mb-4">Experience</h3>
        <label className="block mb-4">
          <span className="block text-sm font-medium">Job Title</span>
          <input
            type="text"
            name="jobTitle"
            value={newExperience.jobTitle}
            onChange={handleExperienceChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Company Name</span>
          <input
            type="text"
            name="companyName"
            value={newExperience.companyName}
            onChange={handleExperienceChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Start Date</span>
          <input
            type="date"
            name="startDate"
            value={newExperience.startDate}
            onChange={handleExperienceChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">End Date</span>
          <input
            type="date"
            name="endDate"
            value={newExperience.endDate}
            onChange={handleExperienceChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <button
          type="button"
          onClick={addExperience}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
        >
          Add Experience
        </button>

        {/* Education Section */}
        <h3 className="text-2xl font-bold mb-4">Education</h3>
        <label className="block mb-4">
          <span className="block text-sm font-medium">Institution</span>
          <input
            type="text"
            name="institution"
            value={newEducation.institution}
            onChange={handleEducationChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Degree</span>
          <input
            type="text"
            name="degree"
            value={newEducation.degree}
            onChange={handleEducationChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Start Date</span>
          <input
            type="date"
            name="startDate"
            value={newEducation.startDate}
            onChange={handleEducationChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">End Date</span>
          <input
            type="date"
            name="endDate"
            value={newEducation.endDate}
            onChange={handleEducationChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <button
          type="button"
          onClick={addEducation}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
        >
          Add Education
        </button>

        {/* Certificate Section */}
        <h3 className="text-2xl font-bold mb-4">Certificates</h3>
        <label className="block mb-4">
          <span className="block text-sm font-medium">Certificate Name</span>
          <input
            type="text"
            name="certificateName"
            value={newCertificate.certificateName}
            onChange={handleCertificateChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Issued By</span>
          <input
            type="text"
            name="issuedBy"
            value={newCertificate.issuedBy}
            onChange={handleCertificateChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Issue Date</span>
          <input
            type="date"
            name="issueDate"
            value={newCertificate.issueDate}
            onChange={handleCertificateChange}
            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded p-2"
          />
        </label>

        <button
          type="button"
          onClick={addCertificate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
        >
          Add Certificate
        </button>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-4"
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default FormStructure;
