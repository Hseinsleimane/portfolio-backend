import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
const experiences = [
  {
    role: 'Full Stack Developper Instructor',
    company: 'ESA Coding Lab',
    period: 'Jul 2021 - Aug 2024',
    description:
      'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality products.',
  },
  {
    role: 'Python Seminor Instructor',
    company: 'ESA BUSINESS SCHOOL',
    period: 'JAN 2022 - JAN 2023',
    description:
      'Designed and implemented responsive user interfaces with HTML, CSS, and JavaScript. Worked closely with designers to create user-friendly experiences.',
  },
  {
    role: 'Project Manager',
    company: 'Ideas Advanced Developement and Design',
    period: 'Jun 2020 - Aug 2022',
    description:
      'Assisted in developing web applications and learning about the full software development lifecycle. Gained hands-on experience with React and Node.js.',
  },
  {
    role: 'Computer Science Teacher',
    company: 'Rani Bazzi SCHOOL',
    period: 'JAN 2017 - JAN 2022',
    description:
      'Teaching and  Working closely to create experiences.',
  },
];


  return (
    <section className="bg-primary text-white px-5 py-32" id="experience">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 animate-fadeIn">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center justify-center mb-4 text-4xl text-blue-500 animate-pulse">
                <FaBriefcase />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{experience.role}</h3>
              <h4 className="text-xl text-center mb-2">{experience.company}</h4>
              <div className="flex items-center justify-center mb-4 text-gray-400">
                <FaCalendarAlt className="mr-2" />
                <span>{experience.period}</span>
              </div>
              <p className="text-center text-lg">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;