import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Premium Dog Food', description: 'High-quality food for your dog.' },
    { id: 2, name: 'Grain-Free Cat Food', description: 'Nutritious, grain-free food for cats.' },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} className="mb-4">
            <h2 className="text-2xl">{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
