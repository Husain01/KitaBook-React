import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
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
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { Context };

export const CartState = () => {
  return useContext(CartContext);
};
