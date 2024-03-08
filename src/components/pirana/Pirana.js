import React from 'react';
import './pirana.css'; // Import CSS file for styling
import Title from '../title/Title';
import Body from '../body/Body';

const Pirana = () => {
  return (
    <div className="pirana-container">
      <Title className="protocol-title">PIRANA Protocol:</Title>
      <Body className="protocol-body">
        <ul>
          <li>PIRANA is based on recent advances in constant-weight codes. It achieves remarkable speed improvements over existing PIR protocols:</li>
            <ol>
              <li>Up to 188.6× faster than the original constant-weight PIR.</li>
              <li>Naturally supports multi-query operations.</li>
              <li>Allows clients to retrieve batches of elements with minimal extra cost compared to single-element retrieval.</li>
              <li>Results in up to a 14.4× speedup over state-of-the-art multi-query PIR protocols.</li>
            </ol>
          
        </ul>
        <h2>Labeled Private Set Intersection (LPSI):</h2>
        <ol>
          <li>PIRANA can be extended to support LPSI scenarios where databases frequently update.</li>
          <li>Compared to existing LPSI protocols, PIRANA is more suitable for such dynamic scenarios.</li>
        </ol>
        <p>In summary, PIRANA combines constant-weight codes with multi-query support, making it a promising advancement in the field of private information retrieval.</p>
      </Body>
    </div>
  );
};

export default Pirana;
