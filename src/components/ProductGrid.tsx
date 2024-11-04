import React from 'react';

const products = [
  {
    id: 1,
    name: 'Classic Prints',
    price: 'From $0.25/print',
    image: 'https://images.unsplash.com/photo-1520642413789-2bd29b25558f',
  },
  {
    id: 2,
    name: 'Large Format',
    price: 'From $29.99',
    image: 'https://images.unsplash.com/photo-1581922814484-0b48460b7010',
  },
  {
    id: 3,
    name: 'Photo Books',
    price: 'From $39.99',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646',
  },
  {
    id: 4,
    name: 'Canvas Prints',
    price: 'From $49.99',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342',
  },
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover object-center w-full h-64 transform group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>
            <button className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;