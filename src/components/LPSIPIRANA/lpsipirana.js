import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';

const LPSIPIRANA = () => {
  return (
    <div>
      <Title>LPSI-PIRANA</Title>
      <Body>
      <p>Suppose we have the following parameters:</p>
      <ul>
        <li>Set <em>X = {'{apple, banana, orange}'}</em></li>
        <li>Number of buckets <em>B = 2</em></li>
        <li>Number of elements in the database <em>n = 3</em></li>
        <li>Number of elements in the query <em>y = 2</em></li>
      </ul>

      <p>And let's consider the following scenario:</p>
      <ul>
        <li>Bucket 1: {'{apple, orange}'}</li>
        <li>Bucket 2: {'{banana}'}</li>
      </ul>

      <h3>Now, let's go through the steps of the LPSI-PIRANA protocol:</h3>
      
      <h4>Setup:</h4>
      <p>S computes masked payloads for each element in the buckets using a PRF:</p>
      <ul>
        <li>Masked payload for apple: <code>pl1' = pl1 ⊕ x1'</code></li>
        <li>Masked payload for banana: <code>pl2' = pl2 ⊕ x2'</code></li>
        <li>Masked payload for orange: <code>pl3' = pl3 ⊕ x3'</code></li>
      </ul>
      <p>S assigns the masked payloads to buckets using cuckoo hashing.</p>

      <h4>Query:</h4>
      <p>For each element in the query (e.g., "apple" and "banana"), S and C run OPRF to ensure that C gets (y', y'') without learning the key.</p>
      <p>C generates the query ciphertexts based on the given keywords and sends them to S.</p>

      <h4>Answer:</h4>
      <p>S processes the query ciphertexts and returns the results to C.</p>

      <h4>Extract:</h4>
      <p>C decrypts the results and unmasks them using the y'' values obtained from the OPRF operation.</p>

      <p>For example, if the query includes "apple" and "banana":</p>
      <ol>
        <li>C runs the query algorithm and generates the corresponding query ciphertexts.</li>
        <li>S processes the query and retrieves the masked payloads associated with "apple" and "banana".</li>
        <li>S returns the results to C.</li>
        <li>C decrypts the results and unmasks them using the y'' values obtained from the OPRF operation, obtaining the original payloads for "apple" and "banana".</li>
      </ol>

      <p>This way, LPSI-PIRANA allows for efficient and private retrieval of elements based on keyword queries while protecting S's database.</p>
      </Body>
    </div>
  );
};

export default LPSIPIRANA;
