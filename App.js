import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [name, setName] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);

  const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8a2be2', '#ff1493'];

  const generateGradient = () => {
    const index1 = Math.floor(Math.random() * colors.length);
    const index2 = (index1 + 1) % colors.length;
    const color1 = colors[index1];
    const color2 = colors[index2];
    return `linear-gradient(to right, ${color1}, ${color2})`;
  };

  const changeBackground = () => {
    setBgColor(generateGradient());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCelebrate = () => {
    setShowCelebration(true);
    setTimeout(() => {
      setShowCelebration(false);
    }, 2000);
  };

  return (
    <div className="app" style={{ background: bgColor }}>
      <h1>Welcome to My Colorful App!</h1>
      <p>This background changes smoothly like a rainbow.</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleCelebrate}>Click here!</button>
      {showCelebration && <div className="celebration">🎉 Congratulations, {name}! 🎉</div>}
    </div>
  );
}

export default App;
