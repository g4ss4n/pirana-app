import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import CodeExplanation from '../codeExplanation/CodeExplanation';

const LPSIPIRANA = () => {

  const codeLines = [
    {
        code: "1. Setup Phase",
        explanation: "For instance, during the setup phase, the server computes pairs (x'_i, x''_i) for each element x_i in its database and organizes them into buckets using cuckoo hashing."
    },
    {
        code: "2. Query Phase",
        explanation: "During the query phase, for each query keyword y_i, the client obtains pairs (y'_i, y''_i) through OPRF protocol and generates query ciphertexts to send to the server."
    },
    {
        code: "3. Answer and Extraction",
        explanation: "In the answer and extraction phase, the server processes the queries and returns results to the client, who unblinds the responses using y''_i."
    }
];

const codeLines2 = [
  {
      code: "1. Setup",
      explanation: "For example, the server computes masked payloads for each element in the buckets using a PRF and assigns them to buckets using cuckoo hashing."
  },
  {
      code: "2. Query",
      explanation: "During the query phase, for each element in the query (e.g., 'apple' and 'banana'), the server and client run OPRF to ensure the client gets (y', y'') without learning the key. The client generates query ciphertexts based on the given keywords and sends them to the server."
  },
  {
      code: "3. Answer",
      explanation: "In the answer phase, the server processes the query ciphertexts, retrieves the results associated with the query, and returns them to the client."
  },
  {
      code: "4. Extract",
      explanation: "Finally, the client decrypts the results and unmasks them using the y'' values obtained from the OPRF operation. For instance, using the y'' values obtained from the OPRF operation, the client unmasks the results, obtaining the original payloads for 'apple' and 'banana'."
  }
];



  return (
    <div>
      <Title>LPSI-PIRANA</Title>
      <Body>
        <p>LPSI-PIRANA represents an extension of the multi-query PIRANA protocol to support Labeled Private Set Intersection (LPSI), enhancing its capability to handle keyword queries while securing the server's database.</p>
        <p>This extension is facilitated by a combination of Oblivious Pseudo-Random Function (OPRF) and cuckoo hashing. The process comprises several phases:</p>
      <CodeExplanation codeLines={codeLines} />
      
      <h4>Suppose we have the following parameters:</h4>
      <ol>
        <li>Set <em>X = {'{apple, banana, orange}'}</em></li>
        <li>Number of buckets <em>B = 2</em></li>
        <li>Number of elements in the database <em>n = 3</em></li>
        <li>Number of elements in the query <em>y = 2</em></li>
      </ol>

      <h4>And let's consider the following scenario:</h4>
      <ol>
        <li>Bucket 1: {'{apple, orange}'}</li>
        <li>Bucket 2: {'{banana}'}</li>
      </ol>

      <h3>Now, let's go through the steps of the LPSI-PIRANA protocol:</h3>
      
      <CodeExplanation codeLines={codeLines2} />

      <p>This way, LPSI-PIRANA allows for efficient and private retrieval of elements based on keyword queries while protecting S's database.</p>
      </Body>
    </div>
  );
};

export default LPSIPIRANA;
