import React,{useState} from 'react';
import './Signin.css';
import 'boxicons/css/boxicons.min.css';
import axios from 'axios';
import Navbar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userEmail: "",
    userPassword: "",
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

  };
  axios.defaults.withCredentails = true;
  const login = async() => {
    try {
      const response = await axios.post("frame-api-five.vercel.app/user/login", data);
      if (response.data.message === "login successfull") {
        alert("login Successfull");
        navigate("/connect")
      }
      else {
        alert("Login failed")
      }
      
    } catch (error) {
      alert("login Failed", error);
      console.log(error)
    }
  }
  return (
    <div className="login-form">
      <Navbar />
      <h1 className="login-form__title">Login</h1>
      <form className="login-form__form">
        <div className="login-form__input-box">
          <input type="text" placeholder="Username" required className="login-form__input" name="userEmail"
          value={data.userEmail}
          onChange={handleChange}/>
          <i className='bx bxs-user login-form__icon'></i>
        </div>

        <div className="login-form__input-box">
          <input type="password" placeholder="Password" required className="login-form__input" name="userPassword"
          value={data.userPassword}
          onChange={handleChange}/>
          <i className='bx bxs-lock-alt login-form__icon'></i>
        </div>

        <div className="login-form__remember-forgot">
          <label className="login-form__checkbox-label">
            <input type="checkbox" required className="login-form__checkbox"/>Remember Me
          </label>
          <a href="#" className="login-form__forgot-link">Forgot Password</a>
        </div>

        <button type="submit" className="login-form__btn" onClick={login}>Login</button>

        <div className="login-form__register-link">
          <p>Don't have an account? <a href="/signup" className="login-form__register-link-anchor">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
