import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './CuckooHashing.css';

const CuckooHashing = () => {
  return (
    <div>
      <Title>Cuckoo Hashing</Title>
      <Body>
        <div className='cuckoo-hashing-description'>
          <p>
            Cuckoo hashing is used in cloud computing protocols due to its ability to efficiently handle large-scale distributed systems. Its advantages include fast and constant-time lookups, scalability for large datasets, effective load balancing, and reduced memory overhead. These qualities make cuckoo hashing well-suited for optimizing the performance and reliability of cloud-based applications and services.
          </p>
        </div>
        <div className='cuckoo-hashing-details'>
          <h2>Properties</h2>
          <ol>
            <li>Two hash tables</li>
            <li>Two hash functions</li>
            <li>Each hash function indexes into a single table</li>
          </ol>
          <h3>Insertion</h3>
          <ol>
            <li>Insert to the first table</li>
            <li>In case of conflict - move the conflicting element to the other table (to its corresponding position)</li>
            <li>In case of infinite loop - Rehash</li>
          </ol>
          <h3>Advantages</h3>
          <ol>
            <li>Constant-Time Lookups: Search time remains constant, offering efficient retrieval of elements.</li>
            <li>Simple Implementation: Its straightforward design facilitates easy understanding and implementation.</li>
            <li>High Performance: With low load factors, cuckoo hashing demonstrates good performance.</li>
            <li>Minimal Memory Overhead: Direct storage of elements reduces memory overhead.</li>
          </ol>
          <strong>Visualization:</strong>
          <p>
            <iframe className='cuckoo-hashing-visualization'
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OBuGqu2d4v4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
        </div>
      </Body>
    </div>
  );
};

export default CuckooHashing;
