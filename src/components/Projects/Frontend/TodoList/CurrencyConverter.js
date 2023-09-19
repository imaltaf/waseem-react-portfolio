import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/INR')
      .then((response) => response.json())
      .then((data) => {
        const currencyCodes = Object.keys(data.rates);
        setCurrencies(['INR', ...currencyCodes]);
      });
  }, []);

  const handleCurrencyChange = (event) => {
    if (event.target.name === 'from') {
      setFromCurrency(event.target.value);
    } else if (event.target.name === 'to') {
      setToCurrency(event.target.value);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const convertCurrency = () => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = data.rates[toCurrency];
        const converted = amount * exchangeRate;
        setConvertedAmount(converted);
      });
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Currency Converter</h1>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Label>From Currency:</Form.Label>
              <Form.Control as="select" name="from" value={fromCurrency} onChange={handleCurrencyChange}>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>To Currency:</Form.Label>
              <Form.Control as="select" name="to" value={toCurrency} onChange={handleCurrencyChange}>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Amount:</Form.Label>
              <Form.Control type="number" value={amount} onChange={handleAmountChange} />
            </Form.Group>
            <button type="button" className="btn btn-primary" onClick={convertCurrency} style={{margin: "10px"}}>
              Convert
            </button>
          </Form>
        </Col>
      </Row>
      {convertedAmount !== null && (
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <div className="result-box">
              <h3>Conversion Result:</h3>
              <p>
                {amount} {fromCurrency} is equal to {convertedAmount.toFixed(2)} {toCurrency}
              </p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CurrencyConverter;
