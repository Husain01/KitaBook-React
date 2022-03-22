import React from 'react';
import './CartCard.css'

const CartCard = () => {
  return (
    <div class="card card-ecom card-ecom-horizontal normal-shadow">
    <div
      class="product-img product-img-fill product-img-horizontal"
    >
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SY344_BO1,204,203,200_.jpg"
        alt=""
      />
    </div>
    <div class="card-footer card-footer-hr">
      <div class="product-content product-content-hr">
        <div class="product-header">
          <h3 class="product-title product-title-hr">
            Do Epic Shit
          </h3>
          <button
            class="wishlist wishlist-horizontal normal-shadow"
          >
            <i class="far fa-heart"></i>
          </button>
        </div>
        <div class="card-badge card-badge-hr">New</div>
        <p class="product-desc product-desc-hr">
          By Ankur Warikoo
        </p>
      </div>
      <div class="btn-footer">
        <span class="price">$39.99</span>
        <button class="cart cart-hr normal-inset-shadow">
          <i class="fas fa-cart-plus"></i>Added to Cart
        </button>
      </div>
    </div>
  </div>
  )
}

export default CartCard