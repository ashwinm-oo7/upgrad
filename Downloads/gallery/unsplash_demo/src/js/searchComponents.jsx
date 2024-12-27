// Get references to the search input and search button
import React, { useState } from 'react';
import axios from 'axios';
import './search.css';

function SearchComponent() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchValue) {
      // Define your Unsplash API endpoint
      const unsplashEndpoint = `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=16&client_id=765ZUTCQyCAVg7bi7rTEmgJOD2ow3coRYBTsvI-X6C8`;

      // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash access key
      const unsplashAccessKey = 'unsplash';

      // Make a GET request to Unsplash API
      axios
        .get(unsplashEndpoint, {
          headers: {
            Authorization: `Client-ID ${unsplashAccessKey}`,
          },
        })
        .then((response) => {
          if (response.data.results) {
            setSearchResults(response.data.results);
          }
        })
        .catch((error) => {
          console.error('Error fetching data from Unsplash:', error);
        });
    } else {
      alert('Please enter a valid search term.');
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button id='search-button' onClick={handleSearch}>Search</button>

      {/* Display search results */}
      <div className="search-results">
        {searchResults.map((result) => (
          <img
            key={result.id}
            src={result.urls.small}
            alt={result.description}
          />
        ))}
      </div>
    </div>
  );
}
console.log(SearchComponent());
export default SearchComponent;
