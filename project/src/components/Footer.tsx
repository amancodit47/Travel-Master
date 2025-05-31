import React from 'react';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Compass size={28} className="mr-2" />
              <h2 className="text-xl font-bold">TravelMaster</h2>
            </div>
            <p className="text-blue-100 mb-6">
              Discover amazing destinations around the world with our expertly curated travel packages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Destinations', 'Packages', 'Travel Guides', 'Special Offers', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              {['Bali, Indonesia', 'Paris, France', 'Santorini, Greece', 'Tokyo, Japan', 'New York, USA', 'Maldives'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-100">123 Travel Street, Suite 500<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+18001234567" className="text-blue-100 hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@travelmaster.com" className="text-blue-100 hover:text-white transition-colors">
                  info@travelmaster.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-blue-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TravelMaster. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-200 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;