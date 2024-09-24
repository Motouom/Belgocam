import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between">
      <div className="text-white font-bold">
        <Link to="/">
        Belgocam
        </Link>
        </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/products" className="text-white">Products</Link>
        </li>
        <li>
          <Link to="/services" className="text-white">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;