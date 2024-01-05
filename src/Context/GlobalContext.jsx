import React, { useState, useEffect } from 'react';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <GlobalContext.Provider value={{ token, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
