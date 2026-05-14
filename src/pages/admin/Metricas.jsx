import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Metricas() {
  const [metricas, setMetricas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarMetricas();
  }, []);

  const cargarMetricas = () => {
    fetch('http://localhost:3000/api/analytics/packages/all/metrics', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setMetricas(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Container>
      <h1>Métricas de Paquetes</h1>
      <Row>
        {metricas.map(metrica => (
          <Col key={metrica.paqueteId} sm={12} md={6} lg={4} className="mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{metrica.nombrePaquete}</h5>
                <p className="card-text">
                  Vistas: {metrica.vistas}
                </p>
                <p className="card-text">
                  Tasa de Conversión: {metrica.tasaConversion}%
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Metricas;