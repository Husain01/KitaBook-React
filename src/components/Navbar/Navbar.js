import React from 'react'
import './Navbar.css'
import logo from '../../assets/KITABOOK.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
    <header class="navbar">
        <div class="logo">
            <Link to="/home">
          <img src={logo} alt="" />
            </Link>
        </div>
        <div class="search">
          <i class="fas fa-search"></i>
          <input type="text" class="search-input" placeholder="Search" />
        </div>
        <div class="nav-links">
          <Link to='/login'>
          <button class="btn btn-primary btn-login normal-shadow">Login</button>
        </Link>
          <div class="badge">
            <Link to="/wishlist">
            <button
              class="btn simple simple-primary btn-floating avatar sm normal-shadow"
            >
              <i class="far fa-heart"></i>
            </button>
            <div class="badge-no dnd">9+</div>
          </Link>
          </div>
          <div class="badge">
            <Link to="/cart">
            <button
              class="btn simple simple-primary btn-floating avatar sm normal-shadow"
            >
              <i class="fas fa-cart-plus"></i>
            </button>
            <div class="badge-no dnd">9+</div>
          </Link>
          </div>
        </div>
      </header>
      
      </>
      
  )
}

export default Navbar