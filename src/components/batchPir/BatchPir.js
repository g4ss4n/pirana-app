import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './BatchPir.css';
import pirImage from './img5.png';
import CodeExplanation from '../codeExplanation/CodeExplanation';

const BatchPir = () => {

  const codeLines = [
    {
        code: "1. Encoding",
        explanation: "The server encodes its database of n elements into M codewords distributed across B buckets using a batch code. This encoding optimizes data distribution to minimize computational and communication costs during retrieval."
    },
    {
        code: "2. Querying",
        explanation: "For multi-query operations, the client issues a PIR query for each of the B buckets and receives B responses. This process leverages the batch code's structure, allowing the client to retrieve multiple elements by interacting with each bucket once, reducing the required operations."
    },
    {
        code: "3. Retrieval",
        explanation: "Upon receiving the queries, the server computes over all M codewords exactly once to prepare the responses. By performing computations on codewords rather than directly on the database elements, the server efficiently handles multiple queries with reduced computational load."
    }
];

const codeLines2 = [
  {
      code: "1. Encoding",
      explanation: "Database of 100 elements is encoded into 10 codewords distributed among 10 buckets, each bucket holds a portion of the encoded data."
  },
  {
      code: "2. Querying",
      explanation: "Client wants to retrieve 5 specific elements, it can issue a single query to each of the 10 buckets, resulting in 10 responses."
  },
  {
      code: "3. Retrieval",
      explanation: "Server processes the 10 queries across the encoded data and returns 10 responses, allowing the client to retrieve the requested elements."
  }
];

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
        <CodeExplanation codeLines={codeLines} />
        <h2>Example</h2>
        <CodeExplanation codeLines={codeLines2} />
        <p>
          This mechanism significantly reduces data transmission and computational effort compared to fetching each element separately. Efficiently encoding and distributing database elements across buckets enables PIRANA to support fast and privacy-preserving multi-query operations, ideal for applications requiring retrieval of multiple database elements in a single operation.
        </p>
      </Body>
    </div>
  );
};

export default BatchPir;
