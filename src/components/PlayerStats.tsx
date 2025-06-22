import React from 'react';
import { Heart, Sword, Shield, MapPin, Coins, Gem, Utensils, Droplets, Brain } from 'lucide-react';

interface PlayerStatsProps {
  playerStats: {
    hp: number;
    maxHp: number;
    atk: number;
    def: number;
    hunger: number;
    maxHunger: number;
    thirst: number;
    maxThirst: number;
    sanity: number;
    maxSanity: number;
  };
  zone: number;
  coins: number;
  gems: number;
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({ playerStats, zone, coins, gems }) => {
  const getStatColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage > 70) return 'from-green-500 to-green-400';
    if (percentage > 40) return 'from-yellow-500 to-yellow-400';
    return 'from-red-500 to-red-400';
  };

  const getStatTextColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage > 70) return 'text-green-400';
    if (percentage > 40) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black p-4 sm:p-6 rounded-lg shadow-2xl border border-slate-600">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">🧑‍🦲 Survivor Status</h2>
      
      <div className="space-y-3 sm:space-y-4">
        {/* Health */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Health</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
            <div 
              className={`bg-gradient-to-r ${getStatColor(playerStats.hp, playerStats.maxHp)} h-2 sm:h-3 rounded-full transition-all duration-300`}
              style={{ width: `${(playerStats.hp / playerStats.maxHp) * 100}%` }}
            />
          </div>
          <p className={`text-xs sm:text-sm mt-1 ${getStatTextColor(playerStats.hp, playerStats.maxHp)}`}>
            {playerStats.hp}/{playerStats.maxHp}
          </p>
        </div>

        {/* Hunger */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Hunger</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
            <div 
              className={`bg-gradient-to-r ${getStatColor(playerStats.hunger, playerStats.maxHunger)} h-2 sm:h-3 rounded-full transition-all duration-300`}
              style={{ width: `${(playerStats.hunger / playerStats.maxHunger) * 100}%` }}
            />
          </div>
          <p className={`text-xs sm:text-sm mt-1 ${getStatTextColor(playerStats.hunger, playerStats.maxHunger)}`}>
            {playerStats.hunger}/{playerStats.maxHunger}
          </p>
        </div>

        {/* Thirst */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Thirst</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
            <div 
              className={`bg-gradient-to-r ${getStatColor(playerStats.thirst, playerStats.maxThirst)} h-2 sm:h-3 rounded-full transition-all duration-300`}
              style={{ width: `${(playerStats.thirst / playerStats.maxThirst) * 100}%` }}
            />
          </div>
          <p className={`text-xs sm:text-sm mt-1 ${getStatTextColor(playerStats.thirst, playerStats.maxThirst)}`}>
            {playerStats.thirst}/{playerStats.maxThirst}
          </p>
        </div>

        {/* Sanity */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Sanity</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
            <div 
              className={`bg-gradient-to-r ${getStatColor(playerStats.sanity, playerStats.maxSanity)} h-2 sm:h-3 rounded-full transition-all duration-300`}
              style={{ width: `${(playerStats.sanity / playerStats.maxSanity) * 100}%` }}
            />
          </div>
          <p className={`text-xs sm:text-sm mt-1 ${getStatTextColor(playerStats.sanity, playerStats.maxSanity)}`}>
            {playerStats.sanity}/{playerStats.maxSanity}
          </p>
        </div>

        {/* Combat Stats */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Sword className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Attack</span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-orange-400">{playerStats.atk}</p>
          </div>
          
          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Defense</span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-blue-400">{playerStats.def}</p>
          </div>
        </div>

        {/* Zone */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Island Region</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-green-400">Zone {zone}</p>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Coins className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Salvage</span>
            </div>
            <p className="text-base sm:text-xl font-bold text-yellow-400">{coins}</p>
          </div>
          
          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Gem className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Crystals</span>
            </div>
            <p className="text-base sm:text-xl font-bold text-purple-400">{gems}</p>
          </div>
        </div>
      </div>
    </div>
  );
};