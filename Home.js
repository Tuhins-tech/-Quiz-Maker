import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to the Quiz Arena!</h1>
          <p>Test your knowledge across multiple categories and levels. Are you ready to play?</p>
          <button onClick={() => navigate('/quiz')}>Start Quiz</button>
        </div>
        <div className="hero-image">
          <img
            src="https://img.freepik.com/premium-vector/quiz-logo-quiz-time-label-with-question-mark_349999-2025.jpg"
            alt="Quiz Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
