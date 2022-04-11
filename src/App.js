import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import { Navbar } from "./components";

function App() {
  // const [products, setProducts] = useState([])
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
        

      <Routes>
        {/* <Route path="/" element = {<ProductCard 
        product = {products[0]}
        />}/> */}
        <Route path="/" element = {<Home/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path='/products' element = {<Product/>}/>
        <Route path="/wishlist" element = {<Wishlist/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/mock" element={<Mockman/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
