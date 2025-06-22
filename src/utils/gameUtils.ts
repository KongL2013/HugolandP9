import { Weapon, Armor, Enemy, Supply, CraftingMaterial } from '../types/game';

const weaponNames = {
  makeshift: ['Broken Bottle', 'Sharp Rock', 'Twisted Metal', 'Jagged Wood'],
  crude: ['Stone Knife', 'Wooden Spear', 'Bone Club', 'Shard Blade'],
  refined: ['Crafted Axe', 'Sharpened Spear', 'Bone Sword', 'Metal Blade'],
  masterwork: ['Forged Machete', 'Balanced Spear', 'Reinforced Club', 'Tempered Blade'],
  legendary: ['Island Guardian', 'Beast Slayer', 'Storm Breaker', 'Soul Render'],
};

const armorNames = {
  makeshift: ['Torn Clothes', 'Plastic Scraps', 'Cardboard Shield', 'Fabric Wraps'],
  crude: ['Animal Hide', 'Woven Grass', 'Bone Plates', 'Leather Scraps'],
  refined: ['Cured Leather', 'Scale Mail', 'Reinforced Hide', 'Bone Armor'],
  masterwork: ['Beast Hide Armor', 'Dragon Scale Mail', 'Bone Plate Armor', 'Crystal Guard'],
  legendary: ['Island Protector', 'Apex Predator Hide', 'Ancient Guardian Scales', 'Nightmare Ward'],
};

const enemyNames = {
  day: [
    'Wild Boar', 'Venomous Snake', 'Giant Crab', 'Territorial Monkey',
    'Razor-tooth Fish', 'Stalking Panther', 'Armored Beetle', 'Cliff Vulture'
  ],
  night: [
    'Shadow Prowler', 'Glowing Eyes', 'Night Stalker', 'Howling Beast',
    'Phantom Cat', 'Darkness Spawn', 'Nightmare Crawler', 'Void Hunter'
  ],
  boss: [
    'Island Alpha', 'Ancient Guardian', 'Apex Predator', 'Nightmare King',
    'Storm Bringer', 'Bone Collector', 'Soul Eater', 'Island Demon'
  ]
};

const supplyNames = {
  food: ['Coconut', 'Wild Berries', 'Fish', 'Crab Meat', 'Bird Egg', 'Mushroom', 'Fruit', 'Nuts'],
  water: ['Rainwater', 'Spring Water', 'Coconut Water', 'Purified Water'],
  medicine: ['Healing Herbs', 'Antiseptic Leaves', 'Pain Relief Bark', 'Energy Roots'],
  tool: ['Rope', 'Fire Starter', 'Sharp Stone', 'Sturdy Stick']
};

const materialNames = {
  wood: ['Driftwood', 'Bamboo', 'Hardwood', 'Ancient Wood'],
  stone: ['Flint', 'Granite', 'Obsidian', 'Crystal Stone'],
  metal: ['Scrap Metal', 'Plane Parts', 'Refined Metal', 'Rare Alloy'],
  bone: ['Small Bone', 'Large Bone', 'Predator Bone', 'Ancient Bone'],
  hide: ['Rabbit Hide', 'Boar Hide', 'Predator Hide', 'Dragon Hide'],
  cloth: ['Torn Fabric', 'Woven Fiber', 'Silk Thread', 'Mystic Cloth'],
  crystal: ['Clear Crystal', 'Energy Crystal', 'Power Crystal', 'Soul Crystal']
};

export const generateWeapon = (forceChroma = false): Weapon => {
  const rarities = ['makeshift', 'crude', 'refined', 'masterwork'] as const;
  const weights = [40, 35, 20, 5];
  const random = Math.random() * 100;
  
  let rarity: typeof rarities[number] = 'makeshift';
  let cumulative = 0;
  
  for (let i = 0; i < weights.length; i++) {
    cumulative += weights[i];
    if (random <= cumulative) {
      rarity = rarities[i];
      break;
    }
  }

  const names = weaponNames[rarity];
  const name = names[Math.floor(Math.random() * names.length)];
  
  const baseAtkMap = { makeshift: 8, crude: 15, refined: 25, masterwork: 40 };
  const upgradeCostMap = { makeshift: 3, crude: 8, refined: 15, masterwork: 30 };
  const baseAtk = baseAtkMap[rarity] + Math.floor(Math.random() * 8);
  const sellPrice = Math.floor(baseAtk * 1.5);

  const materials = ['wood', 'stone', 'metal', 'bone', 'crystal'] as const;
  const material = materials[Math.floor(Math.random() * materials.length)];

  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    rarity,
    baseAtk,
    level: 1,
    upgradeCost: upgradeCostMap[rarity],
    sellPrice,
    isChroma: false,
    material,
  };
};

