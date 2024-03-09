import React, { useState } from 'react';
import './CodeExplanation.css';
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";


const CodeExplanation = ({ codeLines }) => {
  const [selectedLineIndex, setSelectedLineIndex] = useState(0);

  const handleNext = () => {
    if (selectedLineIndex < codeLines.length - 1) {
      setSelectedLineIndex(selectedLineIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedLineIndex > 0) {
      setSelectedLineIndex(selectedLineIndex - 1);
    }
  };

  const handleLineClick = (index) => {
    setSelectedLineIndex(index);
  };

  return (
    <div className="code-explanation-container">
      <div className="code-window">
        <pre className="language-jsx">
          {codeLines.map((line, index) => (
            <div key={index} className={`code-line ${index === selectedLineIndex ? 'selected' : ''}`} onClick={() => handleLineClick(index)}>
              
              <code>{line.code}</code>
            </div>
          ))}
        </pre>
      </div>
      <div className="button-container">
        <button className="nav-button" onClick={handlePrevious} disabled={selectedLineIndex === 0}> <IoChevronBackOutline className="nav-icon" /> Previous</button>
        <button className="nav-button" onClick={handleNext} disabled={selectedLineIndex === codeLines.length - 1}>Next <IoChevronForwardOutline className="nav-icon" /></button>
      </div>
      <div className="explanation-window">
        <h3>Explanation</h3>
        <p>{codeLines[selectedLineIndex].explanation}</p>
      </div>
    </div>
  );
};

export default CodeExplanation;
