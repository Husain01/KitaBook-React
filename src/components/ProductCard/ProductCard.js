import React from 'react'
import './ProductCard.css'
export const ProductCard = ({product}) => {
    console.log(product);
    
  return (
    <div class="card card-ecom normal-shadow">
                  <div class="product-img">
                    <img src={product.image} alt="" />
                    <div class="card-alt-badge normal-shadow">{product.badge}</div>
                    <button class="alt-wishlist normal-shadow">
                      <i class="far fa-heart"></i>
                    </button>
                  </div>
                  <div class="card-footer">
                    <div class="product-content">
                      <h3 class="product-title">{product.title}</h3>
                      <p class="product-desc">
                        by {product.author}
                      </p>
                    </div>
                    <div class="btn-footer">
                      <span class="price">{product.price}</span>
                      <button class="cart normal-shadow">
                        <i class="fas fa-cart-plus"></i>Add to Cart
                      </button>
                    </div>
                  </div>
                  </div>
  )
}

