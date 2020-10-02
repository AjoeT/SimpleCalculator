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
    Array.from(document.querySelectorAll("input")).forEach(           //document.querySelectorAll("input") returns Nodelist.
      input => (input.value = "")     // inorder to select all the input elements from the current page and set value
    );
    setfirst('')
    setSecond('')
    setResult('')
  }
  return (
    <div className='Container'>
      <h1 className='Heading'>Simple Calculator</h1>
      <div className="App">
        <InputBox type='number' onChange={(e) => setfirst(e.target.value)} placeholder='Input One' />
        <InputBox type='number' onChange={(e) => setSecond(e.target.value)} placeholder='Input two' />
        <button className='Buttons' type='submit' onClick={add}>+</button>
        <button className='Buttons' type='submit' onClick={subtraction}>-</button>
        <button className='Buttons' type='submit' onClick={multiplication}>x</button>
        <button className='Buttons' type='submit' onClick={division}>÷</button><br />
        <button className='Buttons' type='submit' onClick={clear}>Clear</button>
        <Output result={result} />
      </div>
    </div>
  );
}

export default App;
