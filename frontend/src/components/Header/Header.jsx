import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import photo from '../Assests/photos/2.jpg';
import Navbar from '../NavBar/NavBar';

const Header = () => {
    const navigate = useNavigate();
    const handleSignin = () => {
        navigate('/Signin');
      };
      const handleSignup = () => {
        navigate('/Signup');
      };

  return (
    <>

      <div className="im-container">
        <Navbar />
        <img src={photo} alt="home" className="im" />
        <div className="image-content">
          <h2>Hi! Welcome to App</h2>
          <div className="buttons">
            <button onClick={handleSignup}>Signup</button>
            <button onClick={handleSignin}>Signin</button>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Header;
