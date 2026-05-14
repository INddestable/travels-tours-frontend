import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

function PanelAdmin() {
  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarPaquetes();
  }, []);

  const cargarPaquetes = () => {
    fetch('http://localhost:3000/api/packages/pending')
      .then(response => response.json())
      .then(data => {
        setPaquetes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  const aprobarPaquete = (id) => {
    fetch(`http://localhost:3000/api/packages/${id}/approve`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        cargarPaquetes();
      })
      .catch(error => console.error('Error:', error));
  };

  const rechazarPaquete = (id) => {
    fetch(`http://localhost:3000/api/packages/${id}/reject`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        cargarPaquetes();
      })
      .catch(error => console.error('Error:', error));
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Container>
      <h1>Panel Admin - Paquetes Pendientes</h1>
      <Row>
        {paquetes.map(paquete => (
          <Col key={paquete.id} sm={12} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{paquete.destino}</Card.Title>
                <Card.Text>Precio: ${paquete.precio}</Card.Text>
                <Button variant="success" onClick={() => aprobarPaquete(paquete.id)}>
                  Aprobar
                </Button>
                <Button variant="danger" onClick={() => rechazarPaquete(paquete.id)}>
                  Rechazar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PanelAdmin;