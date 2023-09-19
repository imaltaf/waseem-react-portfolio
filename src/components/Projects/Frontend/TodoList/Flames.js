import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Flames = () => {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [result, setResult] = useState('');

  const calculateFlames = () => {
    const name1 = yourName.toLowerCase().replace(/ /g, '');
    const name2 = partnerName.toLowerCase().replace(/ /g, '');

    const chars1 = name1.split('');
    const chars2 = name2.split('');

    for (let i = 0; i < chars1.length; i++) {
      for (let j = 0; j < chars2.length; j++) {
        if (chars1[i] === chars2[j]) {
          chars1.splice(i, 1);
          chars2.splice(j, 1);
          i--;
          break;
        }
      }
    }

    const combinedLength = chars1.length + chars2.length;
    const flamesSequence = ['Friend', 'Love', 'Affection', 'Marriage', 'Enemy', 'Sibling'];

    let index = 0;

    while (flamesSequence.length > 1) {
      index = (index + combinedLength - 1) % flamesSequence.length;
      flamesSequence.splice(index, 1);
    }

    const flamesResult = flamesSequence[0];
    let emoji = '';

    switch (flamesResult) {
      case 'Friend':
        emoji = '👫';
        break;
      case 'Love':
        emoji = '❤️';
        break;
      case 'Affection':
        emoji = '😊';
        break;
      case 'Marriage':
        emoji = '💍';
        break;
      case 'Enemy':
        emoji = '👿';
        break;
      case 'Sibling':
        emoji = '👯';
        break;
      default:
        break;
    }

    setResult(`${flamesResult} ${emoji}`);
  };

  const resetForm = () => {
    setYourName('');
    setPartnerName('');
    setResult('');
  };

  return (
    <Container>
      <h1 className="text-center mt-4">FLAMES Calculator</h1>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Form>
            <Form.Group controlId="yourName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="partnerName">
              <Form.Label>Partner's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter partner's name"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={calculateFlames}
              style={{margin: "20px"}}
            >
              Calculate FLAMES
            </Button>
            <Button
              variant="secondary"
              type="button"
              className="ml-3"
              onClick={resetForm}
            >
              Reset
            </Button>
          </Form>
        </Col>
      </Row>

      {result && (
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <div className="result-box">
              <h3>Result:</h3>
              <p>{result}</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Flames;
