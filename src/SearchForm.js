// src/SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    startDate: '',
    endDate: '',
    postcodeArea: '',
  });

  const handleChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the search criteria to the parent component
    onSearch(searchCriteria);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Property Type:
        <select name="type" value={searchCriteria.type} onChange={handleChange}>
          <option value="any">Any</option>
          <option value="house">House</option>
          <option value="flat">Flat</option>
        </select>
      </label>

      {/* Add other input fields for price, bedrooms, date, postcode, etc. */}

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
