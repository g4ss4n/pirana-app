import React from 'react';

const MQLP = () => {
  return (
    <div>
      <h2>Multi-query PIRANA for Large Payloads</h2>
      <p><strong>Example: Multi-query PIRANA for Large Payloads:</strong></p>

      <h3>Context and Parameters:</h3>
      <ul>
        <li>Let's consider a PIRANA setup with <em>N=4</em> slots in a ciphertext, indicating the capacity for parallel operations within a single ciphertext due to SIMD (Single Instruction, Multiple Data) capabilities.</li>
        <li>The database contains <em>n=3</em> elements, distributed across <em>B = 2</em> buckets using a batch code. This distribution helps in organizing the database for efficient retrieval while preserving the privacy of the query.</li>
        <li>Each element's payload is large, requiring <em>I = 2</em> ciphertexts for full representation. The protocol aims to retrieve multiple payloads in a single query session efficiently.</li>
      </ul>

      <h3>Scenario:</h3>
      <p>The database is structured into 3 buckets due to the batch coding scheme:</p>
      <ul>
        <li>Bucket 1: Element 1</li>
        <li>Bucket 2: Element 2</li>
        <li>Bucket 3: Element 3</li>
      </ul>
      <p>The client wishes to retrieve payloads for Element 1 and Element 2.</p>

      <h3>Process:</h3>
      <ol>
        <li>
          <strong>Setup:</strong> Homomorphic encryption parameters are initialized, and keys are generated. The database is encoded using a batch code, which facilitates the efficient retrieval of elements by ensuring that queries can be processed in parallel without revealing the specific elements being accessed.
        </li>
        <li>
          <strong>Query Generation by Client (C):</strong> The client generates query ciphertexts for the desired elements (Element 1 and Element 2). This involves creating SIMD ciphertexts where each slot is dedicated to a specific element, enabling the parallel processing of multiple queries.
        </li>
        <li>
          <strong>Answering Query by Server (S):</strong> For each bucket, the server calculates a selection vector that identifies the elements being queried. This step is crucial for ensuring that the correct elements are retrieved while maintaining the privacy of the query.
          <p>The server then performs SIMD operations to process the query, utilizing the parallelism afforded by the homomorphic encryption scheme to efficiently handle the large payloads associated with each element.</p>
          <p>Given the large size of the payloads and the optimization goal, the server combines every <em>s = 2</em> ciphertexts iteratively for <em>I * B</em> iterations, optimizing the retrieval process.</p>
        </li>
        <li>
          <strong>Extraction:</strong> The client decrypts the response ciphertexts to obtain the payloads for Element 1 and Element 2. This final step highlights the effectiveness of PIRANA in facilitating the secure and efficient retrieval of multiple large payloads in a single query session.
        </li>
      </ol>

    </div>
  );
};

export default MQLP;
