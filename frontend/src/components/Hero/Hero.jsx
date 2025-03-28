
import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger visibility on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before showing the content

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`hero ${isVisible ? 'show' : ''}`}>
      <div className={`hero-content ${isVisible ? 'show' : ''}`}>
        <h1>
          <span className="highlight">Home</span> Starts Here
        </h1>
        <p className={isVisible ? 'show' : ''}>with the SL largest choice of homes</p>
        {/* Ensure SearchBox appears with animation */}
        <div className={`search-box-wrapper ${isVisible ? 'show' : ''}`}>
          <SearchBox />
        </div>
      </div>
    </div>
  );
}

export default Hero;