export const generateLegendaryWeapon = (): Weapon => {
  const names = weaponNames.legendary;
  const name = names[Math.floor(Math.random() * names.length)];
  
  const baseAtk = 70 + Math.floor(Math.random() * 30);
  const sellPrice = Math.floor(baseAtk * 4);

  const materials = ['metal', 'bone', 'crystal'] as const;
  const material = materials[Math.floor(Math.random() * materials.length)];

  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    rarity: 'legendary',
    baseAtk,
    level: 1,
    upgradeCost: 80,
    sellPrice,
    isChroma: false,
    material,
  };
};

export const generateArmor = (forceChroma = false): Armor => {
  const rarities = ['makeshift', 'crude', 'refined', 'masterwork'] as const;
  const weights = [40, 35, 20, 5];
  const random = Math.random() * 100;
  
  let rarity: typeof rarities[number] = 'makeshift';
  let cumulative = 0;
  
  for (let i = 0; i < weights.length; i++) {
    cumulative += weights[i];
    if (random <= cumulative) {
      rarity = rarities[i];
      break;
    }
  }

  const names = armorNames[rarity];
  const name = names[Math.floor(Math.random() * names.length)];
  
  const baseDefMap = { makeshift: 5, crude: 10, refined: 18, masterwork: 30 };
  const upgradeCostMap = { makeshift: 3, crude: 8, refined: 15, masterwork: 30 };
  const baseDef = baseDefMap[rarity] + Math.floor(Math.random() * 5);
  const sellPrice = Math.floor(baseDef * 2);

  const materials = ['cloth', 'leather', 'hide', 'scale', 'bone'] as const;
  const material = materials[Math.floor(Math.random() * materials.length)];

  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    rarity,
    baseDef,
    level: 1,
    upgradeCost: upgradeCostMap[rarity],
    sellPrice,
    isChroma: false,
    material,
  };
};

export const generateLegendaryArmor = (): Armor => {
  const names = armorNames.legendary;
  const name = names[Math.floor(Math.random() * names.length)];
  
  const baseDef = 50 + Math.floor(Math.random() * 20);
  const sellPrice = Math.floor(baseDef * 4);

  const materials = ['hide', 'scale', 'bone'] as const;
  const material = materials[Math.floor(Math.random() * materials.length)];

  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    rarity: 'legendary',
    baseDef,
    level: 1,
    upgradeCost: 80,
    sellPrice,
    isChroma: false,
    material,
  };
};

export const generateSupply = (type?: 'food' | 'water' | 'medicine' | 'tool'): Supply => {
  const supplyType = type || (['food', 'water', 'medicine', 'tool'] as const)[Math.floor(Math.random() * 4)];
  const names = supplyNames[supplyType];
  const name = names[Math.floor(Math.random() * names.length)];
  
  const quantity = Math.floor(Math.random() * 3) + 1;
  
  let effect = {};
  switch (supplyType) {
    case 'food':
      effect = { hunger: 20 + Math.floor(Math.random() * 15) };
      break;
    case 'water':
      effect = { thirst: 25 + Math.floor(Math.random() * 20) };
      break;
    case 'medicine':
      effect = { hp: 30 + Math.floor(Math.random() * 20), sanity: 10 };
      break;
    case 'tool':
      effect = { sanity: 5 };
      break;
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    type: supplyType,
    quantity,
    effect,
  };
};

export const generateCraftingMaterial = (): CraftingMaterial => {
  const types = ['wood', 'stone', 'metal', 'bone', 'hide', 'cloth', 'crystal'] as const;
  const type = types[Math.floor(Math.random() * types.length)];
  
  const rarities = ['common', 'uncommon', 'rare', 'epic'] as const;
  const weights = [50, 30, 15, 5];
  const random = Math.random() * 100;
  
  let rarity: typeof rarities[number] = 'common';
  let cumulative = 0;
  
  for (let i = 0; i < weights.length; i++) {
    cumulative += weights[i];
    if (random <= cumulative) {
      rarity = rarities[i];
      break;
    }
  }

  const names = materialNames[type];
  const name = names[Math.floor(Math.random() * names.length)];
  const quantity = Math.floor(Math.random() * 5) + 1;

  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    type,
    quantity,
    rarity,
  };
};

