import React from 'react';
import logo from './logo.svg';
import AGILE from './image/agile.jpg'
import './App.css';
import {motion} from 'framer-motion'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={AGILE} alt="image" width="40%"/>
        <motion.p
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 30, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}>
          Edit <code>src/App.tsx</code> and save to reload.
        </motion.p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
