import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../components/App.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../Context/firebase-init';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setIsLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Incorrect Login Details');
    }
  };

  if (user) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src='/images/img-8.jpg' alt='Camels in the desert'></img>
        </div>
        <div className='sign-up__container'>
          <h2>Login</h2>
          <form className='sign-up__container' onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='example@email.com'
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='1234567890'
              required
            />
            <button className='btn-sign' type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Log in'}
            </button>
            {errorMessage && <div className="errors" >{errorMessage}</div>}
          </form>
        </div>
    </div>
    <p> Do not have an account? <Link to="/signup">Sign up here</Link>
      </p>
  </div>
  );
};

export default LoginForm;
