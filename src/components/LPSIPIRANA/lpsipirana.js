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

const oprf = [
  {
      code: "1. Setup",
      explanation: "The server generates a secret key, for example, k = 10, and the client has an input, for example, x = 5."
  },
  {
      code: "2. Client to Server",
      explanation: "The client sends its input, x, to the server."
  },
  {
      code: "3. Server's Computation",
      explanation: "The server computes a function on the client's input using the secret key. For example, it adds the secret key to the client's input: y = x + k = 5 + 10 = 15."
  },
  {
      code: "4. Server to Client",
      explanation: "The server sends the result y back to the client."
  },
  {
      code: "5. Answer",
      explanation: "Now, the client knows the result of the computation y, which is 15, but it doesn't know the secret key k or the server's input. Similarly, the server doesn't know the client's input x, but it can compute the function on the input using its secret key. This ensures privacy and security in the computation."
  }
];



  return (
    <div>
      <Title>Labeled PSI</Title>
      <Body>
            <h3>Labeled Private Set Intersection (LPSI)</h3>
            Labeled PSI, or LPSI, is a cryptographic technique facilitating secure computation of the intersection of sets held by two parties without revealing additional information.
            <br/><br/>
            <strong>Example:</strong><br/>
            <p>Alice's Set: A1: apple, A2: banana, A3: orange</p>
            <p>Bob's Set: B1: banana, B2: strawberry, B3: grape</p>
            <strong>Protocol:</strong>
            <ol>
              <li>Alice and Bob privately label their sets.</li>
              <li>They exchange encrypted versions of their labeled sets.</li>
              <li>Using cryptographic techniques, they compute the intersection.</li>
            </ol>
            <strong>Result:</strong> The intersection is A2: banana, B1: banana.

            <h3>Oblivious Pseudo-Random Function (OPRF)</h3>
            OPRF is a cryptographic protocol enabling a client to compute a function on their input using a secret key held by the server, without revealing the input or the key.
            <br/><br/>
            <strong>How OPRF Works:</strong>
            
            <CodeExplanation codeLines={oprf} />
            
      <Title>LPSI-PIRANA</Title>
        <p>LPSI-PIRANA represents an extension of the multi-query PIRANA protocol to support Labeled Private Set Intersection (LPSI), enhancing its capability to handle keyword queries while securing the server's database.</p>
        <p>This extension is facilitated by a combination of Oblivious Pseudo-Random Function (OPRF) and cuckoo hashing. The process comprises several phases:</p>
      
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
