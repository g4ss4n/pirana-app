import React, { useState } from 'react';
import './CodeExplanation.css';

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

  return (
    <div className="code-explanation-container">
      <div className="code-window">
        {codeLines.map((line, index) => (
          <div key={index} className={`code-line ${index === selectedLineIndex ? 'selected' : ''}`}>
            {line.code}
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="nav-button" onClick={handlePrevious} disabled={selectedLineIndex === 0}>Previous</button>
        <button className="nav-button" onClick={handleNext} disabled={selectedLineIndex === codeLines.length - 1}>Next</button>
      </div>
      <div className="explanation-window">
        <h3>Explanation</h3>
        <p>{codeLines[selectedLineIndex].explanation}</p>
      </div>
    </div>
  );
};

export default CodeExplanation;
