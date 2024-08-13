import React from 'react';
import { FaCertificate } from 'react-icons/fa';
const Certificates = () => {
const certificatesData = [
  {
    title: 'Full Stack Web Development',
    provider: 'Coursera',
    date: 'June 2023',
    description: 'Completed a comprehensive course covering front-end and back-end development, including projects using the MERN stack.',
  },
  {
    title: 'React & Redux Mastery',
    provider: 'Udemy',
    date: 'March 2023',
    description: 'Gained deep understanding of React and Redux, along with best practices for building scalable web applications.',
  },
  {
    title: 'MongoDB Essentials',
    provider: 'MongoDB University',
    date: 'December 2022',
    description: 'Learned the fundamentals of MongoDB, including data modeling, indexing, and performance optimization.',
  },
];


  return (
    <section className="bg-primary text-white px-5 py-32" id="certificates">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 animate-fadeIn">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center justify-center mb-4 text-6xl text-yellow-500 animate-bounce">
                <FaCertificate />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{cert.title}</h3>
              <p className="text-center text-lg mb-4 text-gray-400">{cert.provider}</p>
              <p className="text-center text-md mb-4 text-gray-500">{cert.date}</p>
              <p className="text-center text-md">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;