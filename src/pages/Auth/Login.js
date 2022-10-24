import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartState } from "../../context/Context";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = CartState();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const guestUserHandler = (e) => {
    e.preventDefault();
    loginHandler( guestUser)
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginHandler = async ( user) => {
    
    if (user.email !== "" && user.password !== "") {
      try {
        const res = await axios.post("api/auth/login", user);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(res.data.foundUser));
          authDispatch({
            type: "LOGIN",
            payload: {
              user: res.data.foundUser,
              token: res.data.encodedToken,
            },
          });
          navigate(location?.state?.from?.pathname || "/");
        } else if (res.status === 404) {
          throw new Error("Email not found");
        } else if (res.status === 401) {
          console.log("wrong");
          throw new Error("Wrong Password");
        } else if (res.status === 500) {
          throw new Error("Server Error");
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Both the fields need to be entered");
    }
  };
  return (
    <main className="auth-container">
      <div className="auth-box normal-shadow">
        <h2 className="auth-title">Login</h2>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              placeholder="Enter email address here"
              id="email"
              name="email"
              value={user.email}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password *</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              value={user.password}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="below-pass">
            <label for="Remember Me" className="remember-check">
              <input type="checkbox" name="Remember Me" id="" />
              <span className="checkbox"></span>
              Remember Me
            </label>
            <a href="#">Forgot your password &gt;</a>
          </div>
          <button
            className="btn btn-primary button-submit normal-shadow"
            onClick={guestUserHandler}
          >
            Add Guest Credentials
          </button>
          <button
            className="btn btn-primary button-submit normal-shadow"
            onClick={() => loginHandler(user)}
          >
            Login
          </button>
          <Link to="/signup">Create new account &gt;</Link>
        </div>
      </div>
    </main>
  );
};
