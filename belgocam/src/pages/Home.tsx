import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Belgocam!</h1>
      <p className="mb-4">Your trusted source for animal food and expert advice.</p>
      <Link to="/products" className="text-blue-500 underline">Explore Our Products</Link>
    </div>
  );
};

export default Home;
