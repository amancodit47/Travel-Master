export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  duration: string;
  travelType: TravelType[];
  amenities: string[];
  activities: string[];
}

export type TravelType = 'Family' | 'Couple' | 'Solo' | 'Friends' | 'Adventure' | 'Relaxation';

export interface FilterOptions {
  priceRange: [number, number];
  duration: string[];
  travelType: TravelType[];
  rating: number | null;
}