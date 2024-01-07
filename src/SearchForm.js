// src/SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({ type: 'any' });

  const handleChange = (e) => {
    setSearchCriteria({ type: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
