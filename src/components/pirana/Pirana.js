import React from 'react';
import CodeExplanation from '../codeExplanation/CodeExplanation';

const Pirana = () => {
  const codeLines = [
    { code: 'const x = 5;', explanation: 'Declare a variable x and assign it the value 5.' },
    { code: 'const y = 10;', explanation: 'Declare a variable y and assign it the value 10.' },
    { code: 'const sum = x + y;', explanation: 'Add variables x and y and store the result in sum.' },
    { code: 'console.log(sum);', explanation: 'Print the value of sum to the console.' },
  ];

  return (
    <div>
      <h2>Code Explanation Example</h2>
      <CodeExplanation codeLines={codeLines} />
    </div>
  );
};

export default Pirana;
