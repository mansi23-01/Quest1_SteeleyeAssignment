import React from 'react';

const Search = ({ searchText, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by Order ID"
      value={searchText}
      onChange={onChange}
    />
  );
};

export default Search;

