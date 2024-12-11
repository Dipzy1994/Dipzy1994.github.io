import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <Link to={result.path}>{result.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
