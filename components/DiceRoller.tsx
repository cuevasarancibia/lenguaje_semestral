import React, { useState } from 'react';

interface DiceRollerProps {
  onRollComplete: (result: number) => void;
  lastResult: number | null;
}

export const DiceRoller: React.FC<DiceRollerProps> = ({ onRollComplete, lastResult }) => {
  const [rolling, setRolling] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);

    let newResult;
    // Anti-repetition logic: Keep rolling internally until we get a different number
    do {
      newResult = Math.floor(Math.random() * 6) + 1;
    } while (newResult === lastResult);
    
    // Calculate rotation (standard dice mapping)
    // 1: front, 2: back, 3: right, 4: left, 5: top, 6: bottom
    let x = 0;
    let y = 0;
    const spins = 1080; // More spins for excitement

    switch (newResult) {
      case 1: x = spins; y = spins; break;
      case 2: x = spins; y = spins + 180; break;
      case 3: x = spins; y = spins - 90; break;
      case 4: x = spins; y = spins + 90; break;
      case 5: x = spins - 90; y = spins; break;
      case 6: x = spins + 90; y = spins; break;
    }

    // Add a bit of randomness to the rotation to make it look organic
    x += Math.random() * 10 - 5;
    y += Math.random() * 10 - 5;

    setRotation({ x, y });

    setTimeout(() => {
      setRolling(false);
      onRollComplete(newResult);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="dice-container mb-16 scale-125">
        <div 
          className="dice" 
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          {/* Using Emoji/Icons for the categories directly on the dice faces could be cool, 
              but numbers are safer for mapping. Let's stick to standard dice visuals with colors. */}
          <div className="face front bg-red-100 border-red-300 text-red-500">Sentim.</div>
          <div className="face back bg-blue-100 border-blue-300 text-blue-500">Causa</div>
          <div className="face right bg-green-100 border-green-300 text-green-500">Info</div>
          <div className="face left bg-yellow-100 border-yellow-300 text-yellow-500">Person.</div>
          <div className="face top bg-purple-100 border-purple-300 text-purple-500">Comp.</div>
          <div className="face bottom bg-orange-100 border-orange-300 text-orange-500">Opinión</div>
        </div>
      </div>
      
      <button 
        onClick={rollDice}
        disabled={rolling}
        className={`px-10 py-5 rounded-full text-2xl font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95 border-b-8 ${
          rolling 
            ? 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed' 
            : 'bg-indigo-500 text-white border-indigo-700 hover:bg-indigo-400'
        }`}
      >
        {rolling ? '🎲 Girando...' : '¡Lanzar Dado! 🎲'}
      </button>
    </div>
  );
};
