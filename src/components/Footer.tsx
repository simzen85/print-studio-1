import React from 'react';
import { Camera, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Camera className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PrintStudio</span>
            </div>
            <p className="mt-4 text-gray-600">
              Making your memories last forever with premium quality prints.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Photo Prints</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Canvas Prints</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Photo Books</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Wall Art</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} PrintStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;