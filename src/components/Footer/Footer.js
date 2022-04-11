import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer class="footer">
          <div class="copyright">
            <span>&copy;</span>
            <span>KITABOOK</span>
          </div>
          <div class="footer-icons">
            <div class="badge">
              <a href="https://github.com/Husain01">
              <button
                class="btn simple simple-primary btn-floating avatar sm normal-shadow"
              >
              <i class="fab fa-github"></i>
              </button>
            </a>
            </div>
            <div class="badge">
              <a href="https://twitter.com/itswhoissane">
              <button
                class="btn simple simple-primary btn-floating avatar sm normal-shadow"
              >
              <i class="fab fa-twitter"></i>
              </button>
            </a>
            </div>
            <div class="badge">
              <a href="https://www.linkedin.com/in/hussain-bhagat/">
              <button
                class="btn simple simple-primary btn-floating avatar sm normal-shadow"
              >
              <i class="fab fa-linkedin"></i>
              </button>
            </a>
            </div>
          </div>
          <div class="made-by">
            <h6>Designed and &lt;&#47;&gt; by Husain Bhagat</h6>
          </div>
        </footer>
  )
}
