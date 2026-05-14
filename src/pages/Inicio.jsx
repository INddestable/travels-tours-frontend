import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { getTopRated } from '../services/paquetesService';
import TarjetaPaquete from '../components/TarjetaPaquete';

function Inicio() {
  const [topPaquetes, setTopPaquetes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopRated()
      .then(data => {
        setTopPaquetes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar top paquetes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="hero bg-primary text-white py-5">
        <Container>
          <Row>
            <Col>
              <h1>Bienvenido a Travels Tours</h1>
              <p>Descubre los mejores destinos y reserva tus viajes inolvidables.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2>Paquetes Más Valorados</h2>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Row>
              {topPaquetes.map(paquete => (
                <Col key={paquete.id} sm={12} md={6} lg={4}>
                  <TarjetaPaquete paquete={paquete} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </div>
  );
}

export default Inicio;