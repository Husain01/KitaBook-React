import React from 'react'
import './Navbar.css'
import logo from '../../assets/KITABOOK.png'

const Navbar = () => {
  return (
      <>
    <header class="navbar">
        <div class="logo">
          <a href="/index.html">
          <img src={logo} alt="" />
        </a>
        </div>
        <div class="search">
          <i class="fas fa-search"></i>
          <input type="text" class="search-input" placeholder="Search" />
        </div>
        <div class="nav-links">
          <a href="/pages/auth/login.html">
          <button class="btn btn-primary btn-login normal-shadow">Login</button>
        </a>
          <div class="badge">
            <a href="/pages/wishlist/wishlist.html">
            <button
              class="btn simple simple-primary btn-floating avatar sm normal-shadow"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="badge-no dnd">9+</div>
          </a>
          </div>
          <div class="badge">
            <a href="/pages/cart/cart.html">
            <button
              class="btn simple simple-primary btn-floating avatar sm normal-shadow"
            >
              <i class="fas fa-cart-plus"></i>
            </button>
            <div class="badge-no dnd">9+</div>
          </a>
          </div>
        </div>
      </header>
      
      </>
      
  )
}

export default Navbar