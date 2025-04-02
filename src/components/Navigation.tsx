import React, { useState, useEffect } from 'react';
import { Home, Search, User, MessageSquare, TrendingUp, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'Properties', icon: Search, id: 'properties' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Testimonials', icon: MessageSquare, id: 'testimonials' },
    { name: 'Market Insights', icon: TrendingUp, id: 'market-insights' },
    { name: 'Contact', icon: Mail, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {navItems.map((item) => (
        <motion.a
          key={item.name}
          onClick={() => scrollToSection(item.id)}
          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200 ${
            activeSection === item.id
              ? 'text-slate-900 bg-slate-100'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <item.icon className="h-4 w-4 mr-2" />
          {item.name}
        </motion.a>
      ))}
    </>
  );
};

export default Navigation;