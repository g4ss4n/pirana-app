import React from 'react';
import CodeExplanation from '../codeExplanation/CodeExplanation';
import Body from '../body/Body';
import Title from '../title/Title';

const MQLP = () => {
  const codeLines = [
    {
      code: "Setup",
      explanation: "The server has previously encoded its database into 2 buckets (B=2), ensuring an efficient retrieval structure. For simplicity, assume each dataset's large payload is split across 2 ciphertexts (I=2) due to size constraints."
    },
    {
      code: "Query Generation",
      explanation: "The client decides to retrieve datasets 1 and 2. Given the batch coding and cuckoo hashing, it's feasible for these datasets to be efficiently organized into different buckets, minimizing retrieval conflicts. The client generates query ciphertexts for these datasets, utilizing SIMD capabilities to ensure each slot precisely targets a dataset."
    },
    {
      code: "Server Processing",
      explanation: "Upon receiving the queries, the server uses selection vectors to identify the datasets being requested and employs SIMD for effective processing. The modified rotate-and-sum technique is then applied to the large payloads, strategically combining them into fewer ciphertexts for efficient transmission."
    },
    {
      code: "Extraction",
      explanation: "The client decrypts the received ciphertexts, successfully extracting the requested large payloads for datasets 1 and 2 within a single query session. This exemplifies the protocol's capability to maintain both efficiency and privacy in multi-query operations."
    }
  ];
  

const codeLines2 = [
  {
      code: "Step 1",
      explanation: "For each column the server generates a selection vector similar to multi-query small payloads."
  },
  {
      code: "Step 2",
      explanation: "It then multiplies the blocks of N payloads in each column are multiplied by each selection vector."
  },
  {
      code: "Step 3",
      explanation: "Subsequently, every s ciphertexts are combined, requiring l ·B iterations and l · N rotations."
  }
];

  return (
    <div>
    <Title>Multi-query PIRANA for Large Payloads</Title>
    <Body>
      <h3>Overview:</h3>
      <p>
        When considering large payloads, where |pl| = l · N · p and B is relatively small, it becomes necessary to efficiently combine multiple ciphertexts into a single one. The direct application of the rotate-and-sum technique faces a challenge due to the presence of B non-zero values in ve (instead of one non zero value in single query).
      </p>
      <p>
        Fortunately, the positions for the non-zero values are somewhat regular, e.g., there is only one non-zero value at positions [i′<sub>1</sub>, i′<sub>B+1</sub>, ..., i′<sub>(s−1)B+1</sub>] of v. This pattern allows us to still use the rotate-and-sum method to combine multiple ciphertexts as we did in single query large payloads, but we will need to rotate B slots (instead
of one) each time and we could only combine s ciphertexts
(instead of N).
      </p>
      <h4>Procedure:</h4>
      <CodeExplanation codeLines={codeLines2} />

      <p><strong>Example: Multi-query PIRANA for Large Payloads:</strong></p>

      <h3>Simplified Scenario Setup:</h3>
<p>Consider a database structured to optimize data retrieval using 2 buckets (B=2). This database stores detailed scientific datasets that require encryption for secure storage and privacy-preserving access.</p>

<h3>Parameters:</h3>
<ul>
  <li><em>N=4</em>: Total number of slots in a ciphertext, facilitating parallel operations.</li>
  <li><em>B=2</em>: Number of buckets used to efficiently organize the database.</li>
  <li><em>L=2</em>: Number of datasets the client wishes to retrieve in a single operation, ideally fitting within the bucket structure without overlap.</li>
</ul>

<h3>Goal:</h3>
<p>The aim is to demonstrate how the client can retrieve large payloads for 2 specific datasets in one query operation, leveraging the PIRANA protocol's privacy and efficiency features.</p>


      <h3>Process:</h3>
      <CodeExplanation codeLines={codeLines} />
      <h3>Quick Overview:</h3>
<p>The client sends targeted queries for datasets 1 and 2, using separate buckets to avoid overlap. The server processes these queries with SIMD and selection vectors, combining the datasets' payloads into a single, efficiently encrypted format. The client decrypts this to securely retrieve the requested information. This streamlined interaction showcases the PIRANA protocol's efficiency and privacy in handling multi-query operations within a simple system.</p>

      </Body>
    </div>
  );
};

export default MQLP;