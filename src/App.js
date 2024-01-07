// src/App.js
import React, { useState } from 'react';
import SearchForm from './SearchForm';
const propertiesData = require('./data.json');

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (criteria) => {
    const results = propertiesData.properties.filter(property => {
    // Implement your search criteria logic here
    // For simplicity, let's just return all properties for now
    return property.price >= (criteria.minPrice || 0);
  });

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
