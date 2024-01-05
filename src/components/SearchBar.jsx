import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import CountryContext from '../Context/CountryContext';

const SearchBar = () => {
  const { setCountry } = useContext(CountryContext);
  const [inputCountry, setInputCountry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCountry) {
      setCountry(inputCountry);
      navigate('/weather');
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <h1 className="search-bar-title">Enter a country name</h1>
      <input
        type="text"
        className="search-bar-input"
        placeholder="Enter a country"
        value={inputCountry} 
        onChange={(e) => setInputCountry(e.target.value)}
      />
      <button type="submit" className="search-bar-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
