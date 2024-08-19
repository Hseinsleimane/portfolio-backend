import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { certificatesApi, educationApi, experienceApi, projectsApi, skillsApi } from '../services/api';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Education from '../components/Education';
import About from '../components/About';
import Certificates from '../components/Certificates';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import { AiFillFileText } from 'react-icons/ai';
import Footer from '../components/Footer';

const Firstpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    image: '',
    socialLinks: {
      twitter: '',
      linkedin: '',
      facebook: '',
    },
  });

  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const [experienceList, setExperienceList] = useState([]);
  const [newExperience, setNewExperience] = useState({
    role: '',
    company: '',
    period: '',
    description: '',
  });
  const [editingExperience, setEditingExperience] = useState(null);

  const [projectList, setProjectList] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    github: '',
  });
  const [editingProject, setEditingProject] = useState(null);
  
  const [educationList, setEducationList] = useState([]);
  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [editingEducation, setEditingEducation] = useState(null);
  
  const [aboutInfo, setAboutInfo] = useState({
    name: '',
    description: '',
    paragraph1: '',
    paragraph2: '',
    paragraph3: '',
    imageUrl: '',
  });

  const [certificateList, setCertificateList] = useState([]);
  const [newCertificate, setNewCertificate] = useState({
    title: '',
    issuer: '',
    date: '',
    link: '',
  });
  const [editingCertificate, setEditingCertificate] = useState(null);

  const [portfolioElement, setPortfolioElement] = useState(null);

  const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner' });
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    setPortfolioElement(element);
    return () => {
      document.body.removeChild(element);
    };
  }, []);

  const handleAboutChange = (e) => {
    const { name, value } = e.target;
    setAboutInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderPortfolio = (data) => {
    console.log('Data received in renderPortfolio:', data);
    if (portfolioElement) {
      const root = ReactDOM.createRoot(portfolioElement); 
      root.render(
        <>
          <Hero data={data} />
          <About aboutData={data.about} />
          <Skills skillsData={data.skills} />
          <Experience experienceData={data.experience} />
          <Projects projectsData={data.projects} />
          <Education educationData={data.education} />
          <Certificates certificatesData={data.certificates} />
          <Contact contactData={data.contact} />
        </>
      );
    } else {
      console.error('portfolioElement is null');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      experience: experienceList,
      projects: projectList,
      skills: skillList,
      contact: contactInfo,
      education: educationList,
      certificates: certificateList,
      about: aboutInfo,
    };
    console.log('Final data being sent to renderPortfolio:', finalData);
    renderPortfolio(finalData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const skillOptions = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  ];

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setNewSkill((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSkill = () => {
    const skillIcon = skillOptions.find((skill) => skill.name === newSkill.name)?.icon;
    if (skillIcon) {
      setSkillList((prev) => [...prev, { ...newSkill, icon: skillIcon }]);
      setNewSkill({
        name: '',
        level: 'Beginner',
      });
    } else {
      alert('Invalid skill name');
    }
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addExperience = () => {
    if (editingExperience !== null) {
      setExperienceList(prev => prev.map((item, index) => 
        index === editingExperience ? newExperience : item
      ));
      setEditingExperience(null);
    } else {
      setExperienceList((prev) => [...prev, newExperience]);
    }
    setNewExperience({
      role: '',
      company: '',
      period: '',
      description: '',
    });
  };

  const handleEditExperience = (index) => {
    setEditingExperience(index);
    setNewExperience(experienceList[index]);
  };

  const handleDeleteExperience = (index) => {
    setExperienceList(prev => prev.filter((_, i) => i !== index));
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addProject = () => {
    setProjectList((prev) => [...prev, newProject]);
    setNewProject({
      title: '',
      description: '',
      technologies: '',
      github: '',
    });
  };

  const handleEditProject = (index) => {
    setEditingProject(index);
    setNewProject(experienceList[index]);
  };

  const handleDeleteProject = (index) => {
    setProjectList(prev => prev.filter((_, i) => i !== index));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addEducation = () => {
    if (editingEducation !== null) {
      setEducationList(prev => prev.map((item, index) => 
        index === editingEducation ? newEducation : item
      ));
      setEditingEducation(null);
    } else {
      setEducationList((prev) => [...prev, newEducation]);
    }
    setNewEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  const handleEditEducation = (index) => {
    setEditingEducation(index);
    setNewEducation(educationList[index]);
  };

  const handleDeleteEducation = (index) => {
    setEducationList(prev => prev.filter((_, i) => i !== index));
  };

  const handleCertificateChange = (e) => {
    const { name, value } = e.target;
    setNewCertificate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addCertificate = () => {
    if (editingCertificate !== null) {
      setCertificateList(prev => prev.map((item, index) => 
        index === editingCertificate ? { ...newCertificate, icon: <AiFillFileText className="text-gray-500" /> } : item
      ));
      setEditingCertificate(null);
    } else {
      setCertificateList((prev) => [...prev, { ...newCertificate, icon: <AiFillFileText className="text-gray-500" /> }]);
    }
    setNewCertificate({
      title: '',
      issuer: '',
      date: '',
      link: '',
    });
  };

  const handleEditCertificate = (index) => {
    setEditingCertificate(index);
    setNewCertificate(certificateList[index]);
  };

  const handleDeleteCertificate = (index) => {
    setCertificateList(prev => prev.filter((_, i) => i !== index));
  };


  return (
    <form onSubmit={handleSubmit} id="firstpage" className="bg-[var(--box-background)] p-8 rounded-lg shadow-lg max-w-lg w-full">
      {/* Hero Section */}
      <br/><br/><br/>
      <h3 className="text-2xl font-bold mb-4 text-[var(--text-color-heading)]">Hero Section</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="twitter"
        value={formData.socialLinks.twitter}
        onChange={handleSocialLinkChange}
        placeholder="Twitter URL"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="linkedin"
        value={formData.socialLinks.linkedin}
        onChange={handleSocialLinkChange}
        placeholder="LinkedIn URL"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="facebook"
        value={formData.socialLinks.facebook}
        onChange={handleSocialLinkChange}
        placeholder="Facebook URL"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />

      {/* Contact Info */}
      <h3 className="text-2xl font-bold mt-4 mb-4 text-[var(--text-color-heading)]">Contact Info</h3>
      <input
        type="email"
        name="email"
        value={contactInfo.email}
        onChange={handleContactChange}
        placeholder="Email"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="tel"
        name="phone"
        value={contactInfo.phone}
        onChange={handleContactChange}
        placeholder="Phone"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="message"
        value={contactInfo.message}
        onChange={handleContactChange}
        placeholder="Message"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />

      {/* Skills Section */}
      <h3 className="text-2xl font-bold mt-4 mb-4 text-[var(--text-color-heading)]">Skills</h3>
      <select
        name="name"
        value={newSkill.name}
        onChange={handleSkillChange}
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      >
        <option value="">Select a skill</option>
        {skillOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      <select
        name="level"
        value={newSkill.level}
        onChange={handleSkillChange}
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <button
        type="button"
        onClick={addSkill}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Skill
      </button>

      {/* Experience Section */}
      <h3 className="text-2xl font-bold mt-4 mb-4 text-[var(--text-color-heading)]">Experience</h3>
      <input
        type="text"
        name="role"
        value={newExperience.role}
        onChange={handleExperienceChange}
        placeholder="Role"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="company"
        value={newExperience.company}
        onChange={handleExperienceChange}
        placeholder="Company"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="period"
        value={newExperience.period}
        onChange={handleExperienceChange}
        placeholder="Period (e.g., 2022-present)"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="description"
        value={newExperience.description}
        onChange={handleExperienceChange}
        placeholder="Description"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      {experienceList.map((exp, index) => (
        <div key={index} className="mt-2 p-2 bg-[var(--box-background)] rounded">
          <p className="text-[var(--text-color-heading)]">{exp.role} at {exp.company}</p>
          <button 
            onClick={() => handleEditExperience(index)}
            className="mt-1 bg-yellow-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDeleteExperience(index)}
            className="mt-1 bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingExperience !== null ? 'Update Experience' : 'Add Experience'}
      </button>

      {/* Projects Section */}
      <h3 className="text-2xl font-bold mt-4 mb-4 text-[var(--text-color-heading)]">Projects</h3>
      <input
        type="text"
        name="title"
        value={newProject.title}
        onChange={handleProjectChange}
        placeholder="Project Title"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="description"
        value={newProject.description}
        onChange={handleProjectChange}
        placeholder="Project Description"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="technologies"
        value={newProject.technologies}
        onChange={handleProjectChange}
        placeholder="Technologies Used"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
            <input
        type="text"
        name="github"
        value={newProject.github}
        onChange={handleProjectChange}
        placeholder="GitHub Link"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      {projectList.map((proj, index) => (
        <div key={index} className="mt-2 p-2 bg-[var(--box-background)] rounded">
          <p className="text-[var(--text-color-heading)]">{proj.title}</p>
          <button 
            onClick={() => handleEditProject(index)}
            className="mt-1 bg-yellow-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDeleteProject(index)}
            className="mt-1 bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addProject}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Project
      </button>

      {/* Education Section */}
      <h3 className="text-2xl font-bold mt-4 mb-4 text-[var(--text-color-heading)]">Education</h3>
      <input
        type="text"
        name="school"
        value={newEducation.school}
        onChange={handleEducationChange}
        placeholder="School"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="degree"
        value={newEducation.degree}
        onChange={handleEducationChange}
        placeholder="Degree"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="date"
        name="startDate"
        value={newEducation.startDate}
        onChange={handleEducationChange}
        placeholder="Start Date"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="date"
        name="endDate"
        value={newEducation.endDate}
        onChange={handleEducationChange}
        placeholder="End Date"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="description"
        value={newEducation.description}
        onChange={handleEducationChange}
        placeholder="Description"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      {educationList.map((edu, index) => (
        <div key={index} className="mt-2 p-2 bg-[var(--box-background)] rounded">
          <p className="text-[var(--text-color-heading)]">{edu.degree} at {edu.school}</p>
          <button 
            onClick={() => handleEditEducation(index)}
            className="mt-1 bg-yellow-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDeleteEducation(index)}
            className="mt-1 bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingEducation !== null ? 'Update Education' : 'Add Education'}
      </button>

      {/* About Me Section */}
      <h3 className="text-2xl font-bold mt-4 mb-4 text-[var(--text-color-heading)]">About Me</h3>
      <input
        type="text"
        name="name"
        value={aboutInfo.name}
        onChange={handleAboutChange}
        placeholder="Name"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="description"
        value={aboutInfo.description}
        onChange={handleAboutChange}
        placeholder="Short Description"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="paragraph1"
        value={aboutInfo.paragraph1}
        onChange={handleAboutChange}
        placeholder="Paragraph 1"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="paragraph2"
        value={aboutInfo.paragraph2}
        onChange={handleAboutChange}
        placeholder="Paragraph 2"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <textarea
        name="paragraph3"
        value={aboutInfo.paragraph3}
        onChange={handleAboutChange}
        placeholder="Paragraph 3"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="imageUrl"
        value={aboutInfo.imageUrl}
        onChange={handleAboutChange}
        placeholder="Image URL"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />

      {/* Certificates Section */}
      <h3 className="text-2xl font-bold mt-4 mb-4 text-[var(--text-color-heading)]">Certificates</h3>
      <input
        type="text"
        name="title"
        value={newCertificate.title}
        onChange={handleCertificateChange}
        placeholder="Certificate Title"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="issuer"
        value={newCertificate.issuer}
        onChange={handleCertificateChange}
        placeholder="Issuer"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="date"
        name="date"
        value={newCertificate.date}
        onChange={handleCertificateChange}
        placeholder="Date"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      <input
        type="text"
        name="link"
        value={newCertificate.link}
        onChange={handleCertificateChange}
        placeholder="Certificate Link"
        className="mt-1 block w-full bg-[var(--box-background)] border-[var(--text-color-heading)] rounded p-2"
      />
      {certificateList.map((cert, index) => (
        <div key={index} className="mt-2 p-2 bg-[var(--box-background)] rounded">
          <p className="text-[var(--text-color-heading)]">{cert.title} from {cert.issuer}</p>
          <button 
            onClick={() => handleEditCertificate(index)}
            className="mt-1 bg-yellow-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDeleteCertificate(index)}
            className="mt-1 bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addCertificate}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingCertificate !== null ? 'Update Certificate' : 'Add Certificate'}
      </button>

      <button
        type="submit"
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Generate Portfolio
      </button>
    </form>
  );
};

export default Firstpage;
