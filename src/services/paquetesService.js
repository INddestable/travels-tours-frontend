const API_BASE_URL = 'http://localhost:3000/api';

export function getPaquetes() {
  return fetch(`${API_BASE_URL}/packages/approved`)
    .then(response => response.json());
}

export function getPaquete(id) {
  return fetch(`${API_BASE_URL}/packages/${id}`)
    .then(response => response.json());
}

export function getTopRated() {
  return fetch(`${API_BASE_URL}/packages/top-rated`)
    .then(response => response.json());
}

export function getRecientes() {
  return fetch(`${API_BASE_URL}/packages/recent`)
    .then(response => response.json());
}

export function getPorDestino(destino) {
  return fetch(`${API_BASE_URL}/packages/destination/${destino}`)
    .then(response => response.json());
}