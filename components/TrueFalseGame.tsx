import React, { useState, useEffect } from 'react';
import { rapidRoundSets } from '../data';
import { RapidRoundQuestion } from '../types';

interface TrueFalseGameProps {
  onBack: () => void;
}

interface LeaderboardEntry {
  name: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}

// Función para mezclar array (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Función para generar una partida aleatoria
const generateRandomGame = () => {
  // Mezclar todos los sets y tomar 2
  const shuffledSets = shuffleArray(rapidRoundSets);
  const selectedSets = shuffledSets.slice(0, 2);
  
  // De cada set, tomar 4 preguntas aleatorias
  const questions: { question: RapidRoundQuestion; setTitle: string; setText: string }[] = [];
  
  selectedSets.forEach(set => {
    const shuffledQuestions = shuffleArray(set.questions);
    const selected = shuffledQuestions.slice(0, 4);
    selected.forEach(q => {
      questions.push({
        question: q,
        setTitle: set.title,
        setText: set.text
      });
    });
  });
  
  return {
    questions,
    setTitles: selectedSets.map(s => s.title)
  };
};

// Funciones para manejar el leaderboard en localStorage
const getLeaderboard = (): LeaderboardEntry[] => {
  try {
    const stored = localStorage.getItem('aventura-leaderboard');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveToLeaderboard = (entry: LeaderboardEntry) => {
  const leaderboard = getLeaderboard();
  leaderboard.push(entry);
  // Ordenar por porcentaje (descendente) y luego por puntaje
  leaderboard.sort((a, b) => {
    if (b.percentage !== a.percentage) return b.percentage - a.percentage;
    return b.score - a.score;
  });
  // Mantener solo top 10
  const top10 = leaderboard.slice(0, 10);
  localStorage.setItem('aventura-leaderboard', JSON.stringify(top10));
  return top10;
};

export const TrueFalseGame: React.FC<TrueFalseGameProps> = ({ onBack }) => {
  // Estado del juego
  const [gameData, setGameData] = useState(() => generateRandomGame());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<boolean | null>(null);
  const [gameFinished, setGameFinished] = useState(false);
  
  // Estado del leaderboard
  const [showNameInput, setShowNameInput] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [scoreSaved, setScoreSaved] = useState(false);

  // Cargar leaderboard al iniciar
  useEffect(() => {
    setLeaderboard(getLeaderboard());
  }, []);

  const currentQuestion = gameData.questions[currentIndex];
  const totalQuestions = gameData.questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const handleAnswer = (answer: boolean) => {
    const isCorrect = answer === currentQuestion.question.isTrue;
    setLastAnswer(answer);
    setShowFeedback(true);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setLastAnswer(null);
    
    if (currentIndex + 1 >= totalQuestions) {
      setGameFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleSaveScore = () => {
    if (playerName.length !== 5) return;
    
    const entry: LeaderboardEntry = {
      name: playerName.toUpperCase(),
      score,
      total: totalQuestions,
      percentage,
      date: new Date().toLocaleDateString('es-CL')
    };
    
    const updatedLeaderboard = saveToLeaderboard(entry);
    setLeaderboard(updatedLeaderboard);
    setScoreSaved(true);
    setShowNameInput(false);
  };

  const handlePlayAgain = () => {
    // Generar nueva partida completamente aleatoria
    setGameData(generateRandomGame());
    setCurrentIndex(0);
    setScore(0);
    setShowFeedback(false);
    setLastAnswer(null);
    setGameFinished(false);
    setShowNameInput(false);
    setPlayerName('');
    setScoreSaved(false);
  };

  // Pantalla de fin de juego
  if (gameFinished) {
    const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : percentage >= 40 ? '💪' : '📚';
    const message = percentage >= 80 ? '¡Excelente!' : percentage >= 60 ? '¡Muy bien!' : percentage >= 40 ? '¡Buen esfuerzo!' : '¡Sigue practicando!';

    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100 p-4">
        <div className="max-w-md mx-auto">
          {/* Resultado */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 text-center">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-2xl font-bold text-orange-600 mb-2">{message}</h2>
            <p className="text-xl mb-2">
              Obtuviste <span className="font-bold text-green-600">{score}</span> de {totalQuestions}
            </p>
            <p className="text-3xl font-bold text-orange-500 mb-4">{percentage}%</p>
            
            <p className="text-sm text-gray-500 mb-4">
              Temas: {gameData.setTitles.join(' y ')}
            </p>

            {/* Botón para guardar puntaje */}
            {!scoreSaved && !showNameInput && (
              <button
                onClick={() => setShowNameInput(true)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl mb-3 transition-all"
              >
                📝 Guardar mi puntaje
              </button>
            )}

            {/* Input para nombre */}
            {showNameInput && (
              <div className="bg-yellow-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">Escribe tu nombre (5 letras):</p>
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z]/g, '').slice(0, 5);
                    setPlayerName(value);
                  }}
                  placeholder="ABCDE"
                  className="w-full text-center text-2xl font-bold tracking-widest border-2 border-yellow-400 rounded-lg p-2 mb-3 uppercase"
                  maxLength={5}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowNameInput(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveScore}
                    disabled={playerName.length !== 5}
                    className={`flex-1 font-bold py-2 px-4 rounded-lg ${
                      playerName.length === 5
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            )}

            {scoreSaved && (
              <div className="bg-green-100 text-green-700 rounded-xl p-3 mb-4">
                ✅ ¡Puntaje guardado!
              </div>
            )}

            {/* Botones de acción */}
            <button
              onClick={handlePlayAgain}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl mb-3 transition-all"
            >
              🎲 Nueva Partida
            </button>
            
            <button
              onClick={onBack}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all"
            >
              🏠 Volver al Menú
            </button>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-xl font-bold text-center text-orange-600 mb-3">
              🏆 Top 10 Mejores
            </h3>
            
            {leaderboard.length === 0 ? (
              <p className="text-center text-gray-500 py-4">
                ¡Sé el primero en aparecer aquí!
              </p>
            ) : (
              <div className="space-y-2">
                {leaderboard.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-2 rounded-lg ${
                      index === 0 ? 'bg-yellow-100' :
                      index === 1 ? 'bg-gray-100' :
                      index === 2 ? 'bg-orange-50' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold w-6">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`}
                      </span>
                      <span className="font-mono font-bold">{entry.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-orange-600">{entry.percentage}%</span>
                      <span className="text-xs text-gray-500 ml-1">({entry.score}/{entry.total})</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de juego
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onBack}
            className="bg-white hover:bg-gray-100 text-gray-600 font-bold py-2 px-4 rounded-full shadow transition-all"
          >
            ← Salir
          </button>
          <div className="bg-white rounded-full px-4 py-2 shadow">
            <span className="font-bold text-orange-600">
              Pregunta {currentIndex + 1}/{totalQuestions}
            </span>
          </div>
        </div>

        {/* Puntaje actual */}
        <div className="text-center mb-4">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold">
            ✓ Correctas: {score}
          </span>
        </div>

        {/* Tema actual */}
        <div className="bg-orange-200 rounded-xl p-2 mb-4 text-center">
          <span className="font-bold text-orange-800">📚 {currentQuestion.setTitle}</span>
        </div>

        {/* Texto del tema */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
          <p className="text-gray-700 leading-relaxed text-sm">
            {currentQuestion.setText}
          </p>
        </div>

        {/* Pregunta */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-4 mb-4">
          <p className="text-lg font-medium text-gray-800 text-center">
            "{currentQuestion.question.statement}"
          </p>
        </div>

        {/* Botones de respuesta */}
        {!showFeedback ? (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button
              onClick={() => handleAnswer(true)}
              className="bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all text-xl"
            >
              ✓ Verdadero
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all text-xl"
            >
              ✗ Falso
            </button>
          </div>
        ) : (
          /* Feedback */
          <div className={`rounded-2xl p-4 mb-4 ${
            lastAnswer === currentQuestion.question.isTrue 
              ? 'bg-green-100 border-2 border-green-400' 
              : 'bg-red-100 border-2 border-red-400'
          }`}>
            <div className="text-center mb-2">
              {lastAnswer === currentQuestion.question.isTrue ? (
                <span className="text-2xl">🎉 ¡Correcto!</span>
              ) : (
                <span className="text-2xl">😅 Incorrecto</span>
              )}
            </div>
            <p className="text-sm text-gray-700 mb-3">
              <strong>La respuesta es {currentQuestion.question.isTrue ? 'VERDADERO' : 'FALSO'}:</strong><br/>
              {currentQuestion.question.explanation}
            </p>
            <button
              onClick={handleNext}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              {currentIndex + 1 >= totalQuestions ? 'Ver Resultados →' : 'Siguiente →'}
            </button>
          </div>
        )}

        {/* Barra de progreso */}
        <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-orange-500 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
