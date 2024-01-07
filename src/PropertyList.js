// PropertyList.js
import React from 'react';

const PropertyList = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((property, index) => (
          <li key={index}>
            {/* Display property details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
