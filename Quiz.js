import React, { useState } from 'react';
import AddPlayerForm from '../components/AddPlayerForm';
import QuizEngine from '../components/QuizEngine';

const Quiz = () => {
  const [playerData, setPlayerData] = useState(() => {
    const saved = localStorage.getItem('quiz-player');
    return saved ? JSON.parse(saved) : null;
  });

  return (
    <div className="container">
      {!playerData ? (
        <AddPlayerForm onSubmit={setPlayerData} />
      ) : (
        <QuizEngine player={playerData} />
      )}
    </div>
  );
};

export default Quiz;
