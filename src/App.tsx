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
import { Waves } from './components/ui/waves-background';

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
        className="py-4 relative"
      >
        {children}
      </motion.section>
    );
  };

  const testimonials = [
    {
      author: {
        name: "Sarah Johnson",
        handle: "@sarahj",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      },
      text: "Michael helped us find our dream home in College Station. His knowledge of the local market and attention to detail made the entire process smooth and enjoyable.",
      href: "https://twitter.com/sarahj"
    },
    {
      author: {
        name: "David Chen",
        handle: "@davidchen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      text: "As a first-time homebuyer, I was nervous about the process. Michael's expertise and patience made me feel confident throughout the entire journey.",
      href: "https://twitter.com/davidchen"
    },
    {
      author: {
        name: "Emily Rodriguez",
        handle: "@emilyr",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      text: "Michael's dedication to finding the perfect property for his clients is unmatched. He went above and beyond to ensure we found exactly what we were looking for.",
      href: "https://twitter.com/emilyr"
    },
    {
      author: {
        name: "James Wilson",
        handle: "@jamesw",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      text: "The market insights and property recommendations Michael provided were invaluable. He truly understands the College Station real estate market.",
      href: "https://twitter.com/jamesw"
    },
    {
      author: {
        name: "Lisa Thompson",
        handle: "@lisat",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
      text: "Michael's negotiation skills helped us get the best deal possible. His professionalism and expertise are truly impressive.",
      href: "https://twitter.com/lisat"
    },
    {
      author: {
        name: "Robert Martinez",
        handle: "@robertm",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      },
      text: "From start to finish, Michael provided exceptional service. His knowledge of the local area and market trends is outstanding.",
      href: "https://twitter.com/robertm"
    },
    {
      author: {
        name: "Jennifer Kim",
        handle: "@jenniferk",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      },
      text: "Michael's attention to detail and commitment to client satisfaction is remarkable. He made our home buying experience truly memorable.",
      href: "https://twitter.com/jenniferk"
    },
    {
      author: {
        name: "Thomas Anderson",
        handle: "@thomasa",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      },
      text: "Working with Michael was a pleasure. His expertise in the College Station market and dedication to his clients is exceptional.",
      href: "https://twitter.com/thomasa"
    },
  ]

  return (
    <div className="min-h-screen bg-white relative">
      {/* Global Waves Background */}
      <Waves 
        lineColor="rgba(148, 163, 184, 0.2)"
        backgroundColor="transparent"
        waveSpeedX={0.008}
        waveSpeedY={0.006}
        waveAmpX={25}
        waveAmpY={15}
        friction={0.96}
        tension={0.002}
        maxCursorMove={80}
        xGap={15}
        yGap={40}
        className="fixed inset-0 z-0"
      />

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
          <div className="text-center text-white px-4 relative z-10">
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
      <main className="relative z-10">
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
      <footer className="bg-slate-900 text-white py-12 relative z-10">
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