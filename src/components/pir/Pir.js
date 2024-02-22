// Pir.js
import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './Pir.css'; 

const Pir = () => {
  return (
    <div className="pir-container">
      <Title>Private Information Retrieval (PIR)</Title>
      <Body>
        <p>
          <strong>What is PIR?</strong> Private Information Retrieval (PIR) is a privacy-preserving technique that allows users to retrieve information from a database without revealing the specific details of their queries. It employs cryptographic methods, such as homomorphic encryption or secure multi-party computation, to protect user privacy.
        </p>
        <h2>Model</h2>
        <p>
          <strong>Requirements</strong>
        </p>
        <ul>
          <li><strong>Correctness:</strong> PIR systems must accurately retrieve the requested information without errors. Users should receive the correct data, and the server should not be able to manipulate or tamper with the information being retrieved.</li>
          <li><strong>Privacy:</strong> PIR must ensure that when a user queries a database, the server learns nothing about the specific information being requested. The user's query details should remain confidential.</li>
        </ul>
        <h2>Naive solution</h2>
        <p>
          Client downloads the entire DB and queries it locally without contacting the server ever again. (this provides correctness and privacy).
        </p>
        <p><strong>Downside:</strong> Large communication lost</p>
        <h2>Main Approach of PIR</h2>
        <p>
          Look for protocol to minimize communication between the client and the server.
        </p>
        <h3>Multi Server PIR</h3>
        <p>
          Replicate DB non-colluding servers, this will minimize the communication between the client and each server.
        </p>
        <p><strong>Non-colluding:</strong> means that the servers do not try and cooperate to break the user's security.</p>
        <h3>Single Server PIR</h3>
        <p>
          It does not require replicating the server, but it requires making cryptographic assumptions and the result in security is computational.
        </p>
      </Body>
    </div>
  );
};

export default Pir;
