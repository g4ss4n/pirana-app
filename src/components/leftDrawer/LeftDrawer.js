// LeftDrawer.js
import React from 'react';
import './LeftDrawer.css'; // Import CSS file for styling

const LeftDrawer = ({ onItemClick, selectedItemIndex }) => {
  const handleItemClick = (itemIndex) => {
    onItemClick(itemIndex);
  };

  // List of items for the LeftDrawer
  const items = [
    "intro",
    "pir",
    "multi-server-pir",
    "multiquery-pir",
    "homomorphic-encryption",
    "homomorphic-operations",
    "cwpir",
    "simd",
    "cuckoo-hashing",
    "batch-pir",
    "labeled-psi",
    "pirana",
    "single-query-small-payloads",
    "single-query-large-payloads",
    "single-query-large-payloads-small-n",
    "multi-query-small-payloads",
    "multi-query-large-payloads",
    "lpsi-pirana"
  ];

  return (
    <div className="left-drawer">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button
              className={selectedItemIndex === index ? "active" : ""}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftDrawer;
