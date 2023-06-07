import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/application/Application';
import Skills from './components/skills/Skills';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <Application/>
      <Skills skills={[]}/> */}
      <Counter/>
    </div>
  );
}

export default App;
