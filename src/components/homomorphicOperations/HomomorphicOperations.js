import React, { useState } from 'react';
import Title from '../title/Title';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const operationExplanations = [
  {
    label: "Encryption (SIMDEnc)",
    content: (
      <>
        <h3>Takes a plaintext vector and outputs an SIMD ciphertext.</h3>
        <p><strong>Input:</strong> Plain vector x = [3, 7, 2]</p>
        <p><strong>Output:</strong> Encrypted ciphertext xe</p>
      </>
    )
  },
  {
    label: "Decryption (SIMDDec)",
    content: (
      <>
        <h3>Takes an SIMD ciphertext and outputs a plaintext vector.</h3>
        <p><strong>Input:</strong> Encrypted ciphertext xe</p>
        <p><strong>Output:</strong> Plain vector x = [3, 7, 2]</p>
      </>
    )
  },
  {
    label: "Addition (SIMDAdd)",
    content: (
      <>
        <h3>Takes two SIMD ciphertexts and outputs an encryption of the element-wise sum of their plaintext vectors.</h3>
        <p><strong>Input:</strong> Encrypted vectors xe1 = [5, 8, 3] and xe2 = [2, 4, 6]</p>
        <p><strong>Output:</strong> Encrypted sum xe = [7, 12, 9]</p>
      </>
    )
  },
  {
    label: "Multiplication (SIMDPmul)",
    content: (
      <>
        <h3>Takes an SIMD ciphertext and a plaintext vector, outputs an encryption of the element-wise product of their plaintext vectors.</h3>
        <p><strong>Input:</strong> Encrypted vector xe = [3, 5, 2], Plaintext vector y = [2, 1, 3]</p>
        <p><strong>Output:</strong> Encrypted product xe = [6, 5, 6]</p>
      </>
    )
  },
  {
    label: "Multiplication (SIMDMul)",
    content: (
      <>
        <h3>Takes two SIMD ciphertexts and outputs an encryption of the element-wise product of their plaintext vectors.</h3>
        <p><strong>Input:</strong> Encrypted vectors xe1 = [3, 5, 2] and xe2 = [1, 4, 6]</p>
        <p><strong>Output:</strong> Encrypted product xe = [3, 20, 12]</p>
      </>
    )
  },
  {
    label: "Rotation (SIMDRotate)",
    content: (
      <>
        <h3>Takes an SIMD ciphertext and an integer c, outputs an encryption of the vector obtained by cyclically rotating the original plaintext vector by c positions.</h3>
        <p><strong>Input:</strong> Encrypted vector xe = [3, 5, 2], Integer c = 1</p>
        <p><strong>Output:</strong> Encrypted rotated vector xe_rotated = [2, 3, 5]</p>
      </>
    )
  },
];

const HomomorphicOperations = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
      <div>
        <Title>Homomorphic Operations Used In PIRANA</Title>
        <Box sx={{ width: '80%', margin: '40px' , overflowX: 'auto'}}>
          <Tabs value={selectedTab} onChange={handleChange} centered style={{ marginBottom: '20px', overflowX: 'auto' }}>
            {/* Render the Tabs dynamically */}
            {operationExplanations.map((operation, index) => (
              <Tab key={index} label={operation.label} />
            ))}
          </Tabs>
          {/* Render the content based on the selected tab */}
          {operationExplanations.map((operation, index) => (
            <div key={index} style={{ display: selectedTab === index ? 'block' : 'none' }}>
              {operation.content}
            </div>
          ))}
        </Box>
      </div>
  );
};

export default HomomorphicOperations;
