import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

function GestionBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarBlogs();
  }, []);

  const cargarBlogs = () => {
    fetch('http://localhost:3000/api/blogs/pending')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  const aprobarBlog = (id) => {
    fetch(`http://localhost:3000/api/blogs/${id}/approve`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        cargarBlogs();
      })
      .catch(error => console.error('Error:', error));
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Container>
      <h1>Gestión de Blog - Artículos Pendientes</h1>
      <Row>
        {blogs.map(blog => (
          <Col key={blog.id} sm={12} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{blog.titulo}</Card.Title>
                <Card.Text>{blog.resumen}</Card.Text>
                <Button variant="success" onClick={() => aprobarBlog(blog.id)}>
                  Aprobar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GestionBlog;