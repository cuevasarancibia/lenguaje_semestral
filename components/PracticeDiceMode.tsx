import React, { useState } from 'react';
import { DiceRoller } from './DiceRoller';
import { practiceExercises } from '../data';
import { PracticeExercise } from '../types';

interface PracticeDiceModeProps {
  onBack: () => void;
}

export const PracticeDiceMode: React.FC<PracticeDiceModeProps> = ({ onBack }) => {
  const [phase, setPhase] = useState<'rolling' | 'answering' | 'feedback'>('rolling');
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [currentExercise, setCurrentExercise] = useState<PracticeExercise | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleRoll = (result: number) => {
    setLastRoll(result);
    // Map dice result (1-6) to exercises array (0-5)
    const exerciseIndex = result - 1;
    setCurrentExercise(practiceExercises[exerciseIndex]);
    setPhase('answering');
    setSelectedOption(null);
  };

  const handleOptionClick = (idx: number) => {
    setSelectedOption(idx);
    setPhase('feedback');
  };

  const nextTurn = () => {
    setPhase('rolling');
    setCurrentExercise(null);
  };

  // Helper to determine feedback style
  const isCorrect = selectedOption === currentExercise?.correctIndex;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-slate-500 font-bold hover:text-slate-700">
          ← Volver al Menú
        </button>
        <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold">
          Modo: Dado de Práctica
        </div>
      </div>

      {phase === 'rolling' && (
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center animate-fade-in border-4 border-indigo-100">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">¡Prueba tu Suerte!</h2>
          <p className="text-slate-600 mb-8">Lanza el dado para ver qué habilidad entrenaremos hoy.</p>
          <DiceRoller onRollComplete={handleRoll} lastResult={lastRoll} />
        </div>
      )}

      {(phase === 'answering' || phase === 'feedback') && currentExercise && (
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl animate-slide-up border-4 border-slate-100">
          {/* Header Card */}
          <div className="bg-indigo-50 p-6 border-b border-indigo-100 text-center">
            <span className="text-sm uppercase tracking-wider text-indigo-400 font-bold">{currentExercise.category}</span>
            <h2 className="text-2xl font-bold text-indigo-900 mt-1">{currentExercise.title}</h2>
          </div>

          <div className="p-8">
            {/* Visual Context */}
            <div className="mb-8 text-center bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200">
              <div className="text-6xl mb-4 filter drop-shadow-sm">{currentExercise.emojiArt}</div>
              <p className="text-lg text-slate-700 font-medium leading-relaxed italic">
                "{currentExercise.content}"
              </p>
            </div>

            {/* Question */}
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">{currentExercise.question}</h3>

            {/* Options */}
            <div className="grid gap-3">
              {currentExercise.options.map((option, idx) => {
                let btnClass = "w-full p-4 rounded-xl border-2 text-left font-medium transition-all text-lg ";
                
                if (phase === 'feedback') {
                  if (idx === currentExercise.correctIndex) {
                    btnClass += "bg-green-100 border-green-500 text-green-800 shadow-inner";
                  } else if (idx === selectedOption) {
                    btnClass += "bg-red-100 border-red-500 text-red-800 opacity-60";
                  } else {
                    btnClass += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                  }
                } else {
                  btnClass += "bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-600 hover:shadow-md transform hover:-translate-y-0.5";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={phase === 'feedback'}
                    className={btnClass}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Feedback Section */}
            {phase === 'feedback' && (
              <div className={`mt-8 p-6 rounded-2xl border-l-8 animate-pop-in ${
                isCorrect ? 'bg-green-50 border-green-400' : 'bg-yellow-50 border-yellow-400'
              }`}>
                <h4 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-800' : 'text-yellow-800'}`}>
                  {isCorrect ? "¡Excelente trabajo! 🌟" : "Mmm... piénsalo de nuevo 🤔"}
                </h4>
                
                {!isCorrect && (
                  <p className="text-sm font-bold text-yellow-700 mb-2">La respuesta correcta era: {currentExercise.options[currentExercise.correctIndex]}</p>
                )}

                <p className={isCorrect ? 'text-green-900' : 'text-yellow-900'}>
                  <strong>Explicación:</strong> {currentExercise.feedback}
                </p>
                
                <div className="mt-6 text-center">
                  <button 
                    onClick={nextTurn}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    ¡Lanzar de nuevo!
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};