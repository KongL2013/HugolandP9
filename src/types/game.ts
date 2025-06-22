export interface GameState {
  coins: number;
  gems: number;
  zone: number;
  playerStats: PlayerStats;
  inventory: Inventory;
  currentEnemy: Enemy | null;
  inCombat: boolean;
  combatLog: string[];
  research: Research;
  isPremium: boolean;
  achievements: Achievement[];
  collectionBook: CollectionBook;
  knowledgeStreak: KnowledgeStreak;
  gameMode: GameMode;
  statistics: Statistics;
  powerSkills: PowerSkills;
  cheats: CheatSettings;
  survivalStats: SurvivalStats;
  dayNightCycle: DayNightCycle;
}

export interface PlayerStats {
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  baseAtk: number;
  baseDef: number;
  baseHp: number;
  hunger: number;
  maxHunger: number;
  thirst: number;
  maxThirst: number;
  sanity: number;
  maxSanity: number;
}

export interface Research {
  level: number;
  tier: number; // Every 10 levels = new tier
  totalSpent: number;
}

export interface Inventory {
  weapons: Weapon[];
  armor: Armor[];
  currentWeapon: Weapon | null;
  currentArmor: Armor | null;
  supplies: Supply[];
  craftingMaterials: CraftingMaterial[];
}

export interface Weapon {
  id: string;
  name: string;
  rarity: 'makeshift' | 'crude' | 'refined' | 'masterwork' | 'legendary';
  baseAtk: number;
  level: number;
  upgradeCost: number;
  sellPrice: number;
  isChroma?: boolean;
  material: 'wood' | 'stone' | 'metal' | 'bone' | 'crystal';
}

export interface Armor {
  id: string;
  name: string;
  rarity: 'makeshift' | 'crude' | 'refined' | 'masterwork' | 'legendary';
  baseDef: number;
  level: number;
  upgradeCost: number;
  sellPrice: number;
  isChroma?: boolean;
  material: 'cloth' | 'leather' | 'hide' | 'scale' | 'bone';
}

export interface Supply {
  id: string;
  name: string;
  type: 'food' | 'water' | 'medicine' | 'tool';
  quantity: number;
  effect: {
    hunger?: number;
    thirst?: number;
    hp?: number;
    sanity?: number;
  };
}

export interface CraftingMaterial {
  id: string;
  name: string;
  type: 'wood' | 'stone' | 'metal' | 'bone' | 'hide' | 'cloth' | 'crystal';
  quantity: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic';
}

export interface Enemy {
  name: string;
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  zone: number;
  isPoisoned?: boolean;
  poisonTurns?: number;
  type: 'beast' | 'monster' | 'predator' | 'supernatural' | 'boss';
  timeOfDay: 'day' | 'night' | 'both';
}

export interface ChestReward {
  type: 'weapon' | 'armor' | 'supplies' | 'materials';
  items?: (Weapon | Armor | Supply | CraftingMaterial)[];
  gems?: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  progress: number;
  maxProgress: number;
  reward?: {
    coins?: number;
    gems?: number;
    special?: string;
  };
}

export interface CollectionBook {
  weapons: { [key: string]: boolean };
  armor: { [key: string]: boolean };
  creatures: { [key: string]: boolean };
  locations: { [key: string]: boolean };
  totalWeaponsFound: number;
  totalArmorFound: number;
  totalCreaturesEncountered: number;
  totalLocationsDiscovered: number;
  rarityStats: {
    makeshift: number;
    crude: number;
    refined: number;
    masterwork: number;
    legendary: number;
  };
}

export interface KnowledgeStreak {
  current: number;
  best: number;
  multiplier: number;
  lastCorrectTime?: Date;
}

export interface GameMode {
  current: 'survivor' | 'explorer' | 'hunter' | 'nightmare';
  speedModeActive: boolean;
  survivalLives: number;
  maxSurvivalLives: number;
}

export interface Statistics {
  totalQuestionsAnswered: number;
  correctAnswers: number;
  totalPlayTime: number; // in seconds
  zonesReached: number;
  itemsCollected: number;
  coinsEarned: number;
  gemsEarned: number;
  chestsOpened: number;
  creaturesDefeated: number;
  dayssurvived: number;
  accuracyByCategory: {
    [category: string]: {
      correct: number;
      total: number;
    };
  };
  sessionStartTime: Date;
}

export interface PowerSkills {
  rage: {
    attackCount: number;
    isActive: boolean;
    damageBonus: number;
  };
  poison: {
    attackCount: number;
    isActive: boolean;
  };
  health: {
    isTriggered: boolean;
    isActive: boolean;
    attacksRemaining: number;
  };
}

export interface CheatSettings {
  infiniteCoins: boolean;
  infiniteGems: boolean;
  obtainAnyItem: boolean;
  infiniteHunger: boolean;
  infiniteThirst: boolean;
  infiniteSanity: boolean;
}

export interface SurvivalStats {
  daysOnIsland: number;
  crashSite: {
    discovered: boolean;
    itemsScavenged: number;
    totalItems: number;
  };
  shelter: {
    built: boolean;
    level: number;
    comfort: number;
  };
  fire: {
    lit: boolean;
    fuelRemaining: number;
  };
}

export interface DayNightCycle {
  currentTime: number; // 0-24 hours
  day: number;
  phase: 'dawn' | 'day' | 'dusk' | 'night';
  weatherCondition: 'clear' | 'cloudy' | 'rain' | 'storm';
}