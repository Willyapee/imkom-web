import React from 'react';
import './CurvedText.css';

const CurvedText = ({ text, radius }) => {
  const pathId = `curve-${Math.random().toString(36).substring(7)}`;
  const centerX = radius;
  const centerY = radius * 0.7; 
  const svgWidth = radius * 2;
  const svgHeight = radius * 0.5; 
  const yRadius = radius * 0.6;

  const pathD = `
    M${centerX - radius},${centerY}
    A${radius},${yRadius} 0 0 1 ${centerX + radius},${centerY}
  `;

  return (
    <svg
      width="100%"
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight * 1}`} 
      preserveAspectRatio="xMidYMin meet"
    >
      <path id={pathId} d={pathD} fill="none" stroke="none" />
      <text className="curved-text">
        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedText;