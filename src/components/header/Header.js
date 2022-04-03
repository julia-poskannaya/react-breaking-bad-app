const Header = () => {
  return (
    <nav className="teal darken-4">
      <div className="nav-wrapper container">
        <a href="logo" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="characters">Characters</a>
          </li>
          <li>
            <a href="episodes">Episodes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
