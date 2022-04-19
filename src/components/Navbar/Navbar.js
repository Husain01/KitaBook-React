import React from 'react'
import './Navbar.css'
import logo from '../../assets/KITABOOK.png'
import { Link, useNavigate } from 'react-router-dom'
import { CartState } from '../../context/Context'

export const Navbar = () => {
  const navigate = useNavigate()
  const {state: {cart, wishlist},productDispatch, authState, authDispatch, dispatch} = CartState()
  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({
      type: "LOGOUT"
    })
    dispatch({
      type: "EMPTY"
    })
  }
  return (
<>
    <header className="navbar">
        <div className="logo">
            <Link to="/home">
          <img src={logo} alt="" />
            </Link>
        </div>
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="text" className="search-input" placeholder="Search" onChange={(e)=>{
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            })
          }}/>
        </div>
        <div className="nav-links">
          {authState.token?(
          <button className="btn btn-primary btn-login normal-shadow" onClick={logoutHandler}>Logout</button>
        ):(<Link to='/login'>
          <button className="btn btn-primary btn-login normal-shadow">Login</button>
        </Link>)}
          
          <div className="badge">
            <Link to="/wishlist">
            <button
              className="btn simple simple-primary btn-floating avatar sm normal-shadow"
            >
              <i className="far fa-heart"></i>
            </button>
            {wishlist && wishlist.length>0 && (<div className="badge-no dnd">{wishlist.length}</div>)}
            
          </Link>
          </div>
          <div className="badge">
            <Link to="/cart">
            <button
              className="btn simple simple-primary btn-floating avatar sm normal-shadow"
            >
              <i className="fas fa-cart-plus"></i>
            </button>{
              cart && cart.length>0 && (<div className="badge-no dnd">{cart.length}</div>)
            }
            
          </Link>
          </div>
        </div>
      </header>
      
      </>
      
  )
}

 