import React, { useState, useEffect } from 'react';
import { playerApi } from '../services/api';
import type { Player } from '../types/index.js';
import { PlayerCard } from '../components/PlayerCard';

export const PlayersGrid: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string>('All');
  const [selectedPosition, setSelectedPosition] = useState<string>('All');

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const allPlayers = await playerApi.getAll();
        setPlayers(allPlayers);
        setFilteredPlayers(allPlayers);
      } catch (err) {
        setError('Failed to load players');
        console.error('Error fetching players:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  useEffect(() => {
    let filtered = players;

    if (selectedTeam !== 'All') {
      filtered = filtered.filter(player => player.team === selectedTeam);
    }

    if (selectedPosition !== 'All') {
      filtered = filtered.filter(player => player.position === selectedPosition);
    }

    setFilteredPlayers(filtered);
  }, [players, selectedTeam, selectedPosition]);

  const teams = ['All', ...Array.from(new Set(players.map(p => p.team)))];
  const positions = ['All', ...Array.from(new Set(players.map(p => p.position)))];

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
      <h1 className="text-3xl font-bold text-brown-primary mb-6">All Players</h1>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Team
            </label>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary"
            >
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-primary"
            >
              {positions.map(position => (
                <option key={position} value={position}>{position}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setSelectedTeam('All');
                setSelectedPosition('All');
              }}
              className="bg-orange-primary text-white px-4 py-2 rounded-md hover:bg-orange-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-8 text-gray-600">
          No players found matching the selected filters.
        </div>
      )}
    </div>
  );
};