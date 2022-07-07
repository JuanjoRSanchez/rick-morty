import React from "react"; 
import logo from '../logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='link'>
        <Link to="/">1111111111111111111</Link>
      </div>
    </div>
  );
}

export default App;