import React, { useState } from 'react';
import { Destination } from '../types';
import { formatPrice } from '../utils/filters';
import { Star, Clock, Heart } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="h-52 overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
        <button 
          onClick={toggleFavorite} 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
        >
          <Heart 
            size={20} 
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'} 
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center">
            <span className="bg-teal-500 text-white px-2 py-1 rounded text-xs font-medium">
              {formatPrice(destination.price, destination.currency)}
            </span>
            <div className="ml-2 flex items-center text-white">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm">{destination.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">{destination.name}</h3>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <Clock size={14} className="mr-1" />
              <span>{destination.duration}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{destination.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {destination.travelType.map(type => (
            <span 
              key={type} 
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {type}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{destination.location}</span>
          <button className="bg-blue-800 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;