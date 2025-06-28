import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, MapPin, BedDouble, Bath, Square, DollarSign, Home, Building2, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Waves } from '../components/ui/waves-background';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: 'house' | 'apartment' | 'condo';
}

interface FilterState {
  searchQuery: string;
  propertyType: 'all' | 'house' | 'apartment' | 'condo';
  minPrice: string;
  maxPrice: string;
  minBeds: string;
  maxBeds: string;
  minBaths: string;
  maxBaths: string;
  minSqft: string;
  maxSqft: string;
}

const ExploreProperties: React.FC = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    minBeds: '',
    maxBeds: '',
    minBaths: '',
    maxBaths: '',
    minSqft: '',
    maxSqft: '',
  });

  const [properties] = useState<Property[]>([
    {
      id: 1,
      title: "Luxury Estate in Pebble Creek",
      price: "$1,500,000",
      location: "College Station, TX",
      beds: 5,
      baths: 4.5,
      sqft: 5200,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      type: "house"
    },
    {
      id: 2,
      title: "Modern Villa in South College Station",
      price: "$800,000",
      location: "College Station, TX",
      beds: 4,
      baths: 3.5,
      sqft: 4100,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=fit=crop&q=80",
      type: "house"
    },
    {
      id: 3,
      title: "Contemporary Estate near Texas A&M",
      price: "$1,200,000",
      location: "College Station, TX",
      beds: 6,
      baths: 5,
      sqft: 6300,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=fit=crop&q=80",
      type: "house"
    },
    {
      id: 4,
      title: "Waterfront Estate on Lake Bryan",
      price: "$2,200,000",
      location: "College Station, TX",
      beds: 5,
      baths: 4,
      sqft: 4800,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=fit=crop&q=80",
      type: "house"
    },
    {
      id: 5,
      title: "Historic Victorian in Downtown Bryan",
      price: "$950,000",
      location: "College Station, TX",
      beds: 4,
      baths: 3,
      sqft: 3800,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=fit=crop&q=80",
      type: "house"
    },
    {
      id: 6,
      title: "Modern Farmhouse in Indian Lakes",
      price: "$1,100,000",
      location: "College Station, TX",
      beds: 4,
      baths: 3,
      sqft: 3600,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=fit=crop&q=80",
      type: "house"
    },
    {
      id: 7,
      title: "Luxury Penthouse in Northgate",
      price: "$650,000",
      location: "College Station, TX",
      beds: 3,
      baths: 2,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=fit=crop&q=80",
      type: "condo"
    },
    {
      id: 8,
      title: "Golf Course Estate in Traditions",
      price: "$1,800,000",
      location: "College Station, TX",
      beds: 5,
      baths: 4,
      sqft: 5500,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=fit=crop&q=80",
      type: "house"
    },
    {
      id: 10,
      title: "Modern Townhouse in Wolf Pen Creek",
      price: "$450,000",
      location: "College Station, TX",
      beds: 3,
      baths: 2,
      sqft: 2400,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=fit=crop&q=80",
      type: "condo"
    }
  ]);

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesType = filters.propertyType === 'all' || property.type === filters.propertyType;
    const price = parseInt(property.price.replace(/[^0-9]/g, ''));
    const matchesPrice = (!filters.minPrice || price >= parseInt(filters.minPrice)) &&
                        (!filters.maxPrice || price <= parseInt(filters.maxPrice));
    const matchesBeds = (!filters.minBeds || property.beds >= parseInt(filters.minBeds)) &&
                       (!filters.maxBeds || property.beds <= parseInt(filters.maxBeds));
    const matchesBaths = (!filters.minBaths || property.baths >= parseInt(filters.minBaths)) &&
                        (!filters.maxBaths || property.baths <= parseInt(filters.maxBaths));
    const matchesSqft = (!filters.minSqft || property.sqft >= parseInt(filters.minSqft)) &&
                       (!filters.maxSqft || property.sqft <= parseInt(filters.maxSqft));

    return matchesSearch && matchesType && matchesPrice && matchesBeds && matchesBaths && matchesSqft;
  });

  return (
    <div className="min-h-screen bg-white relative">
      {/* Waves Background */}
      <div className="waves-container">
        <Waves 
          lineColor="rgba(148, 163, 184, 0.1)"
          backgroundColor="transparent"
          waveSpeedX={0.006}
          waveSpeedY={0.004}
          waveAmpX={15}
          waveAmpY={8}
          friction={0.97}
          tension={0.001}
          maxCursorMove={40}
          xGap={22}
          yGap={50}
          className="fixed inset-0 z-0"
        />
      </div>

      {/* Header */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center text-slate-800 hover:text-slate-600"
              >
                <Home className="h-6 w-6 mr-2" />
                <span className="text-xl font-semibold">Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <div className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">Find Your Dream Home</h1>
              <p className="text-xl text-slate-200">Search through our extensive collection of properties</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by location or property name..."
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900 bg-white/95 backdrop-blur-sm"
                    value={filters.searchQuery}
                    onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                  />
                </div>
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 bg-white text-slate-800 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-md border-b border-slate-200 relative z-40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                <select
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900"
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  />
                </div>
              </div>

              {/* Beds & Baths */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Beds & Baths</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min Beds"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900"
                    value={filters.minBeds}
                    onChange={(e) => handleFilterChange('minBeds', e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Min Baths"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900"
                    value={filters.minBaths}
                    onChange={(e) => handleFilterChange('minBaths', e.target.value)}
                  />
                </div>
              </div>

              {/* Square Footage */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Square Footage</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min Sqft"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900"
                    value={filters.minSqft}
                    onChange={(e) => handleFilterChange('minSqft', e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Max Sqft"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-900"
                    value={filters.maxSqft}
                    onChange={(e) => handleFilterChange('maxSqft', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-slate-200"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-medium text-slate-800">
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{property.title}</h3>
                <p className="text-2xl font-bold text-slate-800 mb-2">{property.price}</p>
                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <div className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-1" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProperties;