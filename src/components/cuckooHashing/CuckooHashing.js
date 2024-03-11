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
        explanation: "We start with three arrays, each containing three slots initialized to `None`. [None, None, None] [None, None, None] [None, None, None]"
    },
    {
        code: "Insertion of 5",
        explanation: "Inserting 5: - It hashes to index 2 in the first array. [None, None, 5] [None, None, None] [None, None, None]"
    },
    {
        code: "Insertion of 8",
        explanation: "Inserting 8: - It hashes to index 2 in the third array. [None, None, 5] [None, None, None] [None, None, 8]"
    },
    {
        code: "Insertion of 3",
        explanation: "Inserting 3: - It hashes to index 0 in the second array. [None, None, 5] [3, None, None] [None, None, 8]"
    },
    {
        code: "Insertion of 6",
        explanation: "Inserting 6: - It hashes to index 0 in the first array, causing a displacement. - 6 displaces 5, which then hashes to index 2 in the second array. - 5 displaces None, which then hashes to index 1 in the third array. [6, None, None] [3, None, 5] [None, 8, None]"
    },
    {
        code: "Insertion of 2",
        explanation: "Inserting 2: - It hashes to index 2 in the first array, causing a displacement. - 2 displaces None, which then hashes to index 2 in the third array. [6, None, 2] [3, None, 5] [None, 8, None]"
    },
    {
        code: "Final State",
        explanation: "[6, None, 2] [3, None, 5] [None, 8, None]"
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
        <h4>Example</h4>
        <CodeExplanation codeLines={codeLines2} />
      </Body>
    </div>
  );
};

export default CuckooHashing;
