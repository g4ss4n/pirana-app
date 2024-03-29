import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import CodeExplanation from '../codeExplanation/CodeExplanation';

const LabeledPsi = () => {

  const codeLines = [
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


const codeLines2 = [
  {
      code: "1. Keyword Blinding",
      explanation: "Clients blind keywords to obscure them from the server."
  },
  {
      code: "2. Server's Computation",
      explanation: "Server computes OPRF function on blinded keywords, resulting in masked payloads, organized using cuckoo hashing."
  },
  {
      code: "Client Constructs and Sends Queries",
  },
  {
    code: "3. A. Client unblinds OPRF Outputs",
    explanation: " Clients reverse blinding process to retrieve unblinded OPRF outputs."
  },
  {
      code: "3. B. Query Construction",
      explanation: "Clients construct queries using unblinded OPRF outputs."
  },
  {
      code: "3. C. Sending Queries",
      explanation: "Clients send constructed queries to server for processing."
  },
  {
      code: "Server Processes Queries and Client Retrieves Information"
  },
  {
    code: "4. A. Server Processes Queries",
    explanation: "Server matches queries against its database using unblinded OPRF outputs."
  },
  {
      code: "4. B. Retrieving Masked Payloads",
      explanation: "Server sends back information associated with queries."
  },
  {
      code: "4. C. Client Retrieves Original Data",
      explanation: "Clients use unblinded OPRF outputs to interpret server's response."
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
            
            <CodeExplanation codeLines={codeLines} />
            
            <h3>OPRF in LPSI-PIRANA Protocol</h3>
            In the context of LPSI-PIRANA, OPRF facilitates keyword-based queries while preserving privacy.
            <br/><br/>
            <strong>Utilization Steps:</strong>
            <CodeExplanation codeLines={codeLines2} />

      </Body>
    </div>
  );
};

export default LabeledPsi;
