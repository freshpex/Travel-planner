import { useState } from "react";

const PriceFilter = ({ onFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
  
    const handleFilter = () => {
      onFilter(minPrice, maxPrice);
    };
  
    return (
      <div>
        <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} placeholder="Min price" />
        <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} placeholder="Max price" />
        <button onClick={handleFilter}>Filter</button>
      </div>
    );
  };

  export default PriceFilter;