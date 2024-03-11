// sqlp.js
import React from 'react';
import Body from '../body/Body';
import Title from '../title/Title';
import CodeExplanation from '../codeExplanation/CodeExplanation';

const SQLP = () => {
  const codeLines = [
      {
          code: "1. Client Request",
          explanation: "The client issues a query encoded in such a way to indicate interest in the payload for a specific element. This query is constructed to preserve privacy, not revealing directly which element's payload is being requested."
      },
      {
          code: "2. Server Preparation",
          explanation: "The server has the payloads split into smaller blocks across multiple ciphertexts (Ciphertext_1 and Ciphertext_2). The server prepares to apply the PIRANA protocol to retrieve these ciphertexts without compromising privacy or efficiency."
      },
      {
          code: "3. Rotate and Sum Technique",
          explanation: "Splitting: Assume each payload block for the element is already encrypted and stored across Ciphertext_1 and Ciphertext_2. \n- Rotation: For larger payloads that span multiple ciphertexts, PIRANA would typically interlace the non-empty slots (data points) from these ciphertexts to align them properly. However, in our basic example, this step is conceptual as we are directly targeting two known ciphertexts."
    
      },
      {
          code: "4. Server Response",
          explanation: "The server sends the relevant ciphertexts (Ciphertext_1 and Ciphertext_2) back to the client. This ensures that only the necessary data is retrieved, maintaining privacy and minimizing bandwidth."
      },
      {
          code: "5. Client Decryption",
          explanation: "The client decrypts Ciphertext_1 and Ciphertext_2 to reconstruct the large payload for the requested element."
      }
  ];

const codeLines2 = [
  {
      code: "Step 1",
      explanation: "For each database column, a selection vector is generated to identify relevant payloads."
  },
  {
      code: "Step 2",
      explanation: "The server multiplies blocks of N payloads by each selection vector for all l·N blocks, repeating for each payload block across columns."
  },
  {
      code: "Step 3",
      explanation: "The resulting ciphertexts from different columns are added together, yielding l · N ciphertexts."
  },
  {
      code: "Step 4",
      explanation: "Every N ciphertexts undergo rotation to align their non-empty slots, which are then summed to produce l final ciphertexts, efficiently encoding the large payload."
  }
];



  return (
    <div>
      <Title>Single-query PIRANA Algorithm for Large Payloads</Title>
      <Body>
      <p>Addressing the challenge of efficiently retrieving large payloads, PIRANA extends its protocol to optimize the use of ciphertext slots. When dealing with payloads larger than the slot size, the protocol employs a rotate-and-sum technique to maximize bandwidth efficiency and computational resources.</p>
      <p>Methodology For payloads as large as l ciphertexts, i.e., |pl| = l · N · p, PIRANA splits each payload into l · N smaller blocks. It computes l · N ciphertexts, where the aggregation of non-empty slots across these ciphertexts constitutes the intended payload.</p>
      <p>The server (S) then rotates every N ciphertexts to interlace their non-empty slots and sums them up, effectively reducing the output to l ciphertexts. This process significantly compresses the payload transmission without compromising the retrieval accuracy.</p>
      <CodeExplanation codeLines={codeLines2}/>
      <p><strong>Example: Single-query PIRANA for Large Payloads:</strong></p>
      <p><strong>Given:</strong></p>
        <p><strong>N = 4:</strong> Number of slots in a single ciphertext (for a more illustrative example).</p>
        <p><strong>l = 2:</strong> Number of ciphertexts required to represent the large payload for a single database element, implying the payload is split across 8 slots in total (2 ciphertexts with 4 slots each).</p>

      <h3>Database Setup</h3>
      <p>Consider a database where each element's payload is large, necessitating division into multiple ciphertexts for secure storage. For simplicity, we focus on a single element with its payload distributed across two ciphertexts due to size constraints:</p>
      <p>Payload for Element = Split into <strong>Ciphertext_1</strong> and <strong>Ciphertext_2</strong></p>

      <h3>Steps for Retrieving Element 2's Payload</h3>
      
      <CodeExplanation codeLines={codeLines} />

     
      </Body>
    </div>
  );
};

export default SQLP;