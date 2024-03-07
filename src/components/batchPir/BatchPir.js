import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './BatchPir.css';
import pirImage from './img5.png';

const BatchPir = () => {
  return (
    <div>
      <Title>Batch Code in PIRANA</Title>
      <Body>
        <p>
          In the context of PIRANA, a batch code is a mechanism facilitating the efficient retrieval of multiple elements from a database. It minimizes communication and computation overhead compared to fetching each element individually. Specifically, a batch code (n, M, L, B) -BC encodes a collection of n elements into M codewords distributed among B buckets. The crucial property is that any L of the n elements can be recovered by fetching at most one codeword from each bucket. This structure is fundamental for supporting multi-query Private Information Retrieval (PIR) operations efficiently.
        </p>
        <h2 className='batch-pir-title'>How Batch Codes Work in PIRANA</h2>
        <p>
          In PIRANA, batch codes play a vital role in multi-query operations, enabling a client C to retrieve a batch of elements from the server S with minimal additional cost. The process operates as follows:
        </p>
        <h3>Encoding:</h3>
        <p>
          The server encodes its database of n elements into M codewords distributed across B buckets using a batch code. This encoding optimizes data distribution to minimize computational and communication costs during retrieval.
        </p>
        <h3>Querying:</h3>
        <p>
          For multi-query operations, the client issues a PIR query for each of the B buckets and receives B responses. This process leverages the batch code's structure, allowing the client to retrieve multiple elements by interacting with each bucket once, reducing the required operations.
        </p>
        <h3>Retrieval:</h3>
        <p>
          Upon receiving the queries, the server computes over all M codewords exactly once to prepare the responses. By performing computations on codewords rather than directly on the database elements, the server efficiently handles multiple queries with reduced computational load.
        </p>
        <h2>Example</h2>
        <p>
          Suppose a database is encoded with a batch code where n=100 elements are encoded into M codewords distributed among B=10 buckets. If a client wishes to retrieve 5 specific elements L=5, it can issue a single query to each of the 10 buckets. The server processes these queries across the M codewords and returns 10 responses, allowing the client to recover the 5 requested elements.
        </p>
        <p>
          This mechanism significantly reduces data transmission and computational effort compared to fetching each element separately. Efficiently encoding and distributing database elements across buckets enables PIRANA to support fast and privacy-preserving multi-query operations, ideal for applications requiring retrieval of multiple database elements in a single operation.
        </p>
        <img src={pirImage} alt="Batch PIR" className='batch-img'/>
      </Body>
    </div>
  );
};

export default BatchPir;
