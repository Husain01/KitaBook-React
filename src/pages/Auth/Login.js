import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <main className="auth-container">
        <div className="auth-box normal-shadow">
          <h2 className="auth-title">Login</h2>
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
                Remember Me</label
              >
              <a href="#">Forgot your password &gt;</a>
            </div>
            <button className="btn btn-primary button-submit normal-shadow">Login</button>
            <Link to="/signup">Create new account &gt;</Link>
          </div>
        </div>
      </main>
  )
}

