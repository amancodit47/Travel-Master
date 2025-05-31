import React from 'react';
import { Destination } from '../types';
import DestinationCard from './DestinationCard';

interface DestinationGridProps {
  destinations: Destination[];
  isLoading?: boolean;
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ 
  destinations,
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-gray-100 rounded-lg h-96 animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (destinations.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No destinations found</h3>
        <p className="text-gray-500">Try adjusting your filters to find more travel options.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {destinations.map((destination) => (
        <DestinationCard 
          key={destination.id} 
          destination={destination} 
        />
      ))}
    </div>
  );
};

export default DestinationGrid;