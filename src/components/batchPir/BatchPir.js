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
      explanation: <text>With this batch code, the 12 elements will be encoded into 24 codewords distributed among 6 buckets. Each bucket contains 4 codewords.<br/><br/>
      [C<sub>1</sub>, ..., C<sub>6</sub>]← Encode([e<sub>1</sub>, …, e<sub>12</sub>])</text>
  },
  {
      code: "2. Querying",
      explanation: <text>Client wants to retrieve 3 specific elements, it can issue a single PIR query to each of the 6 buckets, resulting in 6 responses.<br/><br/>
      [i<sup>'</sup><sub>1</sub>,...,i<sup>'</sup><sub>6</sub>]{"\u2190"}GenSchedule([i<sup>*</sup><sub>1</sub>, i<sup>*</sup><sub>3</sub>,i<sup>*</sup><sub>7</sub>])</text>
  },
  {
      code: "3. Retrieval",
      explanation: <text>Server processes the 6 queries across the encoded data and returns 6 responses (C<sub>1</sub>[i′<sub>1</sub>], ..., C<sub>6</sub>[i′<sub>6</sub>]), 
        allowing the client to retrieve the requested elements.<br/><br/>
      pl<sub>i<sup>*</sup><sub>1</sub></sub> , pl<sub>i<sup>*</sup><sub>3</sub></sub>, pl<sub>i<sup>*</sup><sub>7</sub></sub> ← Decode(C<sub>1</sub>[i′<sub>1</sub>], ..., C<sub>6</sub>[i′<sub>6</sub>])<br/><br/>
      pl<sub>i<sup>*</sup><sub>1</sub></sub> = e<sub>1</sub>,&nbsp; &nbsp; &nbsp; pl<sub>i<sup>*</sup><sub>3</sub></sub> = e<sub>3</sub>,&nbsp; &nbsp; &nbsp; pl<sub>i<sup>*</sup><sub>7</sub></sub> - e<sub>7</sub></text>
      
  }
];
const codeLines3 = [
  {
      code: <text>1. [C<sub>1</sub>, ..., C<sub>B</sub>] ← Encode([pl<sub>1</sub>, ..., pl<sub>n</sub>])</text>,
      explanation: <text>Where C<sub>i</sub> denotes vectors of codewords in the i-th bucket.</text>
  },
  {
      code: <text>2. [i<sup>'</sup><sub>1</sub>,...,i<sup>'</sup><sub>N</sub>]{"\u2190"}GenSchedule([i<sup>*</sup><sub>1</sub>,...,i<sup>*</sup><sub>L</sub>])</text>,
      explanation: "Which takes a set of L queries and outputs a query for each of the B buckets."
  },
  {
      code: <text>3. pl<sub>i<sup>*</sup><sub>1</sub></sub> , ..., pl<sub>i<sup>*</sup><sub>L</sub></sub> ← Decode(C<sub>1</sub>[i′<sub>1</sub>], ..., C<sub>B</sub>[i′<sub>B</sub>])</text>,
      explanation: "Which takes B codewords and outputs L payloads."
  }
];
  return (
    <div>
      <Title>Batch Code in PIRANA</Title>
      <Body>
        <p>
          In the context of PIRANA, a batch code is a mechanism facilitating the efficient retrieval of multiple elements from a database. <br/>
          It minimizes communication and computation overhead compared to fetching each element individually. <br/><br/>
          Specifically, a batch code (n, M, L, B) -BC encodes a collection of n elements into M codewords distributed among B buckets. <br/>
          The crucial property is that any L of the n elements can be recovered by fetching at most one codeword from each bucket. <br/>
          This structure is fundamental for supporting multi-query Private Information Retrieval (PIR) operations efficiently.
        </p>
        <p>
        Angel et al. introduce the notion of probabilistic batch code (PBC) that differs from the traditional batch codes in that it fails to be complete with probability p, in exchange for a smaller M and B.<br/> 
        They provide a PBC construction based on 3-way cuckoo hashing, which encodes n elements into M = 3n codewords distributed among B = 1.5L buckets, with a failure probability of p = 2<sup>-40</sup>. 
        </p>
        <p>
        We summarize the operations of a batch code as follows:
        </p>
        <CodeExplanation codeLines={codeLines3} />

        <h2 className='batch-pir-title'>How Batch Codes Work in PIRANA</h2>
        <p>
          In PIRANA, batch codes play a vital role in multi-query operations, enabling a client C to retrieve a batch of elements from the server S with minimal additional cost. The process operates as follows:
        </p>
        <CodeExplanation codeLines={codeLines} />
        <h2>Example</h2>
        <p>
        Suppose we have a database containing 12 elements, denoted as [e<sub>1</sub>, …, e<sub>12</sub>]. <br/>
        We want to encode these elements into codewords using a batch code  BC(n, M, L, B), where:
        </p>
        
        <p>
        <ol>
                <li>n = 12 is the number of elements in the database.</li>
                <li>M = 24 is the total number of codewords we'll use.</li>
                <li>L = 3 is the number of elements we want to retrieve in each query.</li>
                <li>B = 6 is the number of buckets into which the codewords will be distributed.</li>
        </ol>
        <p>
        Let's say we want to retrieve 3 elements (e<sub>1</sub>, e<sub>3</sub>, e<sub>7</sub>) from the database. We can do this efficiently using the batch code:
        </p>
        <CodeExplanation codeLines={codeLines2} />
          This mechanism significantly reduces data transmission and computational effort compared to fetching each element separately. Efficiently encoding and distributing database elements across buckets enables PIRANA to support fast and privacy-preserving multi-query operations, ideal for applications requiring retrieval of multiple database elements in a single operation.
        </p>
      </Body>
    </div>
  );
};

export default BatchPir;
