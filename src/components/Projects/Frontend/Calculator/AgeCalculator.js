import React, { useState } from 'react';

const AgeCalculator = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthdateTimestamp = new Date(birthdate).getTime();
    const currentTimestamp = new Date().getTime();
    const ageMilliseconds = currentTimestamp - birthdateTimestamp;
    const ageDate = new Date(ageMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const days = ageDate.getUTCDate() - 1;
    const hours = ageDate.getUTCHours();

    const ageString = `${years} years ${days} days ${hours} hours`;

    setAge(ageString);
  };

  const clearFields = () => {
    setName('');
    setBirthdate('');
    setAge(null);
  };

  return (
    <div className="age-calculator-container">
      <h2>Age Calculator</h2>
      <div className="age-inputs">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
        <button onClick={clearFields}>Clear</button>
      </div>
      {age !== null && (
        <div className="age-result">
          <p>Hi {name}, your age is {age}</p>
        </div>
      )}
      <style>
      {`
          .age-calculator-container {
            background-color: #02031f;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            text-align: center;
            margin: 45px;
            color: #333;
            font-family: Arial, sans-serif;
          }

          .age-calculator-container h2 {
            margin-bottom: 30px;
            color: #007bff;
          }

          .age-inputs {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 60px;
          }

          .age-inputs input[type="text"],
          .age-inputs input[type="date"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 16px;
            outline: none;
          }

          .age-inputs button {
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 10px;
            padding: 10px 30px;
            font-size: 16px;
            margin: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .age-inputs button:hover {
            background-color: #0056b3;
          }

          .age-result {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            font-size: 18px;
          }

          .age-result p {
            margin: 0;
            font-weight: bold;
          }

          /* Animation for result */
          .age-result {
            animation: fadeIn 0.5s ease;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AgeCalculator;
