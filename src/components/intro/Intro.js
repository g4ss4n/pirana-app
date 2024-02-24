// Intro.js
import React from 'react';
import Title from '../title/Title';
import Body from '../body/Body';
import './Intro.css'; 


const Intro = () => {
  return (
    <div className="intro-container">
      <Title>PIRANA: Faster Multi-query PIR via Constant-weight Codes</Title>
      <Body>
        <p>
          <strong>Abstract:</strong> Private information retrieval (PIR) is a cryptographic protocol enabling privacy-preserving applications. Despite decades of study, it remains inefficient for practical use. <br /><br />
       They propose, a novel PIR protocol leveraging constant-weight codes. It outperforms the original by up to 188.6× (Usenix SEC ’22). Notably, PIRANA supports multi-query, enabling batch retrieval with minimal extra cost, achieving a 14.4× speedup over the state-of-the-art (Oakland ’23). We also extend PIRANA to labeled private set intersection (LPSI), particularly suited for frequently updated databases.
        </p>
        <p>
          Jian Liu Zhejiang University <br />
          Jingyu Li Zhejiang University <br />
          Di Wu Zhejiang University <br />
          Kui Ren Zhejiang University <br />
        </p>
      </Body>
    </div>
  );
};

export default Intro;
