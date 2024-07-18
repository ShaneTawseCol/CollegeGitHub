import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthForm from './AuthForm';

// CreateAccount component to handle new account creation
function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const history = useHistory();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long and include at least 1 number, 1 special character, 1 lowercase letter, and 1 uppercase letter.');
      return;
    }

    try {
      const xsrfToken = document.cookie.match(new RegExp('(^| )XSRF-TOKEN=([^;]+)'))[2];
      await axios.post('http://localhost:5000/create-account', { username, password }, {
        headers: {
          'X-CSRF-Token': xsrfToken,
        },
      });
      history.push('/login');
    } catch (error) {
      console.error('Account creation failed', error);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
        handleAuth={handleCreateAccount}
        buttonText="Create Account"
      />
    </div>
  );
}

export default CreateAccount;
