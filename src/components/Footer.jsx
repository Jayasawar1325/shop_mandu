import React from 'react';
import { Instagram, MapPin, Music, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          {/* Left side - Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-black">shop</span>
              <span className="text-red-600">mandu</span>
            </h2>
            <p className="text-sm mt-2 max-w-xs">
              Discover Timeless Style from<br />
              the Heart of Kathmandu...
            </p>
            
            {/* Social icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-700 hover:text-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <MapPin size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <Music size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Right side - Menus */}
          <div>
            <h3 className="text-lg font-medium mb-4">Menus</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-600">Home</a></li>
              <li><a href="#" className="hover:text-red-600">Shop</a></li>
              <li><a href="#" className="hover:text-red-600">About</a></li>
              <li><a href="#" className="hover:text-red-600">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright text */}
        <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-100">
          2025, shopmandu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;