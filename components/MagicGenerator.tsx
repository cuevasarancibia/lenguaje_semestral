import React, { useState, useEffect } from 'react';
import { generateMagicStory } from '../services/geminiService';
import { MagicGenre, GeneratedContent } from '../types';

interface MagicGeneratorProps {
  onBack: () => void;
}

export const MagicGenerator: React.FC<MagicGeneratorProps> = ({ onBack }) => {
  const [genre, setGenre] = useState<MagicGenre | null>(null);
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  // Typing effect
  useEffect(() => {
    if (content?.story) {
      let i = 0;
      const speed = 20; // ms per char
      const timer = setInterval(() => {
        if (i < content.story.length) {
          setDisplayedText((prev) => prev + content.story.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [content]);

  const handleGenerate = async (selectedGenre: MagicGenre) => {
    setGenre(selectedGenre);
    setLoading(true);
    setDisplayedText('');
    setContent(null);
    setShowAnswer(false);

    const result = await generateMagicStory(selectedGenre);
    setContent(result);
    setLoading(false);
  };

  const genres: { id: MagicGenre; emoji: string; color: string }[] = [
    { id: 'Fantasía', emoji: '🧙‍♂️', color: 'bg-purple-100 hover:bg-purple-200 text-purple-700' },
    { id: 'Ciencia', emoji: '🚀', color: 'bg-blue-100 hover:bg-blue-200 text-blue-700' },
    { id: 'Historia', emoji: '🏛️', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700' },
    { id: 'Catástrofes', emoji: '🌋', color: 'bg-red-100 hover:bg-red-200 text-red-700' },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-slate-500 font-bold hover:text-slate-700">
          ← Volver al Menú
        </button>
        <div className="bg-fuchsia-100 text-fuchsia-700 px-4 py-1 rounded-full text-sm font-bold">
          Modo: Cuentos Mágicos
        </div>
      </div>

      {!content && !loading && (
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center animate-fade-in border-4 border-fuchsia-50">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">¿Qué quieres leer hoy?</h2>
          <p className="text-slate-600 mb-8">Elige un tema y la Inteligencia Artificial escribirá una historia única y te hará una pregunta sorpresa.</p>
          
          <div className="grid grid-cols-2 gap-4">
            {genres.map((g) => (
              <button
                key={g.id}
                onClick={() => handleGenerate(g.id)}
                className={`${g.color} p-6 rounded-2xl font-bold text-xl shadow-sm transition-all transform hover:scale-105 flex flex-col items-center gap-2 border-b-4 border-black/10 active:border-b-0 active:translate-y-1`}
              >
                <span className="text-4xl">{g.emoji}</span>
                {g.id}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading && (
        <div className="text-center py-20 animate-pulse">
          <div className="text-6xl mb-4 animate-bounce">✨</div>
          <h3 className="text-2xl font-bold text-slate-700">Escribiendo tu historia...</h3>
          <p className="text-slate-500">La magia está sucediendo</p>
        </div>
      )}

      {content && !loading && (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-slide-up border-2 border-fuchsia-100">
          <div className="bg-fuchsia-50 p-8 min-h-[200px]">
            <h3 className="text-fuchsia-800 font-bold mb-4 uppercase text-sm tracking-wider flex items-center gap-2">
              <span>📖</span> Cuento Generado: {genre}
            </h3>
            <p className="text-xl leading-relaxed font-medium text-slate-800 font-serif">
              {displayedText}
              <span className="animate-pulse text-fuchsia-500">|</span>
            </p>
          </div>

          <div className="p-8 bg-white">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">
                  Tipo de Pregunta: {content.questionType}
                </span>
              </div>
              <h4 className="font-bold text-slate-700 text-lg mb-4">Responde en voz alta o en tu mente:</h4>
              <p className="text-2xl text-slate-800 mb-8 font-bold text-center">"{content.question}"</p>
              
              {!showAnswer ? (
                <div className="text-center">
                  <button 
                    onClick={() => setShowAnswer(true)}
                    className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
                  >
                    Ver Respuesta Sugerida 👀
                  </button>
                </div>
              ) : (
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 animate-fade-in">
                  <p className="font-bold text-green-800 mb-1">Respuesta esperada:</p>
                  <p className="text-green-700 text-lg">{content.answer}</p>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => { setContent(null); setDisplayedText(''); }}
                className="text-slate-400 font-bold hover:text-fuchsia-600 underline text-sm"
              >
                Crear otra historia
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};