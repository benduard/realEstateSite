import React, { useState } from 'react';
import { Home, Search, User, MessageSquare, TrendingUp, Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeaturedListings from './components/FeaturedListings';
import PropertySearch from './components/PropertySearch';
import AboutRealtor from './components/AboutRealtor';
import Testimonials from './components/Testimonials';
import MarketInsights from './components/MarketInsights';
import ContactForm from './components/ContactForm';
import Navigation from './components/Navigation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const SectionWrapper = ({ children, id }: { children: React.ReactNode; id: string }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });

    return (
      <motion.section
        ref={ref}
        id={id}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        {children}
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-semibold text-slate-800 tracking-tight">Chandler Real Estate Group</span>
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
      <motion.div 
        id="home"
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Luxury Living in College Station</h1>
            <p className="text-xl md:text-2xl mb-8">Discover Your Dream Home in Aggieland</p>
            <button className="bg-white text-slate-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-100 transition duration-300">
              Explore Properties
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main>
        <SectionWrapper id="properties">
          <FeaturedListings />
        </SectionWrapper>
        <SectionWrapper id="property-search">
          <PropertySearch />
        </SectionWrapper>
        <SectionWrapper id="about">
          <AboutRealtor />
        </SectionWrapper>
        <SectionWrapper id="testimonials">
          <Testimonials />
        </SectionWrapper>
        <SectionWrapper id="market-insights">
          <MarketInsights />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <ContactForm />
        </SectionWrapper>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Chandler Real Estate Group</h3>
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
                <li>contact@chandlerrealestate.com</li>
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
            <p>&copy; 2024 Chandler Real Estate Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;