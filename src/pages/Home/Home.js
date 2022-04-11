import React from 'react'
import './Home.css'
import HomeCSS from './Home.module.css'


import { useEffect, useState } from "react";
import axios from 'axios';
import { CategoryCard, Footer, HeroImg } from '../../components';


const Home = () => {
    const [categories, setCategories] = useState([])
     useEffect(() => {
    try {
      (async () => {
        const res = await axios.get('api/categories')
        setCategories(res.data.categories)
      })();
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className={HomeCSS["content-container"]}>
        <div className={`main-content ${HomeCSS["main-content"]}`}>
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