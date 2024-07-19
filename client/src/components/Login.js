import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/apiService';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      // Handle successful login, e.g., save token, redirect, etc.
      history.push('/some-secure-route');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => history.push('/create-account')}>Create Account</button>
    </div>
  );
}

export default Login;
