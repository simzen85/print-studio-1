import React from 'react';
import { Camera, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Camera className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PrintStudio</span>
          </div>
          
          <div className="hidden sm:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              Gallery
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-indigo-600">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;