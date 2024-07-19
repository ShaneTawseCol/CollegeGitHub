import React from 'react';
import { Link } from 'react-router-dom';
import LM from '../client/media/Breezy_Weather_APP_Logo_mini.png';

// Layout component for the header and navigation links
export default function Layout() {
  return (
    <>
      <img src={LM} alt="logo" className="logo" width="100px" height="100px" />
      <h1>Breezy</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/location">Location</Link> | <Link to="/forecast">Forecast</Link> | <Link to="/breezy_team">Breezy Team</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <br />
      <hr />
    </>
  );
}
