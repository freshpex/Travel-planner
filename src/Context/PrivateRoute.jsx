import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase-init'; 
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return user ? children : null;
};

export default ProtectedRoute;
