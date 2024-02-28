import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';

const LabeledPsi = () => {
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
            <ol>
              <li><strong>Setup:</strong> Server holds a secret key k.</li>
              <li><strong>Client's Input:</strong> Client blinds input x to x'.</li>
              <li><strong>Blinding:</strong> Transformation of input x into x' obscures it from the server.</li>
              <li><strong>Server's Computation:</strong> Server computes f_k(x') and returns it.</li>
              <li><strong>Unblinding:</strong> Client unblinds f_k(x') to obtain f_k(x) without revealing x.</li>
            </ol>
            <h3>OPRF in LPSI-PIRANA Protocol</h3>
            In the context of LPSI-PIRANA, OPRF facilitates keyword-based queries while preserving privacy.
            <br/><br/>
            <strong>Utilization Steps:</strong>
            <ol>
              <li><strong>Keyword Blinding:</strong> Clients blind keywords to obscure them from the server.</li>
              <li><strong>Server's Computation:</strong> Server computes OPRF function on blinded keywords, resulting in masked payloads, organized using cuckoo hashing.</li>
              <li><strong>Client Constructs and Sends Queries:</strong>
                <ol>
                  <li><strong>Client Unblinds OPRF Outputs:</strong> Clients reverse blinding process to retrieve unblinded OPRF outputs.</li>
                  <li><strong>Query Construction:</strong> Clients construct queries using unblinded OPRF outputs.</li>
                  <li><strong>Sending Queries:</strong> Clients send constructed queries to server for processing.</li>
                </ol>
              </li>
              <li><strong>Server Processes Queries and Client Retrieves Information:</strong>
                <ol>
                  <li><strong>Server Processes Queries:</strong> Server matches queries against its database using unblinded OPRF outputs.</li>
                  <li><strong>Retrieving Masked Payloads:</strong> Server sends back information associated with queries.</li>
                  <li><strong>Client Retrieves Original Data:</strong> Clients use unblinded OPRF outputs to interpret server's response.</li>
                </ol>
              </li>
            </ol>
      </Body>
    </div>
  );
};

export default LabeledPsi;
