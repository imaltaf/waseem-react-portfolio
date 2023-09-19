import React, { useState } from 'react';
import './Calculator.css';

const SimpleCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'sqrt') {
      setInput(input + 'Math.sqrt(');
    } else if (value === '^') {
      setInput(input + '**');
    } else if (value === '(' || value === ')') {
      setInput(input + value);
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', '(', ')', 'sqrt', 
  ];

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <input className="display" type="text" value={input} readOnly />
      <div className="result">{result}</div>

      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="button"
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimpleCalculator;
