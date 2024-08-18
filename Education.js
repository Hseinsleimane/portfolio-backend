import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const Education = ({ educationData = [] }) => {
  if (educationData.length === 0) {
    return null;
  }

  return (
    <section className="bg-primary text-white px-5 py-32" id="education">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 animate-fadeIn">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fadeIn">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center justify-center mb-4 text-6xl text-blue-500 animate-bounce">
                <FaUniversity />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{edu.degree}</h3>
              <p className="text-center text-lg mb-4 text-gray-400">{edu.school}</p>
              <p className="text-center text-md mb-4 text-gray-500">{edu.startDate} - {edu.endDate}</p>
              <p className="text-center text-md">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;