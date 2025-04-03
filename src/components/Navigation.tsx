import React, { useState, useEffect } from 'react';
import { Home, Search, User, MessageSquare, TrendingUp, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', icon: Home, id: 'home', path: '/' },
    { name: 'Properties', icon: Search, id: 'properties', path: '/explore' },
    { name: 'About', icon: User, id: 'about', path: '/#about' },
    { name: 'Testimonials', icon: MessageSquare, id: 'testimonials', path: '/#testimonials' },
    { name: 'Market Insights', icon: TrendingUp, id: 'market-insights', path: '/#market-insights' },
    { name: 'Contact', icon: Mail, id: 'contact', path: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleClick = (item: typeof navItems[0]) => {
    if (item.path.startsWith('/#')) {
      const id = item.path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      {navItems.map((item) => (
        <motion.div
          key={item.name}
          onClick={() => handleClick(item)}
          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 ${
            (location.pathname === item.path || activeSection === item.id)
              ? 'text-slate-900 bg-slate-100'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <item.icon className="h-4 w-4 mr-2" />
          {item.name}
        </motion.div>
      ))}
    </>
  );
};

export default Navigation;