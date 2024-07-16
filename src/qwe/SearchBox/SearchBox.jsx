import s from './SearchBox.module.css';

const SearchBox = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={s.container}>
      <label className={s.label}>
        <span className={s.span}>Find contacts by name</span>
        <input className={s.input} type='text' onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;
