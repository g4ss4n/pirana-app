import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import CodeExplanation from '../codeExplanation/CodeExplanation';

const LPSIPIRANA = () => {

  const codeLines2 = [
    {
        code: "1. Server assigns elements to buckets",
        explanation: <text>The server has two buckets: <br/> Bucket 1: [apple, orange] <br/> Bucket 2: [banana]<br/> <br/> It assigns elements to these buckets using a hashing method, like cuckoo hashing, and computes masked payloads for each element.</text>
    },
    {
      code: "2. The Client and Server run OPRF for each element",
      explanation: <text>1. The server and client run OPRF to generate special values without revealing 'apple'. <br/><br/> 2. The server and client run OPRF to generate special values without revealing 'banana'. <br/><br/>3. The server and client run OPRF to generate special values without revealing 'orange'.</text>
  },
    {
        code: "3. Client sends queries for each element in its set",
        explanation: <text>The client wants to find which elements from its set [apple, banana, orange] are also in the server's database.<br/><br/> The Client sends 3 queries <br/><br/> 1. For 'apple':<br/> The client encrypts its query for 'apple' and sends it to the server. <br/><br/><br/> 2. For 'banana': <br/> The client encrypts its query for 'banana' and sends it to the server. <br/><br/> 3. For 'orange': <br/> The client encrypts its query for 'orange' and sends it to the server.</text>
    },
    {
        code: "4. The server receives the encrypted queries",
        explanation: <text>The server receives the encrypted queries.</text>
    },
    {
      code: "5. The server figures out which elements match its database",
      explanation: <text>The server figures out which elements match its database. <br/><br/> It identifies that 'apple' is in Bucket 1, 'orange' is in Bucket 1, and 'banana' is in Bucket 2. <br/><br/> It sends back the matching results to the client.</text>
  },
  {
    code: "6. The server sends back the matching results to the client",
    explanation: <text>The server sends: <br/><br/> 'apple' is in Bucket 1<br/>'orange' is in Bucket 1<br/>'banana' is in Bucket 2.</text>
  },
    {
        code: "7. The client decrypts the results",
        explanation: <text>The client decrypts the results using the special values it got earlier from the OPRF. <br/><br/> It gets the actual elements that match its queries without revealing them during the process. <br/><br/> For 'apple', it sees it matches with Bucket 1. <br/> For 'banana', it sees it matches with Bucket 2. <br/> For 'orange', it sees it matches with Bucket 1.</text>
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
