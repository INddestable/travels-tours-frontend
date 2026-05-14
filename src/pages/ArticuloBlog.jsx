import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { getBlog } from '../services/blogService';

function ArticuloBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlog(id)
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar blog:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (!blog) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <Container>
      <h1>{blog.titulo}</h1>
      <p>{blog.fecha}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.contenido }} />
    </Container>
  );
}

export default ArticuloBlog;