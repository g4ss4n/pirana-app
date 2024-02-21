// App.js
import React from 'react';
import LeftDrawer from './components/leftDrawer/LeftDrawer';
import Intro from './components/intro/Intro';

import './App.css';

function App() {
  return (
    <div >
      <LeftDrawer />
      <div className="text-container">
        <Intro />
      </div>
    </div>
  );
}

export default App;
