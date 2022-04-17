import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { CartState } from "../../context/Context";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const {
    state: { cart, wishlist },
    dispatch,
    authState: {token}
  } = CartState();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="card card-ecom normal-shadow">
      <div className="product-img">
        <img src={product.image} alt="" />
        <div className="card-alt-badge normal-shadow">{product.badge}</div>
        {wishlist.some((p) => p._id == product._id) ? (
          <button
            className="alt-wishlist normal-inset-shadow"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
              });
            }}
          >
            <i className="fas fa-heart"></i>
          </button>
        ) : (
          <button
            className="alt-wishlist normal-shadow"
            onClick={() => {
              token ? (dispatch({
                type: "ADD_TO_WISHLIST",
                payload: product,
              })) : (navigate('/login' ,{
                state:{from:location}, replace:true}))
              
            }}
          >
            <i className="far fa-heart"></i>
          </button>
        )}
      </div>
      <div className="card-footer">
        <div className="product-main">
          <div className="product-content">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-desc">by {product.author}</p>
          </div>
          <div className="product-rating">
            <div className="card-badge">
              <i class="fas fa-star"></i> {product.ratings}
            </div>
          </div>
        </div>
        <div className="btn-footer">
          <span className="price">${product.price}</span>
          {cart.some((p) => p._id == product._id) ? (
            <button
              onClick={() => {
                token ? (dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })) : (
                  <Navigate to='/login' state={{from: location}} replace/>
                )
                
              }}
              className="cart normal-shadow"
            >
              <i className="fas fa-cart-plus"></i>Remove From Cart
            </button>
          ) : (
            <button
              onClick={() => {
                token ? (dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
                ) : (
                  // <Navigate to='/login' state={{from: location}} replace/>
                  navigate('/login' ,{
                    state:{from:location}, replace:true})
                )
                
              }}
              className="cart normal-shadow"
            >
              <i className="fas fa-cart-plus"></i>Add to Cart
            </button>
          )}

          {/* <button className="cart normal-shadow">
            <i className="fas fa-cart-plus"></i>Remove From Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};
