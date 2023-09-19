import React, { useState, useEffect } from 'react';
import './Expenses.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  // Load expenses from sessionStorage on component mount
  useEffect(() => {
    const sessionExpenses = JSON.parse(sessionStorage.getItem('expenses')) || [];
    setExpenses(sessionExpenses);
  }, []);

  const saveExpensesToSessionStorage = () => {
    sessionStorage.setItem('expenses', JSON.stringify(expenses));
  };

  const addExpense = () => {
    if (expenseName && expenseAmount) {
      const newExpense = { name: expenseName, amount: parseFloat(expenseAmount) };
      setExpenses([...expenses, newExpense]);
      saveExpensesToSessionStorage();
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
    saveExpensesToSessionStorage();
  };

  const updateExpense = (index, updatedName, updatedAmount) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = { name: updatedName, amount: parseFloat(updatedAmount) };
    setExpenses(updatedExpenses);
    saveExpensesToSessionStorage();
  };

  return (
    <Container className="expenses-container">
      <Row>
        <Col>
          <h2>Expense List</h2>
          <Form>
            <Form.Group>
              <Form.Label>Expense Name</Form.Label>
              <Form.Control
                type="text"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label >Expense Amount</Form.Label>
              <Form.Control
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
              />
            </Form.Group>
            <Button style={{margin: "20px"}} variant="primary" onClick={addExpense}>
              Add Expense
            </Button>
          </Form>
          <div className="expense-list">
            {expenses.map((expense, index) => (
              <div className="expense-item" key={index}>
                <div className="expense-info">
                  <h3>{expense.name}</h3>
                  <p>${expense.amount.toFixed(2)}</p>
                </div>
                <Button
                 style={{margin: "20px"}}
                  variant="danger"
                  onClick={() => deleteExpense(index)}
                >
                  Delete
                </Button>
                <Button
                  variant="warning"
                  onClick={() => {
                    const updatedName = prompt('Enter updated name:', expense.name);
                    const updatedAmount = prompt('Enter updated amount:', expense.amount);
                    if (updatedName !== null && updatedAmount !== null) {
                      updateExpense(index, updatedName, updatedAmount);
                    }
                  }}
                >
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Expenses;
