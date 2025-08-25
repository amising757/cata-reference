import axios from 'axios';
import type { Player, PlayerDetail, Award } from '../types/index.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const playerApi = {
  getAll: async (): Promise<Player[]> => {
    const response = await api.get('/players');
    return response.data;
  },

  getById: async (id: number): Promise<PlayerDetail> => {
    const response = await api.get(`/players/${id}`);
    return response.data;
  },

  search: async (query: string): Promise<Player[]> => {
    const response = await api.get(`/players/search?q=${encodeURIComponent(query)}`);
    return response.data;
  },
};

export const awardApi = {
  getAll: async (): Promise<Award[]> => {
    const response = await api.get('/awards');
    return response.data;
  },
};