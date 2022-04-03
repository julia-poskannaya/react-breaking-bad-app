const Character = ({ name, birthday, status, img }) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={img} alt="img"></img>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {name}
        </span>
        <div className="char-description">
          <p>{birthday}</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Character;
