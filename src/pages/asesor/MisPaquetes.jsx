import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Spinner } from 'react-bootstrap';

function MisPaquetes() {
  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarPaquetes();
  }, []);

  const cargarPaquetes = () => {
    fetch('http://localhost:3000/api/packages/my-packages', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
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

  const getEstadoBadge = (estado) => {
    if (estado === 'APPROVED') return <Badge bg="success">Aprobado</Badge>;
    if (estado === 'PENDING') return <Badge bg="warning">Pendiente</Badge>;
    if (estado === 'REJECTED') return <Badge bg="danger">Rechazado</Badge>;
    return <Badge bg="secondary">Desconocido</Badge>;
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Container>
      <h1>Mis Paquetes</h1>
      <Row>
        {paquetes.map(paquete => (
          <Col key={paquete.id} sm={12} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{paquete.destino}</Card.Title>
                <Card.Text>Precio: ${paquete.precio}</Card.Text>
                <Card.Text>
                  Estado: {getEstadoBadge(paquete.estado)}
                </Card.Text>
                <Card.Text>
                  Vistas: {paquete.vistas}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MisPaquetes;