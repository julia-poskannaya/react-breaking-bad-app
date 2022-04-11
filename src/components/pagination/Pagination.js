const Pagination = ({
  pageCount,
  goToTheNextPage,
  goToThePrevPage,
  pageNumber
}) => {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <ul className="paginate">
        <li onClick={() => goToThePrevPage()}>
          <i className="material-icons">chevron_left</i>
        </li>
        {pages.map((item) => {
          return (
            <li key={item} className= {(pageNumber + 1) === item ? 'active' : ''}>
              {item}
            </li>
          );
        })}
        <li onClick={() => goToTheNextPage()}>
          <i className="material-icons">chevron_right</i>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
