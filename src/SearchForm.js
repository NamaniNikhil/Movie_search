import React from 'react';

function SearchForm({ searchTerm, onSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e)}
      />
      <button type="submit">Search</button>
    </form>
  );


}

export default SearchForm;
//Nikhil Namani