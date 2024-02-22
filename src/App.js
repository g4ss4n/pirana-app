// App.js
import React from 'react';
import LeftDrawer from './components/leftDrawer/LeftDrawer';
import Intro from './components/intro/Intro';
import Pir from './components/pir/Pir';
import HomomorphicEncryption from './components/homomorphicEncryption/HomomorphicEncryption';
import './App.css';

function App() {
  return (
    <div >
      <LeftDrawer />
      <div className="text-container">
        <div className="page" id="intro">
          <Intro className="page" />
          </div>
        <div className="page"  id="pir">
          <Pir className="page" />
          </div>
        <div className="page" id="homomorphic-encryption">
          <HomomorphicEncryption className="page" />
        </div>
      </div>
    </div>
  );
}

export default App;
