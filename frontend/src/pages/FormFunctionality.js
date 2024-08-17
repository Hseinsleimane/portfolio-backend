import React, { useState } from 'react';
import axios from 'axios';
import FormStructure from './FormStructure';

const FormFunctionality = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    about: '',
    hero: {
      greeting: '',
      title: '',
      description: '',
      image: '',
      socialLinks: {
        twitter: '',
        youtube: '',
        facebook: '',
      },
    },
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
  });

  const [educations, setEducations] = useState([]);
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const [certificates, setCertificates] = useState([]);
  const [newCertificate, setNewCertificate] = useState({
    certificateName: '',
    issuedBy: '',
    issueDate: '',
  });

  // General Info
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hero Section
  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      hero: { ...formData.hero, [name]: value },
    });
  };

  // Social Links
  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      hero: {
        ...formData.hero,
        socialLinks: { ...formData.hero.socialLinks, [name]: value },
      },
    });
  };

  // Skills
  const handleSkillToggle = (skill) => {
    const exists = selectedSkills.some((s) => s.name === skill.name);
    if (exists) {
      setSelectedSkills(selectedSkills.filter((s) => s.name !== skill.name));
    } else {
      setSelectedSkills([...selectedSkills, { name: skill.name, level: 'Beginner' }]);
    }
  };

  const handleSkillLevelChange = (skill, level) => {
    const updatedSkills = selectedSkills.map((s) =>
      s.name === skill.name ? { ...s, level } : s
    );
    setSelectedSkills(updatedSkills);
  };

  // Experience
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const addExperience = () => {
    setExperiences([...experiences, newExperience]);
    setNewExperience({
      jobTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
    });
  };

  // Education
  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const addEducation = () => {
    setEducations([...educations, newEducation]);
    setNewEducation({
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
  };

  // Certificates
  const handleCertificateChange = (e) => {
    const { name, value } = e.target;
    setNewCertificate({ ...newCertificate, [name]: value });
  };

  const addCertificate = () => {
    setCertificates([...certificates, newCertificate]);
    setNewCertificate({
      certificateName: '',
      issuedBy: '',
      issueDate: '',
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/formData', {
        ...formData,
        skills: selectedSkills,
        experiences,
        educations,
        certificates,
      });
      console.log('Form submitted successfully:', response.data);
      // Reset form if needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FormStructure
      formData={formData}
      handleChange={handleChange}
      handleHeroChange={handleHeroChange}
      handleSocialLinkChange={handleSocialLinkChange}
      selectedSkills={selectedSkills}
      handleSkillToggle={handleSkillToggle}
      handleSkillLevelChange={handleSkillLevelChange}
      experiences={experiences}
      handleExperienceChange={handleExperienceChange}
      addExperience={addExperience}
      educations={educations}
      handleEducationChange={handleEducationChange}
      addEducation={addEducation}
      certificates={certificates}
      handleCertificateChange={handleCertificateChange}
      addCertificate={addCertificate}
      handleSubmit={handleSubmit}
      newExperience={newExperience}
      newEducation={newEducation}
      newCertificate={newCertificate}
    />
  );
};

export default FormFunctionality;
