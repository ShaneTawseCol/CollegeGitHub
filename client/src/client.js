import axios from 'axios';

// Configuring axios to include credentials with every request
axios.defaults.withCredentials = true;

// Function to get the CSRF token from cookies
function getCsrfToken() {
  const match = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'));
  return match ? match[2] : null;
}

// Function to set the CSRF token header for every request
axios.interceptors.request.use((config) => {
  const token = getCsrfToken();
  console.log('CSRF Token:', token); // Debugging line
  if (token) {
    config.headers['X-CSRF-Token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axios;
