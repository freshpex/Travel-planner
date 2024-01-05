import { useState } from 'react';

const HotelSearch = ({ hotels, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredHotels = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredHotels);
  };

  return (
    <div className="hotel-search">
      <input
        type="text"
        placeholder="Search by hotel name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default HotelSearch;
