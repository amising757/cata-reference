import React, { useState, useEffect } from 'react';
import { playerApi } from '../services/api';
import type { Player } from '../types/index.js';
import { PlayerCard } from '../components/PlayerCard';

export const HomePage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedPlayers = async () => {
      try {
        const allPlayers = await playerApi.getAll();
        // Show featured players (first 8 for home page)
        setPlayers(allPlayers.slice(0, 8));
      } catch (err) {
        setError('Failed to load players');
        console.error('Error fetching players:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPlayers();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">Loading players...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Simplified Note */}
      <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg mb-8 text-center font-semibold">
        ✨ SIMPLIFIED FOR CATA LEAGUE: Just player photo, nicknames, basic info, achievements, and PTS/REB/AST stats!
      </div>

      {/* Featured Players */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-brown-primary mb-6">Featured Players</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-brown-primary mb-4">League Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-orange-primary">15</div>
            <div className="text-gray-600">Total Players</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-primary">3</div>
            <div className="text-gray-600">Teams</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-primary">2024</div>
            <div className="text-gray-600">Current Season</div>
          </div>
        </div>
      </div>
    </div>
  );
};