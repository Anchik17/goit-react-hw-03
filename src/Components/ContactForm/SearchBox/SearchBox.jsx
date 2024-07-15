import { useId } from 'react';

const SearchBox = ({ search, onSearch }) => {
  const searchId = useId();
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type='text'
        name='search'
        id={searchId}
        value={search}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default SearchBox;
