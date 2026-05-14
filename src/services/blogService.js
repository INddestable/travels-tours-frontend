const API_BASE_URL = 'http://localhost:3000/api';

export function getBlogs() {
  return fetch(`${API_BASE_URL}/blogs/approved`)
    .then(response => response.json());
}

export function getBlog(id) {
  return fetch(`${API_BASE_URL}/blogs/${id}`)
    .then(response => response.json());
}