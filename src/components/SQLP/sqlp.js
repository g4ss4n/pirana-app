// sqlp.js
import React from 'react';
import Body from '../body/Body';
import Title from '../title/Title';
import CodeExplanation from '../codeExplanation/CodeExplanation';

const SQLP = () => {
  const codeLines = [
    {
        code: "1. Client Request",
        explanation: "The client wants to retrieve the payload for Element 2. In a full PIRANA implementation, the client sends a query that doesn't reveal which element it wants but is constructed to allow the server to perform the necessary computations to return the correct payload."
    },
    {
        code: "2. Split Payload into Small Blocks",
        explanation: "The payload for Element 2 is too large for a single ciphertext and is therefore split into Ciphertext_{2,1} and Ciphertext_{2,2}. This splitting is part of the database setup and payload encryption process, not the query process itself."
    },
    {
        code: "3. Compute Ciphertexts for Blocks",
        explanation: "Assuming Element 2's payload is the target, the server identifies the ciphertext blocks that represent this payload."
    },
    {
        code: "4. Selection Vector",
        explanation: "In a more complex database, a selection vector would be used here to identify which elements' ciphertexts to operate on. For simplicity, since we already know we're retrieving Element 2, we skip directly to using its ciphertexts."
    },
    {
        code: "5. Add Ciphertexts Together",
        explanation: "This step involves combining ciphertexts that represent different parts of the payload. In many PIR protocols, including PIRANA, this might involve homomorphic operations that aggregate information without decrypting it. However, for large payloads represented by multiple ciphertexts, the 'addition' might be more about organizing the ciphertexts for return rather than performing cryptographic addition. In this case, since our payload is split into Ciphertext_{2,1} and Ciphertext_{2,2}, there's no need for addition in the traditional sense; we prepare both for return to the client."
    },
    {
        code: "6. Rotate and Sum (if applicable)",
        explanation: "For larger databases or more complex payloads, rotation and summation operations might be used to align and combine data from multiple ciphertexts efficiently. In our simplified example, with a direct retrieval of two specific ciphertexts without needing to hide which element is being accessed, this step might not apply as described. However, in a full PIRANA process, rotations might be used to ensure the correct alignment of data within SIMD slots across ciphertexts."
    },
    {
        code: "7. Server Response",
        explanation: "The server sends Ciphertext_{2,1} and Ciphertext_{2,2} back to the client, who can then decrypt them to reconstruct Element 2's payload."
    }
];


  return (
    <div>
      <Title>Single-query PIRANA Algorithm for Large Payloads</Title>
      <Body>
      <p><strong>Example: Single-query PIRANA for Large Payloads:</strong></p>
      <p><strong>Given:</strong></p>
        <p><strong>N = 2:</strong> Number of elements in the database (simplified for this example).</p>
        <p>The database elements are encrypted, with each element potentially requiring multiple ciphertexts due to large payload sizes.</p>
        <p><strong>I = 2:</strong> Number of ciphertexts required to represent the large payload for a single database element, because the payload size exceeds the capacity of a single ciphertext.</p>

      <h3>Database Setup</h3>
      <p>Consider a simplified database with 2 elements for clarity:</p>
      <ul>
        <li>Element 1</li>
        <li>Element 2</li>
      </ul>
      <p>Each element's payload is large and split into 2 ciphertexts due to size constraints. </p>
      <p>For example, the payload for Element 2, which we want to retrieve, is represented by <strong>{"Ciphertext_{2,1}"}</strong> and <strong>{"Ciphertext_{2,2}"}</strong>.</p>

      <h3>Steps for Retrieving Element 2's Payload</h3>
      
      <CodeExplanation codeLines={codeLines} />

      <p><strong>Conclusion</strong></p>
      <p>This refined example outlines the process of retrieving a large payload for a single database element within the PIRANA framework, with adjustments for simplicity and clarity. It's important to remember that the actual PIRANA protocol involves more complex interactions, especially around query construction and the use of homomorphic encryption to preserve privacy during the retrieval process.</p>
      </Body>
    </div>
  );
};

export default SQLP;
