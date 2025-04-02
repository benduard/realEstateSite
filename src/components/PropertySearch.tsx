import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const PropertySearch = () => {
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const neighborhoods = [
    'Pebble Creek',
    'South College Station',
    'Castlegate',
    'Woodcreek',
    'Indian Lakes',
    'Nantucket',
  ];

  const propertyTypes = [
    'Single Family Home',
    'Luxury Estate',
    'Townhouse',
    'Condo',
    'Land',
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Find Your Dream Home</h2>
        <p className="text-slate-600 mb-12">Search through our exclusive listings in College Station</p>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
              >
                <option value="">Select Location</option>
                {neighborhoods.map((neighborhood) => (
                  <option key={neighborhood} value={neighborhood}>
                    {neighborhood}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
              >
                <option value="">Select Price Range</option>
                <option value="1000000-1500000">$1M - $1.5M</option>
                <option value="1500000-2000000">$1.5M - $2M</option>
                <option value="2000000-2500000">$2M - $2.5M</option>
                <option value="2500000+">$2.5M+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Bedrooms
              </label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
              >
                <option value="">Select Bedrooms</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
                <option value="6">6+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500"
              >
                <option value="">Select Type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="mt-8 w-full bg-slate-900 text-white py-3 px-6 rounded-md hover:bg-slate-800 transition duration-300 flex items-center justify-center">
            <Search className="h-5 w-5 mr-2" />
            Search Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;