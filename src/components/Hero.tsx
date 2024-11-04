import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90">
        <img
          src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81"
          alt="Photography backdrop"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Turn Your Moments Into
          <span className="block">Beautiful Prints</span>
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Premium quality prints delivered to your doorstep. From classic photo prints to large format artwork, bring your memories to life.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 transition-colors duration-200">
            Start Printing
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;