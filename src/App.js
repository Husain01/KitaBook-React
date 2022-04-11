import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";

import { Navbar } from "./components";
import { Cart, Home, Login, Product, Signup, Wishlist } from "./pages";

function App() {
  return (
    <div className="App main-container">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
