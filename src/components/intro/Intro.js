// Intro.js
import React from 'react';
import './Intro.css'; 
import Title from '../title/Title';
import Body from '../body/Body';

import introImg from './intro.png'

const Intro = () => {
  return (
    <div className="intro-container">
      <Title className="intro-title">PIRANA: Faster Multi-query PIR via Constant-weight Codes</Title>
      <Body>
      <div className="intro-pirana-info">
            <h2 className="intro-pirana-info-title">PIRANA Overview</h2>
            <p className="intro-pirana-info-description">
              PIRANA stands as a testament to innovation, offering a groundbreaking approach to PIR through the ingenious utilization of constant-weight codes. Witness its remarkable performance as it eclipses its predecessors by up to 188.6 times, as demonstrated in Usenix SEC ’22. But that's just the beginning – PIRANA sets new standards by introducing multi-query capabilities, enabling batch retrieval with unparalleled efficiency. Experience a 14.4 times acceleration compared to the state-of-the-art, as evidenced in Oakland ’23.
            </p>
            <p className="intro-pirana-info-authors">
              Led by the brilliant minds of Jian Liu, Jingyu Li, Di Wu, and Kui Ren from Zhejiang University, PIRANA not only excels in speed but also extends its reach to labeled private set intersection (LPSI), tailored for the dynamic demands of frequently updated databases.
            </p>
          </div>
          <h2 className="intro-project-title">Simplifying the PIRANA Protocol: A Web-Based Interactive Guide</h2>

        <div className="intro-content">
        <img src={introImg} alt="PIRANA" className="intro-image" />
          <div className="intro-project">
            <h3>But what if this groundbreaking protocol could be made accessible to a wider audience? </h3>
            <p className="intro-project-description">
              Enter the visionary project "Simplifying the PIRANA Protocol: A Web-Based Interactive Guide" by Ghassan Gharzuzy, Majd Khoury, and Khaled Shahbari. Recognizing the potential of PIRANA yet acknowledging its complexity, they envision an interactive web application that demystifies the protocol for everyone, regardless of their cryptography expertise.
            </p>
            <h3>Imagine stepping into a world where the intricacies of PIRANA are unveiled through clear explanations, intuitive visualizations, and practical examples</h3>
            <p className="intro-project-impact">
              With a user-centered approach, each aspect of the protocol will be dissected into easily digestible steps.
            </p>
            <h3>
              The impact of this initiative is profound 
            </h3>
            <p className="intro-project-impact">
              By simplifying cryptography and empowering users with a deeper understanding of PIRANA, the web application aims to foster wider adoption and responsible use of privacy-preserving technologies. Moreover, by bridging the gap between complexity and accessibility, it sparks innovation, opening doors for further research and development, and potentially leading to new applications and advancements in the field.
            </p>
          </div>
        </div>
        <p className="intro-project-end">
              Embark on a journey with us as we unravel the intricacies of PIRANA and explore its transformative potential. Welcome to the forefront of privacy innovation, where accessibility meets ingenuity.
            </p>
      </Body>
     
    </div>
  );
};

export default Intro;
