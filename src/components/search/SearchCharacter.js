import React, { useState } from 'react';

const SearchCharacter = ({ handleSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="input-field">
      <input
        placeholder="Search"
        id="text"
        type="text"
        className="validate"
        value={term}
        onChange={handleChange}
      />
      <i className="material-icons search-icon">search</i>
    </div>
  );
};

export default SearchCharacter;
