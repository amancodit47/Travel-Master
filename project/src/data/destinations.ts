import { Destination } from '../types';

// Mock data that simulates what might be scraped from travel sites
export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini Sunset Paradise',
    location: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1299,
    currency: 'USD',
    rating: 4.8,
    description: 'Experience the breathtaking sunsets and pristine white buildings of Santorini in this 4-day luxury escape.',
    duration: '3 nights 4 days',
    travelType: ['Couple', 'Relaxation'],
    amenities: ['Luxury Hotel', 'Private Balcony', 'Infinity Pool', 'Spa', 'Airport Transfer'],
    activities: ['Sunset Cruise', 'Wine Tasting', 'Beach Day', 'Historic Village Tour']
  },
  {
    id: '2',
    name: 'Bangkok City Explorer',
    location: 'Bangkok, Thailand',
    image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 799,
    currency: 'USD',
    rating: 4.5,
    description: 'Dive into the vibrant culture and bustling streets of Bangkok with this exciting city package.',
    duration: '4 nights 5 days',
    travelType: ['Friends', 'Adventure', 'Solo'],
    amenities: ['Central Hotel', 'Breakfast', 'Tour Guide', 'Airport Transfer'],
    activities: ['Temple Tours', 'Street Food Safari', 'Night Market', 'Boat Canal Tour']
  },
  {
    id: '3',
    name: 'Swiss Alps Adventure',
    location: 'Interlaken, Switzerland',
    image: 'https://images.pexels.com/photos/290466/pexels-photo-290466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1899,
    currency: 'USD',
    rating: 4.9,
    description: 'Enjoy the spectacular mountain views and thrilling activities in the heart of the Swiss Alps.',
    duration: '5 nights 6 days',
    travelType: ['Adventure', 'Family', 'Friends'],
    amenities: ['Mountain Chalet', 'Breakfast & Dinner', 'Equipment Rental', 'Shuttle Service'],
    activities: ['Skiing', 'Paragliding', 'Hiking', 'Lake Boat Tour', 'Chocolate Factory Visit']
  },
  {
    id: '4',
    name: 'Bali Beachfront Retreat',
    location: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 899,
    currency: 'USD',
    rating: 4.6,
    description: 'Unwind in tropical paradise with this beautiful beachfront getaway in Bali.',
    duration: '6 nights 7 days',
    travelType: ['Couple', 'Relaxation', 'Solo'],
    amenities: ['Beach Villa', 'Private Pool', 'Daily Breakfast', 'Spa Treatment'],
    activities: ['Surfing Lessons', 'Temple Visit', 'Rice Terrace Tour', 'Sunset Dinner']
  },
  {
    id: '5',
    name: 'New York City Break',
    location: 'New York, USA',
    image: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1599,
    currency: 'USD',
    rating: 4.7,
    description: 'Experience the energy and excitement of the Big Apple with this premium city package.',
    duration: '4 nights 5 days',
    travelType: ['Friends', 'Family', 'Solo'],
    amenities: ['Boutique Hotel', 'Breakfast', 'Subway Pass', 'City Tour'],
    activities: ['Broadway Show', 'Museum Visits', 'Central Park Tour', 'Shopping on 5th Avenue']
  },
  {
    id: '6',
    name: 'Maldives Overwater Villa',
    location: 'Maldives',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 2999,
    currency: 'USD',
    rating: 5.0,
    description: 'Live your dream in a luxury overwater villa with direct access to crystal clear waters.',
    duration: '5 nights 6 days',
    travelType: ['Couple', 'Relaxation'],
    amenities: ['Overwater Villa', 'All-Inclusive', 'Private Deck', 'Butler Service'],
    activities: ['Snorkeling', 'Sunset Cruise', 'Spa Treatments', 'Island Hopping']
  },
  {
    id: '7',
    name: 'Tokyo Technology & Tradition',
    location: 'Tokyo, Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1699,
    currency: 'USD',
    rating: 4.8,
    description: 'Explore the fascinating blend of ancient tradition and cutting-edge technology in Tokyo.',
    duration: '6 nights 7 days',
    travelType: ['Friends', 'Solo', 'Adventure'],
    amenities: ['Modern Hotel', 'Breakfast', 'Rail Pass', 'Pocket WiFi'],
    activities: ['Temple Visits', 'Robot Restaurant', 'Mt. Fuji Day Trip', 'Anime District Tour']
  },
  {
    id: '8',
    name: 'African Safari Experience',
    location: 'Serengeti, Tanzania',
    image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 3499,
    currency: 'USD',
    rating: 4.9,
    description: 'Witness the incredible wildlife of Africa in this unforgettable safari adventure.',
    duration: '7 nights 8 days',
    travelType: ['Family', 'Adventure', 'Friends'],
    amenities: ['Safari Lodge', 'All Meals', 'Game Drives', 'Expert Guides'],
    activities: ['Wildlife Viewing', 'Balloon Safari', 'Maasai Village Visit', 'Sunset Cocktails']
  },
  {
    id: '9',
    name: 'Paris Romance Package',
    location: 'Paris, France',
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1399,
    currency: 'USD',
    rating: 4.7,
    description: 'Fall in love with the City of Lights in this romantic Parisian getaway.',
    duration: '4 nights 5 days',
    travelType: ['Couple', 'Relaxation'],
    amenities: ['Boutique Hotel', 'Breakfast', 'Seine Cruise', 'Airport Transfer'],
    activities: ['Eiffel Tower Visit', 'Louvre Museum', 'Wine Tasting', 'Montmartre Walking Tour']
  },
  {
    id: '10',
    name: 'Cancun All-Inclusive Resort',
    location: 'Cancun, Mexico',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1099,
    currency: 'USD',
    rating: 4.5,
    description: 'Enjoy sun, sand, and unlimited food and drinks at this premium Cancun resort.',
    duration: '5 nights 6 days',
    travelType: ['Family', 'Friends', 'Couple'],
    amenities: ['Beachfront Resort', 'All-Inclusive', 'Multiple Pools', 'Kids Club'],
    activities: ['Water Sports', 'Mayan Ruins Tour', 'Snorkeling', 'Beach Parties']
  },
  {
    id: '11',
    name: 'Australian Outback Journey',
    location: 'Uluru, Australia',
    image: 'https://images.pexels.com/photos/33900/road-landscape-nature-jungle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 2299,
    currency: 'USD',
    rating: 4.6,
    description: 'Discover the ancient mysteries and breathtaking landscapes of the Australian Outback.',
    duration: '6 nights 7 days',
    travelType: ['Adventure', 'Friends', 'Solo'],
    amenities: ['Eco-Lodge', 'Meals Included', 'Guided Tours', 'Star-Gazing Equipment'],
    activities: ['Uluru Sunrise', 'Aboriginal Cultural Experience', 'Desert Hikes', 'Wildlife Spotting']
  },
  {
    id: '12',
    name: 'Costa Rica Rainforest Expedition',
    location: 'Arenal, Costa Rica',
    image: 'https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1299,
    currency: 'USD',
    rating: 4.8,
    description: 'Immerse yourself in biodiversity with this thrilling rainforest adventure package.',
    duration: '5 nights 6 days',
    travelType: ['Adventure', 'Family', 'Friends'],
    amenities: ['Jungle Lodge', 'Meals', 'Transportation', 'Guided Tours'],
    activities: ['Zip-lining', 'Hot Springs', 'Waterfall Hikes', 'Wildlife Watching']
  }
];

export const getDurations = (): string[] => {
  const uniqueDurations = new Set(destinations.map(d => d.duration));
  return Array.from(uniqueDurations);
};

export const getTravelTypes = (): string[] => {
  const uniqueTypes = new Set<string>();
  destinations.forEach(d => d.travelType.forEach(type => uniqueTypes.add(type)));
  return Array.from(uniqueTypes);
};

export const getPriceRange = (): [number, number] => {
  const prices = destinations.map(d => d.price);
  return [Math.min(...prices), Math.max(...prices)];
};