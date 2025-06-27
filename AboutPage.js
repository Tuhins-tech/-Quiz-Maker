import React from 'react';

const AboutPage = () => {
  return (
    <div className="container">
      <h2>About This App</h2>
      <p>This quiz app is built using React, React Router, and LocalStorage. It includes score tracking, a timer, and performance analysis.</p>
      <p>Made for the KTJ Web Dev + AI Workshop.</p>
      <p>I learned about state management, local persistence, and routing in React.</p>
      <img
        src="https://i.imgflip.com/30b1gx.jpg"
        alt="meme"
        style={{ width: '300px', marginTop: '1rem' }}
      />
    </div>
  );
};

export default AboutPage;
