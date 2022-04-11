import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
          <div className="copyright">
            <span>&copy;</span>
            <span>KITABOOK</span>
          </div>
          <div className="footer-icons">
            <div className="badge">
              <a href="https://github.com/Husain01">
              <button
                className="btn simple simple-primary btn-floating avatar sm normal-shadow"
              >
              <i className="fab fa-github"></i>
              </button>
            </a>
            </div>
            <div className="badge">
              <a href="https://twitter.com/itswhoissane">
              <button
                className="btn simple simple-primary btn-floating avatar sm normal-shadow"
              >
              <i className="fab fa-twitter"></i>
              </button>
            </a>
            </div>
            <div className="badge">
              <a href="https://www.linkedin.com/in/hussain-bhagat/">
              <button
                className="btn simple simple-primary btn-floating avatar sm normal-shadow"
              >
              <i className="fab fa-linkedin"></i>
              </button>
            </a>
            </div>
          </div>
          <div className="made-by">
            <h6>Designed and &lt;&#47;&gt; by Husain Bhagat</h6>
          </div>
        </footer>
  )
}
