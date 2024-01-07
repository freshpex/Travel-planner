import { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import CountryContext from '../Context/CountryContext';
import { GlobalProvider } from '../Context/GlobalContext';
import './App.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  const [country, setCountry] = useState(localStorage.getItem('country') || "");

  useEffect(() => {
    localStorage.setItem('country', country);
  }, [country]);

  return (
    <div className='App'>
      <CountryContext.Provider value={{ country, setCountry }}>
        <GlobalProvider>
          <Router>
            <Navbar />
            <Footer />
          </Router>
        </GlobalProvider>
      </CountryContext.Provider>
    </div>
  );
};

export default App;
