import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createAccount } from '../services/apiService';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
      await createAccount(username, password);
      history.push('/login');
    } catch (error) {
      console.error('Account creation failed', error);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
}

export default CreateAccount;
