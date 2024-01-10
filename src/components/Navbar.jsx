import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage';
import Weather from './Weather';
import Hotel from './Hotel';
import Attraction from './Attraction';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProtectedRoute from '../Context/PrivateRoute';
import LoginForm from '../pages/LoginPage';
import Signup from '../pages/SignupPage';
import Logout from '../pages/Logout';
import ScrollToTop from './ScrollToTop';
import { useAuthState } from 'react-firebase-hooks/auth';  // Add this import
import auth from '../Context/firebase-init';  // Add this import

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user] = useAuthState(auth);  // Get the user's authentication status

  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRAVEL PLANNER <i className="fab fa-gripfire"></i>
          </Link>

          <div className='menu-icon' onClick={ handleClick }>
            <i className={ click ? 'fas fa-times' : 'fas fa-bars' }></i>
          </div>

          <ul className={ click ? 'nav-menu active': 'nav-menu' }>
            <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={ closeMobileMenu } >
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/weather' className='nav-links' onClick={ closeMobileMenu } >
                Weather
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/hotels' className='nav-links' onClick={ closeMobileMenu } >
                Hotels
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/attractions' className='nav-links' onClick={ closeMobileMenu } >
                Attractions
              </Link>
            </li>
            {user ? (
              <li className='nav-item'>
                <Link to='/logout' className='nav-links-mobile' onClick={ closeMobileMenu } >
                  Logout
                </Link>
              </li>
            ) : (
              <li className='nav-item'>
                <Link to='/login' className='nav-links-mobile' onClick={ closeMobileMenu } >
                  Login
                </Link>
              </li>
            )}
          </ul>
          {button && user && <Button buttonStyle='btn--outline'>Logout</Button>}
          {button && !user && <Button buttonStyle='btn--outline'>Login</Button>}
        </div>
      </nav>

    <ScrollToTop>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
            path="/login" 
            element={<LoginForm />} />
        <Route 
            path="/signup" 
            element={<Signup />} />
        <Route 
            path="/logout" 
            element={<Logout />} />
        <Route path="/dashboard" 
            element={<ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>} />
        <Route path="/weather" 
            element={<ProtectedRoute>
                    <Weather /> 
                </ProtectedRoute>} />
        <Route path="/hotels" 
            element={<ProtectedRoute>
                    <Hotel /> 
                </ProtectedRoute>} />
        <Route path="/attractions" 
            element={<ProtectedRoute>
                    <Attraction />
                </ProtectedRoute>} />
      </Routes>
    </ScrollToTop>
    </div>
  );
}

export default Navbar;
