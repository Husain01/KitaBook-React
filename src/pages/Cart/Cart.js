import React, { useEffect, useState } from "react";
import { CartState } from "../../context/Context";
import "./Cart.css";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr)=> acc+Number(curr.price)*curr.qty, 0))
  }, [cart])
  
  console.log(cart);
  const initPrice = (total+0).toFixed(2);
  const discount = (total/10).toFixed(2);
  const totalPrice = (total - discount).toFixed(2);
  return (
    <div className="content-container">
      <main className="main-content">
        <h2 className="cart-heading">My Cart</h2>
        <div className="cart-info">
          <div className="cart-items">
            {cart.length > 0 ? (
              <>
                {cart.map((product) => (
                  <div className="card card-ecom card-ecom-horizontal normal-shadow" key={product._id}>
                    <div className="product-img product-img-fill product-img-horizontal">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-footer card-footer-hr">
                      <div className="product-content product-content-hr">
                        <div className="product-header">
                          <h3 className="product-title product-title-hr">
                            {product.title}
                          </h3>
                          <button className="wishlist wishlist-horizontal normal-shadow">
                            <i className="far fa-heart"></i>
                          </button>
                        </div>
                        <div className="card-badge card-badge-hr">New</div>
                        <p className="product-desc product-desc-hr">
                          By {product.author}
                        </p>
                      </div>
                      <div className="qty">
            <button
              className="cart minus normal-shadow"
              onClick={() => 
                dispatch({
                  type: "DEC_QTY",
                payload:product})
              }
              disabled={product.qty === 1 ? true : false}
            >
              -
            </button>
            <span className="qty-count">{product.qty}</span>
            <button className="cart add normal-shadow" onClick={() => dispatch({
              type: "INC_QTY",
              payload:product
            })}>
              +
            </button>
          </div>
                      <div className="btn-footer">
                        <span className="price">${product.price}</span>
                        <button onClick={() =>{
                          dispatch({
                            type:"REMOVE_FROM_CART",
                            payload: product,
                          })
                        }} className="cart cart-hr normal-shadow">
                          <i className="fas fa-cart-plus"></i>Remove from Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h2 style={{ textAlign: "center", width: "100%" }}>
                Cart is Empty
              </h2>
            )}
          </div>
          {cart.length>0?(<div className="price-details normal-shadow">
            <h4>SubTotal ({cart.length}) items</h4>
            <div className="price-calc">
              <div className="price-calc-info">
                <p>Price</p>
                <p>{initPrice}</p>
              </div>
              <div className="price-calc-info">
                <p>Discount</p>
                <p>{discount}</p>
              </div>
            </div>
            <div className="price-calc-info price-total">
              <p>Total Price</p>
              <p>{totalPrice}</p>
            </div>
            <button className="btn btn-primary normal-shadow">
              Place Order
            </button>
          </div>):("")}
          
        </div>
      </main>
    </div>
  );
};
