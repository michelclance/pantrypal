import { useState } from 'react'
import axios from 'axios';

interface LoginSignupFormProps {
  onLoginSuccess: (username: string) => void;
  onSignUpSuccess: (username: string) => void;
  onLogin: () => void;
}



const LoginSignupForm: React.FC<LoginSignupFormProps> = ({ onLoginSuccess, onSignUpSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Make API call to authenticate user or sign up new user
      if (isSignUpMode) {
        const isSignedUp = await signUpUser(username, password, confirmPassword, email );
        if (isSignedUp) {
          onSignUpSuccess(username);
          setUsername('');
          setPassword('');
          setConfirmPassword('');
          setEmail('');
          setErrorMessage('');
          setIsSignUpMode(false);
        } else {
          setErrorMessage('Could not sign up user');
        }
      } else {
        const isAuthenticated = await authenticateUser(username, password);
        if (isAuthenticated) {
          onLoginSuccess(username);
          setUsername('');
          setPassword('');
          setErrorMessage('');
        } else {
          setErrorMessage('Invalid username or password');
        }

      }
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  const authenticateUser = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post('/api/login', { username, password });
      return response.status === 200;
    } catch (error) {
      throw new Error('Could not authenticate user');
    }
  };

  const signUpUser = async (username: string, password: string, confirmPassword: string, email: string): Promise<boolean> => {
    try {
      const response = await axios.post('/api/signup', { username, password, confirmPassword, email });
      return response.status === 200;
    } catch (error) {
      throw new Error('Could not sign up user');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <div className="login-signup-form">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
          <input

            type="text"
            className="form-control mb-4 p-2 border border-gray-300 rounded w-full"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input

            type="password"
            className="form-control mb-4 p-2 border border-gray-300 rounded w-full"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {isSignUpMode && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input

              type="password" 
              className="form-control mb-4 p-2 border border-gray-300 rounded w-full"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
        )}
        {isSignUpMode && (
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input

              type="email"
              className="form-control mb-4 p-2 border border-gray-300 rounded w-full"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="form-buttons">
        <button type="submit" className="form-submit-btn">
          {isSignUpMode ? 'Create Account' : 'Login'}
        </button>
        <button
          type="button"
          className="form-toggle-btn"
          onClick={() => setIsSignUpMode(!isSignUpMode)}
        >
          {isSignUpMode ? 'Already have an account? Login' : 'Don\'t have an account? Create one'}
        </button>
      </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default LoginSignupForm;





