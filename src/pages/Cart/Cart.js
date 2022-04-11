import React from 'react'
import './Cart.css'

export const Cart = () => {
  return (
    <div className="content-container">
        <main className="main-content">
          <h2 className="cart-heading">My Cart</h2>
          <div className="cart-info">
            <div className="cart-items">
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
              <div className="card card-ecom card-ecom-horizontal normal-shadow">
                <div
                  className="product-img product-img-fill product-img-horizontal"
                >
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    alt=""
                  />
                </div>
                <div className="card-footer card-footer-hr">
                  <div className="product-content product-content-hr">
                    <div className="product-header">
                      <h3 className="product-title product-title-hr">
                        Atomic Habits
                      </h3>
                      <button
                        className="wishlist wishlist-horizontal normal-shadow"
                      >
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                    <div className="card-badge card-badge-hr">New</div>
                    <p className="product-desc product-desc-hr">
                      By James Clear
                    </p>
                  </div>
                  <div className="btn-footer">
                    <span className="price">$799.99</span>
                    <button className="cart cart-hr normal-inset-shadow">
                      <i className="fas fa-cart-plus"></i>Added to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="price-details normal-shadow">
              <h4>Price Details</h4>
              <div className="price-calc">
                <div className="price-calc-info">
                  <p>Price</p>
                  <p>299</p>
                </div>
                <div className="price-calc-info">
                  <p>Discount</p>
                  <p>99</p>
                </div>
              </div>
              <div className="price-calc-info price-total">
                  <p>Total Price</p>
                  <p>199</p>
              </div>
              <button className="btn btn-primary normal-shadow">Place Order</button>
            </div>
          </div>
        </main>
      </div>
  )
}
