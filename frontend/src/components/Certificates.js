import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from './FlipCard';

const Certificates = ({ certificatesData }) => {
  return (
    <section className="bg-[var(--box-background)] text-[var(--text-color-heading)] py-20" id="certificates">
      <div className="section-container">
      <motion.h2
    className="text-5xl font-bold text-center mb-12 text-[var(--text-color-heading)]"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Certificates
  </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FlipCard certificate={certificate} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;