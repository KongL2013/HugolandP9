import React from 'react';
import { SurvivalStats, DayNightCycle } from '../types/game';
import { Home, Flame, Package, Calendar, Cloud, Sun, Moon, CloudRain, Zap } from 'lucide-react';
import { getTimeIcon, getWeatherIcon } from '../utils/gameUtils';

interface SurvivalStatsProps {
  survivalStats: SurvivalStats;
  dayNightCycle: DayNightCycle;
}

export const SurvivalStatsComponent: React.FC<SurvivalStatsProps> = ({ 
  survivalStats, 
  dayNightCycle 
}) => {
  const getTimeColor = (phase: string) => {
    switch (phase) {
      case 'dawn': return 'text-orange-400';
      case 'day': return 'text-yellow-400';
      case 'dusk': return 'text-purple-400';
      case 'night': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getWeatherColor = (weather: string) => {
    switch (weather) {
      case 'clear': return 'text-yellow-400';
      case 'cloudy': return 'text-gray-400';
      case 'rain': return 'text-blue-400';
      case 'storm': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-900 via-brown-900 to-yellow-900 p-4 sm:p-6 rounded-lg shadow-2xl border border-green-600">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">🏝️ Island Status</h2>
      
      {/* Day/Night Cycle */}
      <div className="bg-black/30 p-3 rounded-lg mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`text-2xl ${getTimeColor(dayNightCycle.phase)}`}>
              {getTimeIcon(dayNightCycle.phase)}
            </span>
            <span className="text-white font-semibold capitalize">
              {dayNightCycle.phase}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xl ${getWeatherColor(dayNightCycle.weatherCondition)}`}>
              {getWeatherIcon(dayNightCycle.weatherCondition)}
            </span>
            <span className="text-white text-sm capitalize">
              {dayNightCycle.weatherCondition}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Calendar className="w-4 h-4" />
          <span>Day {dayNightCycle.day} - {Math.floor(dayNightCycle.currentTime)}:00</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Days Survived */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Days Survived</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-green-400">{survivalStats.daysOnIsland}</p>
        </div>

        {/* Crash Site */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Crash Site</span>
          </div>
          {survivalStats.crashSite.discovered ? (
            <div>
              <p className="text-orange-400 font-bold text-sm">Discovered!</p>
              <p className="text-xs text-gray-300">
                {survivalStats.crashSite.itemsScavenged}/{survivalStats.crashSite.totalItems} items found
              </p>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">Not found yet</p>
          )}
        </div>

        {/* Shelter */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Shelter</span>
          </div>
          {survivalStats.shelter.built ? (
            <div>
              <p className="text-blue-400 font-bold text-sm">Level {survivalStats.shelter.level}</p>
              <p className="text-xs text-gray-300">Comfort: {survivalStats.shelter.comfort}%</p>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No shelter</p>
          )}
        </div>

        {/* Fire */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Fire</span>
          </div>
          {survivalStats.fire.lit ? (
            <div>
              <p className="text-red-400 font-bold text-sm">🔥 Burning</p>
              <p className="text-xs text-gray-300">Fuel: {survivalStats.fire.fuelRemaining}%</p>
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No fire</p>
          )}
        </div>
      </div>

      {/* Weather Effects */}
      {dayNightCycle.weatherCondition === 'storm' && (
        <div className="mt-4 p-3 bg-red-900/50 border border-red-500/50 rounded-lg">
          <div className="flex items-center gap-2 text-red-400">
            <Zap className="w-5 h-5" />
            <span className="font-bold">Storm Warning!</span>
          </div>
          <p className="text-red-300 text-sm mt-1">
            Dangerous weather conditions. Seek shelter immediately!
          </p>
        </div>
      )}

      {dayNightCycle.phase === 'night' && (
        <div className="mt-4 p-3 bg-purple-900/50 border border-purple-500/50 rounded-lg">
          <div className="flex items-center gap-2 text-purple-400">
            <Moon className="w-5 h-5" />
            <span className="font-bold">Night Time</span>
          </div>
          <p className="text-purple-300 text-sm mt-1">
            Creatures are more dangerous at night. Stay alert!
          </p>
        </div>
      )}
    </div>
  );
};