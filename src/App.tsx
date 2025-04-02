import React, { useState } from 'react';
import { Home, Search, User, MessageSquare, TrendingUp, Mail, Menu, X } from 'lucide-react';
import FeaturedListings from './components/FeaturedListings';
import PropertySearch from './components/PropertySearch';
import AboutRealtor from './components/AboutRealtor';
import Testimonials from './components/Testimonials';
import MarketInsights from './components/MarketInsights';
import ContactForm from './components/ContactForm';
import Navigation from './components/Navigation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-slate-800" />
              <span className="ml-2 text-xl font-semibold text-slate-800">Lisa Bricker Real Estate</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Navigation />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-800 hover:text-slate-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Navigation />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Luxury Living in College Station</h1>
            <p className="text-xl md:text-2xl mb-8">Discover Your Dream Home in Aggieland</p>
            <button className="bg-white text-slate-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-100 transition duration-300">
              Explore Properties
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <FeaturedListings />
        <PropertySearch />
        <AboutRealtor />
        <Testimonials />
        <MarketInsights />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Lisa Bricker Real Estate</h3>
              <p className="text-slate-400">Your trusted partner in luxury real estate across College Station, Texas.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Home</li>
                <li>Properties</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li>123 Main Street</li>
                <li>College Station, TX 77840</li>
                <li>979-123-4567</li>
                <li>contact@lisabricker.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social Icons */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2024 Lisa Bricker Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;