import React from 'react'
import WishlistCSS from './Wishlist.module.css'

const Wishlist = () => {
  return (
    <div class={`"content-container" ${WishlistCSS["content-container"]}`}>
            <main class="main-content">
                <h2 class={WishlistCSS['wishlist-heading']}>My Wishlist</h2>
                <div class="product-cards">
                    <div class="card card-ecom normal-shadow">
                      <div class="product-img">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SY344_BO1,204,203,200_.jpg" alt="" />
                        <div class="card-alt-badge normal-shadow">BestSeller</div>
                        <button class="alt-wishlist normal-inset-shadow">
                          <i class="fas fa-heart"></i>
                        </button>
                      </div>
                      <div class="card-footer">
                        <div class="product-content">
                          <h3 class="product-title">Do Epic Shit</h3>
                          <p class="product-desc">
                            by Ankur Warikoo
                          </p>
                        </div>
                        <div class="btn-footer">
                          <span class="price">$39.99</span>
                          <button class="cart normal-shadow">
                            <i class="fas fa-cart-plus"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="card card-ecom normal-shadow">
                      <div class="product-img">
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
                        
                        <button class="alt-wishlist normal-inset-shadow">
                          <i class="fas fa-heart"></i>
                        </button>
                      </div>
                      <div class="card-footer">
                        <div class="product-content">
                          <h3 class="product-title">Atomic Habits</h3>
                          <p class="product-desc">
                            by James Clear
                          </p>
                        </div>
                        <div class="btn-footer">
                          <span class="price">$49.99</span>
                          <button class="cart normal-shadow">
                            <i class="fas fa-cart-plus"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="card card-ecom normal-shadow">
                      <div class="product-img">
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
                        <div class="card-alt-badge normal-shadow">New</div>
                        <button class="alt-wishlist normal-inset-shadow">
                          <i class="fas fa-heart"></i>
                        </button>
                      </div>
                      <div class="card-footer">
                        <div class="product-content">
                          <h3 class="product-title">The Psychology of Money</h3>
                          <p class="product-desc">
                            by Morgan Housel
                          </p>
                        </div>
                        <div class="btn-footer">
                          <span class="price">$799.99</span>
                          <button class="cart normal-shadow">
                            <i class="fas fa-cart-plus"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="card card-ecom normal-shadow">
                      <div class="product-img">
                        <img src="https://images-eu.ssl-images-amazon.com/images/I/410BqHSamiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
                        <div class="card-alt-badge normal-shadow">New</div>
                        <button class="alt-wishlist normal-inset-shadow">
                          <i class="fas fa-heart"></i>
                        </button>
                      </div>
                      <div class="card-footer">
                        <div class="product-content">
                          <h3 class="product-title">THe Man who sold his Ferrari</h3>
                          <p class="product-desc">
                            By Robin Sharma
                          </p>
                        </div>
                        <div class="btn-footer">
                          <span class="price">$99.99</span>
                          <button class="cart normal-shadow">
                            <i class="fas fa-cart-plus"></i>Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
            </main>
        </div>
  )
}

export default Wishlist