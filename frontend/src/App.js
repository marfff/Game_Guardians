import React from 'react';
import Navbar from './components/navbar/navBar';
import Signup from './components/signup/signUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body>
      <Signup />
      </body>
    </div>
  );
}

export default App;
