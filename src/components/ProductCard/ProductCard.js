import React from "react";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  return (
    <div className="card card-ecom normal-shadow">
      <div className="product-img">
        <img src={product.image} alt="" />
        <div className="card-alt-badge normal-shadow">{product.badge}</div>
        <button className="alt-wishlist normal-shadow">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <div className="card-footer">
        <div className="product-content">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-desc">by {product.author}</p>
        </div>
        <div className="btn-footer">
          <span className="price">{product.price}</span>
          <button className="cart normal-shadow">
            <i className="fas fa-cart-plus"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
