// LeftDrawer.js
import React from 'react';
import './LeftDrawer.css'; // Import CSS file for styling

const LeftDrawer = () => {
  return (
    <div className="left-drawer">
      <ul>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#pir">PIR - Private Information Retrieval</a></li>
        <li><a href="#homomorphic-encryption">Homomorphic Encryption</a></li>
        <li><a href="#homomorphic-operations">Homomorphic Operations used</a></li>
        <li><a href="#constant-weight-code">Constant-weight code</a></li>
        <li><a href="#cwpir">CWPIR</a></li>
        <li><a href="#simd">SIMD</a></li>
        <li><a href="#cuckoo-hashing">Cuckoo Hashing</a></li>
        <li><a href="#multi-server-pir">Multi Server PIR - Two Servers</a></li>
        <li><a href="#multiquery-pir">Multiquery PIR</a></li>
        <li><a href="#batch-pir">Batch PIR</a></li>
        <li><a href="#labeled-psi">Labeled PSI</a></li>
        <li><a href="#single-query-small-payloads">Single Query small payloads</a></li>
        <li><a href="#single-query-large-payloads">Single Query Large payloads</a></li>
        <li><a href="#single-query-large-payloads-small-n">Single Query Large payloads small N</a></li>
        <li><a href="#multi-query-small-payloads">Multi Query small payloads</a></li>
        <li><a href="#multi-query-large-payloads">Multi Query Large payloads</a></li>
        <li><a href="#lpsi-pirana">LPSI Pirana</a></li>
      </ul>
    </div>
  );
};

export default LeftDrawer;
