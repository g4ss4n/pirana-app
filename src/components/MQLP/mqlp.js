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
      explanation: "The client decides to retrieve datasets 1, 2, and 3. Given the batch coding and cuckoo hashing, these datasets are guaranteed to be in different buckets or different rows after bucket splitting, ensuring no overlap. The client generates query ciphertexts tailored to these datasets, using SIMD capabilities to create ciphertexts where each slot targets a specific dataset."
    },
    {
      code: "Server Processing",
      explanation: "The server identifies queried datasets using selection vectors and leverages SIMD for efficient query processing. A modified rotate-and-sum technique is applied to handle large payloads, combining every s = N/B ciphertexts, with B=2 non-zero values to efficiently encapsulate all requested datasets."
    },
    {
      code: "Extraction",
      explanation: "The client receives the combined ciphertexts, decrypts them, and successfully retrieves the large payloads for datasets 1, 2, and 3, all within a single query session, showcasing the efficiency and privacy of the multi-query PIRANA protocol."
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
<p>Imagine a database storing detailed scientific datasets, each requiring several ciphertexts for encryption due to their large size.</p>

<h3>Parameters:</h3>
<ul>
  <li><em>N=4</em>: Number of slots in a ciphertext for parallel operations.</li>
  <li><em>B=2</em>: Buckets used to efficiently organize the database, using batch coding.</li>
  <li><em>L=3</em>: Number of datasets the client wishes to retrieve in a single operation, distributed across B buckets.</li>
</ul>

<h3>Goal:</h3>
<p>The client aims to retrieve large payloads for 3 specific datasets in one multi-query operation, without revealing the datasets being requested.</p>

      <h3>Process:</h3>
      <CodeExplanation codeLines={codeLines} />
      <h3>Illustration:</h3>
<p>Query ciphertexts might resemble [Query for Dataset 1, Query for Dataset 2, 0, 0] and [0, 0, Query for Dataset 3, 0], targeting specific datasets. The server's response combines these into [Payload for Dataset 1, Payload for Dataset 2, 0, 0] and [0, 0, Payload for Dataset 3, 0], showcasing the protocol's efficiency and privacy.</p>
      </Body>
    </div>
  );
};

export default MQLP;