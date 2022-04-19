import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, cartReducer, productReducer } from "./Reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
    wishlist: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    sortBy: null,
    categorySelfHelp: false,
    categoryFiction: false,
    categoryNonFiction: false,
    rating:0,
    searchQuery: "",
    sliderValue: 500
  });
  const [authState, authDispatch] = useReducer(authReducer, {
    user: "",
    token: ""
  } )
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("api/products");
        dispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: res.data.products,
        });
      } catch (error) {
        console.log(error);
      }
    })();
    const checkUser = () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      authDispatch({ type: "CHECKUSER", payload: { user, token } });
  }
    checkUser()
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch,productState, productDispatch, authState, authDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { Context };

export const CartState = () => {
  return useContext(CartContext);
};
