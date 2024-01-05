// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import CountryContext from '../Context/CountryContext';
import { GlobalProvider } from '../Context/GlobalContext';
import './App.css'
// import Navbar from "./Navbar";
import Hero from './hero';
import Section from './Section'
import Category from './Category'
import Destination from './Destination'
import BookCard from './BookCard'
import Testimonials from './Testimonials'
import CompanyCarousel from './Companycarousel'
import Subscribe from './Subscribe'
import Footer from './Footer'
import TripStep from './TripStep'

const App = () => {
  const [country, setCountry] = useState(localStorage.getItem('country') || "");

  useEffect(() => {
    localStorage.setItem('country', country);
  }, [country]);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      <GlobalProvider>
        <Router>
          {/* <Navbar /> */}
          <Hero />
          <Section />
          <Category />
          <Destination />
          <BookCard />
          <Testimonials />
          <CompanyCarousel />
          <Subscribe />
          <Footer />
          <TripStep />
        </Router>
      </GlobalProvider>
    </CountryContext.Provider>
  );
};

export default App;
