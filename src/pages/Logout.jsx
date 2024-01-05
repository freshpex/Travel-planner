import  { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { setToken } = useContext(GlobalContext);
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <button onClick={logout}>Log out</button>
  );
};

export default Logout;
