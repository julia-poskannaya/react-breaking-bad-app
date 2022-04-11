import React, { useState, useEffect } from 'react';
import Characters from '../characters/Characters';
import api from '../../service/service';
import Preloader from '../preloader/Preloader';
import SearchCharacter from '../search/SearchCharacter';
import Pagination from '../pagination/Pagination';

const Main = () => {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const limit = 9;
  const offset = pageNumber * limit;
  const pageCount = Math.ceil(62 / limit);

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
    api.getChars(limit, offset).then((data) => {
      setChars(data);
      setLoading(false);
    });
  };

  const goToTheNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const goToThePrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    api.getChars(limit, offset).then((data) => {
      setChars(data);
      setLoading(false);
    });
  }, [offset]);

  return (
    <main className="container content">
      <SearchCharacter
        handleSearch={handleSearch}
        handleResetSearch={handleResetSearch}
      />
      {loading ? <Preloader /> : <Characters chars={chars} />}
      <Pagination
        pageCount={pageCount}
        limit={limit}
        goToTheNextPage={goToTheNextPage}
        goToThePrevPage={goToThePrevPage}
        pageNumber={pageNumber}
      />
    </main>
  );
};

export default Main;
