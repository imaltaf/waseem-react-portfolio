import React, { Component } from 'react';
import './Calculator.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: '0',
    };
  }

  handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(this.state.input);
        this.setState({ result: result.toString() });
      } catch (error) {
        this.setState({ result: 'Error' });
      }
    } else if (value === 'C') {
      // Clear the last character from the input
      this.setState((prevState) => ({
        input: prevState.input.slice(0, -1),
        result: prevState.input.slice(0, -1) || '0', // Reset result if input is empty
      }));
    } else if (value === 'AC') {
      // Clear the entire input
      this.setState({ input: '', result: '0' });
    } else if (value === 'WS') {
      // Clear the entire input
      this.setState({ input: '', result: 'Welcome to Calculator' });
    } else {
      this.setState({ input: this.state.input + value });
    }
  };

  render() {
    return (
      <Container className="calculator">
        <Row>
          <Col md={12} className="calculator-content">
            <h1 className="headerStyle">Simple -Calculator</h1>
            <div className="display">
              <input
                type="text"
                value={this.state.input}
                readOnly
                className="form-control"
              />
              <div className="result">{this.state.result}</div>
            </div>
            <div className="calculator-buttons">
              {[
                '7', '8', '9', '/',
                '4', '5', '6', '*',
                '1', '2', '3', '-',
                '0', '.', 'C',
                '=', '+', 'AC', 'WS'
              ].map((value, index) => (
                <Button
                  key={index}
                  onClick={() => this.handleButtonClick(value)}
                  variant="outline-secondary"
                  className={`calculator-button ${value === '=' ? 'equals' : ''}`}
                >
                  {value === '=' ? <i className="fa fa-equals" /> : value}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
