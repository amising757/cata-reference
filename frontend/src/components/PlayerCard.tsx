import React from 'react';
import { Link } from 'react-router-dom';
import type { Player } from '../types/index.js';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <Link 
      to={`/players/${player.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-[4/5] bg-gray-200 flex items-center justify-center">
        {player.photo_url ? (
          <img 
            src={player.photo_url} 
            alt={player.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-6xl">👤</div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{player.name}</h3>
        <p className="text-gray-600 mb-2">{player.position} • {player.team}</p>
        
        <div className="flex flex-wrap gap-1">
          {player.awards.slice(0, 2).map((award, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-semibold rounded text-white"
              style={{ backgroundColor: award.color }}
            >
              {award.name}
            </span>
          ))}
          {player.awards.length > 2 && (
            <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-300 text-gray-700">
              +{player.awards.length - 2}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};