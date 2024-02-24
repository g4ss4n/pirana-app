// Cwpir.js
import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Cwpir.css';

import img1 from './img1.png';
import img2 from './img2.png';

const Cwpir = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <img src={img2} alt="Plain Comparison" className="tab-image" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h2>Arithmetic Comparison</h2>
            <ol>
              <li>We have encrypted values x and y.</li>
              <li>We perform the inner product between the bits to get "c" which is something between 0 and K.</li>
              <li>If "c" equals K, they are a match. If it's less than K, they are not a match.</li>
            </ol>
            <img src={img1} alt="Arithmetic Comparison" className="tab-image" />
          </TabPanel>
        </Box>
          <h3>Example</h3>


          <h4> x = 1010 (Hamming weight k = 2)</h4>

        <h4> y = 1100 (Hamming weight k = 2)</h4>

      
    <Tabs value={value} onChange={handleChange} aria-label="Cwpir tabs">
  <Tab label="Plain Comparison Example" />
  <Tab label="Arithmetic Comparison Example" />
</Tabs>
<Box>
  <TabPanel value={value} index={0}>
    <h4>Plain Method:</h4>
    <ol>
      <li>We encrypt x, resulting in the encrypted codeword Ex.</li>
      <li>We compare Ex with y directly, without encryption.</li>
      
      <h3>Comparison:</h3>
        <ol>
          <li>For y = 1100, we take the corresponding bits from Ex: 10.</li>
          <li>Multiply the extracted bits together: 1 * 0 = 0.</li>
          <li>Since the result is 0, it means there's at least one mismatch, so the output is 0 (no match).</li>
        </ol>
      
    </ol>
  </TabPanel>
  <TabPanel value={value} index={1}>
    <h4>Arithmetic Method:</h4>
    <ol>
      <li>We encrypt both x and y, resulting in encrypted codewords Ex and Ey.</li>
      <li>We perform an inner product operation between Ex and Ey.</li>
      
        <h3>Comparison:</h3>
        <ol>
          <li>Inner product of Ex (1010) and Ey (1100) results in c = 1.</li>
          <li>Multiply the first bits of Ex and Ey: 1 * 1 = 1.</li>
          <li>Multiply the second bits of Ex and Ey: 0 * 1 = 0.</li>
          <li>Multiply the third bits of Ex and Ey: 1 * 0 = 0.</li>
          <li>Multiply the fourth bits of Ex and Ey: 0 * 0 = 0.</li>
          <li>Now, sum up the results: 1 + 0 + 0 + 0 = 1.</li>
          <li>Since c is less than k (2), there's at least one mismatch, so the output is 0 (no match).</li>
        </ol>
      
    </ol>
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
