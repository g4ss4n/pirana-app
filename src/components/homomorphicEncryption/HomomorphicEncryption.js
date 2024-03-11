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
        <ol>
          <li><strong>PHE - Partially Homomorphic Encryption</strong> - Only one operation but infinite number of times - Only addition or multiplication.</li>
          <li><strong>SHE - Somewhat Homomorphic Encryption</strong> - Both addition and multiplication for a limited number of times (limitation).</li>
          <li><strong>FHE - Fully Homomorphic Encryption</strong> - Both addition and multiplication on the ciphertext infinite number of times.</li>
        </ol>
        <p>In summary, FHE allows both addition and multiplication homomorphically, SHE allows either addition or multiplication, and PHE allows only one type of operation, either addition or multiplication, but with more efficiency compared to SHE.</p>
        <p>The term <strong>"number of times" </strong> refers to how many times a specific operation (addition or multiplication) can be applied to encrypted data while still preserving the homomorphic properties of the encryption scheme.</p>
        <p><strong>Disadvantage:</strong> Speed and Storage requirements.</p>
        <p><strong>Major issue with Homomorphic encryption:</strong> poor performance and high cost.</p>
      </Body>
    </div>
  );
};

export default HomomorphicEncryption;
