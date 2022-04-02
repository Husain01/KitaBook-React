import React from 'react'

const Login = () => {
  return (
    <main class="auth-container">
        <div class="auth-box normal-shadow">
          <h2 class="auth-title">Login</h2>
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
                Remember Me</label
              >
              <a href="#">Forgot your password &gt;</a>
            </div>
            <button class="btn btn-primary button-submit normal-shadow">Login</button>
            <a href="../auth/signup.html">Create new account &gt;</a>
          </div>
        </div>
      </main>
  )
}

export default Login