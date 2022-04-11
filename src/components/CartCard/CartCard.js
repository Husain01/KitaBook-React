import React from 'react';
import './CartCard.css'

export const CartCard = () => {
  return (
    <div className="card card-ecom card-ecom-horizontal normal-shadow">
    <div
      className="product-img product-img-fill product-img-horizontal"
    >
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SY344_BO1,204,203,200_.jpg"
        alt=""
      />
    </div>
    <div className="card-footer card-footer-hr">
      <div className="product-content product-content-hr">
        <div className="product-header">
          <h3 className="product-title product-title-hr">
            Do Epic Shit
          </h3>
          <button
            className="wishlist wishlist-horizontal normal-shadow"
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
        <div className="card-badge card-badge-hr">New</div>
        <p className="product-desc product-desc-hr">
          By Ankur Warikoo
        </p>
      </div>
      <div className="btn-footer">
        <span className="price">$39.99</span>
        <button className="cart cart-hr normal-inset-shadow">
          <i className="fas fa-cart-plus"></i>Added to Cart
        </button>
      </div>
    </div>
  </div>
  )
}

