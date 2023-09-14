import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap'; // Import React Bootstrap components
import './TodoList.css'; // Import your CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (task.trim() !== '') {
      if (editIndex === -1) {
        // Add a new task
        setTodos([...todos, task]);
      } else {
        // Edit the existing task
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = task;
        setTodos(updatedTodos);
        setEditIndex(-1); // Reset the editIndex
      }
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  return (
    <Container className="todo-list-container">
      <Row className="todo-list-header">
        <Col md={6} className="todo-list-description">
          <h2 className="todo-list-title">Todo List 📝</h2>
          <p>This app helps you manage your tasks efficiently.</p>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
        </Col>
      </Row>
      <Row className="todo-list-content">
        <Col>
          <Form.Group controlId="taskInput" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Add a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button
              variant={editIndex === -1 ? 'success' : 'primary'}
              className="add-update-button"
              onClick={addTodo}
            >
              {editIndex === -1 ? 'Add ✅' : 'Update 🔄'}
            </Button>
          </Form.Group>
          <ListGroup className="task-list">
            {todos.map((todo, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center task-item">
                {todo}
                <div>
                  <Button
                    variant="info"
                    size="sm"
                    className="edit-button"
                    onClick={() => editTodo(index)}
                  >
                    Edit ✏️
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="delete-button"
                    onClick={() => removeTodo(index)}
                  >
                    Delete ❌
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="todo-list-footer">
        <Col>
          <h4>This app was created by Waseem Akram</h4>
          <p>Enjoy managing your tasks!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
