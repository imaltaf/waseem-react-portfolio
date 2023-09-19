import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleImageChange = (e) => {
    // Handle image upload here, you can use FileReader or other methods to process the image
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle blog post submission here
    // You can send the title, body, and image to your server or perform other actions
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Image:', image);
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Create a Blog Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the title of your blog post"
            value={title}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write your blog post here"
            value={body}
            onChange={handleBodyChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload Image:</Form.Label>
          <Form.File
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Publish
        </Button>
      </Form>
    </Container>
  );
};

export default Blog;
