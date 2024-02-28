import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';

const MultiServerPir = () => {
  return (
    <div>
      <Title>Multi Server PIR - Two Servers</Title>
      <Body>
        <p>
          <strong>Explanation:</strong> Imagine a cloud-based healthcare platform where patient records are distributed across two servers. Each server holds different subsets of patient data.
        </p>
        <p>
          <strong>Example Scenario:</strong> Sarah, a medical researcher, needs access to patient records for a study on diabetes prevalence. However, accessing individual records directly would compromise patient privacy.
        </p>
        <p>
          <strong>Usage of Multi Server PIR:</strong> Sarah submits a query for diabetes-related data to the platform. The query algorithm generates two queries, one for each server. Each server processes the query independently.
        </p>
        <p>
          <strong>Outcome:</strong> Sarah receives encrypted responses from each server. She uses the reconstruct algorithm to combine the responses securely and access the desired medical information without compromising patient privacy.
        </p>
      </Body>
    </div>
  );
};

export default MultiServerPir;
