import React, { useState } from 'react';
import './App.css';
import Output from './Output';
import InputBox from './InputBox';

function App() {
  //set the state variable
  const [first, setfirst] = useState('');
  const [second, setSecond] = useState('');
  const [result, setResult] = useState('');

  //define the function
  function add() {
    if (first === '' || second === '')
      return (setResult('Error'))
    else
      return (setResult(parseInt(first) + parseInt(second)))
  }
  function subtraction() {
    if (first === '' || second === '')
      return (setResult('Error'))
    else
      return (setResult(parseInt(first) - parseInt(second)))
  }
  function multiplication() {
    if (first === '' || second === '')
      return (setResult('Error'))
    else
      return (setResult(parseInt(first) * parseInt(second)))
  }
  function division() {
    if (first === '' || second === '')
      return (setResult('Error'))
    else
      return (setResult(parseInt(first) / parseInt(second)))
  }
  function clear() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")     // inorder to select all the input elements from the current page and set value
    );
  }
  return (
    <div className="App">
      <InputBox type='number' onChange={(e) => setfirst(e.target.value)} placeholder='Input One'/>
      <InputBox type='number' onChange={(e) => setSecond(e.target.value)} placeholder='Input two'/>
      <button type='submit' onClick={add}>Add</button>
      <button type='submit' onClick={subtraction}>Subtraction</button>
      <button type='submit' onClick={multiplication}>Multiplication</button>
      <button type='submit' onClick={division}>Division</button>
      <button type='submit' onClick={clear}>Clear</button>
      <Output result={result} />
    </div>
  );
}

export default App;
