import React from 'react';
import logo from './new_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MSA 2020
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=i8ZW94SWchE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dancing doggie XD
        </a>
      </header>
    </div>
  );
}

export default App;
