import React from 'react';
import { Home, Search, User, MessageSquare, TrendingUp, Mail } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Properties', icon: Search },
    { name: 'About', icon: User },
    { name: 'Testimonials', icon: MessageSquare },
    { name: 'Market Insights', icon: TrendingUp },
    { name: 'Contact', icon: Mail },
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={`#${item.name.toLowerCase()}`}
          className="flex items-center text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          <item.icon className="h-4 w-4 mr-2" />
          {item.name}
        </a>
      ))}
    </>
  );
};

export default Navigation;