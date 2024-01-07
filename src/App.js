// src/App.js
import React, { useState } from 'react';
import SearchForm from './SearchForm';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const propertiesData = require('./properties.json');

  const handleSearch = (criteria) => {
    // Implement property search logic based on type
    const results = propertiesData.properties.filter(property => {
      return criteria.type === 'any' || property.type === criteria.type;
    });

    setSearchResults(results);
  };

  return (
    <div>
      <h1>Property Search</h1>
      <SearchForm onSearch={handleSearch} />
      <div>
        {/* Display search results here */}
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          searchResults.map(property => (
            <div key={property.id}>
              <p>Type: {property.type}</p>
              <p>Price: {property.price}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Date Added: {property.dateAdded}</p>
              <p>Postcode: {property.postcode}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
