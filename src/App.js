// src/App.js
import React, { useState } from 'react';
import SearchForm from './SearchForm';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const propertiesData = require('./properties.json');

  const handleSearch = (criteria) => {
    const results = propertiesData.properties.filter(property => {
      // Check if the property type matches the selected type or if the type is set to 'any'
      const matchesType = criteria.type === 'any' || property.type === criteria.type;
  
      // Check if the property price falls within the specified range (if minPrice and maxPrice are provided)
      const matchesPrice =
        (!criteria.minPrice || property.price >= criteria.minPrice) &&
        (!criteria.maxPrice || property.price <= criteria.maxPrice);
  
      // Check if the property bedrooms fall within the specified range (if minBedrooms and maxBedrooms are provided)
      const matchesBedrooms =
        (!criteria.minBedrooms || property.bedrooms >= criteria.minBedrooms) &&
        (!criteria.maxBedrooms || property.bedrooms <= criteria.maxBedrooms);
  
      // Check if the property dateAdded falls within the specified range (if startDate and endDate are provided)
      const matchesDateAdded =
        (!criteria.startDate || property.dateAdded >= criteria.startDate) &&
        (!criteria.endDate || property.dateAdded <= criteria.endDate);
  
      // Check if the property postcode starts with the specified postcode area
      const matchesPostcode = !criteria.postcodeArea || property.postcode.startsWith(criteria.postcodeArea);
  
      // Return true only if all criteria are met
      return matchesType || matchesPrice || matchesBedrooms || matchesDateAdded || matchesPostcode;
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
