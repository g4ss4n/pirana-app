// App.js
import React, { useState } from 'react';
import LeftDrawer from './components/leftDrawer/LeftDrawer';
import Intro from './components/intro/Intro';
import Pir from './components/pir/Pir';
import HomomorphicEncryption from './components/homomorphicEncryption/HomomorphicEncryption';
import HomomorphicOperations from './components/homomorphicOperations/HomomorphicOperations';
import Cwpir from './components/cwpir/Cwpir';
import Simd from './components/simd/Simd';
import './App.css';
import { MdArrowBackIosNew,MdArrowForwardIos } from "react-icons/md";
import CuckooHashing from './components/cuckooHashing/CuckooHashing';
import MultiServerPir from './components/multiServerPir/MultiServerPir';
import MultiqueryPir from './components/multiqueryPir/MultiqueryPir';
import BatchPir from './components/batchPir/BatchPir';
import LabeledPsi from './components/labeledPsi/LabeledPsi';
import Pirana from './components/pirana/Pirana';



function App() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const items = [
    "intro",
    "pir",
    "homomorphic-encryption",
    "homomorphic-operations",
    "constant-weight-code",
    "simd",
    "cuckoo-hashing",
    "multi-server-pir",
    "multiquery-pir",
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

  const handleNext = () => {
    setSelectedItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleBack = () => {
    setSelectedItemIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleItemClick = (itemIndex) => {
    setSelectedItemIndex(itemIndex);
  };

  const renderSelectedComponent = () => {
    const selectedItem = items[selectedItemIndex];
    switch (selectedItem) {
      case 'intro':
        return <Intro />;
      case 'pir':
        return <Pir />;
      case 'homomorphic-encryption':
        return <HomomorphicEncryption />;
      case 'homomorphic-operations':
        return <HomomorphicOperations />;
      case 'constant-weight-code':
        return <Cwpir />;
      case 'simd':
        return <Simd />;
      case 'cuckoo-hashing':
        return <CuckooHashing />;
      case 'multi-server-pir':
        return <MultiServerPir />;
      case 'multiquery-pir':
        return <MultiqueryPir />;
      case 'batch-pir':
        return <BatchPir />;
      case 'labeled-psi':
        return <LabeledPsi />;
      case 'pirana':
        return <Pirana />;
      // Add cases for other components as needed
      default:
        return null;
    }
  };

  return (
    <div>
      <LeftDrawer onItemClick={handleItemClick} className="drawer" selectedItemIndex={selectedItemIndex} />
      <div className="text-container">
        {renderSelectedComponent()}

      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack} className='back'><MdArrowBackIosNew /> Back </button>
        <button onClick={handleNext} className='next'>Next <MdArrowForwardIos /> </button>
      </div>
    </div>
  );
}

export default App;
