import React from 'react';
import './App.scss';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button variant="success" onClick={handleClick}>My Button</Button>
    </div>
  );

  function handleClick(): void {
    alert("Hello");
  }
}

export default App;
