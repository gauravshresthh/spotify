import React from 'react';
import './App.scss';

import Navbar from './Components/Navbar';
import Main from './Components/Main';

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Navbar />
        <Main />
      </div>
      <div className="musicControls">Music Controls</div>
    </div>
  );
};

export default App;
