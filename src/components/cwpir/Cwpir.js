// Cwpir.js
import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Cwpir.css';
import CodeExplanation from '../codeExplanation/CodeExplanation';

import img1 from './img1.png';
import img2 from './img2.png';

const Cwpir = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const codeLines = [
    {
        code: "Initialization",
        explanation: "Set j = i = 3. Set l = k = 3. Initialize x = [0, 0, 0, 0, 0, 0]."
    },
    {
        code: "Loop Over Codeword Positions",
        explanation: "Start from m' = 5 to 0."
    },
    {
        code: "Iteration 1 (m' = 5)",
        explanation: "Check if j ≥ (5 choose 3) = 10. Since j = 3 is not greater than 10, skip."
    },
    {
        code: "Iteration 2 (m' = 4)",
        explanation: "Check if j ≥ (5 choose 4) = 4. Since j = 3 is not greater than 4, skip."
    },
    {
        code: "Iteration 3 (m' = 3)",
        explanation: "Check if j ≥ (3 choose 3) = 1. Since j = 3 is greater than 1, set x[3] = 1, and update j = 3 - 1 = 2 and l = 3 - 1 = 2. Updated x: [0, 0, 1, 0, 0, 0]."
    },
    {
        code: "Iteration 4 (m' = 2)",
        explanation: "Check if j ≥ (2 choose 2) = 1. Since j = 2 is greater than 1, set x[4] = 1, and update j = 2 - 1 = 1 and l = 2 - 1 = 1. Updated x: [0, 0, 1, 1, 0, 0]."
    },
    {
        code: "Iteration 5 (m' = 1)",
        explanation: "Check if j ≥ (1 choose 1) = 1. Since j = 1 is equal to 1, set x[5] = 1, and update j = 1 - 1 = 0 and l = 1 - 1 = 0. Updated x: [0, 0, 1, 1, 1, 0]."
    },
    {
        code: "Iteration 6 (m' = 0)",
        explanation: "Since l = 0, break."
    },
    {
        code: "Return",
        explanation: "The resulting constant-weight codeword [0, 0, 1, 1, 1, 0]."
    },
    {
        code: "Result",
        explanation: "X = [0, 0, 1, 1, 1, 0]."
    }
];

const Plain = [
  {
      code: "Initialization",
      explanation: <text>Encrypt x, resulting in the encrypted codeword <br/> <br/> Ex = X4, X3, X2, X1.<br/> y = 1, 0, 0, 1. </text>
  },
  {
      code: "Bit position 1",
      explanation: "Multiply the bits of Ex and Ey: X1 * 1 = X1."
  },
  {
      code: "Bit position 2",
      explanation: "Multiply the bits of Ex and Ey: X2 * 0 = 0."
  },
  {
      code: "Bit position 3",
      explanation: "Multiply the bits of Ex and Ey: X3 * 0 = 0."
  },
  {
      code: "Bit position 4",
      explanation: "Multiply the bits of Ex and Ey: X4 * 1 = X4."
  },
  {
      code: "Multiplication",
      explanation: "Multiply the extracted bits together: X4 * X1 = Ex"
  },
  {
      code: "Result",
      explanation: "The the output is 0 in an encypted from (no match)."
  }
];

