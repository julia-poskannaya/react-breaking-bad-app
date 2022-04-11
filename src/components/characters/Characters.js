import Character from '../character/Character';

const Characters = ({ chars }) => {
  const charList = chars.map((item) => {
      return <Character key={item.char_id} {...item} />;
    });
  return (
    <div className="chars">{chars.length ? charList : <h1>No results</h1>}</div>
  );
};

export default Characters;
