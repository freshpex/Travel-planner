import { useEffect, useContext } from 'react';
import GlobalContext from './GlobalContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return token ? children : null;
};

export default ProtectedRoute;
