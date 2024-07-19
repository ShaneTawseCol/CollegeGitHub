import React, { useState, useEffect } from 'react';

const citiesData = {
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Canada: ['Toronto', 'Vancouver', 'Montreal'],
  UK: ['London', 'Manchester', 'Birmingham'],
};

// AuthForm component to handle user input for authentication forms
function AuthForm({ username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, country, setCountry, city, setCity, handleAuth, buttonText }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (country) {
      setCities(citiesData[country]);
      setCity(''); // Reset city selection when country changes
    } else {
      setCities([]);
    }
  }, [country, setCity]);

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
      {confirmPassword !== undefined && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
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
      <button onClick={handleAuth}>{buttonText}</button>
    </div>
  );
}

export default AuthForm;
