import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import SimpleCalculator from './SimpleCalculator';
import SimpleCalculator from './SimpleCalculator'
import EmiCalculator from './EmiCalculator';
import AgeCalculator from './AgeCalculator';

const Calculatore = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <SimpleCalculator />
        </Col>
        <Col md={4}>
          <EmiCalculator />
        </Col>
        <Col md={4}>
          <AgeCalculator />
        </Col>
      </Row>
    </Container>
  );
};

export default Calculatore;
