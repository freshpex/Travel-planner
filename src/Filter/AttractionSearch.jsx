import { useState } from 'react';

const AttractionSearch = ({ attractions, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredAttractions = attractions.filter((attraction) =>
      attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredAttractions);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default AttractionSearch;
