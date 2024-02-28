import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './BatchPir.css';
import pirImage from './img5.png';

const BatchPir = () => {
  return (
    <div>
      <Title>Batch PIR</Title>
      <Body>
        <h2 className='batch-pir-title'>
          <strong>Batch Code</strong>
        </h2>
        <p>
          <strong>Explanation:</strong> In a cloud-based financial platform, users access transaction histories for analysis. The platform employs batch codes to efficiently retrieve transaction data while preserving user privacy.
        </p>
        <p>
          <strong>Example Scenario:</strong> Mark wants to analyze his recent transactions to track his expenses without revealing specific transaction details to the platform.
        </p>
        <p>
          <strong>Usage:</strong> Mark requests access to his recent transaction history on the platform.
        </p>
        <p>
          <strong>Outcome:</strong> The platform uses batch codes to encode Mark's transaction data into codewords distributed across buckets. It retrieves relevant codewords efficiently and processes them to provide Mark with his transaction history securely and privately.
        </p>
        <h2 className='batch-pir-title'>
          <strong>Batch PIR</strong>
        </h2>
        <p>
          <strong>Explanation:</strong> Consider a cloud-based document management system where users store and access documents securely.
        </p>
        <p>
          <strong>Example Scenario:</strong> Alex needs to access several documents stored across different servers for a project.
        </p>
        <p>
          <strong>Usage:</strong> Alex requests access to multiple documents on the platform.
        </p>
        <p>
          <strong>Outcome:</strong> The platform partitions the document database into buckets and efficiently retrieves relevant documents using Batch PIR. This reduces server time and computational load while ensuring that Alex can securely access his documents without revealing unnecessary information.
        </p>
        <h2 className='batch-pir-title'>Difference Highlight</h2>
        <p>
          <strong>Batch Code:</strong> Focuses on encoding and distributing data efficiently, without specific emphasis on privacy preservation during retrieval.
        </p>
        <p>
          <strong>Batch PIR:</strong> Specifically addresses privacy-preserving retrieval of multiple records with reduced computational overhead, making it suitable for scenarios where data privacy is a primary concern, such as document management systems.
        </p>
        <img src={pirImage} alt="Batch PIR" className='batch-img'/>
      </Body>
    </div>
  );
};

export default BatchPir;
