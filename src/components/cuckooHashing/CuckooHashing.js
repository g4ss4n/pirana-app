import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './CuckooHashing.css';
import CodeExplanation from '../codeExplanation/CodeExplanation';

const CuckooHashing = () => {
  const codeLines = [
    {
        code: "Hash Functions",
        explanation: "Three hash functions are used instead of two to generate three different hash values for each key."
    },
    {
        code: "Table Structure",
        explanation: "The hash table consists of three separate arrays or buckets, each corresponding to one of the three hash functions."
    },
    {
        code: "Insertion",
        explanation: "When inserting a key, it is hashed using the three hash functions, and its corresponding locations in the three arrays are checked."
    },
    {
        code: "Displacement",
        explanation: "If all three locations are occupied, one of the existing keys is displaced to make room for the new key. This displaced key is then rehashed using the three hash functions, and the process is repeated recursively until an empty slot is found or until a certain maximum number of displacements is reached, in which case the hash table is resized."
    },
    {
        code: "Lookup and Deletion",
        explanation: "Lookup and deletion operations are similar to insertion, with the key being hashed using the three hash functions to locate its potential positions in the hash table."
    }
  ];

  const codeLines2 = [
    {
        code: "Initialization",
        explanation: <text>We start with three arrays, each containing three slots initialized to `None`.<br/> <br/>Array A: [None, None, None] <br/>Array B: [None, None, None] <br/>Array C: [None, None, None]</text>
    },
    {
        code: "Insertion of 5",
        explanation: <text>Inserting 5: <br/>- It hashes to index 2 in Array A. <br/><br/>Array A: [None, None, 5] <br/>Array B: [None, None, None] <br/>Array C: [None, None, None]</text>
    },
    {
        code: "Insertion of 8",
        explanation: <text>Inserting 8: <br/>- It hashes to index 2 in Array A, causing a displacement. <br/>- Key 8 displaces key 5, which then hashes to index 1 in Array B. <br/><br/>Array A: [None, None, 8] <br/>Array B: [None, 5, None] <br/>Array C: [None, None, None]</text>
    },
    {
        code: "Insertion of 3",
        explanation: <text>Inserting 3: <br/>- It hashes to index 0 in Array A. <br/><br/>Array A: [3, None, 8] <br/>Array B: [None, 5, None] <br/>Array C: [None, None, None]</text>
    },
    {
        code: "Insertion of 6",
        explanation: <text>Inserting 6: <br/>- It hashes to index 0 in Array A, causing a displacement. <br/>- Key 6 displaces 3, which then hashes to index 1 in Array B. <br/> - Key 3 displaces key 5 to index 0 in Array C.<br/><br/>Array A: [6, None, 8] <br/>Array B: [None, 3, None] <br/>Array C: [5, None, None]</text>
    },
    {
        code: "Insertion of 2",
        explanation: <text>Inserting 2: <br/>- It hashes to index 2 in Array A, causing a displacement. <br/>- Key 2 displaces key 8, which then hashes to index 2 in Array B. <br/><br/>Array A: [6, None, 2] <br/>Array B: [None, 3, 8] <br/>Array C: [5, None, None]</text>
    },
    {
        code: "Final State",
        explanation: <text>Array A: [6, None, 2] <br/>Array B: [None, 3, 8] <br/>Array C: [5, None, None]</text>
    }
];


  return (
    <div>
      <Title>Three Way Cuckoo Hashing</Title>
      <Body>
        <p>Three-way cuckoo hashing is an extension of cuckoo hashing, a hash table scheme used for resolving collisions.</p>
        <p>In traditional cuckoo hashing, each key is hashed to two different locations, and if a collision occurs in one of these locations, the key is rehashed and moved to the alternate location.</p>
        <p>In three-way cuckoo hashing, each key is hashed to three different locations instead of two. This provides an additional level of redundancy and can reduce the likelihood of collisions, increasing the efficiency of the hash table.</p>
        <CodeExplanation codeLines={codeLines} />
        <h2>Insertion:</h2>

<p>Let's insert a few keys: 5, 8, 3, 6, and 2.</p>

<p>We'll use simple modulo hashing functions for the sake of simplicity:</p>

<ul>
  <li>h1(key) = key % 3</li>
  <li>h2(key) = (key // 3) % 3</li>
  <li>h3(key) = (key // 9) % 3</li>
</ul>

<h3>Relations between the hash functions results and the arrays</h3>

<h4>For Key 5 for example, the hash results are:</h4>
<ul>
  <li>h1(5) = 2</li>
  <li>h2(5) = 1</li>
  <li>h3(5) = 0</li>
</ul>
<h4>These results suggest that key 5 should ideally be inserted into:</h4>
<ul>
  <li>Array A at index 2 (h1 result)</li>
  <li>Array B at index 1 (h2 result)</li>
  <li>Array C at index 0 (h3 result)</li>
</ul>
<p>However, since the hash table slots are initially empty, key 5 can be inserted into any of these locations without displacing any existing keys.</p>

        <h4>Example</h4>
        <CodeExplanation codeLines={codeLines2} />

        <h4>Please note </h4>
        <p>If a key is being displaced in all available positions, it indicates that the hash table is unable to find an empty slot to accommodate the key after multiple displacements. This situation is often referred to as a "collision" in hashing.</p>
        <p>In such cases, hash tables typically employ collision resolution techniques to handle the situation. </p>
      </Body>
    </div>
  );
};

export default CuckooHashing;
