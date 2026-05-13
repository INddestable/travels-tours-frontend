import React from "react";
import {State} from "react";

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <main>
        <h1>Dashboard</h1>
        <p>Bienvenido al panel de control.</p>
        <div className="dashboard-grid">
          <div className="card">
            <h3>Mis Reservas</h3>
            <p>Visualiza y gestiona tus reservas activas.</p>
          </div>
          <div className="card">
            <h3>Mis Destinos</h3>
            <p>Explora los destinos guardados en tu lista.</p>
          </div>
          <div className="card">
            <h3>Mi Perfil</h3>
            <p>Actualiza tu información personal.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
