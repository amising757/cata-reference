import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { playerApi } from '../services/api';
import type { Player } from '../types/index.js';

interface HeaderProps {
  onSearch?: (results: Player[]) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Player[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    try {
      const results = await playerApi.search(query);
      setSearchResults(results);
      setShowResults(true);
      onSearch?.(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    }
  };

  const handlePlayerSelect = () => {
    setShowResults(false);
    setSearchQuery('');
  };

  return (
    <div className="bg-gradient-to-r from-orange-primary to-orange-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200">
          🏀 CATA-REFERENCE
        </Link>
        
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for player..."
            className="w-80 px-4 py-2 rounded-lg text-black text-base border-none focus:outline-none focus:ring-2 focus:ring-white"
          />
          
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              {searchResults.map((player) => (
                <Link
                  key={player.id}
                  to={`/players/${player.id}`}
                  onClick={handlePlayerSelect}
                  className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-100 text-black"
                >
                  <div className="font-semibold">{player.name}</div>
                  <div className="text-sm text-gray-600">
                    {player.position} • {player.team}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};