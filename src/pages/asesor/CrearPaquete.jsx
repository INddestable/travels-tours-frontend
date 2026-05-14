import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function CrearPaquete() {
  const [formData, setFormData] = useState({
    destino: '',
    precio: '',
    descripcion: '',
    itinerario: '',
    duracion: '',
    imagen: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    fetch('http://localhost:3000/api/packages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess('Paquete creado correctamente');
          setFormData({
            destino: '',
            precio: '',
            descripcion: '',
            itinerario: '',
            duracion: '',
            imagen: ''
          });
        }
      })
      .catch(error => {
        setLoading(false);
        setError('Error al crear paquete');
      });
  };

  return (
    <Container>
      <h1>Crear Paquete</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Destino</Form.Label>
          <Form.Control
            type="text"
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Itinerario</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="itinerario"
            value={formData.itinerario}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duración (días)</Form.Label>
          <Form.Control
            type="number"
            name="duracion"
            value={formData.duracion}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL Imagen</Form.Label>
          <Form.Control
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Paquete'}
        </Button>
      </Form>
    </Container>
  );
}

export default CrearPaquete;