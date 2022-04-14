import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    sortBy: null,
    categorySelfHelp: false,
    categoryFiction: false,
    categoryNonFiction: false,
    rating:0,
    searchQuery: "",
    sliderValue: 500
  })
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("api/products");
        console.log(res);
        dispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: res.data.products,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch,productState, productDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { Context };

export const CartState = () => {
  return useContext(CartContext);
};
