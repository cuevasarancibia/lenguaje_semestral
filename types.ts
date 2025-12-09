export type GameMode = 'menu' | 'practice_dice' | 'magic_generator' | 'rapid_round';

export interface PracticeExercise {
  id: string;
  category: 'Sentimientos' | 'CausaEfecto' | 'Infografia' | 'Personaje' | 'Comparar' | 'Opinion';
  title: string;
  content: string; // The text or description of the image
  emojiArt: string; // Large emoji composition
  question: string;
  options: string[];
  correctIndex: number;
  feedback: string;
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface RapidRoundSet {
  id: string;
  title: string;
  text: string; // The reading passage
  questions: TrueFalseQuestion[];
}

export type MagicGenre = 'Fantasía' | 'Ciencia' | 'Historia' | 'Catástrofes';

export interface GeneratedContent {
  story: string;
  questionType: string;
  question: string;
  answer: string; // Open-ended answer guide
}