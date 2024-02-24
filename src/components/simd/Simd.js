import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './Simd.css'; // Import CSS file for styling

import simdImage from './img3.png'; // Import image file

const Simd = () => {
  return (
    <div className="simd-container">
      <Title>SIMD - Single Instruction, Multiple Data</Title>
      <Body>
        <p>
          SIMD is a type of parallel computing architecture that performs multiple operations simultaneously on a single instruction across a group of data simultaneously.
        </p>
        <img src={simdImage} alt="SIMD" className="simd-image" /> {/* Updated alt attribute */}
      </Body>
    </div>
  );
};

export default Simd;
