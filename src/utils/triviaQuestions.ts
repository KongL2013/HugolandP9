export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const triviaQuestions: TriviaQuestion[] = [
  // Survival & Nature Questions
  {
    id: '1',
    question: 'What is the most important survival priority?',
    options: ['Food', 'Water', 'Shelter', 'Fire'],
    correctAnswer: 1,
    category: 'Survival',
    difficulty: 'easy'
  },
  {
    id: '2',
    question: 'How many days can a human survive without water?',
    options: ['1-2 days', '3-5 days', '7-10 days', '2 weeks'],
    correctAnswer: 1,
    category: 'Survival',
    difficulty: 'easy'
  },
  {
    id: '3',
    question: 'Which plant part is usually safe to eat?',
    options: ['Berries', 'Leaves', 'Roots', 'Fruits'],
    correctAnswer: 3,
    category: 'Nature',
    difficulty: 'easy'
  },
  {
    id: '4',
    question: 'What should you do if you encounter a wild animal?',
    options: ['Run away quickly', 'Make yourself look bigger', 'Play dead', 'Make loud noises'],
    correctAnswer: 1,
    category: 'Survival',
    difficulty: 'easy'
  },
  {
    id: '5',
    question: 'Which direction does moss typically grow on trees?',
    options: ['North side', 'South side', 'East side', 'All sides equally'],
    correctAnswer: 3,
    category: 'Nature',
    difficulty: 'medium'
  },

  // Island & Geography
  {
    id: '6',
    question: 'What type of rock is best for making tools?',
    options: ['Granite', 'Limestone', 'Flint', 'Marble'],
    correctAnswer: 2,
    category: 'Geology',
    difficulty: 'medium'
  },
  {
    id: '7',
    question: 'Which tree produces coconuts?',
    options: ['Palm tree', 'Oak tree', 'Pine tree', 'Maple tree'],
    correctAnswer: 0,
    category: 'Nature',
    difficulty: 'easy'
  },
  {
    id: '8',
    question: 'What causes tides in the ocean?',
    options: ['Wind', 'Moon\'s gravity', 'Earth\'s rotation', 'Temperature'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'medium'
  },
  {
    id: '9',
    question: 'Which signal is internationally recognized for distress?',
    options: ['SOS', 'HELP', 'MAYDAY', 'EMERGENCY'],
    correctAnswer: 0,
    category: 'Survival',
    difficulty: 'easy'
  },
  {
    id: '10',
    question: 'What is the best way to purify water in the wild?',
    options: ['Let it sit', 'Boiling', 'Filtering through cloth', 'Adding salt'],
    correctAnswer: 1,
    category: 'Survival',
    difficulty: 'medium'
  },

  // Animals & Creatures
  {
    id: '11',
    question: 'Which animal is known as the apex predator of the ocean?',
    options: ['Whale', 'Shark', 'Octopus', 'Barracuda'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'easy'
  },
  {
    id: '12',
    question: 'What do you call a group of wolves?',
    options: ['Herd', 'Flock', 'Pack', 'Pride'],
    correctAnswer: 2,
    category: 'Animals',
    difficulty: 'medium'
  },
  {
    id: '13',
    question: 'Which snake is the most venomous in the world?',
    options: ['King Cobra', 'Black Mamba', 'Inland Taipan', 'Rattlesnake'],
    correctAnswer: 2,
    category: 'Animals',
    difficulty: 'hard'
  },
  {
    id: '14',
    question: 'How do you identify if a spider is venomous?',
    options: ['By its size', 'By its color', 'By its web pattern', 'You cannot tell easily'],
    correctAnswer: 3,
    category: 'Animals',
    difficulty: 'hard'
  },
  {
    id: '15',
    question: 'Which bird is known for its excellent navigation skills?',
    options: ['Eagle', 'Pigeon', 'Owl', 'Sparrow'],
    correctAnswer: 1,
    category: 'Animals',
    difficulty: 'medium'
  },

  // Crafting & Tools
  {
    id: '16',
    question: 'What is the best material for starting a fire?',
    options: ['Green leaves', 'Dry tinder', 'Wet wood', 'Sand'],
    correctAnswer: 1,
    category: 'Survival',
    difficulty: 'easy'
  },
  {
    id: '17',
    question: 'Which knot is best for securing a shelter?',
    options: ['Square knot', 'Bowline', 'Slip knot', 'Granny knot'],
    correctAnswer: 1,
    category: 'Survival',
    difficulty: 'medium'
  },
  {
    id: '18',
    question: 'What tool is most essential for survival?',
    options: ['Axe', 'Knife', 'Rope', 'Compass'],
    correctAnswer: 1,
    category: 'Survival',
    difficulty: 'medium'
  },
  {
    id: '19',
    question: 'How do you make a simple spear?',
    options: ['Sharpen both ends', 'Attach stone to stick', 'Use only wood', 'Burn the tip'],
    correctAnswer: 3,
    category: 'Crafting',
    difficulty: 'medium'
  },
  {
    id: '20',
    question: 'What is the strongest natural fiber for making rope?',
    options: ['Grass', 'Bark', 'Vines', 'Animal sinew'],
    correctAnswer: 3,
    category: 'Crafting',
    difficulty: 'hard'
  },

  // Weather & Environment
  {
    id: '21',
    question: 'What weather sign indicates an approaching storm?',
    options: ['Clear skies', 'Falling barometric pressure', 'Rising temperature', 'Calm winds'],
    correctAnswer: 1,
    category: 'Weather',
    difficulty: 'medium'
  },
  {
    id: '22',
    question: 'Which cloud type indicates fair weather?',
    options: ['Cumulus', 'Stratus', 'Nimbus', 'Cirrus'],
    correctAnswer: 0,
    category: 'Weather',
    difficulty: 'medium'
  },
  {
    id: '23',
    question: 'What should you do during a lightning storm?',
    options: ['Stand under a tree', 'Stay in open areas', 'Seek low ground', 'Stay near water'],
    correctAnswer: 2,
    category: 'Safety',
    difficulty: 'easy'
  },
  {
    id: '24',
    question: 'How can you predict weather using nature?',
    options: ['Animal behavior', 'Plant growth', 'Rock color', 'Soil texture'],
    correctAnswer: 0,
    category: 'Nature',
    difficulty: 'medium'
  },
  {
    id: '25',
    question: 'What causes fog to form?',
    options: ['Hot air', 'Cold air meeting warm ground', 'High winds', 'Low humidity'],
    correctAnswer: 1,
    category: 'Weather',
    difficulty: 'hard'
  }
];

export const getRandomQuestion = (difficulty?: 'easy' | 'medium' | 'hard'): TriviaQuestion => {
  let filteredQuestions = triviaQuestions;
  
  if (difficulty) {
    filteredQuestions = triviaQuestions.filter(q => q.difficulty === difficulty);
  }
  
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
};

export const getQuestionByZone = (zone: number): TriviaQuestion => {
  // Easy questions for zones 1-3 (learning basics)
  if (zone <= 3) {
    return getRandomQuestion('easy');
  }
  // Medium questions for zones 4-7 (getting experienced)
  else if (zone <= 7) {
    return getRandomQuestion('medium');
  }
  // Hard questions for zones 8+ (survival expert)
  else {
    return getRandomQuestion('hard');
  }
};