import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Travels Tours</h5>
            <p>Tu plataforma de viajes y reservas de tours.</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white-50">Inicio</a></li>
              <li><a href="/login" className="text-white-50">Login</a></li>
              <li><a href="/dashboard" className="text-white-50">Dashboard</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p className="text-white-50">Email: info@travelstours.com</p>
            <p className="text-white-50">Teléfono: +1 (555) 123-4567</p>
          </div>
        </div>
        <hr className="bg-white-50" />
        <div className="text-center">
          <p className="text-white-50">&copy; 2026 Travels Tours. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
