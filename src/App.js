// App.js
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import PropertyList from './PropertyList';
import propertiesData from './properties.json'; // Import your JSON data

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchData) => {
    // Perform search logic using the searchData and update the searchResults state
    // For simplicity, you can filter the propertiesData array based on search criteria

    const filteredResults = propertiesData.filter((property) => {
      // Implement your filter logic here
      // Example: property.type === searchData.type && property.price >= searchData.minPrice
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Property Search App</h1>
      <SearchForm onSearch={handleSearch} />
      <PropertyList results={searchResults} />
    </div>
  );
};

export default App;
