// Intro.js
import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './HomomorphicEncryption.css'; 
  


const HomomorphicEncryption = () => {
  return (
    <div className="HomomorphicEncryption-container">
      <Title>Homomorphic Encryption</Title>
      <Body>
        <p>
          Homomorphic encryption is a form of encryption that allows the users to perform binary operation on encrypted data without decrypting it.
        </p>
        <p>
          You have access to basic operation + and *, and then you build more complex functions from there. Multiplications are more expensive than additions, when using homomorphic encryption.
        </p>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>No need to decrypt the data and encrypt it again to send it back</li>
          <li>Ensures the privacy of the data</li>
        </ul>
        <p><strong>Types:</strong></p>
        <ul>
          <li>PHE - Partially Homomorphic Encryption - Only one operation but infinite number of times - Only addition or multiplication.</li>
          <li>SHE - Somewhat Homomorphic Encryption - Both addition and multiplication for a limited number of times (limitation).</li>
          <li>FHE - Fully Homomorphic Encryption - Both addition and multiplication on the ciphertext infinite number of times.</li>
        </ul>
        <p><strong>Disadvantage:</strong> Speed and Storage requirements.</p>
        <p><strong>Major issue with Homomorphic encryption:</strong> poor performance and high cost.</p>
      </Body>
    </div>
  );
};

export default HomomorphicEncryption;
