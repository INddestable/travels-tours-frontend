import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import { getBlogs } from '../services/blogService';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar blogs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Container>
      <h1>Blog</h1>
      <Row>
        {blogs.map(blog => (
          <Col key={blog.id} sm={12} md={6} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{blog.titulo}</Card.Title>
                <Card.Text>{blog.resumen}</Card.Text>
                <Link to={`/blog/${blog.id}`}>Leer más</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;