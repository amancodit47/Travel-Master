import { Destination, FilterOptions } from '../types';

export const filterDestinations = (
  destinations: Destination[],
  filters: FilterOptions
): Destination[] => {
  return destinations.filter(destination => {
    // Filter by price range
    if (
      destination.price < filters.priceRange[0] ||
      destination.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Filter by duration
    if (
      filters.duration.length > 0 &&
      !filters.duration.includes(destination.duration)
    ) {
      return false;
    }

    // Filter by travel type
    if (
      filters.travelType.length > 0 &&
      !destination.travelType.some(type => filters.travelType.includes(type))
    ) {
      return false;
    }

    // Filter by rating
    if (
      filters.rating !== null &&
      destination.rating < filters.rating
    ) {
      return false;
    }

    return true;
  });
};

export const formatPrice = (price: number, currency: string): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(price);
};