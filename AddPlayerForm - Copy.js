import React, { useState } from 'react';

const AddPlayerForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('general');
  const [difficulty, setDifficulty] = useState('easy');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, category, difficulty };
    localStorage.setItem('quiz-player', JSON.stringify(data));
    onSubmit(data);
  };

  const isDisabled = !name || !category || !difficulty;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Player Details</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
      </select>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button type="submit" disabled={isDisabled}>Start</button>
    </form>
  );
};

export default AddPlayerForm;
