import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedListings = () => {
  const navigate = useNavigate();
  const listings = [
    {
      id: 1,
      title: 'Luxury Estate in Pebble Creek',
      price: '$2,500,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
      location: 'College Station, TX',
      beds: 5,
      baths: 4.5,
      sqft: '5,200',
    },
    {
      id: 2,
      title: 'Modern Villa in South College Station',
      price: '$1,800,000',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=fit=crop&q=80',
      location: 'College Station, TX',
      beds: 4,
      baths: 3.5,
      sqft: '4,100',
    },
    {
      id: 3,
      title: 'Contemporary Estate near Texas A&M',
      price: '$2,200,000',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=fit=crop&q=80',
      location: 'College Station, TX',
      beds: 6,
      baths: 5,
      sqft: '6,300',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Listings</h2>
            <p className="text-slate-600">Discover our most exclusive properties in College Station</p>
          </div>
          <button 
            onClick={() => navigate('/explore')}
            className="bg-slate-900 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition duration-300"
          >
            See More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-slate-900 font-bold">
                  {listing.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{listing.title}</h3>
                
                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{listing.location}</span>
                </div>
                
                <div className="flex justify-between text-slate-600">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{listing.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{listing.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{listing.sqft} sq ft</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;