import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FilterPanel from '../components/FilterPanel';
import DestinationGrid from '../components/DestinationGrid';
import Footer from '../components/Footer';
import { Destination, FilterOptions } from '../types';
import { destinations } from '../data/destinations';
import { filterDestinations } from '../utils/filters';

const HomePage: React.FC = () => {
  const [allDestinations] = useState<Destination[]>(destinations);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 5000],
    duration: [],
    travelType: [],
    rating: null
  });

  useEffect(() => {
    // Initialize price range based on available destinations
    const prices = allDestinations.map(d => d.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    setFilters(prev => ({
      ...prev,
      priceRange: [minPrice, maxPrice]
    }));
  }, [allDestinations]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setIsLoading(true);
    setFilters(newFilters);
    
    // Simulate API/data loading delay
    setTimeout(() => {
      const filtered = filterDestinations(allDestinations, newFilters);
      setFilteredDestinations(filtered);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <main className="flex-grow pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Explore Amazing Destinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <FilterPanel 
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
            
            <div className="md:col-span-3">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">
                  {filteredDestinations.length} destinations found
                </p>
                <select 
                  className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
                  defaultValue="recommended"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              
              <DestinationGrid 
                destinations={filteredDestinations}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;