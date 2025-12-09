import React, { useState } from 'react';
import { rapidRoundSets } from '../data';

interface TrueFalseGameProps {
  onBack: () => void;
}

type GamePhase = 'reading' | 'questioning' | 'finished';

export const TrueFalseGame: React.FC<TrueFalseGameProps> = ({ onBack }) => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [phase, setPhase] = useState<GamePhase>('reading');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const currentSet = rapidRoundSets[currentSetIndex];
  const currentQuestion = currentSet.questions[currentQuestionIndex];

  // Total questions calculation
  const totalQuestions = rapidRoundSets.reduce((acc, set) => acc + set.questions.length, 0);
  const currentGlobalQuestion = rapidRoundSets.slice(0, currentSetIndex).reduce((acc, set) => acc + set.questions.length, 0) + currentQuestionIndex + 1;

  const handleStartQuestions = () => {
    setPhase('questioning');
  };

  const handleAnswer = (answer: boolean) => {
    if (feedback !== null) return; // Prevent double clicks

    const isCorrect = answer === currentQuestion.isTrue;
    if (isCorrect) setScore(s => s + 1);
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      setFeedback(null);
      // Check if there are more questions in this set
      if (currentQuestionIndex < currentSet.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // End of this set
        if (currentSetIndex < rapidRoundSets.length - 1) {
          // Move to next set
          setCurrentSetIndex(prev => prev + 1);
          setCurrentQuestionIndex(0);
          setPhase('reading');
        } else {
          // End of game
          setPhase('finished');
        }
      }
    }, 2000);
  };

  if (phase === 'finished') {
    return (
      <div className="text-center bg-white p-10 rounded-3xl shadow-lg max-w-lg mx-auto animate-pop-in border-4 border-blue-100">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">¡Ronda Terminada!</h2>
        <div className="text-6xl mb-6">🏁</div>
        <p className="text-2xl text-slate-600 mb-8">
          Tu puntaje: <span className="font-bold text-blue-600">{score}</span> de {totalQuestions}
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={onBack} className="bg-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-300">Volver al Menú</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-slate-500 font-bold hover:text-slate-700">
          ← Salir
        </button>
        {phase === 'questioning' && (
          <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
            Pregunta {currentGlobalQuestion}/{totalQuestions}
          </div>
        )}
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-b-8 border-blue-200 relative min-h-[400px]">
        
        {phase === 'reading' && (
          <div className="p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📖</span>
              <h2 className="text-2xl font-bold text-indigo-900">Lee con atención</h2>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-300 mb-8">
              <h3 className="font-bold text-orange-800 mb-2 uppercase tracking-wider text-sm">{currentSet.title}</h3>
              <p className="text-lg leading-relaxed text-slate-800 font-medium">
                {currentSet.text}
              </p>
            </div>
            <button 
              onClick={handleStartQuestions}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-md transition-all transform hover:scale-[1.02]"
            >
              ¡Ya lo leí! Ir a las preguntas 👉
            </button>
          </div>
        )}

        {phase === 'questioning' && (
          <>
            {/* Progress Bar within set */}
            <div className="h-2 bg-slate-100 w-full">
              <div 
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${((currentGlobalQuestion) / totalQuestions) * 100}%` }}
              ></div>
            </div>

            <div className="p-10 text-center animate-slide-up">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 block">Sobre: {currentSet.title}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 leading-snug">
                {currentQuestion.statement}
              </h3>

              <div className="flex gap-4 md:gap-8 justify-center mb-6">
                <button 
                  onClick={() => handleAnswer(true)}
                  disabled={feedback !== null}
                  className={`w-32 h-32 rounded-2xl text-2xl font-bold border-b-8 transition-all transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2
                    ${feedback ? 'opacity-50 cursor-not-allowed' : 'bg-green-100 border-green-300 text-green-600 hover:bg-green-200'}
                  `}
                >
                  <span className="text-4xl">👍</span>
                  Verdadero
                </button>
                <button 
                  onClick={() => handleAnswer(false)}
                  disabled={feedback !== null}
                  className={`w-32 h-32 rounded-2xl text-2xl font-bold border-b-8 transition-all transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2
                    ${feedback ? 'opacity-50 cursor-not-allowed' : 'bg-red-100 border-red-300 text-red-600 hover:bg-red-200'}
                  `}
                >
                  <span className="text-4xl">👎</span>
                  Falso
                </button>
              </div>

              {/* Feedback Overlay */}
              {feedback && (
                <div className={`absolute inset-0 flex flex-col items-center justify-center bg-opacity-95 backdrop-blur-md animate-fade-in p-6 text-center z-10
                  ${feedback === 'correct' ? 'bg-green-50/90' : 'bg-red-50/90'}
                `}>
                  <div className="text-6xl mb-4">{feedback === 'correct' ? '🎉' : '❌'}</div>
                  <h4 className={`text-3xl font-bold mb-4 ${feedback === 'correct' ? 'text-green-700' : 'text-red-700'}`}>
                    {feedback === 'correct' ? '¡Correcto!' : '¡Incorrecto!'}
                  </h4>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-md">
                    <p className="text-slate-600 font-medium text-lg">{currentQuestion.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};