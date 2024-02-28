import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';

const MultiqueryPir = () => {
  return (
    <div>
      <Title>Multi-query PIR</Title>
      <Body>
        <p>
          <strong>Explanation:</strong> Consider a cloud-based e-commerce platform where users search for products. The platform aims to provide personalized recommendations while preserving user privacy.
        </p>
        <p>
          <strong>Example Scenario:</strong> Emily is browsing the platform for books, electronics, and clothing. She doesn't want her search history to be tracked or used for targeted advertisements.
        </p>
        <p>
          <strong>Usage of Multi-query PIR:</strong> Emily performs multiple searches for different types of products on the platform.
        </p>
        <p>
          <strong>Outcome:</strong> The platform processes each of Emily's searches independently, retrieving relevant product recommendations without storing her individual search queries. This ensures personalized recommendations while maintaining Emily's privacy.
        </p>
      </Body>
    </div>
  );
};

export default MultiqueryPir;
