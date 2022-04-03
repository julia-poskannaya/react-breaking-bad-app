import React, { useState } from 'react';

const SearchCharacter = ({ handleSearch, handleResetSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && term) {
      handleSearch(term);
    }
  };

  const handleClick = () => {
    if (term) {
      handleSearch(term);
    }
  };

  const handleClear = () => {
    setTerm('');
    handleResetSearch();
  };
  
  return (
    <div className="input-field col s12">
      <input
        placeholder="Search"
        id="text"
        type="text"
        className="validate"
        value={term}
        onChange={handleChange}
        onKeyDown={handleKey}
      />
      <i className="material-icons btn-search" onClick={handleClick}>
        search
      </i>
      <i className="material-icons btn-search clear" onClick={handleClear}>
        clear
      </i>
    </div>
  );
};

export default SearchCharacter;
