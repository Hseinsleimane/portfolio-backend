import React from 'react';

const CircularProgress = ({ percentage }) => {
  const circumference = 2 * Math.PI * 45; 
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="w-24 h-24">
      <circle
        className="text-gray-300"
        strokeWidth="5"
        stroke="currentColor"
        fill="transparent"
        r="45"
        cx="50"
        cy="50"
      />
      <circle
        className="text-blue-600"
        strokeWidth="5"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r="45"
        cx="50"
        cy="50"
      />
      <text x="50" y="50" fontFamily="Verdana" fontSize="20" textAnchor="middle" alignmentBaseline="middle">
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgress;