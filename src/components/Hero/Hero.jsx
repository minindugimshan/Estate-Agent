
import SearchBox from '../SearchBox/SearchBox';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight">believe</span> in finding it
        </h1>
        <p>with the SL largest choice of homes</p>
        <SearchBox />
      </div>
    </div>
  )
}

export default Hero