import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div class="content-container">
        <main class="main-content">
          <h2 class="cart-heading">My Cart</h2>
          <div class="cart-info">
            <div class="cart-items">
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
              <div class="card card-ecom card-ecom-horizontal normal-shadow">
                <div
                  class="product-img product-img-fill product-img-horizontal"
                >
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    alt=""
                  />
                </div>
                <div class="card-footer card-footer-hr">
                  <div class="product-content product-content-hr">
                    <div class="product-header">
                      <h3 class="product-title product-title-hr">
                        Atomic Habits
                      </h3>
                      <button
                        class="wishlist wishlist-horizontal normal-shadow"
                      >
                        <i class="far fa-heart"></i>
                      </button>
                    </div>
                    <div class="card-badge card-badge-hr">New</div>
                    <p class="product-desc product-desc-hr">
                      By James Clear
                    </p>
                  </div>
                  <div class="btn-footer">
                    <span class="price">$799.99</span>
                    <button class="cart cart-hr normal-inset-shadow">
                      <i class="fas fa-cart-plus"></i>Added to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="price-details normal-shadow">
              <h4>Price Details</h4>
              <div class="price-calc">
                <div class="price-calc-info">
                  <p>Price</p>
                  <p>299</p>
                </div>
                <div class="price-calc-info">
                  <p>Discount</p>
                  <p>99</p>
                </div>
              </div>
              <div class="price-calc-info price-total">
                  <p>Total Price</p>
                  <p>199</p>
              </div>
              <button class="btn btn-primary normal-shadow">Place Order</button>
            </div>
          </div>
        </main>
      </div>
  )
}

export default Cart