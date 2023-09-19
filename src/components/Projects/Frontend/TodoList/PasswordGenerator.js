import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [length, setLength] = useState(12); // Default password length
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {
    // Implement your password generation logic here
    // For simplicity, let's create a random password for this example
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  const savePassword = () => {
    // Save the generated password in local storage
    localStorage.setItem(username, password);
    localStorage.getItem(`Password saved for username: ${username}`);
  };

  const resetFields = () => {
    setUsername('');
    setPassword('');
    setLength(12);
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Password Generator</h1>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="length">
              <Form.Label>Password Length:</Form.Label>
              <Form.Control
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={generatePassword} style={{ margin: "10px" }}>
              Generate Password
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2"
            >
              {showPassword ? 'Hide Password' : 'Show Password'}
            </Button>
            <Button
              variant="danger"
              onClick={resetFields}
              style={{ marginLeft: "10px" }}
            >
              Reset
            </Button>
          </Form>
        </Col>
      </Row>

      {password && (
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <div className="result-box">
              <h3>Generated Password:</h3>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={password}
                readOnly
              />
            </div>
          </Col>
        </Row>
      )}

      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Button
            variant="success"
            onClick={savePassword}
            disabled={!username || !password}
          >
            Save Password
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordGenerator;
