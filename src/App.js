// src/App.js
import React, { useState } from 'react';
import SearchForm from './SearchForm';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const propertiesData = require('./properties.json');

  const handleSearch = (criteria) => {
    const results = propertiesData.properties.filter(property => {
      if (criteria.type === 'any' || property.type === criteria.type) {
        return true; // Include the property if the type matches or 'any' is selected
      }
      return false; // Exclude the property if the type doesn't match
    });

    setSearchResults(results);
  };

  return (
    <div>
      <h1>Property Search</h1>
      <SearchForm onSearch={handleSearch} />

      <div>
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
