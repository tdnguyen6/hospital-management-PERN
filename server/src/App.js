import React from 'react';
import './App.css';
import Login from "./scenes/Sign/scenes/Login/Login";
import Register from "./scenes/Sign/scenes/Register/Register";

function App() {
  return (
    <div className="App">
      <h1> Hello, this is working! </h1>
      <Login />
      <Register />
    </div>
  );
}

export default App;
