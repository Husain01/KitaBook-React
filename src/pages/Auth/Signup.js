import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export const Signup = () => {
  return (
    <main className="auth-container">
        <div className="auth-box normal-shadow">
          <h2 className="auth-title">Sign Up</h2>
          <div className="form">
            <div className="form-group">
              <label for="email">Email *</label>
              <input type="email" placeholder="Enter email address here" />
            </div>
            <div className="form-group">
              <label for="pass">Password *</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <div className="below-pass">
              <label for="Remember Me" className="remember-check">
                <input type="checkbox" name="Remember Me" id="" />
                <span className="checkbox"></span>
                I accept all Terms & Conditions</label
              >
            </div>
            <button className="btn btn-primary button-submit normal-shadow">Sign Up</button>
            <Link to="/login">Already have an account &gt;</Link>
          </div>
        </div>
      </main>
  )
}

