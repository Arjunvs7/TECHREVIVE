import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add custom styles here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>TECHREVIVE</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
