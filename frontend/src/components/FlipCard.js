import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CircularProgress from './CircularProgress';

const FlipCard = ({ certificate }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="flip-card-outer w-full h-64 cursor-pointer"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, animationDirection: "normal" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner w-full h-full relative">
        <div className="flip-card-front absolute w-full h-full bg-[var(--box-background)] p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-2xl font-bold">{certificate.title}</h3>
          <p className="text-lg">{certificate.issuer}</p>
          <p className="text-sm">{new Date(certificate.date).toLocaleDateString()}</p>
          <CircularProgress percentage={certificate.proficiency || 100} />
        </div>
        <div className="flip-card-back absolute w-full h-full bg-[var(--accent-color)] text-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center transform rotateY-180">
          <p className="text-center">{certificate.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FlipCard;