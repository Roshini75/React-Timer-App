import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import TextDemo from './components/TextDemo';
function App() {
  const x="adarsh";
  const y = "rock"
  return (
    <div className="App">
     <Timer id={x} />
     <TextDemo id={y}/>
    </div>
  );
}

export default App;
