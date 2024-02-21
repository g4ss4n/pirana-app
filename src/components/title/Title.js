// Title.js
import React from 'react';
import './Title.css'; // Import CSS file for styling

const Title = ({ children }) => {
  return <h1 className='title-container'>{children}</h1>;
};

export default Title;
