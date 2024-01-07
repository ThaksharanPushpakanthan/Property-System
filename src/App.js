// src/App.js
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import propertiesData from './properties.json';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (criteria) => {
    // Implement property search logic based on criteria
    // Set the search results in the state
    // For simplicity, let's assume searching logic here
    setSearchResults(propertiesData.properties);
  };

  return (
    <div>
      <h1>Property Search</h1>
      <SearchForm onSearch={handleSearch} />
      <div>
        {searchResults.map(property => (
          <div key={property.id}>
            <p>Type: {property.type}</p>
            <p>Price: {property.price}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Date Added: {property.dateAdded}</p>
            <p>Postcode: {property.postcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
