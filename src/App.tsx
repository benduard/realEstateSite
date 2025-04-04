import React, { useState } from 'react';
import { Home, Search, User, MessageSquare, TrendingUp, Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import FeaturedListings from './components/FeaturedListings';
import PropertySearch from './components/PropertySearch';
import AboutRealtor from './components/AboutRealtor';
import Testimonials from './components/Testimonials';
import MarketInsights from './components/MarketInsights';
import ContactForm from './components/ContactForm';
import Navigation from './components/Navigation';
import ExploreProperties from './pages/ExploreProperties';
import { TestimonialsWithMarquee } from "./components/ui/testimonials-with-marquee"

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        className="py-4"
      >
        {children}
      </motion.section>
    );
  };

  const testimonials = [
    {
      author: {
        name: "Sarah Johnson",
        role: "First-time Homebuyer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      },
      text: "Michael helped us find our dream home in just two weeks! His expertise and dedication made the entire process smooth and stress-free.",
    },
    {
      author: {
        name: "David Chen",
        role: "Property Investor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      },
      text: "As an investor, I appreciate Michael's market knowledge and negotiation skills. He consistently delivers excellent results.",
    },
    {
      author: {
        name: "Emily Rodriguez",
        role: "Home Seller",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      },
      text: "Michael sold our house above asking price in just 5 days! His marketing strategy and professional approach were outstanding.",
    },
    {
      author: {
        name: "James Wilson",
        role: "Luxury Home Buyer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      },
      text: "Working with Michael on our luxury home purchase was a pleasure. His attention to detail and client service is unmatched.",
    },
    {
      author: {
        name: "Lisa Thompson",
        role: "Relocation Client",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
      },
      text: "Moving from another state was challenging, but Michael made it easy. He understood our needs and found the perfect neighborhood.",
    },
    {
      author: {
        name: "Robert Martinez",
        role: "Commercial Property Owner",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      },
      text: "Michael's expertise in commercial real estate helped us make a profitable investment. His market analysis was spot-on.",
    },
    {
      author: {
        name: "Jennifer Lee",
        role: "Rental Property Owner",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      },
      text: "Finding reliable tenants has never been easier. Michael's screening process and property management advice are invaluable.",
    },
    {
      author: {
        name: "Thomas Anderson",
        role: "Retirement Home Buyer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      },
      text: "Michael helped us find the perfect retirement home. His patience and understanding of our specific needs were exceptional.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900">
                  <div className="text-white text-2xl font-bold">CRG</div>
                </div>
                <span className="ml-3 text-xl font-semibold text-slate-800 tracking-tight">Chandler Real Estate Group</span>
              </Link>
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
            <button 
              onClick={() => navigate('/explore')}
              className="bg-white text-slate-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-slate-100 transition duration-300"
            >
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
        <SectionWrapper id="about">
          <AboutRealtor />
        </SectionWrapper>
        <SectionWrapper id="testimonials">
          <TestimonialsWithMarquee
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from some of our satisfied clients who have found their perfect property with us."
            testimonials={testimonials}
          />
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/explore">Properties</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExploreProperties />} />
      </Routes>
    </Router>
  );
}

export default App;