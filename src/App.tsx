import React from 'react';
import { Camera, Image as ImageIcon, Package, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const features = [
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Premium Quality Prints",
      description: "Museum-quality papers and archival inks for vibrant, lasting prints"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Easy Upload",
      description: "Import directly from Instagram, Dropbox, or your device"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Carefully packaged and shipped within 24 hours"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Satisfaction Guaranteed",
      description: "Love your prints or get your money back"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default App;