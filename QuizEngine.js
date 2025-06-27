import React, { useState, useEffect } from 'react';
import questionsData from '../data/Questions';
import ScoreSummary from './ScoreSummary';

const QuizEngine = ({ player }) => {
  const { category, difficulty } = player;
  const filtered = questionsData[category][difficulty];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [completed, setCompleted] = useState(false);
  const [history, setHistory] = useState([]);

  const current = filtered[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          handleNext();
          return 15;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [index]);

  const handleSelect = (opt) => {
    if (selected) return;
    setSelected(opt);
    if (opt === current.answer) setScore((prev) => prev + 1);
    setHistory([...history, {
      question: current.question,
      selected: opt,
      correct: current.answer,
      time: 15 - timeLeft,
    }]);
  };

  const handleNext = () => {
    if (index + 1 < filtered.length) {
      setIndex(index + 1);
      setSelected(null);
      setTimeLeft(15);
    } else {
      setCompleted(true);
      const record = {
        ...player,
        score,
        total: filtered.length,
        time: history.reduce((a, b) => a + b.time, 0),
        date: new Date().toLocaleString(),
      };
      const records = JSON.parse(localStorage.getItem('quiz-scores') || '[]');
      records.push(record);
      localStorage.setItem('quiz-scores', JSON.stringify(records));
    }
  };

  if (completed) return <ScoreSummary player={player} score={score} total={filtered.length} history={history} />;

  return (
    <div>
      <h3>Question {index + 1}/{filtered.length}</h3>
      <p>{current.question}</p>
      {current.options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleSelect(opt)}
          style={{
            backgroundColor:
              selected && opt === current.answer
                ? 'green'
                : selected === opt
                ? 'red'
                : '',
          }}
        >
          {opt}
        </button>
      ))}
      <p>Time Left: {timeLeft}s</p>
      {selected && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default QuizEngine;
