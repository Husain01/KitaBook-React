import React from "react";
import { CartState } from "../../context/Context";
import WishlistCSS from "./Wishlist.module.css";

export const Wishlist = () => {
  const {
    state: { cart, wishlist },
    dispatch,
  } = CartState();
  return (
    <div className={`"content-container" ${WishlistCSS["content-container"]}`}>
      <main className={`main-content ${WishlistCSS["main-content"]}`}>
        <h2 className={`wishlist-heading ${WishlistCSS["wishlist-heading"]}`}>
          My Wishlist
        </h2>
        {wishlist.length > 0 ? (
          <>
            <div className="product-cards">
              {wishlist.map((prod) => (
                <div className="card card-ecom normal-shadow" key={prod._id}>
                  <div className="product-img">
                    <img src={prod.image} alt="" />
                    <div className="card-alt-badge normal-shadow">
                      {prod.badge}
                    </div>
                    <button
                      className="alt-wishlist normal-inset-shadow"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: prod,
                        });
                      }}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                  <div className="card-footer">
                    <div className="product-main">
                      <div className="product-content">
                        <h3 className="product-title">{prod.title}</h3>
                        <p className="product-desc">by {prod.author}</p>
                      </div>
                        <div className="product-rating">
                          <div className="card-badge">
                            <i class="fas fa-star"></i> {prod.ratings}
                          </div>
                        </div>
                    </div>

                    <div className="btn-footer">
                      <span className="price">${prod.price}</span>
                      {cart.some((p) => p._id == prod._id) ? (
                        <button
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            });
                          }}
                          className="cart normal-shadow"
                        >
                          <i className="fas fa-cart-plus"></i>Remove From Cart
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: prod,
                            });
                          }}
                          className="cart normal-shadow"
                        >
                          <i className="fas fa-cart-plus"></i>Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 style={{ textAlign: "center", width: "100%" }}>
              Oops Wishlist is Empty
            </h2>
          </>
        )}
      </main>
    </div>
  );
};
