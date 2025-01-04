import './SearchBox.css';

function SearchBox() {
  return (
    <div className="search-box">
      <h2>Search properties for sale and to rent</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="e.g. Bath, NW3, or Leeds station"
          className="search-input"
        />
        <div className="search-buttons">
          <button className="search-btn for-sale">For sale</button>
          <button className="search-btn to-rent">To rent</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBox