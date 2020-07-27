import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pepe the Frog
        </p>
        <a
          className="App-link"
          href="https://www.google.com/search?q=pepe+the+frog&rlz=1C5CHFA_enNZ759NZ759&sxsrf=ALeKk00X8j99mflsUf82Ne50nFZWjeZE7Q:1595826179855&source=lnms&tbm=isch&sa=X&ved=2ahUKEwif8crk0-zqAhVdwzgGHR3NBzoQ_AUoAXoECBUQAw&biw=1440&bih=766#imgrc=pgC0fF8exDmIWM"
          target="_blank"
          rel="noopener noreferrer"
        >
          FeelsBadMan 
        </a>
      </header>
    </div>
  );
}

export default App;
