import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Row, Col, Container } from 'react-bootstrap';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    gender: 'male', // Default gender value
    dob: '',
    designation: 'webdeveloper', // Default designation value
  });
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);

  // Load employees from local storage when the component mounts
  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(savedEmployees);
  }, []);

  // Save employees to local storage whenever the employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = () => {
    const newEmployee = { ...formData };
    setEmployees([...employees, newEmployee]);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      gender: 'male',
      dob: '',
      designation: 'webdeveloper',
    });
  };

  const handleUpdate = () => {
    if (selectedEmployeeIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[selectedEmployeeIndex] = formData;
      setEmployees(updatedEmployees);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        gender: 'male',
        dob: '',
        designation: 'webdeveloper',
      });
      setSelectedEmployeeIndex(null);
    }
  };

  const handleDelete = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
  };

  const selectEmployeeForUpdate = (index) => {
    setSelectedEmployeeIndex(index);
    setFormData({ ...employees[index] });
  };

  return (
    <Container>
      <h2>Employee Details</h2>
      <Row>
        <Col md={6}>
          <Form>
            {/* Form input fields */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="designation">
              <Form.Label>Designation</Form.Label>
              <Form.Control as="select" name="designation" value={formData.designation} onChange={handleChange}>
                <option value="webdeveloper">Web Developer</option>
                <option value="operation">Operation</option>
                <option value="verification">Verification</option>
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              onClick={selectedEmployeeIndex !== null ? handleUpdate : handleCreate}
            >
              {selectedEmployeeIndex !== null ? 'Update' : 'Create'}
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <Row>
            {employees.map((employee, index) => (
              <Col  key={index}>
                <Card style={{ marginBottom: '10px' }}>
                  <Card.Body>
                    <Card.Title>{employee.name}</Card.Title>
                    <Card.Text>Email: {employee.email}</Card.Text>
                    <Card.Text>Phone Number: {employee.phoneNumber}</Card.Text>
                    <Card.Text>Address: {employee.address}</Card.Text>
                    <Card.Text>Gender: {employee.gender}</Card.Text>
                    <Card.Text>Date of Birth: {employee.dob}</Card.Text>
                    <Card.Text>Designation: {employee.designation}</Card.Text>
                    <Button
                      variant="info"
                      onClick={() => selectEmployeeForUpdate(index)}
                    >
                      Update
                    </Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Employee;
