import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthForm from './AuthForm';

// Login component to handle user login
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const xsrfToken = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'))[2];
      const response = await axios.post('http://localhost:5000/login', { username, password }, {
        headers: {
          'X-CSRF-Token': xsrfToken,
        },
      });
      // Handle successful login, e.g., save token, redirect, etc.
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        handleAuth={handleLogin}
        buttonText="Login"
      />
      <button onClick={() => history.push('/create-account')}>Create Account</button>
    </div>
  );
}

export default Login;
