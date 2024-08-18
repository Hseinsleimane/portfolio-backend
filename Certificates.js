import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { certificatesApi } from '../services/api';

const Certificates = () => {
  const [certificatesData, setCertificatesData] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await certificatesApi.getAll();
      setCertificatesData(response.data);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20" id="certificates">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-2">{certificate.title}</h3>
              <p className="text-lg mb-2">{certificate.issuer}</p>
              <p className="text-sm mb-4">{new Date(certificate.date).toLocaleDateString()}</p>
              <p className="text-gray-400">{certificate.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;