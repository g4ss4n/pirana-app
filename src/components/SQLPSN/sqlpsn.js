import React, { useState } from 'react';
import './sqlpsn.css';
import CodeExplanation from '../codeExplanation/CodeExplanation';
import Title from '../title/Title';
import Body from '../body/Body';

const SQLPSN = () => {
  // State to manage the visibility of the comparison section
  const [showComparison, setShowComparison] = useState(false);

  const codeLines = [
    {
        code: "1. Payload Splitting",
        explanation: "Element 2's payload is large and split into two parts: Payload_{2,1} and Payload_{2,2}. These parts are encrypted into two ciphertexts: Ciphertext_{2,1} and Ciphertext_{2,2}."
    },
    {
        code: "2. Client Query",
        explanation: "The client wishes to retrieve Element 2's full payload but needs to do so without revealing the specific element they are interested in directly. A query is constructed to efficiently request the large payload associated with Element 2."
    },
    {
        code: "3. Server Processing",
        explanation: "Upon receiving the query, the server identifies that the request pertains to Element 2’s payload. The server prepares the response by selecting the ciphertexts Ciphertext_{2,1} and Ciphertext_{2,2} associated with Element 2's payload."
    },
    {
        code: "4. Efficient Retrieval for Large Payloads",
        explanation: "Instead of requiring I * (N-1) rotations as might be typically necessary, the server uses an optimized approach to minimize the number of rotations and computations needed to prepare the payload for retrieval. This optimization is particularly effective given the small size of n in the database, allowing for a more efficient retrieval process that conserves computational resources."
    },
    {
        code: "5. Client Receives and Reconstructs Payload",
        explanation: "The client receives Ciphertext_{2,1} and Ciphertext_{2,2}, decrypts them, and reconstructs Element 2's large payload. This process ensures that the large payload is retrieved efficiently, despite the small number of elements in the database and the large size of the payload."
    }
];

  return (
    
    <div>
      <Title>Single-query for large payloads with small n</Title>
      <Body>
      <h3>Simplified Example for Single-query PIRANA with Large Payloads and Small n</h3>
      <p>Given:</p>
      <ul>
        <li>A database with a small number of elements <em>n=2</em>, where each element's payload is large and requires multiple ciphertexts to represent it.</li>
        <li>Each payload is so large that it must be split into <em>I=2</em> ciphertexts for efficient handling.</li>
        <li>We assume a simplified case where <em>N=2</em>, representing the number of slots available in a single ciphertext for this example.</li>
      </ul>

      <h4>Scenario:</h4>
      <p>Imagine a database with just two elements, each associated with a large payload that requires two ciphertexts to be fully represented. Let's focus on retrieving the payload for one specific element (Element 2) efficiently.</p>

      <h4>Steps:</h4>
      < CodeExplanation codeLines={codeLines} />

      <button className='comparison-button' onClick={() => setShowComparison(!showComparison)}>
        {showComparison ? 'Hide Comparison' : 'Show Comparison'}
      </button>

      {showComparison && (
        <div>
          <h2>Comparing Examples</h2>
          <h3>Single Query Large Payloads Example</h3>
          <p>This example demonstrates how to retrieve a large payload associated with a specific element in a database where the payload size exceeds the capacity of a single ciphertext, requiring multiple ciphertexts to represent the full payload.</p>
          <ul>
            <li><strong>Focus:</strong> The emphasis is on handling payloads that are too large for a single ciphertext and must be divided into multiple parts, each encrypted separately.</li>
            <li><strong>Scenario:</strong> It involves a database with an unspecified number of elements but highlights the process for a single element's large payload.</li>
            <li><strong>Process:</strong> The steps include splitting the large payload into smaller blocks, encrypting each block into a ciphertext, and then using homomorphic operations to prepare and retrieve these ciphertexts efficiently.</li>
          </ul>

          <h3>Single Query Large Payloads with Small n Example:</h3>
          <p>This example specifically addresses the scenario where the database has a small number of elements n and focuses on the efficiency improvements in handling large payloads within such a constrained database size.</p>
          <ul>
            <li><strong>Focus:</strong> The optimization for databases with a small number of elements n and large payloads. It introduces a specialized approach to reduce the computational overhead typically associated with large payload retrievals.</li>
            <li><strong>Scenario:</strong> The database explicitly has a small number of elements (n=2 in the simplified example), and the retrieval process is optimized for this context.</li>
            <li><strong>Process:</strong> The example still involves splitting the payload into multiple ciphertexts due to its size. However, it emphasizes an optimized retrieval process that minimizes the number of necessary rotations and computations, specifically tailored for situations where n is small.</li>
          </ul>

          <h3>Key Differences</h3>
          <ul>
            <li><strong>Database Size n Context:</strong> The first example is more general regarding database size, while the second explicitly deals with optimizations for a small n.</li>
            <li><strong>Optimization Techniques:</strong> The second example introduces specific optimizations (e.g., reduced rotations) for efficiency in small n databases, which is not a focal point in the first example.</li>
            <li><strong>Algorithmic Focus:</strong> The second example references a specific algorithmic adjustment designed to enhance efficiency in small n scenarios, whereas the first example provides a broader view of handling large payloads.</li>
          </ul>
        </div>
      )}
      </Body>
    </div>
  );
};

export default SQLPSN;

