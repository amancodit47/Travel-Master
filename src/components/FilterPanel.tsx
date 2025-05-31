import React, { useState, useEffect } from 'react';
import { FilterOptions, TravelType } from '../types';
import { getDurations, getTravelTypes, getPriceRange } from '../data/destinations';
import { Star, Sliders } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const durations = getDurations();
  const travelTypes = getTravelTypes();
  const [minPrice, maxPrice] = getPriceRange();
  
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(filters.priceRange);

  useEffect(() => {
    // Update local price range when filters change
    setLocalPriceRange(filters.priceRange);
  }, [filters.priceRange]);

  const handlePriceChange = (value: number, isMin: boolean) => {
    const newRange: [number, number] = [...localPriceRange] as [number, number];
    if (isMin) {
      newRange[0] = value;
    } else {
      newRange[1] = value;
    }
    setLocalPriceRange(newRange);
  };

  const applyPriceFilter = () => {
    onFilterChange({
      ...filters,
      priceRange: localPriceRange
    });
  };

  const handleDurationChange = (duration: string) => {
    const newDurations = filters.duration.includes(duration)
      ? filters.duration.filter(d => d !== duration)
      : [...filters.duration, duration];
    
    onFilterChange({
      ...filters,
      duration: newDurations
    });
  };

  const handleTravelTypeChange = (type: string) => {
    const newTypes = filters.travelType.includes(type as TravelType)
      ? filters.travelType.filter(t => t !== type)
      : [...filters.travelType, type as TravelType];
    
    onFilterChange({
      ...filters,
      travelType: newTypes
    });
  };

  const handleRatingChange = (rating: number | null) => {
    onFilterChange({
      ...filters,
      rating
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      priceRange: [minPrice, maxPrice],
      duration: [],
      travelType: [],
      rating: null
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Mobile Filter Toggle */}
      <div 
        className="md:hidden p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Sliders className="mr-2 text-blue-800" size={20} />
          <h3 className="font-semibold text-gray-800">Filters</h3>
        </div>
        <span className="text-sm text-blue-800">
          {isOpen ? 'Hide' : 'Show'}
        </span>
      </div>

      {/* Filter Content - Always visible on desktop, toggleable on mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block p-4`}>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Price Range</h3>
            <span className="text-sm text-blue-700">
              ${localPriceRange[0]} - ${localPriceRange[1]}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Min Price</label>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={localPriceRange[0]}
                onChange={(e) => handlePriceChange(Number(e.target.value), true)}
                className="w-full accent-blue-800"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Max Price</label>
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={localPriceRange[1]}
                onChange={(e) => handlePriceChange(Number(e.target.value), false)}
                className="w-full accent-blue-800"
              />
            </div>
          </div>
          <button
            onClick={applyPriceFilter}
            className="mt-2 px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-700 transition-colors"
          >
            Apply
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Duration</h3>
          <div className="space-y-2">
            {durations.map((duration) => (
              <div key={duration} className="flex items-center">
                <input
                  type="checkbox"
                  id={`duration-${duration}`}
                  checked={filters.duration.includes(duration)}
                  onChange={() => handleDurationChange(duration)}
                  className="h-4 w-4 text-blue-800 rounded focus:ring-blue-800"
                />
                <label
                  htmlFor={`duration-${duration}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {duration}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Travel Type</h3>
          <div className="grid grid-cols-2 gap-2">
            {travelTypes.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={`type-${type}`}
                  checked={filters.travelType.includes(type as TravelType)}
                  onChange={() => handleTravelTypeChange(type)}
                  className="h-4 w-4 text-blue-800 rounded focus:ring-blue-800"
                />
                <label
                  htmlFor={`type-${type}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Rating</h3>
          <div className="flex items-center space-x-2">
            {[4, 4.5, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingChange(filters.rating === rating ? null : rating)}
                className={`px-3 py-1 rounded-full text-sm flex items-center ${
                  filters.rating === rating
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {rating}+ <Star size={14} className="ml-1" />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={clearAllFilters}
          className="w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;