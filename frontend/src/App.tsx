import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { PlayerProfile } from './pages/PlayerProfile';
import { PlayersGrid } from './pages/PlayersGrid';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/players" element={<PlayersGrid />} />
            <Route path="/players/:id" element={<PlayerProfile />} />
            <Route path="/awards" element={<div className="max-w-6xl mx-auto px-4 py-8"><h1 className="text-3xl font-bold text-brown-primary">Awards Coming Soon</h1></div>} />
            <Route path="/about" element={<div className="max-w-6xl mx-auto px-4 py-8"><h1 className="text-3xl font-bold text-brown-primary">About Cata League</h1><p className="mt-4">Fun basketball reference site for the Cata rec league!</p></div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;