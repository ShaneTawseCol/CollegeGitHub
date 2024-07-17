import React, { useState, useEffect } from 'react';

const citiesData = {
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Canada: ['Toronto', 'Vancouver', 'Montreal'],
  UK: ['London', 'Manchester', 'Birmingham'],
};

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (country) {
      setCities(citiesData[country]);
      setCity(''); // Reset city selection when country changes
    } else {
      setCities([]);
    }
  }, [country]);

  const handleLogin = () => {
    // Basic authentication logic
    if (username === 'user' && password === 'pass') {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
      </select>
      <select value={city} onChange={(e) => setCity(e.target.value)} disabled={!country}>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AuthForm;
