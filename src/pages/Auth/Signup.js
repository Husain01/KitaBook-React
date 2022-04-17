import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartState } from '../../context/Context';
import './Auth.css';

export const Signup = () => {
  const navigate = useNavigate();
  const {authDispatch} = CartState();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkPasswordHandler = () => {
    if(user.password !== "" && (user.password !== user.confirmPassword)) {
      alert("Your confirm password does not match with your real password");
    }else{
      return true;
    }
  }

  const signupHandler =async (e) => {
    e.preventDefault();
    if(checkPasswordHandler()){
      try {
        const res = await axios.post("api/auth/signup", user);
        if(res.status === 201){
          localStorage.setItem("token", res.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(res.data.createdUser));
          authDispatch({
            type: "SIGNUP",
            payload: {
              user: res.data.createdUser,
              token: res.data.encodedToken
            }
          })
          navigate("/");
        } else if(res.status === 422){
          throw new Error("User already exists");
        } else if(res.status === 500){
          throw new Error("Server Error")
        }
      } catch (error) {
        alert(error)
      }
    }
  }
  return (
    <main className="auth-container">
        <div className="auth-box normal-shadow">
          <h2 className="auth-title">Sign Up</h2>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" placeholder="Enter email address here" id='email' name='email' value={user.email} onChange={changeHandler} required/>
            </div>
            <div className="form-group">
              <label htmlFor="pass">Password *</label>
              <input type="password" placeholder="Enter password" id='password' name='password' value={user.password} onChange={changeHandler} required />
            </div>
            <div className="form-group">
              <label htmlFor="pass">Confirm Password *</label>
              <input type="password" placeholder="Re-enter Password" id='confirm-password' name='confirmPassword' value={user.confirmPassword} onChange={changeHandler} required />
            </div>
            <div className="below-pass">
              <label for="Remember Me" className="remember-check">
                <input type="checkbox" name="Remember Me" id="" />
                <span className="checkbox"></span>
                I accept all Terms & Conditions</label
              >
            </div>
            <button className="btn btn-primary button-submit normal-shadow" onClick={signupHandler}>Sign Up</button>
            <Link to="/login">Already have an account &gt;</Link>
          </div>
        </div>
      </main>
  )
}

