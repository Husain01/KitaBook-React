import React from 'react';
import './Auth.css';

const Signup = () => {
  return (
    <main class="auth-container">
        <div class="auth-box normal-shadow">
          <h2 class="auth-title">Sign Up</h2>
          <div class="form">
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" placeholder="Enter email address here" />
            </div>
            <div class="form-group">
              <label for="pass">Password *</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <div class="below-pass">
              <label for="Remember Me" class="remember-check">
                <input type="checkbox" name="Remember Me" id="" />
                <span class="checkbox"></span>
                I accept all Terms & Conditions</label
              >
            </div>
            <button class="btn btn-primary button-submit normal-shadow">Sign Up</button>
            <a href="../auth/login.html">Already have an account &gt;</a>
          </div>
        </div>
      </main>
  )
}

export default Signup