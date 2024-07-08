import './Regsiter.css';
import 'boxicons/css/boxicons.min.css';
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../NavBar/NavBar';

const RegisterForm = () => {
  const [data, setData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhonenumber: ""
  })
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

  };

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!data.userName) {
      valid = false;
      errors['userName'] = 'Username is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.userEmail || !emailPattern.test(data.userEmail)) {
      valid = false;
      errors['email'] = 'Valid email is required';
    }

    if (!data.userPassword || data.userPassword.length < 6) {
      valid = false;
      errors['password'] = 'Password must be at least 6 characters';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!data.userPhonenumber || !phonePattern.test(data.userPhonenumber)) {
      valid = false;
      errors['phone'] = 'Valid 10-digit phone number is required';
    }

    setErrors(errors);
    return valid;
  };

  

  const register = async(e) => {
    console.log(data);
    e.preventDefault();
      if (validate()) {
    try {
      
        const response = await axios.post("https://frame-api-five.vercel.app/user/register", data);
        if (response.data.message = "User added Successfull") {
          alert("Registeration Successfull");
        } else {
          alert("Registeration Failed");
        }
        
        
      
    } catch (error) {
        alert("Registeration Failed", error);
        }
        }
      else {
        
      }
    
  }

  return (
    <div className="register-form">
      <Navbar />
      <div className="register-form__title">Register</div>
      <div className="register-form__input-box">
        <div className="register-form__input-wrapper">
        <input
          type="text"
          className="register-form__input"
          placeholder="Username"
          name="userName"
          value={data.userName}
          onChange={handleChange}
          required
        />
        <i className='bx bxs-user register-form__icon'></i></div>
          {errors.userName && <div className="register-form__error">{errors.userName}</div>}
      </div>
      <div className="register-form__input-box">
        <div className="register-form__input-wrapper">
        <input
          type="email"
          className="register-form__input"
          placeholder="Email Id"
          name="userEmail"
          value={data.userEmail}
          onChange={handleChange}
          required
        />
        <i className='bx bxs-envelope register-form__icon'></i></div>
        {errors.email && <div className="register-form__error">{errors.email}</div>}
      </div>
      <div className="register-form__input-box">
        <div className="register-form__input-wrapper">
        <input
          type="password"
          className="register-form__input"
          placeholder="Password"
          name="userPassword"
          value={data.userPassword}
          onChange={handleChange}
          required
        />
        <i className='bx bxs-lock-alt register-form__icon'></i></div>
          {errors.password && <div className="register-form__error">{errors.password}</div>}
          
      </div>
      <div className="register-form__input-box">
        <div className="register-form__input-wrapper">
        <input
          type="text"
          className="register-form__input"
          placeholder="Phone number"
          name="userPhonenumber"
          value={data.userPhonenumber}
          onChange={handleChange}
        
        />
        <i className='bx bxs-phone register-form__icon'></i></div>
          {errors.phone && <div className="register-form__error">{errors.phone}</div>}
          
      </div>
      <div className="register-form__btn-container">
        <button className="register-form__btn" onClick={register} >Register</button>
      </div>
    </div>
  );
};

export default RegisterForm;
