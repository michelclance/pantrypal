import { useState } from 'react';
import Image from 'next/image';
import LoginSignupForm from '../components/newlogin';

const ProfileButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [showLogin, setShowLogin] = useState(false);


  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <div className="flex items-center">
      {isLoggedIn ? (
        <div className="flex items-center">
          <Image
            src={userPhoto}
            alt={userName}
            width={30}
            height={30}
            className="inline-block h-9 w-9 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{userName}</p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
          </div>
        </div>
      ) : (
        <>
          <button onClick={handleShowLogin}  className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">Log-in</span>
            </button>
            {showLogin && (
              <LoginSignupForm
                onLogin={handleLogin}
                onLoginSuccess={function (username: string): void {
                  throw new Error('Function not implemented.');
                }}
                onSignUpSuccess={function (username: string): void {
                  throw new Error('Function not implemented.');
                }}
              />
            )}
        </>
      )}
    </div>
  );
};

export default ProfileButton;
