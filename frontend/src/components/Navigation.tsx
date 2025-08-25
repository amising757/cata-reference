import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/players', label: 'Players' },
    { path: '/awards', label: 'Awards' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-brown-primary px-4 py-3">
      <div className="max-w-6xl mx-auto">
        <div className="flex space-x-6">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white px-3 py-2 rounded transition-colors ${
                  isActive 
                    ? 'bg-white bg-opacity-20' 
                    : 'hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};