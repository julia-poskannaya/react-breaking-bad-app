import logo from '../../img/breaking-bad.svg';

const Header = () => {
  return (
    <nav className="teal darken-3">
      <div className="nav-wrapper container">
        <a href="logo" className="brand-logo">
          <img className="logo" src={logo} alt="logo"></img>
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
