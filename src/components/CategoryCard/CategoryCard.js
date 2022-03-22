import React from "react";
import './CategoryCard.css'
import selfhelp from '../../assets/categories/1.jpg'

const CategoryCard = ({categories}) => {
  return (
    categories && categories.map(e => {
      return (
        <div class="category-card normal-shadow" key={e._id}>
        <a href="/pages/product-page/product-page.html">
        <img src={e.image} alt="" />
        </a>
        </div>
      )
    })

      
    
  );
};

export default CategoryCard;
