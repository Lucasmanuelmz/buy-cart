import { useState, useEffect } from 'react';
import './style.css';

const Slider = () => {
  const texts = [
    "First time visiting us?",
    "We have unbeatable offers for you!",
    "Enjoy now with 90% off.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="slider-container">
      <div className="text-slider">{texts[currentTextIndex]}</div>
    </div>
  );
};

export default Slider;