export const generateEnemy = (zone: number, timeOfDay: 'day' | 'night' = 'day'): Enemy => {
  let enemyPool = timeOfDay === 'day' ? enemyNames.day : enemyNames.night;
  
  // Boss enemies every 10 zones
  if (zone % 10 === 0) {
    enemyPool = enemyNames.boss;
  }
  
  const name = enemyPool[Math.floor(Math.random() * enemyPool.length)];
  
  // Base stats with island progression
  let hp = 150 + (zone * 12);
  let atk = 15 + (zone * 6);
  let def = Math.floor(zone * 1.5);
  
  // Night creatures are stronger
  if (timeOfDay === 'night') {
    hp = Math.floor(hp * 1.3);
    atk = Math.floor(atk * 1.2);
    def = Math.floor(def * 1.1);
  }
  
  // Boss multipliers
  if (zone % 10 === 0) {
    hp *= 3;
    atk *= 2;
    def *= 2;
  }
  
  const type = zone % 10 === 0 ? 'boss' : 
               timeOfDay === 'night' ? 'monster' : 
               zone > 20 ? 'predator' : 'beast';
  
  return {
    name,
    hp,
    maxHp: hp,
    atk,
    def,
    zone,
    isPoisoned: false,
    poisonTurns: 0,
    type,
    timeOfDay: zone % 10 === 0 ? 'both' : timeOfDay,
  };
};

export const getRarityColor = (rarity: string): string => {
  switch (rarity) {
    case 'makeshift': return 'text-gray-400';
    case 'crude': return 'text-green-400';
    case 'refined': return 'text-blue-400';
    case 'masterwork': return 'text-purple-400';
    case 'legendary': return 'text-yellow-400';
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    default: return 'text-gray-400';
  }
};

export const getRarityBorder = (rarity: string): string => {
  switch (rarity) {
    case 'makeshift': return 'border-gray-400';
    case 'crude': return 'border-green-400';
    case 'refined': return 'border-blue-400';
    case 'masterwork': return 'border-purple-400';
    case 'legendary': return 'border-yellow-400';
    case 'common': return 'border-gray-400';
    case 'uncommon': return 'border-green-400';
    case 'rare': return 'border-blue-400';
    case 'epic': return 'border-purple-400';
    default: return 'border-gray-400';
  }
};

export const getRarityGlow = (rarity: string): string => {
  switch (rarity) {
    case 'makeshift': return 'shadow-gray-500/20';
    case 'crude': return 'shadow-green-500/30';
    case 'refined': return 'shadow-blue-500/30';
    case 'masterwork': return 'shadow-purple-500/40';
    case 'legendary': return 'shadow-yellow-500/50';
    case 'common': return 'shadow-gray-500/20';
    case 'uncommon': return 'shadow-green-500/30';
    case 'rare': return 'shadow-blue-500/30';
    case 'epic': return 'shadow-purple-500/40';
    default: return 'shadow-gray-500/20';
  }
};

export const calculateResearchBonus = (level: number, tier: number): number => {
  const baseBonus = level * 3; // 3% per level (reduced for survival theme)
  const tierBonus = tier * 10; // 10% per tier
  return baseBonus + tierBonus;
};

export const calculateResearchCost = (level: number, tier: number): number => {
  const levelInTier = level % 10;
  return 100 + (levelInTier * 30); // Reduced costs for survival theme
};

export const getTimeOfDayFromHour = (hour: number): 'dawn' | 'day' | 'dusk' | 'night' => {
  if (hour >= 5 && hour < 7) return 'dawn';
  if (hour >= 7 && hour < 17) return 'day';
  if (hour >= 17 && hour < 19) return 'dusk';
  return 'night';
};

export const getWeatherIcon = (weather: string): string => {
  switch (weather) {
    case 'clear': return '☀️';
    case 'cloudy': return '☁️';
    case 'rain': return '🌧️';
    case 'storm': return '⛈️';
    default: return '☀️';
  }
};

export const getTimeIcon = (phase: string): string => {
  switch (phase) {
    case 'dawn': return '🌅';
    case 'day': return '☀️';
    case 'dusk': return '🌇';
    case 'night': return '🌙';
    default: return '☀️';
  }
};