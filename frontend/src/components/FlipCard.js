import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        <div className="flip-card-front absolute w-full h-full bg-[var(--box-background)] p-4 rounded-lg shadow-lg flex flex-col justify-between">
          <h3 className="text-2xl font-bold mb-2">{certificate.title}</h3>
          <p className="text-lg mb-1">{certificate.issuer}</p>
          <p className="text-sm mb-1">{new Date(certificate.date).toLocaleDateString()}</p>
        </div>
        <div className="flip-card-back absolute w-full h-full bg-[var(--accent-color)] text-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-center transform rotateY-180">
          <p className="text-center">{certificate.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FlipCard;
