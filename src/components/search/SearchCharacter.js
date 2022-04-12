import React, { useState } from 'react';

const SearchCharacter = ({ getName }) => {
  const [term, setTerm] = useState('');

  const handleChange = (n) => {
    setTerm(n);
    getName(n)
  };
  
  return (
    <div className="input-field">
      <input
        placeholder="Search"
        id="text"
        type="text"
        className="validate"
        value={term}
        onChange={(e) => handleChange(e.target.value)}
      />
      <i className="material-icons search-icon">
        search
      </i>
    </div>
  );
};

export default SearchCharacter;