const Arithmetic = [
  {
      code: "Initialization",
      explanation: "Encrypt both x and y, resulting in encrypted codewords Ex and Ey."
  },
  {
      code: "Comparison",
      explanation: "Start from the least significant bit (LSB) of Ex and Ey to the most significant bit (MSB)."
  },
  {
      code: "Bit position 1",
      explanation: "Multiply the first bits of Ex and Ey: 0 * 1 = 0."
  },
  {
      code: "Bit position 2",
      explanation: "Multiply the second bits of Ex and Ey: 1 * 0 = 0."
  },
  {
      code: "Bit position 3",
      explanation: "Multiply the third bits of Ex and Ey: 0 * 0 = 0."
  },
  {
      code: "Bit position 4",
      explanation: "Multiply the fourth bits of Ex and Ey: 1 * 1 = 1."
  },
  {
      code: "Summation",
      explanation: "Sum up the results: 1 + 0 + 0 + 0 = 1."
  },
  {
      code: "Result",
      explanation: "Since c is less than k (2), there's at least one mismatch, so the output is 0 (no match)."
  }
];

  return (
    <div className="cwpir-container">
      <Title>CwPIR - Constant-weight Private Information Retrieval</Title>
      <Body>
        <p>
          CwPIR stands for Constant-weight Private Information Retrieval. It's a cryptographic protocol that allows a user to retrieve an item from a database without revealing which item is being retrieved to the database. In CwPIR, the user's query is encoded using a constant-weight code, ensuring that the database cannot infer anything about the specific item being requested based on the query pattern. This provides a level of privacy for the user while still allowing them to access the desired information from the database.
        </p>
        <h2>Constant Weight Code</h2>

        <p>
          A Constant Weight Code is a binary string where the number of bits set to 1 is exactly K.
        </p>
        <h4>Algorithm - Mapping indices to constant-weight codewords</h4>
        <p>
        <strong>Input</strong> i ∈ [n] ,&nbsp;&nbsp; m, k ∈ N with (m choose k) ≥ n
        </p>
        <p>
        <strong>Output</strong> x ∈ CW(m, k)
        </p>
        <ol>
              <li>&nbsp;j := i;&nbsp;&nbsp; l := k;&nbsp;&nbsp; x := 0<sup>m</sup></li>
              <li>&nbsp;<strong>for</strong> m′:= m − 1, ..., 0 <strong>do</strong></li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>if</strong> j ≥ (m′ choose l) <strong>then</strong></li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x[m′] := 1</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j := j − (m' choose l)</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;l := l − 1</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>end if</strong></li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if l = 0 then</li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>break</strong></li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>end if</strong></li>
              <li>&nbsp;<strong>end for</strong></li>
              <li>&nbsp;return x</li>
            </ol>
            <h4>Example</h4>
            <CodeExplanation codeLines={codeLines} />
      </Body>
      <Body>
        <div className="intro-content">
          <div className="intro-pirana-info">
            <h2 className="intro-pirana-info-title">Constant-weight PIR: Single-round Keyword PIR via Constant-weight Equality Operators</h2>
            <p className="intro-pirana-info-description">
              Presented at USENIX Security '22 by Rasoul Akhavan Mahdavi and Florian Kerschbaum from the University of Waterloo, this paper introduces equality operators for constant-weight codewords in private information retrieval (PIR). The operators have a multiplicative depth that depends only on the Hamming weight of the code, not the bit-length of the elements. Experimental results show that these operators are up to 10 times faster than existing ones. Additionally, the paper proposes a constant-weight PIR protocol with smaller communication complexity and lower runtime compared to state-of-the-art solutions. It extends the protocol to keyword PIR, providing the first practical single-round solution to single-server keyword PIR.
            </p>
          </div>
        </div>
        <h2>Equality Operator</h2>
        <p>
          The Equality Operator is the first building block of CwPIR. It takes two inputs and outputs 1 if they match, otherwise outputs 0. There are two types of Equality Operator:
        </p>
        <ul>
          <h4>1. Plain Comparison - Compares an encrypted value with an unencrypted value.</h4>
          <h4>2. Arithmetic Comparison - Compares two encrypted numbers.</h4>
        </ul>
        <Tabs value={value} onChange={handleChange} aria-label="Cwpir tabs">
          <Tab label="Plain Comparison" />
          <Tab label="Arithmetic Comparison" />
        </Tabs>
        <Box>
          <TabPanel value={value} index={0}>
            <h2>Plain Comparison</h2>
            <ol>
              <li>We compare an encrypted value x with an unencrypted value y.</li>
              <li>We take the bits of x corresponding with the bits of y and extract them.</li>
              <li>If there are exactly K bits set to 1, they will give us the result of the comparison in encrypted form.</li>
            </ol>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h2>Arithmetic Comparison</h2>
            <ol>
              <li>We have encrypted values x and y.</li>
              <li>We perform the inner product between the bits to get "c" which is something between 0 and K.</li>
              <li>If "c" equals K, they are a match. If it's less than K, they are not a match.</li>
            </ol>
          </TabPanel>
        </Box>
          <h3>Example</h3>


          <h4> x = 1010 (Hamming weight k = 2)</h4>

        <h4> y = 1001 (Hamming weight k = 2)</h4>

      
    <Tabs value={value} onChange={handleChange} aria-label="Cwpir tabs">
  <Tab label="Plain Comparison Example" />
  <Tab label="Arithmetic Comparison Example" />
</Tabs>
<Box>
  <TabPanel value={value} index={0}>
    <CodeExplanation codeLines={Plain} />
  </TabPanel>
  <TabPanel value={value} index={1}>
    <CodeExplanation codeLines={Arithmetic} />
  </TabPanel>
</Box>

        <div className="conclusion">
          <h2>Conclusions</h2>
          <p>
            The Plain method is shown to be 10 times faster than the folklore method, requiring fewer operations and smaller parameters. On the other hand, the Arithmetic method involves more operations for constant weight but performs better when smaller parameters are used.
          </p>
        </div>
      </Body>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`cwpir-tabpanel-${index}`}
      aria-labelledby={`cwpir-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default Cwpir;
