import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [sortKey, setSortKey] = useState('score');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('quiz-scores') || '[]');
    setScores(data);
  }, []);

  const sorted = [...scores].sort((a, b) => {
    if (sortKey === 'score') return b.score - a.score;
    if (sortKey === 'time') return a.time - b.time;
    return 0;
  });

  return (
    <div className="container">
      <h2>Leaderboard</h2>
      <div>
        <button onClick={() => setSortKey('score')}>Sort by Score</button>
        <button onClick={() => setSortKey('time')}>Sort by Time</button>
      </div>
      <ul>
        {sorted.map((s, i) => (
          <li key={i}>
            {s.name} - {s.score}/{s.total} - {s.time}s - {s.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
