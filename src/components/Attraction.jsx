import { useState, useEffect, useContext } from 'react';
import CountryContext from '../Context/CountryContext';
import { useNavigate } from 'react-router-dom';
import AttractionSort from '../Filter/AttractionSort';
import AttractionSearch from '../Filter/AttractionSearch';
import GoogleMap from '../Filter/GoogleMap';
import './Attraction.css'

const Attraction = () => {
  const [attractions, setAttractions] = useState(null);
  const [attractionsLoading, setAttractionsLoading] = useState(false);
  const [attractionsError, setAttractionsError] = useState(null);
  const { country } = useContext(CountryContext);
  const navigate = useNavigate();
  const [filteredAttractions, setFilteredAttractions] = useState(null);
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const auth = 'fsq3gQf0Sj0C+60Y1WjGjD+3WyiTn47O4F8rDIZYndDk+v4=';

  const handleSearch = (filteredAttractions) => {
    setFilteredAttractions(filteredAttractions);
  };

  document.title = `Travel Planner - ${country}`;

  useEffect(() => {
    if (!country) {
      navigate('/dashboard');
    }
  }, [country, navigate]);

  // Fetch attractions data
  useEffect(() => {
    const fetchAttractions = async () => {
      setAttractionsLoading(true);
      setAttractionsError(null);

      try {
        const attractionsResponse = await fetch(
          `https://api.foursquare.com/v3/places/search?query=attractions&near=${country}&open_now=true&sort=DISTANCE`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: auth,
            },
          }
        );

        if (attractionsResponse.ok) {
          const attractionsData = await attractionsResponse.json();
          setAttractions(attractionsData.results);
        } else {
          console.log(`Foursquare API error: ${attractionsResponse.status}`);
        }
      } catch (error) {
        setAttractionsError(error.message);
        console.error(error);
      } finally {
        setAttractionsLoading(false);
      }
    };

    fetchAttractions();
  }, [country]);

  const [sortOrder, setSortOrder] = useState('asc');
  const handleToggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleMarkerClick = (attraction) => {
    setSelectedAttraction(attraction);
  };

  return (
    <div className="page-container">
      <h2>Tourist Centers</h2>
      {attractionsLoading && <p>Loading Tourist Centers in {country}...</p>}
      {attractionsError && (
        <p className="error-message">There was an error getting the Tourist Centers: {attractionsError}</p>
      )}

    {attractions && (
            <div style={{ height: '400px', width: '100%' }}>
              <GoogleMap
                attractions={attractions}
                selectedAttraction={selectedAttraction}
                onMarkerClick={handleMarkerClick}
              />
            </div>
          )}

      <AttractionSearch attractions={attractions || []} onSearch={handleSearch} />

      {filteredAttractions && (
        <>
          <AttractionSort
            items={filteredAttractions}
            sortBy="name"
            sortOrder={sortOrder}
            onToggleSortOrder={handleToggleSortOrder}
          />
        </>
      )}

      {!filteredAttractions && attractions && (
        <>
          <AttractionSort
            items={attractions}
            sortBy="name"
            sortOrder={sortOrder}
            onToggleSortOrder={handleToggleSortOrder}
            onMarkerClick={handleMarkerClick}
          />
        </>
      )}
    </div>
  );
};

export default Attraction;
