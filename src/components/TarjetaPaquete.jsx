import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function TarjetaPaquete({ paquete }) {
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate(`/paquete/${paquete.id}`);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={paquete.imagen} />
      <Card.Body>
        <Card.Title>{paquete.destino}</Card.Title>
        <Card.Text>
          Precio: ${paquete.precio}
        </Card.Text>
        <Card.Text>
          Calificación: {paquete.calificacion} estrellas
        </Card.Text>
        <Button variant="primary" onClick={handleVerMas}>
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TarjetaPaquete;