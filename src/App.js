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
        <CartCard/>
        {/* <div className="main-content">
        <HeroImg/>
        </div> */}
        {/* <div className="categories-card">
        <CategoryCard/>
        </div> */}
      <Routes>
        {/* <Route path="/" element = {<ProductCard 
        product = {products[0]}
        />}/> */}
        
        <Route path="/mock" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
