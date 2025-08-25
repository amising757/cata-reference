import React from 'react';
import type { PlayerAward } from '../types/index.js';

interface AwardBadgeProps {
  award: PlayerAward;
}

export const AwardBadge: React.FC<AwardBadgeProps> = ({ award }) => {
  const getAwardStyles = (color: string) => {
    // Map backend colors to our Tailwind classes
    const colorMap: Record<string, string> = {
      '#FFD700': 'bg-mvp-gold text-black',      // MVP - Gold
      '#4169E1': 'bg-allstar-blue text-white',  // All-Star - Blue  
      '#228B22': 'bg-champion-green text-white', // Champion - Green
      '#FF6B35': 'bg-orange-500 text-white',    // Fallback orange
    };
    
    return colorMap[color] || 'bg-gray-500 text-white';
  };

  return (
    <div 
      className={`px-3 py-2 rounded-full text-sm font-bold text-center min-w-20 ${getAwardStyles(award.color)}`}
    >
      {award.season} {award.name}
    </div>
  );
};