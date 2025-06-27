import React from 'react';

const ScoreSummary = ({ player, score, total, history }) => {
  const percentage = Math.round((score / total) * 100);
  let message = '';

  if (percentage === 100) message = 'Quiz Champion!';
  else if (percentage >= 70) message = 'Great Job!';
  else if (percentage >= 40) message = 'Nice Try!';
  else message = 'More caffeine, maybe?';

  const handlePlayAgain = () => {
    localStorage.removeItem('quiz-player');
    window.location.reload();
  };

  return (
    <div>
      <h2>{message}</h2>
      <p>Name: {player.name}</p>
      <p>Score: {score} / {total}</p>
      <p>Total Time: {history.reduce((sum, q) => sum + q.time, 0)}s</p>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default ScoreSummary;
