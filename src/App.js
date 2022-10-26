import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";

import { Navbar } from "./components";
import { Cart, Home, Login, Product, Signup, Wishlist } from "./pages";
import { CartState } from "./context/Context";
import RequiresAuth from "./RequiresAuth";
import LoggedIn from "./pages/LoggedIn/LoggedIn";

function App() {
  const { authState } = CartState();
  return (
    <div className="App main-container">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        {authState.token && <Route path="/login" element={<LoggedIn />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
