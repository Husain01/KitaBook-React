import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import HeroImg from "./components/HeroImg/HeroImg";
import CartCard from "./components/CartCard/CartCard";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";

function App() {
  const [products, setProducts] = useState([])
  // const getData =async () => {
  //     const res = await axios.get('api/products')
  //     console.log( res.data.products)
  //     setProducts(res.data.products)
  //   }
  //   ()=>getData();
    
  // console.log(products)
  
  // useEffect(() => {
  //   try {
  //     (async () => {
  //       const res = await axios.get('api/products')
  //       console.log( res.data.products)
  //       setProducts(res.data.products)
  //     })();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])
  
  // console.log("Show Products", products)
    return (
    <div className="App main-container">
        <Navbar></Navbar> 
        {/* <CartCard/> */}
        {/* <CartCard/> */}
        {/* <div className="main-content">
        <HeroImg/>
        </div> */}
        {/* <div className="categories-card">
        <CategoryCard/>
        </div> */}
        <div className="content-container">

      <Routes>
        {/* <Route path="/" element = {<ProductCard 
        product = {products[0]}
        />}/> */}
        <Route path="/" element = {<Home/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path='/products' element = {<Product/>}/>
        <Route path="/mock" element={<Mockman/>}/>
      </Routes>
      
      </div>

    </div>
  );
}

export default App;
