
import React from 'react';
import { Link } from 'react-router-dom';
// import LM from '../src/assets/Logo Maker 2024_05_25_07_25_07.png';
export default function Layout() {
 return (
 <>
 {/* <img src= {LM} alt="logo" className="logo" width="100px" height="100px"/> */}
<h1>Breezy</h1>

 <nav>
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link>| <Link to="/services">Services</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
<hr />
 
</>
 
 );
}
