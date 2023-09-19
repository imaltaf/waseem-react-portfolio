import React, { useState } from 'react';

const Random = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const generateRandomNumber = () => {
    const min = 1;
    const max = 100; // You can adjust the range as needed
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
  };

  const updateMessage = () => {
    if (name !== '' && randomNumber !== null) {
      setMessage(`Hi ${name}, your lucky number is ${randomNumber}.`);
    } else {
      setMessage('');
    }
  };

  const containerStyle = {
    maxWidth: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '10px',
    fontSize: '1rem',
  };

  const messageStyle = {
    fontSize: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h1 className="text-center">Random Number Generator</h1>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={generateRandomNumber} style={buttonStyle}>
          Generate Random Number
        </button>
      </div>
      {randomNumber !== null && (
        <div className="text-center mt-4">
          <h2>Your Lucky Number:</h2>
          <p className="display-4" style={messageStyle}>
            {randomNumber}
          </p>
        </div>
      )}
      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={updateMessage} style={buttonStyle}>
          Update Name
        </button>
      </div>
      {message && (
        <div className="text-center mt-4">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Random;
