import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/application/Application';
import Skills from './components/skills/Skills';
import Counter from './components/counter/Counter';
import CounterTwo from './components/counter-two/CounterTwo';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      {/* <Application/>
      <Skills skills={[]}/> */}
      {/* <Counter/>
      <CounterTwo count={0}/> */}
      <Users/>
    </div>
  );
}

export default App;
