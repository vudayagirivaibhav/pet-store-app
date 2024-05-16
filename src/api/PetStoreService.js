import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v3';

export const loginUser = (username, password) => {
  return axios.get(`${API_BASE_URL}/user/login`, { params: { username, password } });
};

export const fetchPetsByStatus = (status) => {
  return axios.get(`${API_BASE_URL}/pet/findByStatus`, { params: { status } });
};

export const updatePet = (petData) => {
  return axios.put(`${API_BASE_URL}/pet`, petData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};