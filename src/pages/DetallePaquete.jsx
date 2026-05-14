import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import { getPaquete } from '../services/paquetesService';
import EstrellaRating from '../components/EstrellaRating';

function DetallePaquete() {
  const { id } = useParams();
  const [paquete, setPaquete] = useState(null);
  const [resenas, setResenas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPaquete(id)
      .then(data => {
        setPaquete(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar paquete:', error);
        setLoading(false);
      });

    fetch(`http://localhost:3000/api/reviews/package/${id}`)
      .then(response => response.json())
      .then(data => setResenas(data))
      .catch(error => console.error('Error al cargar reseñas:', error));

    fetch(`http://localhost:3000/api/analytics/packages/${id}/click`, {
      method: 'POST'
    }).catch(error => console.error('Error al registrar click:', error));
  }, [id]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (!paquete) {
    return <div>Paquete no encontrado</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>{paquete.destino}</h1>
          <img src={paquete.imagen} alt={paquete.destino} style={{ width: '100%' }} />
          <p>Descripcion: {paquete.descripcion}</p>
          <p>Itinerario: {paquete.itinerario}</p>
          <p>Precio: ${paquete.precio}</p>
          <p>Duracion: {paquete.duracion} dias</p>
          <p>Calificacion: <EstrellaRating rating={paquete.calificacion} /></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Resenas</h2>
          {resenas.map(resena => (
            <Card key={resena.id} className="mb-3">
              <Card.Body>
                <Card.Title>{resena.usuario}</Card.Title>
                <EstrellaRating rating={resena.calificacion} />
                <Card.Text>{resena.comentario}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default DetallePaquete;