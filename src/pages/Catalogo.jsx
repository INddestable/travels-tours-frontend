import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { getPaquetes } from '../services/paquetesService';
import TarjetaPaquete from '../components/TarjetaPaquete';

function Catalogo() {
  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPaquetes()
      .then(data => {
        setPaquetes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar paquetes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Catálogo de Paquetes</h1>
      <Row>
        {paquetes.map(paquete => (
          <Col key={paquete.id} sm={12} md={6} lg={4}>
            <TarjetaPaquete paquete={paquete} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Catalogo;