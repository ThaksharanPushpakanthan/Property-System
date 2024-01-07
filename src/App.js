// src/App.js
import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await fetch('/properties.json');
        console.log('Data fetched:', response);
        const data = await response.json();
        console.log('Data parsed:', data);
        setPropertiesData(data.properties);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (criteria) => {
    console.log('Handling search with criteria:', criteria);

    if (!propertiesData || propertiesData.length === 0) {
      console.error('Properties data not available');
      return;
    }

    const results = propertiesData.filter(property => {
      if (criteria.type === 'any' || property.type === criteria.type) {
        return true;
      }
      return false;
    });

    setSearchResults(results);
  };

  return (
    <div>
      <h1>Property Search</h1>
      {/* Add a section to display all properties */}
      <div>
        <h2>All Properties</h2>
        {propertiesData.map(property => (
          <div key={property.id}>
            {/* Render property details here */}
          </div>
        ))}
      </div>

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
