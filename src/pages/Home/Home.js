import React from 'react'
import './Home.css'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import HeroImg from '../../components/HeroImg/HeroImg'
import { useEffect, useState } from "react";
import axios from 'axios';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    const [categories, setCategories] = useState([])
     useEffect(() => {
    try {
      (async () => {
        const res = await axios.get('api/categories')
        console.log( res.data.categories)
        setCategories(res.data.categories)
      })();
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className="content-container">
        <div className="main-content">
            <HeroImg/>
            <div className="categories-card">
                <CategoryCard  categories={categories}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home