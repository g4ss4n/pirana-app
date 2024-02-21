// Body.js
import React from 'react';
import './Body.css'; // Import CSS file for styling

const Body = ({ children }) => {
  return <div className="body-container">
    <p className='body-text'>{children}</p></div>;
};

export default Body;
