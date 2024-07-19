import axios from '../client';

// Function to create a new account
export const createAccount = (username, password) => {
  return axios.post('/auth/create-account', { username, password });
};

// Function to log in
export const login = (username, password) => {
  return axios.post('/auth/login', { username, password });
};

// Function to fetch data
export const fetchData = () => {
  return axios.get('/api/data');
};
