import React from 'react';
import { Link } from 'react-router-dom';

// Tray component for navigation links
function Tray() {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '100%', backgroundColor: '#f0f0f0' }}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/create-account">Create Account</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/forecast">Forecast</Link></li>
      </ul>
    </div>
  );
}

export default Tray;
