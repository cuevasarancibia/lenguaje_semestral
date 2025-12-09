import React, { useState } from 'react';
import { GameMode } from './types';
import { PracticeDiceMode } from './components/PracticeDiceMode';
import { MagicGenerator } from './components/MagicGenerator';
import { TrueFalseGame } from './components/TrueFalseGame';

export const App: React.FC = () => {
  const [mode, setMode] = useState<GameMode>('menu');

  const renderContent = () => {
    switch (mode) {
      case 'practice_dice':
        return <PracticeDiceMode onBack={() => setMode('menu')} />;
      case 'magic_generator':
        return <MagicGenerator onBack={() => setMode('menu')} />;
      case 'rapid_round':
        return <TrueFalseGame onBack={() => setMode('menu')} />;
      default:
        return (
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto animate-fade-in mt-8">
            {/* Mode 1 Card */}
            <button 
              onClick={() => setMode('practice_dice')}
              className="bg-indigo-50 hover:bg-indigo-100 border-2 border-indigo-200 rounded-3xl p-8 text-left transition-all transform hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🎲</div>
              <h3 className="text-2xl font-bold text-indigo-800 mb-2">Dado de Práctica</h3>
              <p className="text-slate-600">Entrena habilidades como inferir, causa y efecto y opinar. ¡El dado decide!</p>
            </button>

            {/* Mode 2 Card */}
            <button 
              onClick={() => setMode('magic_generator')}
              className="bg-fuchsia-50 hover:bg-fuchsia-100 border-2 border-fuchsia-200 rounded-3xl p-8 text-left transition-all transform hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-2xl font-bold text-fuchsia-800 mb-2">Cuentos Mágicos</h3>
              <p className="text-slate-600">La IA escribirá cuentos nuevos y desafiantes para ti. ¿Podrás responder?</p>
            </button>

            {/* Mode 3 Card */}
            <button 
              onClick={() => setMode('rapid_round')}
              className="bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-3xl p-8 text-left transition-all transform hover:-translate-y-2 hover:shadow-xl flex flex-col items-center text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Ronda Rápida</h3>
              <p className="text-slate-600">Verdadero o Falso. Demuestra cuánto sabes sobre Azabache y el cuerpo humano.</p>
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-yellow-200 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 p-4 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🦁</span>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 leading-none tracking-tight">Entrenador de Lectura</h1>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">4° Básico</p>
            </div>
          </div>
        </div>
      </header>

      <main className="p-6">
        {mode === 'menu' && (
          <div className="text-center mb-10 animate-slide-down">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">¡Vamos a estudiar jugando!</h2>
            <p className="text-xl text-slate-500">Elige un modo de juego para comenzar tu entrenamiento.</p>
          </div>
        )}
        
        {renderContent()}
      </main>
    </div>
  );
};
