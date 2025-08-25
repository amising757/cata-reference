import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { playerApi } from '../services/api';
import type { PlayerDetail } from '../types/index.js';
import { AwardBadge } from '../components/AwardBadge';

export const PlayerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [player, setPlayer] = useState<PlayerDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      if (!id) return;
      
      try {
        const playerData = await playerApi.getById(parseInt(id));
        setPlayer(playerData);
      } catch (err) {
        setError('Failed to load player');
        console.error('Error fetching player:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">Loading player...</div>
      </div>
    );
  }

  if (error || !player) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-red-600">{error || 'Player not found'}</div>
      </div>
    );
  }

  // Generate some fun nicknames for demo
  const nicknames = [
    "Lightning", "The Hammer", "Clutch", "The Beast", "Ace", "Thunder", 
    "The Rocket", "Ice", "Flash", "The Wall", "Smooth", "The Machine"
  ];
  const playerNicknames = nicknames.slice(0, 2 + (player.id % 2)); // 2-3 nicknames per player

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Main Content */}
        <div className="p-6 flex flex-col lg:flex-row gap-6">
          {/* Player Info Section */}
          <div className="flex-1 flex flex-col md:flex-row gap-6">
            {/* Player Image */}
            <div className="w-full md:w-[200px] h-[250px] bg-gray-200 rounded-lg flex items-center justify-center">
              {player.photo_url && !player.photo_url.includes('placeholder') ? (
                <img 
                  src={player.photo_url} 
                  alt={player.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-gray-400 text-6xl">👤</div>
              )}
            </div>

            {/* Player Details */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{player.name}</h1>
              
              {/* Nicknames */}
              <div className="text-lg text-gray-600 italic mb-4">
                "{playerNicknames.join('", "')}"
              </div>

              {/* Basic Info */}
              <div className="space-y-2 text-lg">
                <div><span className="font-semibold text-brown-primary">Position:</span> {player.position}</div>
                <div><span className="font-semibold text-brown-primary">Team:</span> {player.team}</div>
                <div><span className="font-semibold text-brown-primary">Jersey:</span> #{player.id + 20}</div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="w-full lg:w-80 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-brown-primary mb-4">🏆 Achievements</h3>
            <div className="flex flex-wrap gap-3">
              {player.awards.map((award, index) => (
                <AwardBadge key={index} award={award} />
              ))}
              {player.awards.length === 0 && (
                <p className="text-gray-500">No awards yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-6 pb-6">
          <div className="border-t-2 border-brown-primary pt-6">
            <h3 className="text-xl font-bold text-brown-primary mb-4">📊 Statistics</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr>
                    <th className="bg-brown-primary text-white p-3 text-center font-bold">Season</th>
                    <th className="bg-brown-primary text-white p-3 text-center font-bold">Points</th>
                    <th className="bg-brown-primary text-white p-3 text-center font-bold">Rebounds</th>
                    <th className="bg-brown-primary text-white p-3 text-center font-bold">Assists</th>
                  </tr>
                </thead>
                <tbody>
                  {player.statistics.map((stat, index) => (
                    <tr key={stat.season} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 text-center font-semibold">{stat.season}</td>
                      <td className="p-3 text-center">{stat.points}</td>
                      <td className="p-3 text-center">{stat.rebounds}</td>
                      <td className="p-3 text-center">{stat.assists}</td>
                    </tr>
                  ))}
                  {player.statistics.length > 1 && (
                    <tr className="bg-yellow-100 font-bold">
                      <td className="p-3 text-center">Career Avg</td>
                      <td className="p-3 text-center">
                        {(player.statistics.reduce((sum, stat) => sum + stat.points, 0) / player.statistics.length).toFixed(1)}
                      </td>
                      <td className="p-3 text-center">
                        {(player.statistics.reduce((sum, stat) => sum + stat.rebounds, 0) / player.statistics.length).toFixed(1)}
                      </td>
                      <td className="p-3 text-center">
                        {(player.statistics.reduce((sum, stat) => sum + stat.assists, 0) / player.statistics.length).toFixed(1)}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};