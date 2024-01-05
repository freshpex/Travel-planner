import { useState, useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const { setToken } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const response = await fetch('https://freshpex-auth-server.onrender.com/session', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    setIsLoading(false);

    if (response.ok) {
      const { token } = await response.json();
      setToken(token);
      navigate('/dashboard');
    } else {
      setErrorMessage('Incorrect Login Details'); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Log in'}
      </button>
      {errorMessage && <div className="errors" >{errorMessage}</div>}
    </form>
  );
};

export default LoginForm;
