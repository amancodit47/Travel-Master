import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: 'url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundPosition: 'center 25%'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover Your Perfect <span className="text-teal-400">Adventure</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Explore top destinations around the world with exclusive packages tailored to your travel style.
        </p>

        {/* Search Bar */}
        <form 
          onSubmit={handleSearch}
          className="relative max-w-3xl mx-auto flex bg-white rounded-full shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
        >
          <div className="flex-grow flex items-center">
            <MapPin className="ml-6 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="w-full py-4 px-3 text-gray-700 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 flex items-center transition-colors duration-300"
          >
            <Search size={20} className="mr-2" />
            <span className="font-medium">Search</span>
          </button>
        </form>

        {/* Popular Searches */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {['Beach Vacation', 'Mountain Retreat', 'City Break', 'Adventure Trip', 'Romantic Getaway'].map((tag) => (
            <span 
              key={tag}
              className="bg-white/20 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/30 transition-colors"
              onClick={() => setSearchQuery(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;