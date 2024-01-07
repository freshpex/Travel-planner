import { useState, useEffect, useContext } from "react";
import CountryContext from '../Context/CountryContext';
import { useNavigate } from 'react-router-dom';
import HotelSort from '../Filter/HotelSort';
import HotelSearch from '../Filter/HotelSearch';
import './Hotel.css'
import PriceFilter from "../Filter/PriceFilter";

const Hotel = () => {
  const [hotels, setHotels] = useState(null);
  const [hotelsLoading, setHotelsLoading] = useState(false);
  const [hotelsError, setHotelsError] = useState(null);
  const { country } = useContext(CountryContext);
  const navigate = useNavigate();
  const [filteredHotels, setFilteredHotels] = useState(null);
  const [priceFilter, setPriceFilter] = useState({ min: '', max: '' });

  const handlePriceFilter = (min, max) => {
    setPriceFilter({ min, max });
  };

  const apikey = import.meta.env.VITE_REACT_APP_HOTEL_API_KEY;

  document.title = `Travel Planner - ${country}`;

  useEffect(() => {
    if (!country) {
      navigate('/dashboard');
    }
  }, [country, navigate]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getRegionId = async (country) => {
    const locationSearchUrl = `https://hotels4.p.rapidapi.com/locations/v3/search?q=${country}&locale=en_US&langid=1033&siteid=300000001`;

    try {
      const response = await fetch(locationSearchUrl, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apikey,
          "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        console.log(`Location search API error: ${response.status}`);
      }

      const result = await response.json();

      if (result.sr && result.sr.length > 0) {
        const regionId = result.sr[0].gaiaId;
        return regionId;
      } else {
        console.log(`No search results found for ${country}`);
      }
    } catch (error) {
      console.log(`Error fetching region ID: ${error.message}`);
    }
  };

  // Fetch hotels data
  useEffect(() => {
    const fetchHotels = async () => {
      setHotelsLoading(true);
      setHotelsError(null);

      try {
        const regionId = await getRegionId(country);
        const hotelsResponse = await fetch(
          "https://hotels4.p.rapidapi.com/properties/v2/list",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "X-RapidAPI-Key": apikey,
              "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
            },
            body: JSON.stringify({
              currency: "USD",
              eapid: 1,
              locale: "en_US",
              siteId: 300000001,
              destination: {
                regionId: regionId,
              },
              checkInDate: {
                day: 10,
                month: 10,
                year: 2022,
              },
              checkOutDate: {
                day: 15,
                month: 10,
                year: 2022,
              },
              rooms: [
                {
                  adults: 2,
                  children: [{ age: 5 }, { age: 7 }],
                },
              ],
              resultsStartingIndex: 0,
              resultsSize: 200,
              sort: "PRICE_LOW_TO_HIGH",
              filters: {
                price: { max: priceFilter.max || 5000, min: priceFilter.min || 100 },
              },
            }),
          }
        );

        if (hotelsResponse.ok) {
          const hotelsData = await hotelsResponse.json();
          setHotels(hotelsData.data.propertySearch.properties);
          console.log("Hotel", hotelsData)
          if (hotelsData.data.propertySearch.properties.length === 0) {
            throw new Error("No hotels found.");
          }
        } else {
          throw new Error(`Hotel API error: ${hotelsResponse.status}`);
        }

      } catch (error) {
        setHotelsError(error.message);
        console.error(error);
      } finally {
        setHotelsLoading(false);
      }
    };

    fetchHotels();
  }, [country, priceFilter.min, priceFilter.max, apikey, getRegionId]);

  const [sortOrder, setSortOrder] = useState('asc');
  const handleToggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleSearch = (filteredHotels) => {
    setFilteredHotels(filteredHotels);
  };

  return (
    <div className="page-container">
      <h2>Hotels</h2>
      <PriceFilter onFilter={handlePriceFilter} />
      {hotelsLoading && <p>Loading hotels in {country}...</p>}
      {hotelsError && <p className="error-message">There was an error getting the hotels: {hotelsError}</p>}

      <HotelSearch hotels={hotels || []} onSearch={handleSearch} />

      {filteredHotels && (
        <HotelSort
          items={filteredHotels}
          sortBy="name"
          sortOrder={sortOrder}
          onToggleSortOrder={handleToggleSortOrder}
        />
      )}

      {!filteredHotels && hotels && (
        <HotelSort
          items={hotels}
          sortBy="name"
          sortOrder={sortOrder}
          onToggleSortOrder={handleToggleSortOrder}
        />
      )}

      {filteredHotels &&
        filteredHotels.filter(hotel => {
          const price = parseFloat(hotel.price.options[0].formattedDisplayPrice.replace(/[^0-9.-]+/g,""));
          if (priceFilter.min && price < Number(priceFilter.min)) return false;
          if (priceFilter.max && price > Number(priceFilter.max)) return false;
          return true;
        }).map((hotel) => (
          <div className="key" key={hotel.id} style={{ width: "18rem" }}>
            <div className="top" src={hotel.image} />
            <div className="body">
              <div className="title">{hotel.name}</div>
              <div className="text">{hotel.address}</div>
              <div className="text">
                Price: {hotel.price.options[0].formattedDisplayPrice}
              </div>
              <div className="text">
                Review Score: {hotel.reviews.score}
              </div>
              <div className="text">
              </div>
            </div>
          </div>
        ))}     
    </div>
  );
};

export default Hotel;
