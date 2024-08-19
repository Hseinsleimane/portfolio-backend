import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust this to your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const certificatesApi = {
  getAll: () => api.get('/certificates/getAll'),
  getById: (id) => api.get(`/certificates/getById/${id}`),
  create: (data) => api.post('/certificates/create', data),
  update: (id, data) => api.put(`/certificates/update/${id}`, data),
  delete: (id) => api.delete(`/certificates/delete/${id}`),
};

export const educationApi = {
  getAll: () => api.get('/education/getAll'),
  getById: (id) => api.get(`/education/getById/${id}`),
  create: (data) => api.post('/education/create', data),
  update: (id, data) => api.put(`/education/update/${id}`, data),
  delete: (id) => api.delete(`/education/delete/${id}`),
};

export const experienceApi = {
  getAll: () => api.get('/experience/getAll'),
  getById: (id) => api.get(`/experience/getById/${id}`),
  create: (data) => api.post('/experience/create', data),
  update: (id, data) => api.put(`/experience/update/${id}`, data),
  delete: (id) => api.delete(`/experience/delete/${id}`),
};

export const projectsApi = {
  getAll: () => api.get('/projects/getAll'),
  getById: (id) => api.get(`/projects/getById/${id}`),
  create: (data) => api.post('/projects/create', data),
  update: (id, data) => api.put(`/projects/update/${id}`, data),
  delete: (id) => api.delete(`/projects/delete/${id}`),
};

export const skillsApi = {
  getAll: () => api.get('/skills/getAll'),
  getById: (id) => api.get(`/skills/getById/${id}`),
  create: (data) => api.post('/skills/create', data),
  update: (id, data) => api.put(`/skills/update/${id}`, data),
  delete: (id) => api.delete(`/skills/delete/${id}`),
};