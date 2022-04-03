import React, { useState, useEffect } from 'react';
import Characters from '../characters/Characters';
import api from '../../service/service';
import Preloader from '../preloader/Preloader';
import SearchCharacter from '../search/SearchCharacter';

const Main = () => {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (name) => {
    setLoading(true);

    api
      .searchChar(name)
      .then((response) => {
        setChars(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(`Error: ${error}`);
      });
  };

  const handleResetSearch = () => {
    api.getChars().then((data) => {
      setChars(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    api.getChars().then((data) => {
      setChars(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="container content">
      <SearchCharacter
        handleSearch={handleSearch}
        handleResetSearch={handleResetSearch}
      />
      {loading ? <Preloader /> : <Characters chars={chars} />}
    </main>
  );
};

export default Main;
