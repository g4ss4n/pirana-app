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
          Jian Liu∗ Zhejiang University <a href="mailto:jian.liu@zju.edu.cn">jian.liu@zju.edu.cn</a><br />
          Jingyu Li∗ Zhejiang University <a href="mailto:jingyuli@zju.edu.cn">jingyuli@zju.edu.cn</a><br />
          Di Wu Zhejiang University <a href="mailto:wu.di@zju.edu.cn">wu.di@zju.edu.cn</a><br />
          Kui Ren Zhejiang University <a href="mailto:kuiren@zju.edu.cn">kuiren@zju.edu.cn</a><br />
        </p>
        <p>
          <strong>Abstract:</strong> Private information retrieval (PIR) is a cryptographic protocol that enables a wide range of privacy-preserving applications. Despite being extensively studied for decades, it is still not efficient enough to be used in practice. In this paper, we propose a novel PIR protocol named PIRANA, based on the recent advances in constant-weight codes. It is up to 188.6× faster than the original constant-weight PIR (presented in Usenix SEC ’22). Most importantly, PIRANA naturally supports multi-query. It allows a client to retrieve a batch of elements from the server with a very small extra-cost compared to retrieving a single element, which results in up to an 14.4× speedup over the state-of-the-art multi-query PIR (presented in Oakland ’23). We also discuss a way to extend PIRANA to labeled private set intersection (LPSI). Compared with existing LPSI protocols, PIRANA is more friendly to the scenarios where the database updates frequently.
        </p>
      </Body>
    </div>
  );
};

export default Intro;
