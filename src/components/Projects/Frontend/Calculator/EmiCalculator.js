// EmiCalculator.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const buttonStyle = {
  padding: '6px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.2s',
  margin: '3px 5px',
  display: 'flex',
  flexDirection: 'row',
};

const containerStyle = {
  backgroundColor: '#02031f',
  padding: '20px',
  borderRadius: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  margin: '35px',
  color: 'aliceblue',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#007bff',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputGroupStyle = {
  marginBottom: '15px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '15px',
};

const resultStyle = {
  textAlign: 'center',
  fontSize: '18px',
  marginTop: '10px',
  color: '#007bff',
  fontWeight: 'bold',
};

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emiMonths, setEmiMonths] = useState('');
  const [selectedTenure, setSelectedTenure] = useState('months'); // Default to months

  // Function to calculate EMI
  const calculateEmi = () => {
    // Perform EMI calculation here based on principal, interest rate, and loan term
    // Update the 'emiMonths' state with the calculated EMI value
    // For example, let's assume a simple calculation for demonstration purposes:
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const n = parseFloat(loanTerm) * 1; // Total number of payments (months)

    const emiValueMonths = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiMonths(emiValueMonths.toFixed(2));
  };

  // Function to toggle tenure between months and years
  const toggleTenure = () => {
    setSelectedTenure('months'); // Force to calculate in months
  };

  // Function to exit the EMI calculation and clear the values
  const exitEmiCalculation = () => {
    setPrincipal('');
    setInterestRate('');
    setLoanTerm('');
    setEmiMonths('');
  };

  return (
    <Container style={containerStyle}>
      <h2 style={headerStyle}>EMI Calculator</h2>
      <Row>
        <Col md={6}>
          <Form style={formStyle}>
            <Form.Group style={inputGroupStyle}>
              <Form.Label>Principal Amount ($)</Form.Label>
              <Form.Control
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={inputGroupStyle}>
              <Form.Label>Interest Rate (% per annum)</Form.Label>
              <Form.Control
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={inputGroupStyle}>
              <Form.Label>Loan Term (years)</Form.Label>
              <Form.Control
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={calculateEmi} style={buttonStyle}>
              Calculate EMI (Monthly)
            </Button>
            <Button variant="secondary" onClick={toggleTenure} style={buttonStyle}>
              Toggle Tenure (Months)
            </Button>
            <Button variant="danger" onClick={exitEmiCalculation} style={buttonStyle}>
              Exit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          {emiMonths && (
            <p style={resultStyle}>EMI (Monthly): ₹{emiMonths}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EmiCalculator;
