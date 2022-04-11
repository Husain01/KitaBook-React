import React from 'react'
import WishlistCSS from './Wishlist.module.css'

export const Wishlist = () => {
  return (
    <div className={`"content-container" ${WishlistCSS["content-container"]}`}>
            <main className={`main-content ${WishlistCSS["main-content"]}`}>
                <h2 className={`wishlist-heading ${WishlistCSS['wishlist-heading']}`}>My Wishlist</h2>
                <div className="product-cards">
                    <div className="card card-ecom normal-shadow">
                      <div className="product-img">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SY344_BO1,204,203,200_.jpg" alt="" />
                        <div className="card-alt-badge normal-shadow">BestSeller</div>
                        <button className="alt-wishlist normal-inset-shadow">
                          <i className="fas fa-heart"></i>
                        </button>
                      </div>
                      <div className="card-footer">
                        <div className="product-content">
                          <h3 className="product-title">Do Epic Shit</h3>
                          <p className="product-desc">
                            by Ankur Warikoo
                          </p>
                        </div>
                        <div className="btn-footer">
                          <span className="price">$39.99</span>
                          <button className="cart normal-shadow">
                            <i className="fas fa-cart-plus"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card card-ecom normal-shadow">
                      <div className="product-img">
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
                        
                        <button className="alt-wishlist normal-inset-shadow">
                          <i className="fas fa-heart"></i>
                        </button>
                      </div>
                      <div className="card-footer">
                        <div className="product-content">
                          <h3 className="product-title">Atomic Habits</h3>
                          <p className="product-desc">
                            by James Clear
                          </p>
                        </div>
                        <div className="btn-footer">
                          <span className="price">$49.99</span>
                          <button className="cart normal-shadow">
                            <i className="fas fa-cart-plus"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card card-ecom normal-shadow">
                      <div className="product-img">
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
                        <div className="card-alt-badge normal-shadow">New</div>
                        <button className="alt-wishlist normal-inset-shadow">
                          <i className="fas fa-heart"></i>
                        </button>
                      </div>
                      <div className="card-footer">
                        <div className="product-content">
                          <h3 className="product-title">The Psychology of Money</h3>
                          <p className="product-desc">
                            by Morgan Housel
                          </p>
                        </div>
                        <div className="btn-footer">
                          <span className="price">$799.99</span>
                          <button className="cart normal-shadow">
                            <i className="fas fa-cart-plus"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card card-ecom normal-shadow">
                      <div className="product-img">
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/410BqHSamiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
                        <div className="card-alt-badge normal-shadow">New</div>
                        <button className="alt-wishlist normal-inset-shadow">
                          <i className="fas fa-heart"></i>
                        </button>
                      </div>
                      <div className="card-footer">
                        <div className="product-content">
                          <h3 className="product-title">THe Man who sold his Ferrari</h3>
                          <p className="product-desc">
                            By Robin Sharma
                          </p>
                        </div>
                        <div className="btn-footer">
                          <span className="price">$99.99</span>
                          <button className="cart normal-shadow">
                            <i className="fas fa-cart-plus"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
            </main>
        </div>
  )
}

